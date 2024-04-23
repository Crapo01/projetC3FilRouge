import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import useLocalStorage from 'use-local-storage';


export default function CartItem({ item }) {
    const image =item.image;
    const [cartItems, setcartItems] = useLocalStorage('items', 0);


    function handleChangeQty(q) {
        const tempArray = JSON.parse(cartItems)
        console.log(tempArray)
        console.log(item)
        const targetIndex = tempArray.findIndex(x => x.title === item.title)
        console.log("ChangeQty:")
        console.log(targetIndex)

        tempArray[targetIndex].quantity = q;
        setcartItems(JSON.stringify(tempArray));
    }

    function handleDelete() {
        const tempArray = JSON.parse(cartItems).filter(x => x.id !== item.id)
        tempArray.length === 0 ? setcartItems(0) : setcartItems(JSON.stringify(tempArray));

    }

    return (
        <>
            <Row className=" bg-light content m-3 border rounded align-content-center justify-content-between" style={{ height: '7rem' }}>
                <Col xs={2} className='align-content-center' onClick={handleDelete}>
                    <div className='btn btn-sm btn-outline-dark float-start'>X</div>
                </Col>
                <Col xs={4}md={4} className='align-content-center'>
                    <img src={image} alt='produit' className="m-1 " style={{ height: '3rem', width: 'auto' }} />
                </Col>
                <Col  className='align-content-center'>
                    <Col  className='align-content-center'>
                        {item.title}<br />
                        Prix: {item.price}
                    </Col>
                    <Col  className='align-content-center'>
                        <input width={'0.5rem'} type="number" min={1} id="qte" value={item.quantity} onChange={(e) => e.target.value > 0 ? handleChangeQty(e.target.value) : handleChangeQty(1)} />
                    </Col>
                </Col>
            </Row>
        </>
    );
}