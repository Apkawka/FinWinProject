import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/static/style/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Payments from "./pages/payments/Payments";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/payments'} element={<Payments/>}/>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);