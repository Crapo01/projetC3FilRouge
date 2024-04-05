import { useEffect, useState } from "react";
import itemsList from "./datas/products.json";
import ProduitCard from "./ProduitCard";


export default function Boutique() {
    // state (data)
    const [items, setItems] = useState(0);
    
    useEffect(handleGetDatas, [])
    // behaviour (functions)

    

    function handleGetDatas() {
        const tempList = [];
        itemsList.map(item => {
            return (
                tempList.push(                                      
                    
                        <ProduitCard key={item.id} item={item} />
                                        
                )
            )
        })
        setItems(tempList);
    }
    //rendering
    return (
        <>

            <div className="content">
                {/* FILTRES */}
                <div id="filter">
                    <div className="text-style3">Catégories</div>
                    <div className="zone-filtre">
                        <div>
                            <input type="checkbox" id="ch-all" />
                            <label htmlFor="ch-all" className="text-style4">
                                Tous
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-chocolat-blanc" />
                            <label htmlFor="ch-chocolat-blanc" className="text-style4">
                                Chocolat blanc
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-chocolat-lait" />
                            <label htmlFor="ch-chocolat-lait" className="text-style4">
                                Chocolat au lait
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-chocolat-noir" />
                            <label htmlFor="ch-chocolat-noir" className="text-style4">
                                Chocolat noir
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-noix" />
                            <label htmlFor="ch-noix" className="text-style4">
                                Noix/Noisette
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-fruit" />
                            <label htmlFor="ch-fruit" className="text-style4">
                                Fruit
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-caramel" />
                            <label htmlFor="ch-caramel" className="text-style4">
                                Caramel
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="ch-liqueur" />
                            <label htmlFor="ch-liqueur" className="text-style4">
                                Liqueur
                            </label>
                        </div>
                    </div>
                    <div className="text-style3">Prix</div>
                    <div className="zone-filtre">
                        <div>
                            <div>
                                <span className="text-style4">Prix min</span>
                                <input type="number" id="prix-min" />
                            </div>
                            <div>
                                <span className="text-style4">Prix max</span>
                                <input type="number" id="prix-max" />
                            </div>
                        </div>
                    </div>
                    <div className="text-style3">Notes</div>
                    <div className="zone-filtre">
                        <div>
                            <div>
                                <span className="text-style4">Note min</span>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div>
                                <span className="text-style4">Note max</span>
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* PRODUIT*/}
            <div className="content">{items}</div>
        </>
    );
}