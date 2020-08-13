import Head from 'next/head'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import styles from '../styles/Home.module.css'
import Cover from './Cover'


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Colibro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cover />
      </main>
    </div>
  )
}
