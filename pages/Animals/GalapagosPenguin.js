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
            <h1 className={styles.centered}>Galapagos Penguin</h1>
            <div className={styles.sideContainer}>
            <p>Lion tamarins take their name from their impressive manes - thick rings of hair reminiscent of Africa's great cats. The golden lion tamarin may be the most beatiful of the four lion tamarin species. It's abundant golden hair frames a charismatic black face and covers its small body and tail. Despite their name, these rare primates have far more in common with their monkey relatives than any feline.</p>
            </div>
                <img src='/PenguinSwim.jpg' className={styles.imgContainer}></img>
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
                        This is the only penguin species found north of the equator and in the Galápagos. he cool waters of the Humboldt and Cromwell Currents allow it to survive despite the tropical latitude. The Galápagos penguin is one of the banded penguins, the other species of which live mostly on the coasts of Africa and mainland South America.
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        Because of the Galápagos penguin's small size, it has many predators. On Isabela Island, introduced cats, dogs, and rats attack penguins and destroy their nests. Illegal fishing activity may interrupt the penguins’ nesting, and they are often caught in fishing nets by mistake. Other factors include oil pollution and depletion of fish stocks.                    
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        Remember to always recycle! Our ocean is full of plastic and you can do your part to reduce, reuse and recycle disposable plastics to protect the Galapagos Penguin.
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
                <h5><img src='/icons/rainforest(1).png' className={styles.logo}></img> Habitat: Marine</h5>
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