import Head from 'next/head'
import styles from '../styles/Home.module.css'
import World from "../components/Map.js"





export default function Map() {
    return (
        <div>
            <Head>
                <title>Colibro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
            <World />
            </div>
            
        </div>
    )
    
}