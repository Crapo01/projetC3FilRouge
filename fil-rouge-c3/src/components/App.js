import Acceuil from "./Acceuil";
import Boutique from "./Boutique";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import Produit from "./Produit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import logo from "./images/logo.png";
import panier from "./images/panier.png";
import { Carousel } from "bootstrap";
function App() {
  // state (data)


  // behaviour (functions)

  // rendering
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Boutique" element={<Boutique />}>
            <Route path="./Carroussel" element={<Carousel />}/>
          </Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )

}

export default App;
