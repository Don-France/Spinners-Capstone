import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../../managers/userProfileManager.js";
import { getOrderById } from "../../managers/orderManager.js";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

export default function OrderConfirmation() {
    const [order, setOrder] = useState({});
    const { id, userProfileId } = useParams();
    console.log("id", id);
    console.log("userid", userProfileId);
    const [userProfile, setUserProfile] = useState({});


    const getOrderDetails = () => {
        if (id) {
            getOrderById(id).then(setOrder);
        }
    };

    useEffect(() => {
        getOrderDetails();
        getUserProfileById(userProfileId).then(setUserProfile);
    }, [id, userProfileId]);


    if (!order || !userProfile) {
        return (
            <>
                <h2>Order Details</h2>

            </>
        );
    }

    return (
        <>
            <h2>Thank you for your order!</h2>
            <Card color="secondary" inverse>
                <CardBody>
                    <CardTitle tag="h4">Confirmation Number: {order.id + 1912345000}</CardTitle>
                    <CardText>
                        Order Date: {new Date(order.orderDate).toLocaleDateString()}
                    </CardText>
                    <CardText>
                        First Name: {userProfile?.firstName}
                    </CardText>
                    <CardText>
                        Last Name: {userProfile?.lastName}
                    </CardText>
                    <CardText>
                        Address: {userProfile?.address}
                    </CardText>
                    <CardText>
                        Email: {userProfile?.email}
                    </CardText>
                    <CardText>Total: ${order?.total + 750}</CardText>

                    {/* <Button
                        color="dark"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Submit Order
                    </Button> */}

                </CardBody>

            </Card>

        </>
    );
};

