import { Link } from "react-router-dom";
import Carroussel from "./Carroussel";

export default function Acceuil() {
    return(
        <>
        <Carroussel></Carroussel>
        
                        
            <div class="text-style2"><Link to="/Boutique">VOIR LA BOUTIQUE</Link></div>
        
        </>
    );
}