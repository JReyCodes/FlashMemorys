import React, { useState } from "react";
import { Link,Routes,Route, useSearchParams } from "react-router-dom";


const SideNav = (props) => {

    const {toggleSideNav} = props
    const [sideNav,setSideNav] = useState(props.sideNav)


    return (
        <div id="sideNav">
        <div id="logo-box">
            {sideNav ? <img onClick={toggleSideNav} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></img>:<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" onClick={toggleSideNav}></img>}
        </div>
            <h1 className="sideNav-item">hi</h1>
            <h1 className="sideNav-item">SignUp</h1>
            <h1 className="sideNav-item">SignUp</h1>
            <h1 className="sideNav-item">Login</h1>
            <h1 className="sideNav-item">About US</h1>
            <h1 className="sideNav-item">Add Card</h1>
            <h1 className="sideNav-item">Test Mode</h1>
        </div>
    )
}

export default SideNav