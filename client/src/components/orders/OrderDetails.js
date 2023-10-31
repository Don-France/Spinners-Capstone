import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Button } from "reactstrap";
import { getOrderById } from "../../managers/orderManager";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getUserProfileById } from "../../managers/userProfileManager.js";
import { deleteARecord } from "../../managers/recordManager.js";


export default function OrderDetails() {
    const [order, setOrder] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [userProfileId, setUserProfileId] = useState();

    const getOrderDetails = () => {
        if (id) {
            getOrderById(id)
                .then((order) => {
                    setOrder(order);
                    return getUserProfileById(order.userProfileId);
                })
                .then((userProfile) => {
                    setUserProfileId(userProfile.id);
                });
        }
    };

    useEffect(() => {
        getOrderDetails();
        getUserProfileById().then(setUserProfileId)
    }, [id]);

    const deleteRecord = (recordId) => {


        deleteARecord(recordId)
            .then(() => {
                getOrderDetails();
            })
    };


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
            <Card color="secondary" inverse>
                <CardBody>
                    <CardTitle tag="h4">Order Number: {order.id + 1912345000}</CardTitle>
                    <CardText>
                        Order Date: {new Date(order.orderDate).toLocaleDateString()}
                    </CardText>
                    <CardText>Total: ${order?.total + 750}</CardText>
                    <Button
                        color="info"
                        onClick={() => {
                            navigate(`/addtoorder/${id}`);
                        }}
                    >
                        Add More Records
                    </Button>
                    <Button
                        color="success"
                        style={{ marginLeft: "8px" }}
                        onClick={() => {
                            if (userProfileId) {
                                navigate(`/orders/${id}/${userProfileId}/confirmation`);
                            }
                        }}
                    >
                        Submit Your Order
                    </Button>

                </CardBody>

            </Card>
            <h4>Records</h4>
            {order?.records?.map((records, index) => (
                <Card

                    // outline="true"
                    color="secondary"
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
                        <CardText>Quantity: {records?.quantity}</CardText>

                        <Button
                            color="warning"
                            onClick={() => {
                                navigate(`/updateorder/${order.id}/${records.id}`);
                            }}
                        >
                            Update This Record
                        </Button>
                        <Button
                            onClick={() => deleteRecord(records.id)}
                            color="danger"
                            style={{ marginLeft: "8px" }} // Add left margin for spacing
                        >
                            Delete
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </>
    );

};