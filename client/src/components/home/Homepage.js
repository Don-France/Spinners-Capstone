import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { getColors } from '../../managers/colormanager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';

export default function HomePage() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getColors().then(setColors);


    }, []);
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1>Welcome to Your Homepage</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                {colors.map((color) => (
                    <Col key={color.Id} md={4}>
                        <ColorForRecordsImageCard color={color} />
                    </Col>
                ))}
            </Row>
            <Row className="mt-3">
                <Col>
                    <Link to="/neworder">
                        <button className="btn btn-primary">New Order</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};


