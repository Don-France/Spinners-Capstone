import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { createRecord } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Label,
    Input,
    FormGroup,
    Form, Button, Container, Row, Col
} from "reactstrap";
import './orders.css';



export default function RecordOrderForm({ loggedInUser }) {

    const [colors, setColors] = useState([]); // State for color option

    const [record, setRecord] = useState({
        recordWeightId: 0,
        specialEffectId: 0,
        recordColors: [],
        quantity: 50
    });
    const navigate = useNavigate();




    useEffect(() => {

        getColors().then((data) => setColors(data));
    }, []);



    const handleColorChange = (event) => {
        const colorId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {

            record.recordColors.push({ colorId: colorId })

        }
        else {

            record.recordColors.splice(record.recordColors.indexOf({ colorId: colorId }), 1);

        }
        setRecord(record)
        console.log(record.recordColors);
        console.log(record)
    };

    const handleRecordWeightChange = (event) => {
        const weightId = parseInt(event.target.value);
        setRecord({ ...record, recordWeightId: weightId })
    };

    const handleQuantityChange = (event) => {
        let quantityInput = parseInt(event.target.value);

        setRecord({ ...record, quantity: quantityInput })
    };
    const handleRecordSpecialEffectChange = (event) => {
        const effectId = parseInt(event.target.value);
        setRecord({ ...record, specialEffectId: effectId })
    };

    const handleOrderSubmit = (event) => {
        event.preventDefault();
        if (record.quantity < 50) {
            alert('Minimum quantity should be 50');
            return; // Prevent further action due to invalid quantity
        }
        if (record.recordColors.length === 0) {
            alert('Please choose at least one color');
            return; // Prevent further action if color is not selected
        }

        if (record.recordWeightId === 0) {
            alert('Please select a weight');
            return; // Prevent further action if weight is not selected
        }

        if (record.specialEffectId === 0) {
            alert('Please select a special effect');
            return; // Prevent further action if special effect is not selected
        }

        // Create an object to represent the order with selected choices
        const newRecord = {
            recordColors: record.recordColors,
            recordWeightId: record.recordWeightId,
            quantity: record.quantity,
            specialEffectId: record.specialEffectId

        };



        createRecord(newRecord)
            .then((newlyCreatedRecord) => {

                const id = newlyCreatedRecord.orderId;
                navigate(`orders/${id}`);
            })
    };

    return (
        <div>
            <Container>
                <h2>Start Your Order</h2>
            </Container>

            <Container>
                <Form className='create-order'>
                    <Container>
                        <h3>Select Color/s:</h3>
                        <Row className="color-background"
                            fluid="sm">
                            {colors.map((colorOption) => (
                                <Col key={colorOption.id} sm={6} md={4} lg={3} style={{ margin: 'auto' }}>
                                    <div className="color-card-section">
                                        <ColorForRecordsImageCard color={colorOption} className="record-image" />

                                        <FormGroup check className='checkbox-container'>
                                            <Label check className='label-color'>
                                                <Input
                                                    type="checkbox"
                                                    id={`color-${colorOption.id}`}
                                                    value={colorOption.id}
                                                    onChange={handleColorChange}
                                                />
                                                {colorOption.name}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <Container>
                        <h3>Select Weight:</h3>
                        <h5>130 gram is standard and 180 gram is premium</h5>
                        <Input

                            type="select"
                            name="select"
                            id="weight"
                            onChange={handleRecordWeightChange}
                            className='custom-select'
                        >
                            <option value="0">Please select a weight</option>
                            <option value="1">130 grams</option>
                            <option value="2">180 grams</option>
                        </Input>
                    </Container>

                    <Container>
                        <h3>Quantity:</h3>
                        <Input
                            type="number"
                            id="quantity"
                            min="50"
                            onChange={handleQuantityChange}
                            className='custom-select'
                        />
                    </Container>

                    <Container>
                        <h3>Select Special Effect:</h3>
                        <Input
                            type="select"
                            name="select"
                            id="specialEffect"
                            onChange={handleRecordSpecialEffectChange}
                            className='custom-select'
                        >
                            <option value="0">Special Effects</option>
                            <option value="1">BiColor</option>
                            <option value="2">Splatter</option>
                            <option value="3">Swirl</option>
                            <option value="4">None</option>
                        </Input>
                    </Container>

                </Form>
                <Container>
                    <Row className="mt-3">
                        <Col className="d-flex justify-content-center">
                            <Button color="primary" onClick={handleOrderSubmit}>
                                View Your Order Details
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}







