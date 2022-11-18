import React from "react";
import { Content, TextOne, TextTwo, Button } from "./stylesAbout";

const AboutCibertec = () => {
  return (
    <Content>
      <TextOne>
        <b>
          Conoce todos los Servicios digitales <br />
          que tenemos para ti.
        </b>
      </TextOne>
      <TextTwo>
        Ponemos a tu alcance toda la información <br />
        que necesitas para iniciar y continuar tus <br />
        estudios de manera óptima y <br />
        personalizada. Para ello, te brindamos la <br />
        <b>información para el estudiante. </b>
      </TextTwo>
      <Button type="button" value="ingresar">
        INGRESAR
      </Button>
    </Content>
  );
};

export default AboutCibertec;
