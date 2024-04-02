
export default function Produit() {
    return (

        <>
            {/* TODO: Rendre la fiche produit dynamique */}
            {/* HEADER*/}
            
            <div className="content">
                <div>
                    <img src="images/produit1.jpg" alt="produit1" width={300} height={300} />
                </div>
                <div className="table">
                    <div className="text-style1" style={{ marginTop: 10 }}>
                        Nom produit
                    </div>
                    <div className="text-style3" style={{ marginTop: 10 }}>
                        XX €
                    </div>
                    <div className="text-style4" style={{ marginTop: 10 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
        </>


    );
}