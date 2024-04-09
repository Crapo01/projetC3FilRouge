import { useEffect, useState } from "react";
import itemsList from "./datas/products.json";
import ProduitCard from "./ProduitCard";


export default function Boutique() {
    // state (data)
    const products = itemsList;
    const [filterAll, setFilterAll] = useState(true);
    const [filterBlanc, setFilterBlanc] = useState(true);
    const [filterNoir, setFilterNoir] = useState(true);
    const [filterLait, setFilterLait] = useState(true);
    const [filterLiqueur, setFilterLiqueur] = useState(true);
    const [filterNoix, setFilterNoix] = useState(true);
    const [filterCaramel, setFilterCaramel] = useState(true);
    const [filterFruit, setFilterFruit] = useState(true);

    const [filterNoteMin, setFilterNoteMin] = useState(1);
    const [filterNoteMax, setFilterNoteMax] = useState(5);
    const [filterPriceMin, setFilterPriceMin] = useState("");
    const [filterPriceMax, setFilterPriceMax] = useState("");

    const filteredProducts = products.filter((product) =>

        (
            ((filterBlanc && product.category.blanc === true)) ||
            ((filterLait && product.category.lait === true)) ||
            ((filterLiqueur && product.category.liqueur === true)) ||
            ((filterNoix && product.category.noix === true)) ||
            ((filterCaramel && product.category.caramel === true)) ||
            ((filterFruit && product.category.fruit === true)) ||
            ((filterNoir && product.category.noir === true))
        )
        &&
        (product.note >= filterNoteMin) &&
        (product.note <= filterNoteMax) &&
        (filterPriceMin === '' || product.price >= parseFloat(filterPriceMin)) &&
        (filterPriceMax === '' || product.price <= parseFloat(filterPriceMax))

    )



    // behaviour (functions)
    function resetFilter(e) {
        console.log(e);
        setFilterAll(e);
        if (e) {
            setFilterBlanc(true);
            setFilterNoir(true);
            setFilterLait(true);
            setFilterLiqueur(true);
            setFilterCaramel(true);
            setFilterFruit(true);
            setFilterNoix(true);
            setFilterNoteMin(1);
            setFilterNoteMax(5);
            setFilterPriceMin("");
            setFilterPriceMax("");
        }

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
                            <input onChange={(e) => resetFilter(e.target.checked)} type="checkbox" id="ch-all" checked={filterAll} />
                            <label htmlFor="ch-all" className="text-style4">
                                Tous
                            </label>
                        </div>

                        <form onChange={() => setFilterAll(false)}>


                            <div>
                                <input onChange={(e) => setFilterBlanc(e.target.checked)} type="checkbox" id="ch-chocolat-blanc" checked={filterBlanc} />
                                <label htmlFor="ch-chocolat-blanc" className="text-style4">
                                    Chocolat blanc
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterLait(e.target.checked)} checked={filterLait} type="checkbox" id="ch-chocolat-lait" />
                                <label htmlFor="ch-chocolat-lait" className="text-style4">
                                    Chocolat au lait
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterNoir(e.target.checked)} checked={filterNoir} type="checkbox" id="ch-chocolat-noir" />
                                <label htmlFor="ch-chocolat-noir" className="text-style4">
                                    Chocolat noir
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterNoix(e.target.checked)} checked={filterNoix} type="checkbox" id="ch-noix" />
                                <label htmlFor="ch-noix" className="text-style4">
                                    Noix/Noisette
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterFruit(e.target.checked)} checked={filterFruit} type="checkbox" id="ch-fruit" />
                                <label htmlFor="ch-fruit" className="text-style4">
                                    Fruit
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterCaramel(e.target.checked)} checked={filterCaramel} type="checkbox" id="ch-caramel" />
                                <label htmlFor="ch-caramel" className="text-style4">
                                    Caramel
                                </label>
                            </div>
                            <div>
                                <input onChange={(e) => setFilterLiqueur(e.target.checked)} checked={filterLiqueur} type="checkbox" id="ch-liqueur" />
                                <label htmlFor="ch-liqueur" className="text-style4">
                                    Liqueur
                                </label>
                            </div>
                            <div className="text-style3">Prix</div>
                            <div className="zone-filtre">
                                <div>
                                    <div>
                                        <span className="text-style4">Prix min</span>
                                        <input onChange={(e) => setFilterPriceMin(e.target.value)} type="number" id="prix-min" value={filterPriceMin} />
                                    </div>
                                    <div>
                                        <span className="text-style4">Prix max</span>
                                        <input onChange={(e) => setFilterPriceMax(e.target.value)} type="number" id="prix-max" value={filterPriceMax} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-style3">Notes</div>
                            <div className="zone-filtre">
                                <div>
                                    <div>
                                        <span className="text-style4">Note min</span>
                                        <select onChange={(e) => setFilterNoteMin(e.target.value)} value={filterNoteMin} >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                    <div>
                                        <span className="text-style4">Note max</span>
                                        <select onChange={(e) => setFilterNoteMax(e.target.value)} value={filterNoteMax}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <ul>
                        {filteredProducts.map((item) => (
                            <li key={item.id}>
                                <ProduitCard item={item} />
                            </li>

                        ))}

                    </ul>
                </div>
            </div>

        </>
    );
}