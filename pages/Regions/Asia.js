import Head from 'next/head'
<<<<<<< HEAD
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'
import AnimalGrid from '../Animals/AnimalGrid'
=======
>>>>>>> 165ddf610f6663ae4d34bb28b49271fbb0861c50


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
            <AnimalGrid />

        </Layout>
    )
}