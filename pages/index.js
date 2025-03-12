import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConnEthics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to ConnEthics" />
        
        <section className={`${styles.section} ${styles.mission}`}>
          <p>
          Our mission is to foster ethical connections in a competitive world, bringing clarity and purpose to challenging environments</p>
        </section>

        <section className={`${styles.section} ${styles.about}`}>
          <h2>About ConnEthics</h2>
          <p>
            ConnEthics is founded on the principles of ethical connections. We build products 
            and animate business ecosystems based on radical candor, integrity, and innovation. 
            Our commitment is to deliver high-quality services that seamlessly align technical, operational, and execution strategies with today's business standards. We ensure ethical alignment across external business goals, internal team dynamics, our technical stack, and the broader societal context</p>
        </section>

        <section className={`${styles.section} ${styles.founder}`}>
          <h2>Meet Our Founder</h2>
          <p>
            ConnEthics is proudly founded by Frédéric Choudat, who brings his passion for product leadership and business development within the economic landscape.
          </p>
        </section>

        <section className={`${styles.section} ${styles.contact}`}>
          <p className="description">
            To keep in touch, feel free to contact me on <a href="https://www.linkedin.com/in/fredericchoudat/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
