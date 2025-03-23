import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header({ currentPage }) {
  const router = useRouter();
  const path = router.pathname;

  const isActive = (pagePath) => {
    if (currentPage) {
      if (pagePath === "/content/about") {
        return currentPage === "about";
      }
      return currentPage === pagePath;
    }
    return path === pagePath;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/logo-connethics.png"
            alt="Connethics Logo"
            width={100}
            height={100}
            priority
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link
          href="/blog"
          className={`${styles.navLink} ${
            isActive("/blog") ? styles.active : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/content/about"
          className={`${styles.navLink} ${
            isActive("/content/about") ? styles.active : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/contact-me"
          className={`${styles.navLink} ${
            isActive("/contact-me") ? styles.active : ""
          }`}
        >
          Book a meeting
        </Link>
        <a
          href="https://www.linkedin.com/in/fredericchoudat/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
