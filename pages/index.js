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
          <div className={styles.card}>
            <h3>Self-Sovereign Identity</h3>
            <p>Prepare for Self-Sovereign Identity (SSI) integration and deployment. Empower individuals to securely control their digital identities using product management methodologies and tools.</p>
          </div>

          <div className={styles.card}>
            <h3>Ecosystem Cartography</h3>
            <p>Generate actionable insights through economic warfare analysis. Gain a comprehensive understanding of your business ecosystem, from competitive intelligence to strategic communication and lobbying.</p>
          </div>

          <div className={styles.card}>
            <h3>Trust and Identity Deployment</h3>
            <p>Define, build, and certify verifiable credentials. Ensure their secure adoption across your network to enhance trust and identity management.</p>
          </div>

          <div className={styles.card}>
            <h3>Product Leadership</h3>
            <p>Align product roadmaps with strategic goals and OKRs. Prioritize initiatives using data-driven insights and foster a culture of innovation through continuous backlog refinement and stakeholder engagement.</p>
          </div>

          <div className={styles.card}>
            <h3>Product Management</h3>
            <p>Initiate and scale product teams effectively. Implement robust release processes and manage dependencies to ensure timely delivery. Optimize team structures and interactions through event storming and continuous mapping.</p>
          </div>
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
