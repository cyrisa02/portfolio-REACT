import React from "react";
// import {Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Liens from "./pages/Liens";
import Presentation from "./pages/Presentation";
import Scripts from "./pages/Scripts";
import Studi from "./pages/Studi";
import Cybersecurite from "./pages/Cybersecurite";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cybersecurite" element={<Cybersecurite/>}/>
      <Route path="/presentation" element={<Presentation/>}/>
      <Route path="/scripts" element={<Scripts/>}/>
      <Route path="/studi" element={<Studi/>}/>
      <Route path="/liens" element={<Liens/>}/>

      
    </Routes>
  );
};

export default App;