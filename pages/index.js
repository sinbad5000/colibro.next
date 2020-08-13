import Head from 'next/head'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import styles from '../styles/Home.module.css'


export default function Home() {
  let southAmerica = {
    Jaguar :{
      scientificName: "Panthera onca",
      status: "Near Threatened",
      length: "6ft",
      habitats: "Forests, Grasslands",
      behavior: "Jaguars are strong swimmers and climbers"
    }
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Colibro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>This is a test</h1>
      </main>
    </div>
  )
}
