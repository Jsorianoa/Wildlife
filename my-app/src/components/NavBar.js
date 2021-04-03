import React from 'react'
import Wildlife from "../img/Wildlife.png";

import styled from "styled-components";

const Nav = styled.nav` 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        
    ul.menu {    
        width: 100%; 
        display: flex;
        flex-direction: column;
        transform: ${props => (props.open ? "translateX(0);" : "translateX(-100%)")};
        opacity: ${props => (props.open ? 1 : 0)};
        transition: all 0.3s linear;
    }
    li{
        text-align:center;
    }
  }
  `
    

function NavBar ({ open }) {
    return (        
        <Nav open={open}>           
            <div className="logo">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
            </div>
            <ul class="menu" data-animation="diagonal">
                <li>
                    <a href="#0">
                        Noticias
                        <span className="border border-top"></span>
                        <span className="border border-right"></span>
                        <span className="border border-bottom"></span>
                        <span className="border border-left"></span>
                    </a>
                </li>

                <li>
                    <a href="#0">
                        Nosotros
                        <span className="border border-top"></span>
                        <span className="border border-right"></span>
                        <span className="border border-bottom"></span>
                        <span className="border border-left"></span>
                    </a>
                </li>
                <li>
                    <a href="#0">
                        Contacto
                        <span className="border border-top"></span>
                        <span className="border border-right"></span>
                        <span className="border border-bottom"></span>
                        <span className="border border-left"></span>
                    </a>
                </li>  
            </ul>   
        </Nav>
            
    )
}
export default NavBar;