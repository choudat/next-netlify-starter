import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/legal" className={styles.link}>
          Legal Information
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/privacy" className={styles.link}>
          Data Privacy
        </Link>
      </div>
    </footer>
  )
}
