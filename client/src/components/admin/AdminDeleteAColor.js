import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import { adminDeleteAColor, getColorById, getColors } from '../../managers/colormanager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import '../orders/orders.css';
export default function AdminDeleteAColor({ loggedInUser }) {
    const [colors, setColors] = useState([]);


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
                        // Update the color state by removing the deleted color
                        setColors((prevColors) => prevColors.filter((c) => c.Id !== id));
                        getColors().then(setColors)

                    });
                }
            });
    };
    return (
        <Container className="mt-5 ">
            <Row>
                <Col>
                    <h1>Current Color Choices</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                {colors.map((color) => (
                    <Col key={color.Id} sm={6} md={4} lg={3}>
                        <div className="d-flex flex-column align-items-center"> {/* Flex container */}
                            <div>
                                <ColorForRecordsImageCard color={color} />
                            </div>
                            <div className="mt-2"> {/* Margin top for button */}
                                <Button
                                    color="danger"
                                    onClick={() => {
                                        adminDelete(color.id);
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


