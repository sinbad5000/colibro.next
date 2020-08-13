import Container from 'react-bootstrap/Container'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

export default function Filter() {
    const [value, setValue] = useState([1, 7]);

    const handleChange = (val) => setValue(val);

    return (
        <Container>
            <Row className="justify-content-center">
                <ToggleButtonGroup type="radio" name="options" value={value} onChange={handleChange}>
                    <ToggleButton value={1}>All</ToggleButton>
                    <ToggleButton value={2}>Mammal</ToggleButton>
                    <ToggleButton value={3}>Reptile</ToggleButton>
                </ToggleButtonGroup>
            </Row>

            <br />

                <Row>
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                        <ToggleButton value={4}>Carnivore</ToggleButton>
                        <ToggleButton value={5}>Herbivore</ToggleButton>
                        <ToggleButton value={6}>Omnivore</ToggleButton>
                        <ToggleButton value={7}>Marine</ToggleButton>
                        <ToggleButton value={8}>Amphibian</ToggleButton>
                    </ToggleButtonGroup>
                </Row>

        </Container>

    );
}