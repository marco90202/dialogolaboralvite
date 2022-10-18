import React from "react";
import { Carrusel } from "./Carouselstyles";

const Carousel = () => {
  return (
    <Carrusel>
      <ul>
        <li>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/904/487/small/abstract-curve-line-background-for-technology-design-work.jpg"
            alt="image1"
          />
        </li>
        <li>
          <img
            src="https://us.123rf.com/450wm/pockygallery/pockygallery1508/pockygallery150800311/43568762-cielo-azul-pol%C3%ADgono-resumen-de-antecedentes.jpg"
            alt="image2"
          />
        </li>
        <li>
          <img
            src="https://st.depositphotos.com/1701169/2868/i/600/depositphotos_28681641-stock-photo-illustration-of-a-blue-bar.jpg"
            alt="image3"
          />
        </li>
        <li>
          <img
            src="https://previews.123rf.com/images/buriy/buriy1008/buriy100800028/7511128-design-%C3%A9l%C3%A9gant-beau-fond-pour-votre-conception.jpg"
            alt="image4"
          />
        </li>
      </ul>
    </Carrusel>
  );
};
export default Carousel;
