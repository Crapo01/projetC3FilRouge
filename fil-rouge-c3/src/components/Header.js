
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import panier from "./images/panier.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";



export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false); console.log("Closed") };
    const handleShow = () => { setShow(true); console.log("Open") }

    const onSumUp = 13

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
                    <div className="panier" onClick={handleShow}>
                        <img src={panier} alt="panier" width="70" height="70"></img>
                    </div>
                    <div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>PANIER</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="text-center">Woohoo, you are reading this text in a modal!

                            </Modal.Body>
                            <Modal.Footer >
                                <div >
                                <div>
                                    TOTAL: {onSumUp}
                                </div>
                                <div>  
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                </div> 
                                <div>   
                                    
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </div>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

            </div>
        </>
    );
}