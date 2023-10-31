import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { addRecord } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button,
    Label,
    Input,
    FormGroup,
    Form,
    Container, Row, Col
} from 'reactstrap';



export default function AddARecordToAnOrder({ loggedInUser }) {

    const [colors, setColors] = useState([]); // State for color option

    const [record, setRecord] = useState({
        recordWeightId: 1,
        specialEffectId: 1,
        recordColors: [],
        quantity: 50
    });
    const navigate = useNavigate();
    const { id } = useParams();




    useEffect(() => {

        getColors().then((data) => setColors(data));
    }, []);



    const handleColorChange = (event) => {
        const colorId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {
            // Push the color selections to the recordColor array
            record.recordColors.push({ colorId: colorId })

        }
        else {
            // Find the index of the selected color and remove it from the recordColor array if not checked
            record.recordColors.splice(record.recordColors.indexOf({ colorId: colorId }), 1);

        }
        setRecord(record)

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
        if (record.quantity < 50) {
            alert('Minimum quantity should be 50');
            return; // Prevent further action due to invalid quantity
        }




        // Create an object to represent the order with selected choices
        const newRecord = {
            recordColors: record.recordColors,
            recordWeightId: record.recordWeightId,
            quantity: record.quantity,
            specialEffectId: record.specialEffectId

        };

        addRecord(id, newRecord)
            .then(() => {
                navigate(`/neworder/orders/${id}`)

            });


    };

    return (
        <div>
            <Container>
                <h2>Add Records to the Order</h2>
            </Container>

            <Container>
                <Form className='create-order'>
                    <Container>
                        <h3>Select Color:</h3>
                        <Row className="bg-secondary border"
                            fluid="sm">
                            {colors.map((colorOption) => (
                                <Col key={colorOption.id} sm={6} md={4} lg={3} style={{ margin: 'auto' }}>
                                    <div className="color-card-section">
                                        <ColorForRecordsImageCard color={colorOption} className="record-image" />
                                    </div>  {/* ColorForRecordsImageCard component */}
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id={`color-${colorOption.id}`}
                                                value={colorOption.id}
                                                onChange={handleColorChange}
                                            />
                                            {colorOption.name}
                                        </Label>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <Container>
                        <h3>Select Weight:</h3>
                        <Input
                            type="select"
                            name="select"
                            id="weight"
                            onChange={handleRecordWeightChange}
                        >
                            <option value="0">Please select a weight</option>
                            <option value="1">130 grams</option>
                            <option value="2">180 grams</option>  {/* Options for weight selection */}
                        </Input>
                    </Container>

                    <Container>
                        <h3>Quantity:</h3>
                        <Input
                            type="number"
                            id="quantity"
                            min="50"
                            onChange={handleQuantityChange}
                        />
                    </Container>

                    <Container>
                        <h3>Select Special Effect:</h3>
                        <Input
                            type="select"
                            name="select"
                            id="specialEffect"
                            onChange={handleRecordSpecialEffectChange}
                        >
                            <option value="0">Special Effects</option>
                            <option value="1">BiColor</option>
                            <option value="2">Splatter</option>
                            <option value="3">Swirl</option>
                            <option value="4">None</option>
                        </Input>
                    </Container>

                    <Container>
                        <Row className="mt-0">
                            <Col className="d-flex justify-content-center">
                                <Button color="primary" onClick={handleOrderSubmit}>
                                    View Your Order Details
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Container>
        </div>
    );
}
