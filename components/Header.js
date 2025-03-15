import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <a href="https://www.linkedin.com/in/fredericchoudat/" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </nav>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
