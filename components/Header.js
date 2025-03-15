import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter();
  
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
              objectFit: 'contain',
              objectPosition: 'center',
              width: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link 
          href="/blog"
          aria-current={router.pathname === '/blog' ? 'page' : undefined}
        >
          Blog
        </Link>
        <a 
          href="https://www.linkedin.com/in/fredericchoudat/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-current={router.pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
