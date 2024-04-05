import Acceuil from "./Acceuil";
import Boutique from "./Boutique";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import Produit from "./Produit";

import {
  BrowserRouter as Router,  
  Route,
  Routes
} from "react-router-dom";



function App() {
  // state (data)


  // behaviour (functions)

  // rendering
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          
          <Route path="/" element={<Acceuil />}/>
          
          <Route path="/Boutique" element={<Boutique />}/>
          <Route path="/Produit" element={Produit}/>  
          
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )

}

export default App;
