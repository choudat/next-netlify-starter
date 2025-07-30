import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConnEthics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to ConnEthics" />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>ConnEthics</h1>
            <p className={styles.heroSubtitle}>
              Fostering Ethical Connections in a Competitive World
            </p>
            <p className={styles.heroDescription}>
              We build products and animate business ecosystems based on radical candor, 
              integrity, and innovation. Bringing clarity and purpose to challenging environments.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact-me" className={styles.ctaPrimary}>
                Schedule a Consultation
              </a>
              <a href="/content/about" className={styles.ctaSecondary}>
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionSubtitle}>
              Our mission is to foster ethical connections in a competitive
              world, bringing clarity and purpose to challenging environments
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About ConnEthics</h2>
          </div>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              ConnEthics is founded on the principles of ethical connections. We
              build products and animate business ecosystems based on radical
              candor, integrity, and innovation. Our commitment is to deliver
              high-quality services that seamlessly align technical,
              operational, and execution strategies with today's business
              standards.
            </p>
            <p className={styles.aboutText}>
              We ensure ethical alignment across external business goals, 
              internal team dynamics, our technical stack, and the broader societal context.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions for modern business challenges
            </p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔐</div>
              <h3>Self-Sovereign Identity</h3>
              <p>
                Prepare for Self-Sovereign Identity (SSI) integration and
                deployment. Empower individuals to securely control their digital
                identities using product management methodologies and tools.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🗺️</div>
              <h3>Ecosystem Cartography</h3>
              <p>
                Generate actionable insights through economic warfare analysis.
                Gain a comprehensive understanding of your business ecosystem,
                from competitive intelligence to strategic communication and
                lobbying.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛡️</div>
              <h3>Trust and Identity Deployment</h3>
              <p>
                Define, build, and certify verifiable credentials. Ensure their
                secure adoption across your network to enhance trust and identity
                management.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎯</div>
              <h3>Product Leadership</h3>
              <p>
                Align product roadmaps with strategic goals and OKRs. Prioritize
                initiatives using data-driven insights and foster a culture of
                innovation through continuous backlog refinement and stakeholder
                engagement.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Product Management</h3>
              <p>
                Initiate and scale product teams effectively. Implement robust
                release processes and manage dependencies to ensure timely
                delivery. Optimize team structures and interactions through event
                storming and continuous mapping.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Ready to Get Started?</h2>
            <p className={styles.contactDescription}>
              Let's discuss how ConnEthics can support your initiatives and help you 
              build ethical, innovative solutions for your business challenges.
            </p>
            <div className={styles.contactActions}>
              <a
                href="https://www.linkedin.com/in/fredericchoudat/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Connect on LinkedIn
              </a>
              <a href="/contact-me" className={styles.contactCta}>
                Schedule a Meeting
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
