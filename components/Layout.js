import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Layout = ({ children }) => (
    <Container>

        <Head>
            <title>Colibro</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar className="justify-content-between" expand="lg" variant="dark" bg="dark" fixed="top">
            <Navbar.Brand>Calibro</Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                <Nav.Link >Map</Nav.Link>
                <Nav.Link >Sign Up</Nav.Link>
                <Nav.Link >Sign in</Nav.Link>
            </Navbar.Collapse>

        </Navbar>

        <div>{children}</div>

        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
            <Navbar.Brand>Footer</Navbar.Brand>
        </Navbar>
    </Container>
);

export default Layout;