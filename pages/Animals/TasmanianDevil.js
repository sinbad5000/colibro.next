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
            <h1 className={styles.centered}>Tasmanian Devil</h1>
            
                <img src='/tasmanian.jpg' className={styles.imgContainer}></img>
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
                        <Tab.Pane className={styles.sideContainer2} eventKey="first">
                        They have long front legs and shorter rear legs, giving them a lumbering, piglike gait. The Tasmanian devil is the world's largest carnivorous marsupial, reaching 30 inches in length and weighing up to 26 pounds, although its size will vary widely depending on where it lives and the availability of food.
                        </Tab.Pane>
                        <Tab.Pane className={styles.sideContainer2} eventKey="second">
                        Listed as endangered, they are threatened with extinction due to the deadly Devil Facial Tumour Disease (DFTD) - a devastating disease that emerged in 1996 and still has no cure. Once widespread throughout Australia, devils are now only found in Tasmania.
                        </Tab.Pane>
                        <Tab.Pane className={styles.sideContainer2} eventKey="third">
                        Remember to always recycle! Our ocean is full of plastic and you can do your part to reduce, reuse and recycle disposable plastics to protect the Tasmanian Devil.
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
                <div className={styles.type}>
                <h5><img src='/icons/Bear.png' className={styles.logo}></img> Type: Mammals</h5>
                <h5><img src='/icons/Food.png' className={styles.logo}></img> Diet: Omnivore</h5>
                <h5><img src='/icons/rainforest(1).png' className={styles.logo}></img> Habitat: Mountains</h5>
                </div>
                <br />
                <br />
                </Col>
                
            </Row>
            <iframe width="100%" height="700px" src="https://www.youtube.com/embed/iyvPjn2m240" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Container>
            </div>
        </Layout>
    )
}