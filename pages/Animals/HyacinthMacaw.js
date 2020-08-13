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
import Link from 'next/link'


export default function HyacinthMacaw() {
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
                        <h1 className={styles.centered}>Hyacinth Macaw</h1>

                        <img src='/Macaw.jpg' className={styles.imgContainer2}></img>
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
                                                The largest parrot by length in the world, the hyacinth macaw is 1 m long from the tip of its tail to the top of its head and weighs 1.2–1.7 kg. Each wing is 38.8–42.5 cm (15.3–16.7 in) long.[3] The tail is long and pointed. Its feathers are entirely blue, lighter above. However, the neck feathers can sometimes be slightly grey. The ring around the parrots eyes and area just underneath the beak are a strong, vibrant yellow.
                        </Tab.Pane>
                                            <Tab.Pane className={styles.sideContainer2} eventKey="second">
                                                Serious threats to the survival of the species include human activities including the burning of land for pasture maintenance and creation for cattle, and clearing land for colonization.
                        </Tab.Pane>
                                            <Tab.Pane className={styles.sideContainer2} eventKey="third">
                                                Eat more veggies to reduce energy to grow and transport food. Reuse water bottles to reduce production of toxic materials.
                        <br />
                                                <br />
                                                <Link href=' https://www.thepetitionsite.com/771/018/101/save-the-hyacinth-macaw/'><Button>More ways to help!</Button></ Link>
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
                    <iframe width="100%" height="700px" src="https://www.youtube.com/embed/JyZfAoqt_Hw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Container>
            </div>
        </Layout>
    )
}