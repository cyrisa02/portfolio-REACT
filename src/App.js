import React from "react";
// import {Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Liens from "./pages/Liens";
import Presentation from "./pages/Presentation";
import {Script1,Script2,Script3,Script4} from "./pages/Scripts";
import Studi from "./pages/Studi";
import Cybersecurite from "./pages/Cybersecurite";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cybersecurite" element={<Cybersecurite/>}/>
      <Route path="/presentation" element={<Presentation/>}/>
      <Route path="/script-1" element={<Script1/>}/>
      <Route path="/script-2" element={<Script2/>}/>
      <Route path="/script-3" element={<Script3/>}/>
      <Route path="/script-4" element={<Script4/>}/>


      <Route path="/studi" element={<Studi/>}/>
      <Route path="/liens" element={<Liens/>}/>
      
      
    </Routes>
  );
};

export default App;