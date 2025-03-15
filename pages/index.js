import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'
import { getClient, expertisesQuery } from '../lib/sanity'

export default function Home({ expertises }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ConnEthics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to ConnEthics" />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Our Mission</h2>
            <p>Our mission is to foster ethical connections in a competitive world, bringing clarity and purpose to challenging environments</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>About ConnEthics</h2>
            <p>ConnEthics is founded on the principles of ethical connections. We build products 
            and animate business ecosystems based on radical candor, integrity, and innovation. 
            Our commitment is to deliver high-quality services that seamlessly align technical, operational, and execution strategies with today's business standards. We ensure ethical alignment across external business goals, internal team dynamics, our technical stack, and the broader societal context</p>
          </div>
        </div>

        <div className={styles.grid}>
          <h2>Our expertises</h2>
          {expertises.map((expertise) => (
            <div key={expertise._id} className={styles.card}>
              <h3>{expertise.title}</h3>
              <p>{expertise.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Meet Our Founder</h2>
            <p>ConnEthics is proudly founded by Frédéric Choudat, who brings his passion for product leadership and business development within the economic landscape.</p>
          </div>

          <div className={styles.card}>
            <h2>Contact</h2>
            <p>To keep in touch, feel free to contact me on <a href="https://www.linkedin.com/in/fredericchoudat/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  try {
    const expertises = await getClient().fetch(expertisesQuery)

    return {
      props: {
        expertises: expertises || []
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        expertises: []
      }
    }
  }
}
