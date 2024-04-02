import facebook from "./images/logo-facebook.png"
import instagram from "./images/logo-instagram.jpeg"
import twitter from "./images/logo-twitter.png"
export default function Footer(){
    return(
        <div id="footer">
            <div id="informations">
                <div class="text-style3">Choco pap</div>
                <div class="text-style4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            </div>
            <div id="contact">
                <div class="text-style3">Contact</div>
                <div class="text-style4">Adresse : 51 rue du chocolat 75000 Paris Téléphone: 01 23 45 67 89
                    Horaires: 9h00-17h00 du Lundi au vendredi</div>
            </div>
            <div id="social-network">
                <div><img src={facebook} width="40" height="40" alt="facebook"></img></div>
                <div><img src={instagram} width="40" height="40" alt="instagram"></img></div>
                <div><img src={twitter} width="40" height="40" alt="twitter"></img></div>
            </div>
        </div>
    )
}