
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage';
export default function Produit() {
    const location=useLocation();
    const [cartItemsTotal, setcartItemsTotal] = useLocalStorage('total',0);
    const [qte,setQte]=useState(1);
    const item=location.state;
    const image = require(`${item.image}`);

function handleAdd() {
    const total=parseInt(cartItemsTotal)+parseInt(qte);
    parseInt(qte)>0? setcartItemsTotal(total):alert("Le total des produits ne peut pas etre inferieur a 1");
}

    return (

        <> 
            <div className="content">
                <div>
                    <img src={image} alt={item.title} width={300} height={300} />
                </div>
                <div className="table">
                    <div className="text-style1" style={{ marginTop: 10 }}>
                        {item.title}
                    </div>
                    <div className="text-style3" style={{ marginTop: 10 }}>
                    {item.price}
                    </div>
                    <div className="text-style4" style={{ marginTop: 10 }}>
                        {item.description}
                    </div>
                    <input type="number" min={1} id="qte" defaultValue={qte}  onChange={(e)=>e.target.value>0?setQte(e.target.value):setQte(1)} />
                    <div onClick={(handleAdd)} className="text-style2" style={{ marginLeft: 10, marginTop: 10 }}>
                        AJOUTER AU PANIER
                    </div>
                </div>
            </div>
            <div className="content table">
                <div className="text-style1">Ingrédients</div>
                <div>
                {item.ingredients}
                </div>
            </div>
        </>


    );
}