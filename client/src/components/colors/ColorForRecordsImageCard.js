import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
} from 'reactstrap';
import '../orders/orders.css';

export default function ColorForRecordsImageCard({ color }) {
    return (
        <Card className="mb-3 mt-3  recordImageCard text-center" color="dark" inverse >
            <CardTitle tag={"h5"}>{color.name}</CardTitle>
            <CardImg top width="100%" src={color.imageUrl} alt={color.name}
                style={{
                    height: 250
                }} />
            <CardBody>
            </CardBody>
        </Card>
    );
};


