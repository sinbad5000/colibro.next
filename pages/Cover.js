import Head from 'next/head'
import styles from '../styles/Cover.module.css'
import Link from 'next/link'

export default function Cover() {
    const styling = {
        backgroundImage: "url('./jared-rice.jpg')",
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOverflow: 'hidden'
    }
    return (
        <div style={styling}>
            <Head>
                <title>Colibro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            <div className={styles.coverLogo}>
                <Link href='/Map'><a><h1>Colibro</h1></a></Link>
            </div>
            </main>
        </div>
    )
}