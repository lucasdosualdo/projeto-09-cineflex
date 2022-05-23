import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Films from './films/Films';
import Sessions from './sessions/Sessions';
import Seats from "./seats/Seats";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Films />}/>
                <Route path="/sessoes/:idFilme" element={<Sessions />}/>
                <Route path="/assentos/:idSessions" element = {<Seats />}/>
            </Routes>
        </BrowserRouter>
    )
}