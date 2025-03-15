import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'
import { getClient } from '../lib/sanity'
import { PortableText } from '@portabletext/react'

export default function Privacy({ pageData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageData.title} - ConnEthics</title>
      </Head>
      <main className={styles.main}>
        <Header title={pageData.title} />
        <section className={styles.section}>
          <PortableText value={pageData.content} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const pageData = await getClient().fetch(`
    *[_type == "page" && slug.current == "privacy"][0] {
      title,
      content
    }
  `)

  return {
    props: {
      pageData
    },
    revalidate: 60
  }
}
