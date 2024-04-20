import { Link, Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import panier from "./images/panier.png";
import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import CartItem from "./CartItem";
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);
    const [itemsCount, setItemsCount]=useState(0);
    const [cartItems, setcartItems] = useLocalStorage('items', 0);
    const handleClose = () => { setShow(false); console.log("Closed") };
    const handleShow = () => { setShow(true); console.log("Open") }
    const handleTotalPrice = ()=>{
        let totalPrice
        let itemsTotalQty
        if (cartItems !==0){
            const parsedItems=JSON.parse(cartItems);
            const tempTotal=parsedItems.map((item)=>item.price*item.quantity)
            const tempItemsTotalQty=parsedItems.map((item)=>item.quantity)        
        totalPrice = tempTotal.reduce(sum,0)
        itemsTotalQty = tempItemsTotalQty.reduce(sum,0)
        }else{
            totalPrice=0
        }
        setTotal(totalPrice.toFixed(2));
        setItemsCount(itemsTotalQty);
    }
    useEffect(handleTotalPrice,[cartItems])

    function sum(total,num) {
        return(total+parseFloat(num))
    }

    function handleClearLocalStorage() {
        setcartItems(0)
        
    }

    return (
        <>
            <Container >
                <Navbar expand="lg" className="bc-orange">
                    <Container className="justify-content-between ">

                        <img src={logo} alt="logo" width="70" height="70"></img>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Container>
                    <Container >
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                            <Nav >
                                <div className="text-style1">
                                    <p className="float-end"><Link to="/">Home</Link></p>
                                </div>
                                <div className="ms-5 text-style1">
                                    <p className="float-end"><Link to="./Boutique">Boutique</Link></p>
                                </div>
                                <Button className="ms-5 panier bc-orange btn-warning" onClick={handleShow}>
                                    <span className="float-end m-3">{itemsCount}</span>
                                    <img src={panier} alt="panier" width="40" height="40" className="float-end"></img>
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
<Outlet/>

                <Offcanvas show={show} onHide={handleClose} placement="end" className="w-auto">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>PANIER</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <div style={{ height: '85%', backgroundColor: 'lightgray', }} className="overflow-auto border border-3 border-dark rounded">
                            {console.log(JSON.parse(cartItems))}
                            {console.log("checkArayLenght:")}
                            {console.log(JSON.parse(cartItems).length)}
                            {
                                JSON.parse(cartItems) !== 0
                                    ?
                                    JSON.parse(cartItems).map((i) => <CartItem key={i.id} item={i}></CartItem>)
                                    :
                                    <div>PANIER VIDE</div>}
                        </div>
                        <div className="d-block m-1 float-end">
                            <div>
                                TOTAL: {total} €
                            </div>
                            <div className="m-2">
                                <Button onClick={handleClearLocalStorage} className="bc-orange btn-warning" >Réintialiser le panier</Button>
                            </div>
                            <div className="m-2">
                                <Button className="bc-orange btn-warning" disabled >Valider le panier</Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    );
}