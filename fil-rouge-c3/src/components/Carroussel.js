import { Link } from "react-router-dom";
import acceuil1 from "./images/accueil1.jpg"
import acceuil2 from "./images/accueil2.jpg"
import acceuil3 from "./images/accueil3.jpg"



import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Carroussel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="position-relative">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="img-fluid" src={acceuil1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={acceuil2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={acceuil3} alt="" />
        </Carousel.Item>
      </Carousel>
      <div className="btn btn-dark text-style2 position-absolute top-50 start-50 translate-middle"><Link to="/Boutique" className = "text-light">VOIR LA BOUTIQUE</Link></div>
    </div>
  );
}

export default Carroussel;
