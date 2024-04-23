import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Boutique from './Boutique';
import Acceuil from './Acceuil';
import Produit from './Produit';
import Header from './Header';
import Footer from './Footer';
function App() {
  return <div>
    <Header />
    <Routes>
      
      <Route path="/" element={<Acceuil />} />
      <Route path="/Boutique" element={<Boutique/>} />
      <Route path="/Produit" element={<Produit />} />
    </Routes>
    <Footer></Footer>
  </div>
}

export default App;




