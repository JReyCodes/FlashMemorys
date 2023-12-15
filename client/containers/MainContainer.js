import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "../components/Header";

const MainContainer = () => {
    return (

    <div id="maincontainer">
        <Header/>
        <h1 id="welcome-text">WELCOME !</h1>
        <Routes>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    </div>


    )
}

export default MainContainer