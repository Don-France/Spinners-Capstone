import { Route, Routes } from "react-router-dom";

import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import RecordOrderForm from "./orders/RecordOrderForm.js";
import OrderDetails from "./orders/OrderDetails.js";
import HomePage from "./home/Homepage.js";
import AddARecordToAnOrder from "./orders/AddARecordToAnOrder.js";
import EditRecordInOrder from "./orders/EditRecordInOrder.js";
import AdminDeleteAColor from "./admin/AdminDeleteAColor.js";
import OrderConfirmation from "./orders/OrderConfirmation.js";


// import UserProfileList from "./userprofiles/UserProfileList.js";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            // <AuthorizedRoute loggedInUser={loggedInUser}>
            <HomePage loggedInUser={loggedInUser} />
            // </AuthorizedRoute>
          }
        />

        <Route path="neworder">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <RecordOrderForm />
              </AuthorizedRoute>
            }
          />
          <Route
            path="orders/:id"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <OrderDetails />
              </AuthorizedRoute>
            }
          />

        </Route>
        <Route
          path="addtoorder/:id"
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <AddARecordToAnOrder />
            </AuthorizedRoute>
          }
        />
        <Route
          path="updateorder/:orderId/:recordId"
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser} >
              <EditRecordInOrder />
            </AuthorizedRoute>
          }
        />
        <Route
          path="orders/:id/:userProfileId/confirmation"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <OrderConfirmation />
            </AuthorizedRoute>
          }
        />
        <Route
          path="colors"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>

              <AdminDeleteAColor />
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
