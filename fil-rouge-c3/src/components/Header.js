
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import panier from "./images/panier.png";
import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import useLocalStorage from "use-local-storage";


export default function Header() {
    const [show, setShow] = useState(false);
    const [cartItemsTotal, setcartItemsTotal] = useLocalStorage('total',0);
    const handleClose = () => { setShow(false); console.log("Closed") };
    const handleShow = () => { setShow(true); console.log("Open") }

    function handleClearLocalStorage() {
        setcartItemsTotal(0)
    }

    return (
        <>

            <div id="header">
                <div id="header-logo">
                    <img src={logo} alt="logo" width="70" height="70"></img>
                </div>
                <div id="header-right">
                    <div className="text-style1">

                        <p><Link to="/">Home</Link></p></div>
                    <div className="text-style1">
                        <p><Link to="./Boutique">Boutique</Link></p></div>
                    <Button className=" m-2 panier bc-orange btn-warning" onClick={handleShow}>
                        <img src={panier} alt="panier" width="40" height="40"></img>
                        {cartItemsTotal}
                    </Button>
                    <div>
                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>PANIER</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div style={{ height: '85%', backgroundColor: 'lightgray', }} className="border border-3 border-dark rounded">

                                </div>
                                <div className="d-block m-1 float-end">
                                    <div>
                                        TOTAL: {cartItemsTotal}
                                    </div>
                                    <div className="m-2">
                                        <Button onClick={handleClearLocalStorage} className="bc-orange btn-warning" >Réintialiser le panier</Button>
                                    </div>
                                    <div className="m-2">
                                        <Button className="bc-orange btn-warning">Valider le panier</Button>
                                    </div>
                                </div>



                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>

            </div>
        </>
    );
}