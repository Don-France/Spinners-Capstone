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
        recordWeightId: 1,
        specialEffectId: 1,
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
        const quantityInput = parseInt(event.target.value);
        setRecord({ ...record, quantity: quantityInput })
    };
    const handleRecordSpecialEffectChange = (event) => {
        const effectId = parseInt(event.target.value);
        setRecord({ ...record, specialEffectId: effectId })
    };

    const handleOrderSubmit = (event) => {
        event.preventDefault();
        // console.log("Submit button clicked");

        // console.log("Special Effect:", record.specialEffectId);
        // console.log("RecordColor:", record.recordColors);




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
        <Container>
            <h2>Create an Order</h2>
            <Form className='create-order'>
                <FormGroup>
                    <Label for="color">Select Color:</Label>
                    <Row>
                        {colors.map((colorOption) => (
                            <Col key={colorOption.id}  >
                                <ColorForRecordsImageCard color={colorOption} />
                                <FormGroup check >
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            id={`color-${colorOption.id}`}
                                            value={colorOption.id}
                                            onChange={handleColorChange}
                                        />
                                    </Label>
                                </FormGroup>
                            </Col>
                        ))}
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Label for="weight">Select Weight:</Label>
                    <Input
                        type="select"
                        name="select"
                        id="weight"
                        onChange={handleRecordWeightChange}
                    >   <option value="0">Please select a weight</option>
                        <option value="1">130 grams</option>
                        <option value="2">180 grams</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">Quantity:</Label>
                    <Input
                        type="number"
                        id="quantity"
                        min="50"
                        onChange={handleQuantityChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="specialEffect">Select Special Effect:</Label>
                    <Input
                        type="select"
                        name="select"
                        id="specialEffect"
                        onChange={handleRecordSpecialEffectChange}
                    >   <option value="0">None</option>
                        <option value="1">130 grams</option>
                        <option value="2">Splatter</option>
                        <option value="3">Swirl</option>
                    </Input>
                </FormGroup>
            </Form>
            <Container>
                <Row className="mt-0">
                    <Col className="d-flex justify-content-center">
                        <Button color="primary" onClick={handleOrderSubmit}>
                            View Your Order Details
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}








