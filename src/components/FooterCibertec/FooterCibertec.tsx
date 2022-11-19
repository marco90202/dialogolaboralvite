import React from "react";
import logoCibertec from "../../assets/cibertec/icons/LogoCibertec.png";
import { ContainerFooter, TextContact, TextDirection } from "./stylesFooter";
import iconFacebook from "../../assets/cibertec/icons/iconFacebook.png";
import iconYoutube from "../../assets/cibertec/icons/iconYoutube.png";
import iconLinkedin from "../../assets/cibertec/icons/iconLinkedin.png";
import iconInstagram from "../../assets/cibertec/icons/iconInstagram.png";
import iconTwitter from "../../assets/cibertec/icons/iconTwitter.png";
import iconHoja from "../../assets/cibertec/icons/iconHoja.png";
import textLaureate from "../../assets/cibertec/icons/textLaureate.png";
import iconUpc from "../../assets/cibertec/icons/iconUpc.png";
import textUpc from "../../assets/cibertec/icons/textUpc.png";
import iconBook from "../../assets/cibertec/icons/iconBook.png";
import iconWhatsapp from "../../assets/cibertec/icons/iconWhatsapp.png";

const FooterCibertec = () => {
  return (
    <ContainerFooter>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ marginTop: "30px" }}>
            <img
              style={{ paddingTop: "25px", paddingLeft: "74px" }}
              src={logoCibertec}
              alt="logoCibertec"
            />
          </div>
          <div
            style={{ display: "flex", paddingTop: "80px", paddingLeft: "50px" }}
          >
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li style={{ paddingRight: "5px" }}>
                <img src={iconFacebook} alt="facebbok" />
              </li>
              <li style={{ paddingLeft: "10px" }}>
                <img src={iconYoutube} alt="youtube" />
              </li>
              <li style={{ paddingLeft: "15px" }}>
                <img src={iconLinkedin} alt="linkedin" />
              </li>
              <li style={{ paddingLeft: "15px" }}>
                <img src={iconInstagram} alt="instagram" />
              </li>
              <li style={{ paddingLeft: "15px" }}>
                <img src={iconTwitter} alt="twitter" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul style={{ paddingLeft: "108px", paddingTop: "40px" }}>
            <TextContact>Mapa de sitio</TextContact>
            <TextContact>Políticas de privacidad</TextContact>
            <TextContact>Preguntas frecuentes</TextContact>
            <TextContact>Transparencia institucional</TextContact>
            <TextContact>Protocolo COVID-19</TextContact>
            <TextContact>Contáctanos</TextContact>
          </ul>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ paddingTop: "68px", paddingLeft: "108px" }}>
              <img
                style={{ paddingRight: "15px" }}
                src={iconHoja}
                alt="iconHoja"
              />
              <img src={textLaureate} alt="textLaureate" />
            </div>
            <div style={{ paddingTop: "72px", paddingLeft: "48px" }}>
              <img
                style={{ paddingRight: "15px" }}
                src={iconUpc}
                alt="iconUpc"
              />
              <img src={textUpc} alt="textUpc" />
            </div>
            <div style={{ paddingTop: "56px", paddingLeft: "48px" }}>
              <img src={iconBook} alt="iconBook" />
            </div>
          </div>
          <TextDirection>
            Instituto superior privado CIBERTEC S.A.C - 2021
            <br /> J. Uruguar 512 Lima
            <br />
            Todos los derechos reservados
          </TextDirection>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default FooterCibertec;
