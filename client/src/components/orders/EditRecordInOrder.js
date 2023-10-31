import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { updateRecord, getRecordById } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Label,
    Input,
    FormGroup,
    Form,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';



// New update form as of 10/23/23
export default function EditRecordInOrder({ loggedInUser }) {
    const [colors, setColors] = useState([]);
    const [record, setRecord] = useState({
        recordWeightId: 1,
        specialEffectId: 1,
        recordColors: [],
        quantity: 50
    });
    const navigate = useNavigate();
    const { recordId, orderId } = useParams();

    useEffect(() => {
        getColors().then((data) => setColors(data));

        // Fetch the existing record data for editing
        getRecordById(recordId).then((data) => setRecord(data));
    }, [recordId]);

    const handleColorChange = (event) => {
        const colorId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {
            record.recordColors.push({ colorId: colorId });
        } else {
            record.recordColors = record.recordColors.filter(
                (color) => color.colorId !== colorId
            );
        }
        setRecord({ ...record });
    };

    const handleRecordWeightChange = (event) => {
        const weightId = parseInt(event.target.value);
        setRecord({ ...record, recordWeightId: weightId });
    };

    const handleQuantityChange = (event) => {
        const quantityInput = parseInt(event.target.value);
        setRecord({ ...record, quantity: quantityInput });
    };

    const handleRecordSpecialEffectChange = (event) => {
        const effectId = parseInt(event.target.value);
        setRecord({ ...record, specialEffectId: effectId });
    };

    const handleRecordUpdate = (event) => {
        event.preventDefault();
        if (record.quantity < 50) {
            alert('Minimum quantity should be 50');
            return; // Prevent further action due to invalid quantity
        }


        // Update the record with the new data
        updateRecord(recordId, record).then(() => {
            navigate(`/neworder/orders/${orderId}`);
        });
    };

    return (
        <div>
            <Container>
                <h2>Edit Record Order</h2>
            </Container>

            <Container>
                <Form className='create-order'>
                    <Container>
                        <h3>Selected Colors:</h3>
                        <Row className="bg-secondary border"
                            fluid="sm">
                            {colors.map((colorOption) => (
                                <Col key={colorOption.id} sm={6} md={4} lg={3} style={{ margin: 'auto' }}>
                                    <div className="color-card-section">
                                        <ColorForRecordsImageCard color={colorOption} className="record-image" />
                                    </div>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id={`color-${colorOption.id}`}
                                                value={colorOption.id}
                                                checked={record.recordColors.some(color => color.colorId === colorOption.id)}
                                                onChange={handleColorChange}
                                            />
                                        </Label>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <Container>

                        <h3>Selected Weight:</h3>
                        <Input type="select" id="weight" value={record.recordWeightId} onChange={handleRecordWeightChange}>
                            <option value="1">130 grams</option>
                            <option value="2">180 grams</option>
                        </Input>

                    </Container>

                    <Container>

                        <h3>Quantity:</h3>
                        <Input type="number" id="quantity" min="50" value={record.quantity} onChange={handleQuantityChange} />

                    </Container>

                    <Container>

                        <h3>Selected Special Effect:</h3>
                        <Input type="select" id="specialEffect" value={record.specialEffectId} onChange={handleRecordSpecialEffectChange}>
                            <option value="1">BiColor</option>
                            <option value="2">Splatter</option>
                            <option value="3">Swirl</option>
                            <option value="4">None</option>
                        </Input>

                    </Container>

                    <Container>
                        <Row className="mt-0">
                            <Col className="d-flex justify-content-center">
                                <Button color="primary" onClick={handleRecordUpdate}>Update Record</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Container>
        </div>
    );
}