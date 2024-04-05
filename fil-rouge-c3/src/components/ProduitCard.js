import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function ProduitCard({ item }) {
    const image = require(`${item.image}`);
    
    return (

        <>
        
        
                <Card className="m-3" style={{ width: '18rem' }}>
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
                        <input type="number" id="qte" defaultValue={1} />
                        <Button variant="warning">AJOUTER AU PANIER</Button>
                        
                    </Card.Body>
                </Card>
        
        </>


    );
}