import React, { useState } from "react";
import { Link,Routes,Route, useSearchParams } from "react-router-dom";
import SideNav from "./SideNav";
const Header = () => {

    const [sideNav,setSideNav] = useState(false)

    const toggleSideNav = () => {
        sideNav ? (setSideNav(false)) : (setSideNav(true))
    }

    return (
        <div id="header">
           <Link>
                <img src="https://www.shutterstock.com/image-vector/brain-lightning-bolt-icon-logo-600w-1430053865.jpg"></img>
           </Link>
           <input placeholder="Search"></input>
           {sideNav ? <SideNav toggleSideNav={toggleSideNav} SideNav={sideNav}/>:<img onClick={toggleSideNav} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></img>}
        </div>
    )
}

export default Header