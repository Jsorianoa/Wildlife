
import Wildlife from "../img/Wildlife.png";

import styled from "styled-components";

const Nav = styled.nav` 
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
                
    ul.menu {    
        width: 100%; 
        display: flex;
        flex-direction: column;
        transform: ${props => (props.open ? "translateY(0);" : "translateY(-100%)")};
        opacity: ${props => (props.open ? 1 : 0)};
        transition: all 0.3s linear;
    }
    li{
        text-align:center;
        font-size:1.1rem;
    }
  }
  `

const NavBar = ({ open }) => {
    return (        
        <Nav open={open}>           

            <div className="logo">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
            </div>
            <ul className="menu" data-animation="diagonal">
                <li>
                    <a href="#noticias">
                        Noticias
                        <span className="border border-bottom"></span>

                    </a>
                </li>

                <li>
                    <a href="#nosotros">
                        Nosotros
                        <span className="border border-bottom"></span>
                    </a>
                </li>
                <li>
                    <a href="#contacto">
                        Contacto
                        <span className="border border-bottom"></span>
                    </a>
                </li>
            </ul>
        </Nav>

    )
}
export default NavBar;