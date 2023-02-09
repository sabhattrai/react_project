import React from "react";
import Nav from "./component/Nav";
import {Routes, Route} from "react-router-dom"
import Getstart from "./pages/Getstart"
import Home from "./pages/Home";
import Sign from "./pages/Sign";
function App() {
  return (
  <>
  <Nav/>
   <Routes>
    <Route path="/getstart" element={<Getstart/>}/>
    <Route path="/Sign" element={<Sign/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </>
  );
}

export default App;
