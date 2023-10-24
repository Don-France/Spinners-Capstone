import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { getRecordById, updateRecord } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from "reactstrap";
import { getOrderById } from '../../managers/orderManager.js';




export default function UpdateARecordOrder({ loggedInUser, order }) {

    const [colors, setColors] = useState([]); // State for color option
    const [existingRecord, setExistingRecord] = useState(null);
    const { id } = useParams();

    const [record, setRecord] = useState({
        recordWeightId: 1,
        specialEffectId: 1,
        recordColors: [],
        quantity: 50
    });
    const navigate = useNavigate();





    useEffect(() => {
        if (id) {
            // Fetch the existing record data using the id
            getRecordById(id)
                .then((data) => {
                    // Set the existing record data
                    setExistingRecord(data);
                });
        }
        // getOrderById(id).then(order);
        getColors().then((data) => setColors(data));
    }, [id]);



    const handleColorChange = (event) => {
        const colorId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {
            // setRecordColor([...recordColor, colorId]);
            record.recordColors.push({ colorId: colorId })

        }
        else {
            // setRecordColor(record.recordColor.filter((id) => id !== colorId));
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

    const handleEditSubmit = (event) => {
        event.preventDefault();
        console.log("Update button clicked");

        // Create an object to represent the updated order with selected choices
        const updatedRecord = {
            Id: existingRecord.id,
            recordColors: record.recordColors,
            recordWeightId: record.recordWeightId,
            quantity: record.quantity,
            specialEffectId: record.specialEffectId
        };

        // Update the existing record with the updated data
        updateRecord(updatedRecord.Id, updatedRecord)
            .then(() => {
                navigate(`/orders/${id}`);
            });
        console.log("Updated Record", updatedRecord)
    };


    // const handleOrderSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Submit button clicked");
    //     // console.log("Weight:", record.weightId);
    //     console.log("Special Effect:", record.specialEffectId);
    //     console.log("RecordColor:", record.recordColors);




    //     // Create an object to represent the order with selected choices
    //     const newRecord = {
    //         recordColors: record.recordColors,
    //         recordWeightId: record.recordWeightId,
    //         quantity: record.quantity,
    //         specialEffectId: record.specialEffectId

    //     };



    //     createRecord(newRecord)
    //         .then((newlyCreatedRecord) => {
    //             console.log(newlyCreatedRecord)
    //             const id = newlyCreatedRecord.orderId;
    //             navigate(`orders/${id}`);
    //         })
    // };

    return (
        <div>
            <h2>Update Your Order</h2>
            {existingRecord ? (
                <div>
                    <label>Select Color:</label>
                    <div>
                        {colors.map((colorOption) => (
                            <label key={colorOption.id}>
                                <ColorForRecordsImageCard color={colorOption} />
                                <input
                                    type="checkbox"
                                    id={`color-${colorOption.id}`}
                                    value={colorOption.id}
                                    onChange={handleColorChange}
                                    checked={existingRecord && existingRecord.recordColors && existingRecord.recordColors.some(color => color.colorId === colorOption.id)}
                                />
                            </label>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading color options...</p>
            )}

            <div>
                <label htmlFor="weight">Select Weight:</label>
                <select
                    id="weight"
                    onChange={handleRecordWeightChange}
                    value={existingRecord ? existingRecord.recordWeightId : record.recordWeightId}
                >
                    <option value="1">130 grams</option>
                    <option value="2">180 grams</option>
                </select>
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    min="50"
                    onChange={handleQuantityChange}
                    value={existingRecord ? existingRecord.quantity : record.quantity}
                />
            </div>
            <div>
                <label htmlFor="specialEffect">Select Special Effect:</label>
                <select
                    id="specialEffect"
                    onChange={handleRecordSpecialEffectChange}
                    value={existingRecord ? existingRecord.specialEffectId : record.specialEffectId}
                >
                    <option value="1">BiColor</option>
                    <option value="2">Splatter</option>
                    <option value="3">Swirl</option>
                </select>
            </div>

            <button onClick={handleEditSubmit}>
                Update Order
            </button>


        </div>
    );
}