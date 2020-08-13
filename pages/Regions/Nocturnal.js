import Head from 'next/head'
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'
import AnimalGrid from '../Animals/AnimalGrid'


export default function Nocturnal() {
    return (
        <Layout>
            <div className = {sa.nocturnalDiv}>
                    <br></br>
                    <br></br>
                    <h1 className = {sa.text}>NOCTURNAL</h1>

            </div>

            <br />

            <Filter></Filter>
            <AnimalGrid />

        </Layout>
    )
}