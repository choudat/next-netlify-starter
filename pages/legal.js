import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Home.module.css";

export default function Legal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Legal Information - ConnEthics</title>
      </Head>
      <main className={styles.main}>
        <Header title="Legal Information" />
        <section className={styles.section}>
          <h1>Legal Notice</h1>
          <p>This site is published by:</p>
          <p>
            ConnEthics SASU, registered with the R.C.S. of Nanterre under number
            844 407 866,
            <br />
            21 rue Paul Déroulède
            <br />
            92270 Bois-Colombes
            <br />
            Professional liability insurance taken out with Coover and
            guaranteed by HISCOX
            <br />
            Email:{" "}
            <a href="mailto:contact@connethics.com">contact@connethics.com</a>
          </p>

          <p>Publication Director: Frederic CHOUDAT</p>

          <p>This site is hosted by:</p>
          <p>
            Vercel Inc.
            <br />
            650 California St
            <br />
            San Francisco, CA 94108
            <br />
            United States
          </p>

          <p>Infrastructure d'hébergement :</p>
          <p>
            Région : Paris, France (West) - eu-west-3 - cdg1
            <br />
            Conformément à notre engagement de souveraineté numérique, nous
            avons fait le choix délibéré d'héberger nos données sur le
            territoire français, tout en bénéficiant de l'infrastructure
            performante de Vercel.
          </p>

          <h2>Sécurité et Conformité</h2>
          <p>
            Bien que notre prestataire d'hébergement soit une société
            américaine, nous avons mis en place des mesures strictes pour
            garantir la protection de vos données sur le territoire français.
            Vercel maintient des standards de sécurité élevés, documentés sur
            leur
            <a
              href="https://security.vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              portail de sécurité
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
