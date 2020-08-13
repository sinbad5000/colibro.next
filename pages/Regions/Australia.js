import Head from 'next/head'
import sa from '../../styles/SouthAmerica.module.css'
import Layout from '../../components/Layout'
import Filter from '../../components/Filter'
import Container from 'react-bootstrap/Container'
import AustraliaGrid from '../Animals/AustraliaGrid'


export default function Australia() {
    return (
        <Layout>
            <div className = {sa.australiaDiv}>
                    <br></br>
                    <br></br>
                    <h1 className = {sa.text}>AUSTRALIA</h1>

            </div>

            <br />

            <Filter></Filter>
            <AustraliaGrid />

        </Layout>
    )
}