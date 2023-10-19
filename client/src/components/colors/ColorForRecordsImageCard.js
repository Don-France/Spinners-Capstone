import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
} from 'reactstrap';

export default function ColorForRecordsImageCard({ color }) {
    return (
        <Card className="mb-3">
            <CardImg top width="33%" src={color.imageUrl} alt={color.name} />
            <CardBody>
                <CardTitle>{color.name}</CardTitle>
            </CardBody>
        </Card>
    );
};


