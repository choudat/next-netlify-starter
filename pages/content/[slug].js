import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../../styles/Content.module.css";

export default function ContentPage({ content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{content.title} - ConnEthics</title>
        <style>{`
          .markdown-content h1 { font-size: 2em; margin-bottom: 1em; }
          .markdown-content h2 { font-size: 1.5em; margin-bottom: 0.8em; }
          .markdown-content h3 { font-size: 1.3em; margin-bottom: 0.6em; }
          .markdown-content p { margin-bottom: 1em; line-height: 1.6; }
          .markdown-content ul, .markdown-content ol { margin-left: 2em; margin-bottom: 1em; }
          .markdown-content li { margin-bottom: 0.5em; }
        `}</style>{" "}
      </Head>
      <Header />
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>{content.title}</h1>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const contentDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(contentDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: {
        slug: "about", // Pour l'instant on hardcode 'about' car c'est notre seule page
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const parsedContent = marked(content);

    return {
      props: {
        content: {
          title: data.title,
          content: parsedContent,
          date: data.date,
          excerpt: data.excerpt,
        },
      },
    };
  } catch (error) {
    console.error("Error loading content:", error);
    return {
      notFound: true,
    };
  }
}
