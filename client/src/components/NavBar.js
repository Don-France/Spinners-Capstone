import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { logout } from "../managers/authManager";
import logo from "./asset/recordLogo.png";

export default function NavBar({ loggedInUser, setLoggedInUser }) {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <div>
      <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
          <img src={logo} alt="Logo" height="40" />Spinners Discount Record Pressing
        </NavbarBrand>
        {loggedInUser ? (
          <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
              <Nav navbar>
                {loggedInUser.roles && loggedInUser.roles.includes("Admin") && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/colors">
                      Color Inventory
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
            <Button
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                logout().then(() => {
                  setLoggedInUser(null);
                  setOpen(false);
                });
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login or Register</Button>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}