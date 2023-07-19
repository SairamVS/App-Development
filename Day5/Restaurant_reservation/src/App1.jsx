import React from "react";
import {BrowserRouter, Route,Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Restaurant from "./Restaurant";
import Reserve from './Reservation'
export default function App1(){
    return(
        <BrowserRouter>
        <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Register" element={<Register/>}/>
                <Route exact path="/Restaurant" element={<Restaurant/>}/>
                <Route exact path="/Reserve" element={<Reserve/>}/>
        </Routes>
        </BrowserRouter>
    )
}
