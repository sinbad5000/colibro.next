import Head from 'next/head'
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'



export default function NorthAmerica() {
    return (
        <Layout>
            <div className = {sa.northAmericaDiv}>
                    <br></br>
                    <br></br>
                    <h1 className = {sa.text}>NORTH AMERICA</h1>

            </div>

            <br />

            <Filter></Filter>



        </Layout>
    )
}