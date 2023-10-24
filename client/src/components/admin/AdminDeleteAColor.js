import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import { adminDeleteAColor, getColorById, getColors } from '../../managers/colormanager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';

export default function AdminDeleteAColor({ loggedInUser }) {
    const [colors, setColors] = useState([]);
    // const isAdmin = loggedInUser && loggedInUser.roles.includes("Admin")

    useEffect(() => {
        getColors().then(setColors);


    }, []);

    const adminDelete = (id) => {
        // Fetch the color by its ID
        getColorById(id)
            .then((color) => {
                // Check if the color exists
                if (color) {
                    // Delete the color
                    adminDeleteAColor(id).then(() => {
                        // Update the state by removing the deleted color
                        setColors((prevColors) => prevColors.filter((c) => c.Id !== id));
                        window.location.reload();
                    });
                }
            });
    };
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1>Current Color Choices</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                {colors.map((color) => (
                    <Col key={color.Id} md={4}>
                        <ColorForRecordsImageCard color={color} />
                        <Button
                            color="danger"
                            onClick={() => {
                                adminDelete(color.id)
                            }}
                        >
                            Delete
                        </Button>
                    </Col>
                ))}

            </Row>

            <Row className="mt-3">
                <Col>
                    <Link to="/colors">
                        <button className="btn btn-primary">New Order</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};


