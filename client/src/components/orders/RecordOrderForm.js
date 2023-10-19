import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { createRecord } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../managers/orderManager.js';


export default function RecordOrderForm({ loggedInUser }) {

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

    const handleOrderSubmit = (event) => {
        event.preventDefault();
        console.log("Submit button clicked");
        // console.log("Weight:", record.weightId);
        console.log("Special Effect:", record.specialEffectId);
        console.log("RecordColor:", record.recordColors);




        // Create an object to represent the order with selected choices
        const newRecord = {
            recordColors: record.recordColors,
            recordWeightId: record.recordWeightId,
            quantity: record.quantity,
            specialEffectId: record.specialEffectId

        };



        createRecord(newRecord)
            .then((newlyCreatedOrder) => {
                const id = newlyCreatedOrder.id - 1;
                navigate(`orders/${id}`);
            })
    };

    return (
        <div>
            <h2>Create an Order</h2>
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
                            />
                            {/* {colorOption.name} */}
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="weight">Select Weight:</label>
                <select
                    id="weight"
                    onChange={handleRecordWeightChange}

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

                />
            </div>
            <div>
                <label htmlFor="specialEffect">Select Special Effect:</label>
                <select
                    id="specialEffect"
                    onChange={handleRecordSpecialEffectChange}

                >
                    <option value="1">BiColor</option>
                    <option value="2">Splatter</option>
                    <option value="3">Swirl</option>

                </select>
            </div>
            <button onClick={handleOrderSubmit}>Submit an order</button>

        </div>
    );
}
