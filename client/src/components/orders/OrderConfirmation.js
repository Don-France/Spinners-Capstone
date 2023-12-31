import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../../managers/userProfileManager.js";
import { getOrderById } from "../../managers/orderManager.js";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

export default function OrderConfirmation() {
    const [order, setOrder] = useState({});
    const { id, userProfileId } = useParams();

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
            <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                    <h1>Thank you for your order!</h1>
                    <Card color="light" >
                        <CardBody>
                            <CardTitle tag="h4">Confirmation Number: {order.id + 1912345000000}</CardTitle>
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
                            <CardText>Order Total: ${(order?.total + 750 * 1.0925).toFixed(2)} (including tax)</CardText>



                        </CardBody>

                    </Card>
                    <h2>Please print this page for your records!</h2>
                </div>
            </div>
        </>
    );
};

