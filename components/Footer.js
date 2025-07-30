import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>ConnEthics</h4>
          <p>Ethical consulting for the digital age</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/#services">Self-Sovereign Identity</Link></li>
            <li><Link href="/#services">Product Leadership</Link></li>
            <li><Link href="/#services">Ecosystem Cartography</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/content/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact-me">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/privacy">Data Privacy</Link></li>
            <li><Link href="/legal">Legal Information</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 ConnEthics. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/fredericchoudat/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
