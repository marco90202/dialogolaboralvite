import React from "react";
import iconCibertec from "../../assets/cibertec/icons/iconCibertec.svg";
import textCibertec from "../../assets/cibertec/icons/textCibertec.svg";
import portada from "../../assets/cibertec/icons/portada.png";
import {
  Header,
  ImgLogo,
  ImgText,
  ListBar,
  ItemList,
  BodyPhoto,
  PhotoPage,
} from "./styles";

const HeaderCibertec = () => {
  return (
    <>
      <Header>
        <ImgLogo src={iconCibertec} alt="iconCibertec" />
        <ImgText src={textCibertec} alt="textCibertec" />
        <ListBar>
          <ItemList>servicios</ItemList>
          <ItemList> contacto</ItemList>
        </ListBar>
      </Header>
      <BodyPhoto>
        <PhotoPage src={portada} alt="portada" />
      </BodyPhoto>
    </>
  );
};
export default HeaderCibertec;
