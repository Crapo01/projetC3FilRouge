import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';


export default function ProduitCard({ item }) {
    const image = item.image;    
    const [qte,setQte]=useState(1);    

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
                        <input type="number" min={1} id="qte" value={qte} onChange={(e)=>e.target.value>0?setQte(e.target.value):setQte(1)}/>
                        <CartButton item={item} qte={qte}></CartButton>
                    </Card.Body>
                </Card>
        
        </>


    );
}