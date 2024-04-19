
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import CartButton from './CartButton';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
export default function Produit() {
    const location = useLocation();
    const [qte, setQte] = useState(1);
    const item = location.state;
    const image = require(`${item.image}`);


    return (

        <>
            <Container className="content">
                
                    <Row className='justify-content-around'>

                        <Col md={2}>
                            <img src={image} alt={item.title} style={{ height: '10rem', width: 'auto' }} />
                        </Col>
                        <Col md={6} >
                            <div className="text-style1" style={{ marginTop: 10 }}>
                                {item.title}
                            </div>
                            <div className="text-style3" style={{ marginTop: 10 }}>
                                {item.price}
                            </div>
                            <div className="text-style4" style={{ marginTop: 10 }}>
                                {item.description}
                            </div>
                            <input type="number" min={1} id="qte" defaultValue={qte} onChange={(e) => e.target.value > 0 ? setQte(e.target.value) : setQte(1)} />
                            <CartButton item={item} qte={qte}></CartButton>
                        </Col>
                        
                        
                        <div >
                            <div className="text-style1">Ingrédients</div>
                            <div>
                                {item.ingredients}
                            </div>
                        </div>
                        
                    </Row>
                
            </Container >
        </>
    );
}