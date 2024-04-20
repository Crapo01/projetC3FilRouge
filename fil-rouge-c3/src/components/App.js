import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Boutique from './Boutique';
import Acceuil from './Acceuil';
import Produit from './Produit';
import Header from './Header';
function App() {
  return <div>
    <Header />
    <Routes>
      
      <Route path="/" element={<Acceuil />} />
      <Route path="/Boutique" element={<Boutique/>} />
      <Route path="/Produit" element={<Produit />} />
    </Routes>
  </div>
}

export default App;




