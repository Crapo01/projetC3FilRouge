
export default function Produit({item}) {
    
 
    return (

        <>
            {/* TODO: Rendre la fiche produit dynamique */}
            {/* HEADER*/}
            {console.log({item})};
            <div className="content">
                <div>
                    <img src={item.image} alt={item.title} width={300} height={300} />
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
                    <input type="number" id="qte" defaultValue={1} />
                    <div className="text-style2" style={{ marginLeft: 10, marginTop: 10 }}>
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