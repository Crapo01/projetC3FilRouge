import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ProduitCard({ item }) {
    const image = require(`${item.image}`);
    const dataToPass = { name: 'John Doe', age: 25 };
    return (

        <>
        
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <input type="number" id="qte" defaultValue={1} />
                        <Button variant="warning">AJOUTER AU PANIER</Button>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
           
        </>


    );
}