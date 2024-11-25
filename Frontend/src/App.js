import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Myart from './components/Myart';
import Upload from './components/Upload';
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/user/signin" Component={Signin}/>
            <Route path="/user/signup" Component={Signup}/>
            <Route path="/myart" Component ={Myart}/>
            <Route path="/upload" Component ={Upload}/>
            <Route path="/gallery" Component ={Gallery}/>

        </Routes>
    </Router>
  );
}

export default App;
