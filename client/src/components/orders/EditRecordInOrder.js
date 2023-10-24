import React, { useState, useEffect } from 'react';
import { getColors } from '../../managers/colormanager.js';
import { updateRecord, getRecordById } from '../../managers/recordManager.js';
import ColorForRecordsImageCard from '../colors/ColorForRecordsImageCard.js';
import { useNavigate, useParams } from 'react-router-dom';



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

        // Update the record with the new data
        updateRecord(recordId, record).then(() => {
            navigate(`/neworder/orders/${orderId}`);
        });
    };

    return (
        <div>
            <h2>Edit Record in Order</h2>
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
                                checked={record.recordColors.some(
                                    (color) => color.colorId === colorOption.id
                                )}
                                onChange={handleColorChange}
                            />
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="weight">Select Weight:</label>
                <select
                    id="weight"
                    value={record.recordWeightId}
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
                    value={record.quantity}
                    onChange={handleQuantityChange}
                />
            </div>
            <div>
                <label htmlFor="specialEffect">Select Special Effect:</label>
                <select
                    id="specialEffect"
                    value={record.specialEffectId}
                    onChange={handleRecordSpecialEffectChange}
                >
                    <option value="1">BiColor</option>
                    <option value="2">Splatter</option>
                    <option value="3">Swirl</option>
                </select>
            </div>
            <button onClick={handleRecordUpdate}>Update Record</button>
        </div>
    );
}
