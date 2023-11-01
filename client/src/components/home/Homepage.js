import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import { getColors } from '../../managers/colormanager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { getSpecialEffects } from '../../managers/specialEffectmanager.js';
import SpecialEffectCard from '../specialEffects/SpecialEffectsCard.js';
import { YoutubeEmbed } from './YoutubeEmbed.js';
import "./home.css"

export default function HomePage({ loggedInUser }) {
    const [colors, setColors] = useState([]);
    const [specialEffects, setSpecialEffects] = useState([]);

    useEffect(() => {
        getColors().then(setColors);
        getSpecialEffects().then(setSpecialEffects);



    }, []);

    const isNewOrderButton = loggedInUser
        ? "New Order"
        : "Login or Register to place an Order";

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col >
                        <h1>Welcome to Spinners Discount Record Pressing</h1>
                        <div className='video'>
                            <YoutubeEmbed embedId="_Yr__8JiQk4" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='home-about'>
                <Row >
                    <Col >
                        <h2>About Our Vinyl Record Pressing</h2>
                        <p>
                            At Spinners Discount Record Pressing, we are passionate about preserving the art of vinyl records and specialize in catering to up and coming artists.
                            Vinyl records have a timeless charm that has been captivating music enthusiasts for decades. We specialize in creating high-quality vinyl records that
                            capture the essence and authenticity of your music.
                        </p>
                        <p>
                            Vinyl records offer a unique listening experience, with warm analog sound and tactile enjoyment that digital formats can't replicate.
                            Whether you're an independent musician, a record label, or a vinyl collector, we're here to bring your music to life on vinyl.
                        </p>
                        <p>
                            Our state-of-the-art pressing facilities, experienced craftsmen, and dedication to quality ensure that your vinyl records will sound as amazing as they look.
                            We offer a variety of options, from standard black vinyl to colorful custom designs and special effects, allowing you to create a record that reflects your
                            artistic vision with affordability.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-4">
                    <Col>
                        <h2>Explore Vinyl Options</h2>
                        <h4>Vinyl Colors</h4>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row className="mt-4 mb-4 justify-content-space-between"  >
                    {colors.map((color) => (
                        <Col key={color.id} sm={6} md={4} lg={3} style={{ margin: 'auto' }}  >
                            <div className="color-card-section">
                                <ColorForRecordsImageCard color={color} className="record-image" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row className="mt-2">
                    <Col>
                        <h2>Special Effect Options</h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {specialEffects.map((se) => {
                        if (se.imageUrl) {
                            return (
                                <Col key={se.id} sm={6} md={4} lg={3} style={{ margin: 'auto' }}>
                                    <div className="special-effect-card-section">
                                        <SpecialEffectCard specialEffect={se} />
                                    </div>
                                </Col>
                            );
                        }
                        return null; // Do not render if there's no image URL
                    })}
                </Row>
            </Container>
            <Container>
                <Row className="mt-0">
                    <Col className="d-flex justify-content-center">

                        <Link to="/neworder">
                            <Button color="info">{isNewOrderButton}</Button>
                        </Link>

                    </Col>
                </Row>
            </Container>

        </div >
    );
};


