import styles from '../styles/Home.module.css'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Filter() {
    const [value, setValue] = useState([1, 17]);

    const handleChange = (val) => setValue(val);

    return (
        <Container>
      <br />
            <Row className="justify-content-center">

                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                    <ToggleButton value={8}>Carnivore</ToggleButton>
                    <ToggleButton value={9}>Herbivore</ToggleButton>
                    <ToggleButton value={10}>Omnivore</ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <br />
            <Row className="justify-content-center">

                <ToggleButtonGroup type="radio" name="options" value={value} onChange={handleChange}>
                    <ToggleButton value={1}>All</ToggleButton>
                    <ToggleButton value={2}>Mammal</ToggleButton>
                    <ToggleButton value={3}>Reptile</ToggleButton>
                    <ToggleButton value={4}>Fish</ToggleButton>
                    <ToggleButton value={6}>Insects</ToggleButton>
                </ToggleButtonGroup>
            </Row>

      



            <br />



        </Container>

    );
}