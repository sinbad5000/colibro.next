import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Cover.module.css'

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
            <Link href='/Homepage'>
            <main>
                <div className={styles.coverLogo}>
                <Link href='/Homepage'><h1 className={styles.title}><a>Colibro</a></h1></Link>
                </div>
            </main>
            </Link>
        </div>
    )
}