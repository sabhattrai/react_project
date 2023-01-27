import React from "react";
import Nav from "./component/Nav";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Sign from "./pages/Sign";
function App() {
  return (
  <>
  <Nav/>
   <Routes>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Sign" element={<Sign/>}/>
  </Routes>
  </>
  );
}

export default App;
