import React, { useEffect } from "react";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
const App = () => {

  return (
    <Router>
        <MainContainer/>
    </Router>
  );
  <Routes>
    <Route path="/login" element={login} ></Route>
  </Routes>
};

export default App;