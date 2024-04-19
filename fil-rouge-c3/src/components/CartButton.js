import useLocalStorage from 'use-local-storage';
import Button from 'react-bootstrap/Button';

export default function CartButton({ item,qte }) {
    
    const [cartItems, setcartItems] = useLocalStorage('items',0);
    

    function handleAdd() {        
        const itemToAdd =             
            {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: qte
            }
        
        const tempArray=JSON.parse(cartItems)===0?[]:[...JSON.parse(cartItems)];
        const alreadyInCartIndex =tempArray.findIndex(x=>x.id === itemToAdd.id)
        console.log("check:alreadyInCart");
        console.log(alreadyInCartIndex);
        alreadyInCartIndex !==-1?tempArray[alreadyInCartIndex].quantity = parseInt(qte)+parseInt(tempArray[alreadyInCartIndex].quantity):tempArray.push(itemToAdd)        
        setcartItems(JSON.stringify(tempArray));
    }

    return (
        <>
            <Button variant="warning" className='m-2' onClick={(handleAdd)}>AJOUTER AU PANIER</Button>
        </>
    );
}