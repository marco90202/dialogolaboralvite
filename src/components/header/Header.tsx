import React from 'react';
import {Button, Container, Menu, Menu_items, Menu_li, Logo} from './styles';
import hamburguerMenu from '../../assets/icons/hamburgerMenu.svg';

const Header = () => {


    return(
       
            <Container>
                <Menu>
                    <Logo>dialogo laboral</Logo>
                    <img className="Icono"style={{width: '40px', marginRight: '20px'}} src={hamburguerMenu} alt='iconmenu'/>
                        <Menu_items>
                                <Menu_li>inicio</Menu_li>
                                <Menu_li>nosotros</Menu_li>
                                <Menu_li>servicios</Menu_li>
                                <Menu_li>eventos</Menu_li>
                                <Menu_li>contactenos</Menu_li>
                        </Menu_items>
                </Menu>
            </Container>
        
    )
}
export default Header