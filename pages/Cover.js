import Head from 'next/head'
import styles from '../styles/Cover.module.css'

export default function Cover() {
    const styling = {
        backgroundImage: "url('./jared-rice.jpg')",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOverflow: 'hidden'
    }
    return (
        <div style={styling}>
            {/* <Head>
                <title>Colibro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <main>
            {/* <img src="/jared-rice.js"></img> */}
            <div className={styles.coverLogo}>
                <h1>Colibro</h1> 
            </div>
            </main>
        </div>
    )
}