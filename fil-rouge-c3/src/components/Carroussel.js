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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={acceuil1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={acceuil2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={acceuil3} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carroussel;
