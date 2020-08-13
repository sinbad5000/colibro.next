import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Colibro</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <br />
        <br />


        <Navbar className="justify-content-between" expand="lg" variant="dark" bg="dark" fixed="top">
            <Container className={styles.test}>
                <Navbar.Brand>Colibro</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/Homepage">Map</Nav.Link>
                    <Nav.Link >Sign Up</Nav.Link>
                    <Nav.Link >Sign in</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <div>
            <main>{children}</main>
        </div>

        <br />
        <br />
        <br />

        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
            <Navbar.Brand>Footer</Navbar.Brand>
        </Navbar>
    </div>
);

export default Layout;