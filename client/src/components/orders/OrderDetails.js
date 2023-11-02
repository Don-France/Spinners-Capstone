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
        <div style={{ overflowX: "auto" }}>
            <div style={{ textAlign: "center" }}>
                <h1>Order Details</h1>
                <Card color="secondary" inverse>
                    <CardBody>
                        <CardTitle tag="h4">Order Number: {order.id + 1912345000}</CardTitle>
                        <CardText>Order Date: {new Date(order.orderDate).toLocaleDateString()}</CardText>
                        <CardText>Total: ${order?.total + 750} (+ tax)</CardText>
                        <CardText>Total includes a $750.00 fee for press plate setup!</CardText>
                        <Button color="info" onClick={() => navigate(`/addtoorder/${id}`)}>
                            Add More Albums
                        </Button>
                        <Button
                            color="success"
                            style={{ marginLeft: "15px" }}
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
            </div>
            <h4 className="album-header" style={{ textAlign: "center" }}>
                Albums
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "10px" }}>
                {order?.records?.map((records, index) => (
                    <Card color="secondary" inverse key={index} style={{ width: "300px", margin: "10px" }}>
                        <CardBody>
                            <CardTitle tag="h5">Record: {index + 1}</CardTitle>
                            <CardText>Weight: {records?.recordWeight?.weight} grams</CardText>
                            <CardText>Special Effect: {records?.specialEffect?.name}</CardText>
                            <CardText>
                                Colors: {records?.recordColors?.map((recordColor) => (
                                    <div key={recordColor.color.id}>{recordColor.color.name}</div>
                                ))}
                            </CardText>
                            <CardText>Quantity: {records?.quantity}</CardText>
                            <Button color="info" onClick={() => navigate(`/updateorder/${order.id}/${records.id}`)}>
                                Update This Album
                            </Button>
                            <Button
                                onClick={() => deleteRecord(records.id)}
                                color="danger"
                                style={{ marginLeft: "8px" }}
                            >
                                Delete
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};