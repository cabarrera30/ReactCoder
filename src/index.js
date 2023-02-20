import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/pages/Inicio';
import Ropa from './components/pages/Ropa';
import Zapatos from './components/pages/Zapatos';
import Accesorios from './components/pages/Accesorios';
import Carrito from './components/pages/Carrito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Ropa' element={<Ropa/>}/>
        <Route path='/Zapatos' element={<Zapatos/>}/>
        <Route path='/Accesorios' element={<Accesorios/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
