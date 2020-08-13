import Head from 'next/head'
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'
import AnimalGrid from '../Animals/AnimalGrid'


export default function SouthAmerica() {
    return (
        <Layout>
            <div className = {sa.frogDiv}>
                    <br></br>
                    <br></br>
                    <h1 className = {sa.text}>SOUTH AMERICA</h1>

            </div>

            <br />

            <Filter></Filter>

            <AnimalGrid />

        </Layout>
    )
}