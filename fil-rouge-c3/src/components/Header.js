
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import panier from "./images/panier.png";

export default function Header() {
    return(
        <>
        <div id="header">
            <div id="header-logo">
                <img src={logo} alt="logo" width="70" height="70"></img>
            </div>
            <div id="header-right">
                <div class="text-style1">
                    
                    <p><Link to="./Acceuil">Home</Link></p></div>
                <div class="text-style1">
                    <p><Link to="./Boutique">Boutique</Link></p></div>
                <div class="panier">
                    <img src={panier} alt="panier" width="70" height="70"></img>
                </div>
            </div>
            
        </div>
        </>
    );
}