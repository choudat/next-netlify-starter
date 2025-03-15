import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProductManagement() {
  return (
    <div className="container">
      <Head>
        <title>Product Management Expertise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Product Management Expertise" />
        
        <div className="content">
          <section className="expertise-section">
            <h2>Team Kickoff and Scaling</h2>
            <ul>
              <li><strong>Team Onboarding:</strong> Effectively initiate new product teams with clear goals, roles, and responsibilities.</li>
              <li><strong>Scaling Teams:</strong> Develop strategies to scale your product teams as your organization grows.</li>
              <li><strong>Team Structuring:</strong> Optimize team structures to enhance collaboration and efficiency.</li>
            </ul>
          </section>

          <section className="expertise-section">
            <h2>Release and Dependency Management</h2>
            <ul>
              <li><strong>Product Releases:</strong> Implement robust processes for managing product releases.</li>
              <li><strong>Dependency Tracking:</strong> Identify and manage dependencies across teams and projects.</li>
              <li><strong>Continuous Improvement:</strong> Foster a culture of continuous improvement.</li>
            </ul>
          </section>

          <section className="expertise-section">
            <h2>Product Leadership</h2>
            <div className="subsection">
              <h3>Roadmap Definition</h3>
              <ul>
                <li><strong>Strategic Planning:</strong> Define clear and actionable product roadmaps.</li>
                <li><strong>Prioritization:</strong> Use data-driven insights to prioritize features.</li>
                <li><strong>Stakeholder Alignment:</strong> Ensure all stakeholders are aligned with the product roadmap.</li>
              </ul>
            </div>
            <div className="subsection">
              <h3>Opportunity Backlog Management</h3>
              <ul>
                <li><strong>Idea Generation:</strong> Foster a culture of innovation.</li>
                <li><strong>Backlog Grooming:</strong> Regularly review and refine the opportunity backlog.</li>
                <li><strong>Alignment with OKRs:</strong> Ensure initiatives align with organizational objectives.</li>
              </ul>
            </div>
          </section>

          <section className="expertise-section">
            <h2>Product Organization</h2>
            <div className="subsection">
              <h3>Event Storming</h3>
              <ul>
                <li><strong>Collaborative Modeling:</strong> Use event storming to model complex business processes.</li>
                <li><strong>Cross-Functional Engagement:</strong> Engage diverse teams in event storming sessions.</li>
              </ul>
            </div>
            <div className="subsection">
              <h3>Team and Interaction Mapping</h3>
              <ul>
                <li><strong>Team Cartography:</strong> Visualize team structures and interactions.</li>
                <li><strong>Interaction Analysis:</strong> Analyze team interactions to improve collaboration.</li>
                <li><strong>Continuous Mapping:</strong> Regularly update team and interaction maps.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content {
          max-width: 800px;
          width: 100%;
          padding: 0 1rem;
        }
        .expertise-section {
          margin-bottom: 2rem;
        }
        .subsection {
          margin: 1rem 0;
        }
        h2 {
          color: #0070f3;
          margin-bottom: 1rem;
        }
        h3 {
          color: #444;
          margin: 1rem 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 0.5rem 0;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .content {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
