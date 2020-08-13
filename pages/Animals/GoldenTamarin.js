import Head from 'next/head'
import Layout from '../../components/Layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/GoldenTamarin.module.css'
import Button from 'react-bootstrap/Button'


export default function GoldenTamarin() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Colibro</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <div>
            <Container>
            <div className={styles.headerBackground}>
            <h1 className={styles.centered}>Golden Lion Tamarin</h1>
            <div className={styles.sideContainer}>
            <p>Lion tamarins take their name from their impressive manes - thick rings of hair reminiscent of Africa's great cats. The golden lion tamarin may be the most beatiful of the four lion tamarin species. It's abundant golden hair frames a charismatic black face and covers its small body and tail. Despite their name, these rare primates have far more in common with their monkey relatives than any feline.</p>
            </div>
                <img src='/Rainforest-Bg.jpg' className={styles.imgContainer}></img>
            </div>
            <Row>
                <Col>
                <br />
                <Button className="leftButton">Favorite!</Button>
                <h5><img src='/icons/Bear.png' className={styles.logo}></img> Type: Mammals</h5>
                <h5><img src='/icons/Food.png' className={styles.logo}></img> Diet: Herbivore</h5>
                <h5><img src='/icons/rainforest(1).png' className={styles.logo}></img> Habitat: Forest</h5>
               
                
                <br />
                <br />
                </Col>
                
            </Row>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ubM6v0_u-dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </Container>
            </div>
        </Layout>
    )
}