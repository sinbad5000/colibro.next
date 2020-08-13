import Head from 'next/head'
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
      <main>

      </main>


    </div>
  )
}
