import React from "react";
import "./Navbar.css";

function Navbar({ setRoute }) {
    return (
        <div id="navbarContainer">
            <span onClick={() => setRoute("myBookmarks")}>Home</span>
            <span onClick={() => setRoute("myAccount")}>My Account</span>
            <span onClick={() => window.location.reload()} id="logoutBtn">Log out</span>
        </div>
    );
}

export default Navbar;