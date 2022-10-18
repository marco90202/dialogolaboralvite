import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Button, Container, Menu, Menu_items, Menu_li, Logo } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Menu>
        <Logo>dialogo laboral</Logo>

        <Menu_items>
          <Menu_li>
            <Link to="/">inicio</Link>
          </Menu_li>
          <Menu_li>
            <Link to="/about">nosotros</Link>
          </Menu_li>
          <Menu_li>
            <Link to="/services">servicios</Link>
          </Menu_li>
          <Menu_li>
            <Link to="/events">eventos</Link>
          </Menu_li>
          <Menu_li>
            <Link to="/contacts">contactenos</Link>
          </Menu_li>
        </Menu_items>
        <Sidebar />
      </Menu>
    </Container>
  );
};
export default Header;
