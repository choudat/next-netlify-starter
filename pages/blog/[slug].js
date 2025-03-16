import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Add this helper function at the top level of the file
function sanitizeTitle(text) {
  return text ? text.replace(/(<([^>]+)>)/gi, "") : "";
}

export default function BlogPost({ post }) {
  const pageTitle = `${sanitizeTitle(post.title)} - ConnEthics`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <style>{`
          .markdown-content h1 { font-size: 2em; margin-bottom: 1em; }
          .markdown-content h2 { font-size: 1.5em; margin-bottom: 0.8em; }
          .markdown-content h3 { font-size: 1.3em; margin-bottom: 0.6em; }
          .markdown-content p { margin-bottom: 1em; line-height: 1.6; }
          .markdown-content ul, .markdown-content ol { margin-left: 2em; margin-bottom: 1em; }
          .markdown-content li { margin-bottom: 0.5em; }
        `}</style>
      </Head>
      <main className={styles.main}>
        <Header title={post.title} />
        <article className={styles.article}>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const parsedContent = marked(content);

    return {
      props: {
        post: {
          title: data.title,
          content: parsedContent,
          date: data.date,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
