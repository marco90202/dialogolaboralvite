import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Button, Container, Menu, Menu_items, Menu_li, Logo, } from './styles';

const Header = () => {


    return(
       
            <Container>
                <Menu>
                    <Logo>dialogo laboral</Logo>
                    
                        <Menu_items>
                                <Menu_li>inicio</Menu_li>
                                <Menu_li>nosotros</Menu_li>
                                <Menu_li>servicios</Menu_li>
                                <Menu_li>eventos</Menu_li>
                                <Menu_li>contactenos</Menu_li>
                        </Menu_items>
                    <Sidebar />
                </Menu>
                
            </Container>
        
    )
}
export default Header