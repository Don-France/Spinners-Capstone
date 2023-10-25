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
    Select,
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
        console.log("Submit button clicked");
        console.log("Special Effect:", record.specialEffectId);
        console.log("RecordColor:", record.recordColors);




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
            <h2>Create an Order</h2>
            <Form>
                <FormGroup>
                    <Label>Select Colors:</Label>
                    <div>
                        {colors.map((colorOption) => (
                            <Label key={colorOption.id} check>
                                <FormGroup check>
                                    <Input
                                        type="checkbox"
                                        id={`color-${colorOption.id}`}
                                        value={colorOption.id}
                                        onChange={handleColorChange}
                                    />
                                    <ColorForRecordsImageCard color={colorOption} />
                                </FormGroup>
                            </Label>
                        ))}
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="weight">Select Weight:</Label>
                    <Input
                        type="select"
                        name="select"
                        id="weight"
                        onChange={handleRecordWeightChange}
                    >
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
                    >
                        <option value="1">BiColor</option>
                        <option value="2">Splatter</option>
                        <option value="3">Swirl</option>
                    </Input>
                </FormGroup>
                <Button color="primary" onClick={handleOrderSubmit}>
                    Submit an order
                </Button>
            </Form>
        </div>
    );
}
