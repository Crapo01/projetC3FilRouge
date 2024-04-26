import useLocalStorage from 'use-local-storage';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';

export default function CartButton({ item, qte }) {

    const [cartItems, setcartItems] = useLocalStorage('items', 0);
    const [show, setShow] = useState(false);

    function handleAdd() {
        const itemToAdd =
        {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            quantity: qte
        }

        const tempArray = JSON.parse(cartItems) === 0 ? [] : [...JSON.parse(cartItems)];
        const alreadyInCartIndex = tempArray.findIndex(x => x.id === itemToAdd.id)
        console.log("check:alreadyInCart");
        console.log(alreadyInCartIndex);
        alreadyInCartIndex !== -1 ? tempArray[alreadyInCartIndex].quantity = parseInt(qte) + parseInt(tempArray[alreadyInCartIndex].quantity) : tempArray.push(itemToAdd)
        setcartItems(JSON.stringify(tempArray));
        setShow(true)
    }

    return (
        <>
            <>
                <Button variant="warning" className='m-2' onClick={(handleAdd)}>AJOUTER AU PANIER</Button>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">info: article ajouté au panier</strong>
                    </Toast.Header>

                </Toast>
            </>
        </>
    );
}