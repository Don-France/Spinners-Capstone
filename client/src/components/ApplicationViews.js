import { Route, Routes } from "react-router-dom";

import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Homepage from "./Homepage.js";
import RecordOrderForm from "./orders/RecordOrderForm.js";
import OrderDetails from "./orders/OrderDetails.js";


// import UserProfileList from "./userprofiles/UserProfileList.js";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            // <AuthorizedRoute loggedInUser={loggedInUser}>
            <Homepage />
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
          path="employees"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <p>Employees</p>
              {/* <UserProfileList /> */}
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
