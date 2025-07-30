import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConnEthics - Ethical Consulting for the Digital Age</title>
        <meta name="description" content="Professional consulting services specializing in Self-Sovereign Identity, Product Management, and Ethical Business Transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to ConnEthics" />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Ethical Consulting for the <span className={styles.highlight}>Digital Age</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transform your business with integrity-driven strategies. We specialize in 
              Self-Sovereign Identity, Product Leadership, and Ethical Business Transformation.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact-me" className={styles.ctaPrimary}>
                Schedule Consultation
              </a>
              <a href="/content/about" className={styles.ctaSecondary}>
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className={styles.valueSection}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose ConnEthics?</h2>
            <p>We bring clarity and purpose to challenging environments through ethical innovation</p>
          </div>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Strategic Clarity</h3>
              <p>Cut through complexity with clear, actionable strategies that align with your business goals</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔒</div>
              <h3>Ethical Foundation</h3>
              <p>Built on principles of integrity, transparency, and radical candor in all business practices</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Innovation Focus</h3>
              <p>Leverage cutting-edge technologies like Self-Sovereign Identity for competitive advantage</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Expertise</h2>
            <p>Comprehensive consulting services designed to drive ethical transformation</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔐</div>
              <h3>Self-Sovereign Identity</h3>
              <p>
                Prepare for SSI integration and deployment. Empower individuals to securely 
                control their digital identities using proven product management methodologies.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>SSI Strategy & Implementation</li>
                <li>Digital Identity Architecture</li>
                <li>Compliance & Security Framework</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🗺️</div>
              <h3>Ecosystem Cartography</h3>
              <p>
                Generate actionable insights through comprehensive ecosystem analysis. 
                Understand your competitive landscape and strategic opportunities.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>Competitive Intelligence</li>
                <li>Strategic Communication</li>
                <li>Market Positioning</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✅</div>
              <h3>Trust & Identity Deployment</h3>
              <p>
                Define, build, and certify verifiable credentials. Ensure secure adoption 
                across your network to enhance trust and identity management.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>Verifiable Credentials</li>
                <li>Trust Network Design</li>
                <li>Identity Verification Systems</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚀</div>
              <h3>Product Leadership</h3>
              <p>
                Align product roadmaps with strategic goals and OKRs. Drive innovation 
                through data-driven insights and stakeholder engagement.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>Product Strategy & Roadmaps</li>
                <li>OKR Implementation</li>
                <li>Innovation Management</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Product Management</h3>
              <p>
                Scale product teams effectively with robust processes. Optimize team 
                structures and delivery through proven methodologies.
              </p>
              <ul className={styles.serviceFeatures}>
                <li>Team Scaling & Structure</li>
                <li>Release Process Optimization</li>
                <li>Agile Transformation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className={styles.founderSection}>
          <div className={styles.founderContent}>
            <div className={styles.founderInfo}>
              <h2>About the Founder</h2>
              <h3>Frederic Choudat</h3>
              <p className={styles.founderTitle}>Principal Consultant & Strategic Advisor</p>
              <p>
                With extensive experience in product management, digital identity, and ethical 
                business transformation, Frederic brings a unique perspective to complex 
                organizational challenges. His approach combines technical expertise with 
                principled leadership to deliver sustainable results.
              </p>
              <div className={styles.founderCredentials}>
                <div className={styles.credential}>
                  <span className={styles.credentialIcon}>🎓</span>
                  <span>Product Management Expert</span>
                </div>
                <div className={styles.credential}>
                  <span className={styles.credentialIcon}>🔐</span>
                  <span>Self-Sovereign Identity Specialist</span>
                </div>
                <div className={styles.credential}>
                  <span className={styles.credentialIcon}>⚖️</span>
                  <span>Ethics & Governance Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <h2>What Clients Say</h2>
            <p>Trusted by organizations seeking ethical innovation and strategic clarity</p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                "ConnEthics helped us navigate the complex landscape of digital identity with clear, 
                actionable strategies. Their ethical approach gave us confidence in our decisions."
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Sarah Chen</div>
                <div className={styles.authorTitle}>CTO, TechForward Inc.</div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                "The product leadership guidance we received transformed our entire development process. 
                Frederic's expertise in OKRs and strategic alignment was invaluable."
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Marcus Rodriguez</div>
                <div className={styles.authorTitle}>VP Product, Innovation Labs</div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                "ConnEthics provided the strategic clarity we needed to align our technical stack 
                with our business goals. Their ecosystem cartography approach was eye-opening."
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>Emma Thompson</div>
                <div className={styles.authorTitle}>CEO, Digital Ventures</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p className={styles.contactSubtitle}>
              Let's discuss how ConnEthics can help you navigate complex challenges 
              with ethical, innovative solutions.
            </p>
            <div className={styles.contactOptions}>
              <div className={styles.contactCard}>
                <h3>Schedule a Consultation</h3>
                <p>Book a strategic discussion to explore opportunities for your organization.</p>
                <a href="/contact-me" className={styles.contactCta}>
                  Book Meeting
                </a>
              </div>
              <div className={styles.contactCard}>
                <h3>Connect on LinkedIn</h3>
                <p>Follow our insights and connect with our professional network.</p>
                <a
                  href="https://www.linkedin.com/in/fredericchoudat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCta}
                >
                  Connect Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
