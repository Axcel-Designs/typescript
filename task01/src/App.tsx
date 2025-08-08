import React from 'react';
import './App.css';
import ClickExample from './component/ClickExample';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Cloth from './pages/Cloth';
import ClothSlug from './pages/ClothSlug';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopId from './pages/ShopId';
import Header from './component/header/Header';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/cloth/:slug" element={<ClothSlug />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopId />} />
        <Route path="*" element={<ClickExample />} />
      </Routes>
    </>
  );
}

export default App;
