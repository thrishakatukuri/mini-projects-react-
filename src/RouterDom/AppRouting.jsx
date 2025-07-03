import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Parts/Header';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import { Registor } from '../Features/Authentication/Register';

const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/Home"    element={<Home />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    <Route path="/About"   element={<About />}/>
                    <Route path="/"        element={<Registor />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export { AppRouting };