import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from "reactstrap";
import { getOrderById } from "../../managers/orderManager";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function OrderDetails() {
    const [order, setOrder] = useState({});
    // const [records, setRecords] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const getOrderDetails = () => {
        if (id) {
            getOrderById(id).then(setOrder);
        }
    };

    useEffect(() => {
        getOrderDetails();
    }, [id]);

    if (!order) {
        return (
            <>
                <h2>Order Details</h2>

            </>
        );
    }

    return (
        <>
            <h2>Order Details</h2>
            <Card color="dark" inverse>
                <CardBody>
                    <CardTitle tag="h4">Order Number: {order.id + 19000}</CardTitle>
                    <CardText>
                        Order Date: {new Date(order.orderDate).toLocaleDateString()}
                    </CardText>
                </CardBody>
                {/* <Link to={`/pizzas/${order.id}/addpizza`}>Add Pizza</Link> */}
            </Card>
            <h4>Records</h4>
            {order?.records?.map((records, index) => (
                <Card
                    outline
                    color="success"
                    key={index}
                    style={{ marginBottom: "4px" }}
                >
                    <CardBody>
                        <CardTitle tag="h5">Record: {index + 1}</CardTitle>
                        <CardText>Weight: {records?.recordWeight?.weight} grams</CardText>
                        <CardText>Special Effect: {records?.specialEffect?.name}</CardText>
                        <CardText>Colors: {records?.recordColors?.map((recordColor) => (
                            <div key={recordColor.color.id}>
                                {recordColor.color.name}
                            </div>
                        ))}</CardText>
                        <CardText>Total: ${order?.total}</CardText>
                        <Button
                            color="dark"
                            onClick={() => {
                                navigate(`/addtoorder/${id}`);
                            }}
                        >
                            Add More Records
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </>
    );
}
