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
        <Card className="mb-3">
            <CardImg top width="33%" src={specialEffect.imageUrl} alt={specialEffect.name} />
            <CardBody>
                <CardTitle>{specialEffect.name}</CardTitle>
                <CardText>${specialEffect.price}/50</CardText>
            </CardBody>
        </Card>
    );
};


