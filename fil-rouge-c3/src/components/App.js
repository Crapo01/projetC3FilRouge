import Acceuil from "./Acceuil";
import Boutique from "./Boutique";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import Produit from "./Produit";

import {
  BrowserRouter,  
  Route,
  Routes,
  
} from "react-router-dom";




function App() {
  // state (data)


  // behaviour (functions)

  // rendering
  return (
    <>
      <BrowserRouter basename="/">
        <Header></Header>
        <Routes>
          
          <Route path="/" element={<Acceuil />}/>
          
          <Route path="Boutique" element={<Boutique />}/>
          <Route path="Produit" element={<Produit />}/>
          
            
          
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )

}

export default App;
