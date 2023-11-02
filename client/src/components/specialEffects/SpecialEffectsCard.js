import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

export default function SpecialEffectCard({ specialEffect }) {
    if (!specialEffect.imageUrl) {
        // Return null if there's no image URL
        return null;
    }
    return (
        <Card className="mb-3 mt-3 text-center" style={{ margin: 'auto' }} color="transparent" inverse>
            <CardImg top width="100%" src={specialEffect.imageUrl} alt={specialEffect.name} />
            <CardBody>
                <CardTitle>{specialEffect.name}</CardTitle>
                <CardText>${specialEffect.price}/ Record</CardText>
            </CardBody>
        </Card>
    );
};


