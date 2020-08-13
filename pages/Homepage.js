import Head from 'next/head'
import styles from '../styles/Home.module.css'
import World from "./Map.js"
import Layout from "../components/Layout.js"





export default function Map() {
    return (
        <Layout >
            <Head>
                <title>Colibro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
            <World />
            </div>
            
        </Layout>
    )
    
}