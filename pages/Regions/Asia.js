import Head from 'next/head'
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'



export default function Asia() {
    return (
        <Layout>
            <div className = {sa.asiaDiv}>
                    <br></br>
                    <br></br>
                    <h1 className = {sa.text}>ASIA</h1>

            </div>

            <br />

            <Filter></Filter>
       

        </Layout>
    )
}