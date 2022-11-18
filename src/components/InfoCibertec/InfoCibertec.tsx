import React from "react";
import iconCell from "../../assets/cibertec/icons/iconCell.svg";
import iconPhone from "../../assets/cibertec/icons/iconPhone.svg";
import photoInfo from "../../assets/cibertec/icons/photoInfo.png";
import {
  ContainerInfo,
  Title,
  Text,
  PhotoInfo,
  IconCell,
  IconPhone,
} from "./stylesInfo";

const InfoCibertec = () => {
  return (
    <ContainerInfo>
      <div style={{ display: "flex" }}>
        <div style={{ paddingTop: "30px", paddingLeft: "64px" }}>
          <div style={{ display: "flex" }}>
            <IconCell src={iconCell} alt="iconCell" />
            <Title>Whatsapp</Title>
          </div>
          <div>
            <Text>
              Comunícate a nuestro número de WhatsApp donde podremos atender tus
              consultas.
            </Text>
            <Text>
              Horario: <br />
              Lunes a viernes de 8 am a 8 pm Sábados de 8 am a 1 pm
            </Text>
            <input
              style={{
                padding: "8px",
                width: "160px",
                height: "48px",
                border: "1px solid #FFFFFF",
                borderRadius: "28px",
                background: "#0075b0",
                color: "#ffffff",
                marginLeft: "40px",
              }}
              type="button"
              value="ESCRIBENOS"
            />
          </div>
        </div>
        <div
          style={{
            paddingTop: "30px",
            paddingLeft: "42px",
            margin: "0px",
          }}
        >
          <div style={{ display: "flex" }}>
            <IconPhone src={iconPhone} alt="iconPhone" />

            <Title>Teléfono</Title>
          </div>
          <Text>
            Llámanos al 611 4999 Opción 1 <br />
            para resolver tus dudas o consultas.
          </Text>
          <input
            style={{
              padding: "8px",
              width: "160px",
              height: "48px",
              border: "1px solid #FFFFFF",
              borderRadius: "28px",
              background: "#0075b0",
              color: "#ffffff",
              marginLeft: "40px",
              marginTop: "86px",
            }}
            type="button"
            value="LLAMAR"
          />
        </div>
        '
      </div>
      <PhotoInfo src={photoInfo} alt="photInfo" />
    </ContainerInfo>
  );
};
export default InfoCibertec;
