import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

export default function SpecialEffectCard({ specialEffect }) {
    return (
        <Card className="mb-3 mt-3 text-center" style={{ margin: 'auto' }}>
            <CardImg top width="100%" src={specialEffect.imageUrl} alt={specialEffect.name} />
            <CardBody>
                <CardTitle>{specialEffect.name}</CardTitle>
                <CardText>${specialEffect.price}/50 Records</CardText>
            </CardBody>
        </Card>
    );
};


