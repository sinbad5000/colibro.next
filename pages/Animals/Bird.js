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
                <img src='/Rainforest-Bg.jpg' className={styles.imgContainer}></img>
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
                        <Nav.Link eventKey="third">Why are they endangered?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">What Can You Do?</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane className={styles.sideContainer} eventKey="first">
                        Lion tamarins take their name from their impressive manes - thick rings of hair reminiscent of Africa's great cats. The golden lion tamarin may be the most beatiful of the four lion tamarin species. It's abundant golden hair frames a charismatic black face and covers its small body and tail. Despite their name, these rare primates have far more in common with their monkey relatives than any feline.
                        </Tab.Pane>
                        <Tab.Pane className={styles.sideContainer} eventKey="third">
                        because you suck.
                        </Tab.Pane>
                        <Tab.Pane className={styles.sideContainer} eventKey="second">
                        Don't be a dick. 
                        <br />
                        <br />
                        <Button>Donate!</Button> 
                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                <br />
                <Button className="leftButton">Favorite!</Button>
                <br />
                <div className={styles.type}>
                <h5><img src='/icons/Bear.png' className={styles.logo}></img> Type: Mammals</h5>
                <h5><img src='/icons/Food.png' className={styles.logo}></img> Diet: Herbivore</h5>
                <h5><img src='/icons/rainforest(1).png' className={styles.logo}></img> Habitat: Forest</h5>
                </div>
                <br />
                <br />
                </Col>
                
            </Row>
            <iframe width="100%" height="700px" src="https://www.youtube.com/embed/ubM6v0_u-dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            </div>
        </Layout>
    )
}