import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';


export default function ProduitCard({ item }) {
    const image = require(`${item.image}`);
    const [cartItemsTotal, setcartItemsTotal] = useLocalStorage('total',0);
    const [qte,setQte]=useState(1);

    function handleAdd() {
        const total=parseInt(cartItemsTotal)+parseInt(qte);
        parseInt(qte)>0? setcartItemsTotal(total):alert("Le total des produits ne peut pas etre inferieur a 1");
    }

    return (

        <>
        
        
                <Card className="m-1" style={{ width: '16rem', height: '30rem' }  }>
                <Link to="/Produit" state={item} className = "text-light">
                    <Card.Img variant="top" src={image} />
                </Link>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Prix: {item.price}
                        </Card.Text>
                        <Card.Text>
                            Note: {item.note}
                        </Card.Text>
                        <input type="number" min={1} id="qte" defaultValue={qte} value={qte} onChange={(e)=>e.target.value>0?setQte(e.target.value):setQte(1)}/>
                        <Button variant="warning" onClick={(handleAdd)}>AJOUTER AU PANIER</Button>
                        
                    </Card.Body>
                </Card>
        
        </>


    );
}