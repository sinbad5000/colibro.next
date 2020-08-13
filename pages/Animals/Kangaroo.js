import Head from 'next/head'
import Layout from '../../components/Layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/GoldenTamarin.module.css'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import sa from '../../styles/SouthAmerica.module.css'


export default function GalapagosPenguin() {
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
            <br></br>
            <h1 className={styles.centered}>Kangaroo</h1>
            
                <img src='/Kangaroo.jpg' className={styles.imgContainer}></img>
            </div>
            <Row>
                <Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Why are they endangered?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">How can you help?</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            These cats have a similar size to domestic cats. However, their thick fur and their long tail make them look bigger. Their fur is ash-gray or pale silver and has isolated orange-brown or hazel stripes and spots. The cat’s limbs and tail have black rings around them. Females and males look alike. The body of a young Andean mountain cat is lighter in its color and is covered with many small-sized dots.                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            The Andean mountain cat is regarded as one of the world’s most endangered wild cats and perhaps South America’s rarest felid, yet, as far as cat species go, it is amongst the least known. It is a very rare animal, and its similarities with the more common South American Pampas cat have caused studying this species to be even more difficult.
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            Remember to always recycle! Our ocean is full of plastic and you can do your part to reduce, reuse and recycle disposable plastics to protect the Andean Mountain Cat.
                        <br />
                        <br />
                        <Button>Donate!</Button>                       
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                <br />
                <Button className={styles.leftButton}>Favorite!</Button>
                <br />
                <div classname={styles.type}>
                <h5><img src='/icons/Bear.png' className={styles.logo}></img> Type: Mammals</h5>
                <h5><img src='/icons/Food.png' className={styles.logo}></img> Diet: Omnivore</h5>
                <h5><img src='/icons/rainforest(1).png' className={styles.logo}></img> Habitat: Mountains</h5>
                </div>
                <br />
                <br />
                </Col>
                
            </Row>
            <iframe width="100%" height="700px" src="https://www.youtube.com/embed/F-OniQdRlvs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            </div>
        </Layout>
    )
}