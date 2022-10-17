import React from 'react';
import {Side, SideContainer, ImgSide, IconSide, SideItems, SideList} from './Sidebarstyles';
import iconHamburguer from '../../assets/icons/iconHamburguer.svg';



const Sidebar = () => {

    return (

        <Side>
            
            <SideContainer className="Icono">
            {/* <img style={{width: '40px', marginRight: '20px', marginLeft: '120px', marginTop: '-20px'}} src={iconHamburguer} alt='iconmenu'/> */}
            <IconSide>
            <ImgSide src={iconHamburguer} alt='iconmenu'/>
            </IconSide>
                <SideItems className="Sidebar">
                    <SideList>inicio</SideList>   
                    <SideList>nosotros</SideList>
                    <SideList>servicios</SideList>
                    <SideList>eventos</SideList>
                    <SideList>contactenos</SideList>
                </SideItems>   
            </SideContainer>
        </Side>
    );
};
export default Sidebar;