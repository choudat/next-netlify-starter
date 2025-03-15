import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog - ConnEthics</title>
      </Head>
      <main className={styles.main}>
        <Header title="Blog" />
        <div className={styles.grid}>
          {posts.map((post) => (
            <div className={styles.card} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                <h2>{post.title}</h2>
              </Link>
              <p className={styles.description}>{post.excerpt}</p>
              {post.tags && (
                <div className={styles.tags}>
                  {post.tags.map((tag, index) => (
                    <span className={styles.tag} key={index}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <p className={styles.date}>{post.date}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        // Convert markdown content to HTML and sanitize it
        const htmlContent = matter(fileContent).content;

        // Utiliser l'excerpt défini, ou extraire du contenu, ou utiliser une valeur par défaut
        const excerpt =
          data.excerpt ||
          content.substring(0, 150).replace(/[#*`]/g, "").trim() + "..." ||
          "Cliquez pour en savoir plus";

        return {
          slug: filename.replace(".md", ""),
          title: data.title || "Untitled",
          excerpt: excerpt,
          content: htmlContent,
          date: data.date || new Date().toISOString(),
          tags: data.tags || [], // Ajout des tags
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
