import React from "react";
import iconCell from "../../assets/cibertec/icons/iconCell.svg";
import iconPhone from "../../assets/cibertec/icons/iconPhone.svg";
import photoInfo from "../../assets/cibertec/icons/photoInfo.png";
import {
  ContainerInfo,
  ContentInfo,
  ContentCell,
  Title,
  Text,
  PhotoInfo,
  IconCell,
  ButtonWrite,
  ContentPhone,
  IconPhone,
  ButtonPhone,
} from "./stylesInfo";

const InfoCibertec = () => {
  return (
    <ContainerInfo>
      <ContentInfo>
        <ContentCell>
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
            <ButtonWrite type="button" value="ESCRIBENOS" />
          </div>
        </ContentCell>
        <ContentPhone>
          <div style={{ display: "flex" }}>
            <IconPhone src={iconPhone} alt="iconPhone" />

            <Title>Teléfono</Title>
          </div>
          <Text>
            Llámanos al 611 4999 Opción 1 <br />
            para resolver tus dudas o consultas.
          </Text>
          <ButtonPhone type="button" value="LLAMAR" />
        </ContentPhone>
        '
      </ContentInfo>
      <PhotoInfo src={photoInfo} alt="photInfo" />
    </ContainerInfo>
  );
};
export default InfoCibertec;
