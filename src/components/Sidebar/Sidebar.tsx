import React from "react";
import { Link } from "react-router-dom";
import {
  Side,
  SideContainer,
  ImgSide,
  IconSide,
  SideItems,
  SideList,
} from "./Sidebarstyles";
import iconHamburguer from "../../assets/icons/iconHamburguer.svg";

const Sidebar = () => {
  return (
    <Side>
      <SideContainer className="Icono">
        {/* <img style={{width: '40px', marginRight: '20px', marginLeft: '120px', marginTop: '-20px'}} src={iconHamburguer} alt='iconmenu'/> */}
        <IconSide>
          <ImgSide src={iconHamburguer} alt="iconmenu" />
        </IconSide>
        <SideItems className="Sidebar">
          <SideList>
            <Link to="/">inicio</Link>
          </SideList>
          <SideList>
            <Link to="/about">nosotros</Link>
          </SideList>
          <SideList>
            <Link to="/services">servicios</Link>
          </SideList>
          <SideList>
            <Link to="/events">eventos</Link>
          </SideList>
          <SideList>
            <Link to="/contacts">contactenos</Link>
          </SideList>
        </SideItems>
      </SideContainer>
    </Side>
  );
};
export default Sidebar;
