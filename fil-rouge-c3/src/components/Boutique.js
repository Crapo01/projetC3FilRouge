import { useState } from "react";
import itemsList from "./datas/products.json";
import ProduitCard from "./ProduitCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Boutique() {
    // state (data)
    const products = itemsList;
    const [filterAll, setFilterAll] = useState(true);
    const [filterBlanc, setFilterBlanc] = useState(false);
    const [filterNoir, setFilterNoir] = useState(false);
    const [filterLait, setFilterLait] = useState(false);
    const [filterLiqueur, setFilterLiqueur] = useState(false);
    const [filterNoix, setFilterNoix] = useState(false);
    const [filterCaramel, setFilterCaramel] = useState(false);
    const [filterFruit, setFilterFruit] = useState(false);

    const [filterNoteMin, setFilterNoteMin] = useState(1);
    const [filterNoteMax, setFilterNoteMax] = useState(5);
    const [filterPriceMin, setFilterPriceMin] = useState("");
    const [filterPriceMax, setFilterPriceMax] = useState("");
    const filteredProducts = products.filter((product) =>
    (
        filterAll ||
            (
                ((filterBlanc && product.category.blanc === true)) ||
                ((filterLait && product.category.lait === true)) ||
                ((filterLiqueur && product.category.liqueur === true)) ||
                ((filterNoix && product.category.noix === true)) ||
                ((filterCaramel && product.category.caramel === true)) ||
                ((filterFruit && product.category.fruit === true)) ||
                ((filterNoir && product.category.noir === true))
            )
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
            setFilterBlanc(false);
            setFilterNoir(false);
            setFilterLait(false);
            setFilterLiqueur(false);
            setFilterCaramel(false);
            setFilterFruit(false);
            setFilterNoix(false);
            setFilterNoteMin(1);
            setFilterNoteMax(5);
            setFilterPriceMin("");
            setFilterPriceMax("");
        }

    }
    //rendering
    return (
        <>
            <Container fluid className="content ">
                <Row>
                    <Col md={4} >
                        <div className="h4">FILTRES</div>
                        <div className="filter">
                            <div className="text-style3">Catégories</div>
                            <div className="zone-filtre ">
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
                                                <input onChange={(e) => setFilterPriceMin(e.target.value)} min={0} type="number" id="prix-min" value={filterPriceMin} />
                                            </div>
                                            <div>
                                                <span className="text-style4">Prix max</span>
                                                <input onChange={(e) => setFilterPriceMax(e.target.value)} min={0} type="number" id="prix-max" value={filterPriceMax} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                            </div>
                        </div>
                    </Col>
                    <Col md={8} >
                        <Row className="justify-content-evenly">
                            <Col xs={12} className="d-flex justify-content-evenly border flex-grow-1"></Col>
                            {filteredProducts.map((item) => (
                                <Col md={6} lg={4} className="d-flex justify-content-evenly " key={item.id}>
                                    <ProduitCard item={item} />
                                </Col>

                            ))}
                            {filteredProducts.length === 0 && <Col md={4} className="d-flex justify-content-evenly h1">NO RESULTS FOUND</Col>}



                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}