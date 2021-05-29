import Wildlife from "../img/Wildlife.png";

import styled from "styled-components";

    

const Nav = styled.nav` 
    background-color: ${window.onscroll};
    margin-top: -5px;
    width: 100%; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    
    a{
        color: white;
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => (props.open ? '#4e3620':'none')};
        
    ul.menu {    
        width: 100%; 
        display: flex;
        flex-direction: column;
        transform: ${props => (props.open ? "translateY(0);" : "translateY(-100%)")};
        opacity: ${props => (props.open ? 1 : 0)};
        transition: all 0.3s linear;
    }
    li{
        width: 100%;
        text-align:center;
        font-size:1.1rem;
    }
  }
  `     
const NavBar = ({ open }) => {
       
        if (window.screen.width < 768) 
        return (
            <Nav open={open} style>                        
            <ul className="menu" data-animation="diagonal">
            <div className="logo">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
            </div>
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
      if(window.screen.width > 768){
      window.onscroll = function () {  
        var element = document.getElementById("nav");
        if(window.scrollY>=200){
            element.style.backgroundColor='#4e3620';
            
        }
        if(window.scrollY < 200) {
            element.style.backgroundColor='';
        }
      }
      return (        
        <Nav open={open} id="nav" className="">  
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
}
export default NavBar;