import React from "react";
/* import Header from "../components/header/Header";
import Content from "../components/content/Content"; */
import HeaderCibertec from "../components/HeaderCibertec/HeaderCibertec";
import AboutCibertec from "../components/AboutCibertec/AboutCibertec";
import CardCibertec from "../components/CardCibertec/CardCibertec";
import InfoCibertec from "../components/InfoCibertec/InfoCibertec";
import FooterCibertec from "../components/FooterCibertec/FooterCibertec";

const About = () => {
  return (
    <div>
      <HeaderCibertec />
      <div style={{ display: "flex" }}>
        <AboutCibertec />
        <CardCibertec />
      </div>
      <div>
        <InfoCibertec />
      </div>
      <div>
        <FooterCibertec />
      </div>
      {/*  <Content>
        <div>estoy en nosotros</div>
      </Content> */}
    </div>
  );
};
export default About;
