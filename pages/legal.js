import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

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
        ConnEthics SASU, registered with the R.C.S. of Nanterre under number 844 407 866,<br />
        21 rue Paul Déroulède<br />
        92270 Bois-Colombes<br />
        Professional liability insurance taken out with Coover and guaranteed by HISCOX<br />
        Email: <a href="mailto:contact@connethics.com">contact@connethics.com</a>
    </p>

    <p>Publication Director: Frederic CHOUDAT</p>

    <p>This site is hosted by:</p>
    <p>
        Netlify<br />
        2325 3rd Street, Suite 215<br />
        San Francisco, CA 94107<br />
        United States
    </p>

        </section>
      </main>
      <Footer />
    </div>
  )
}
