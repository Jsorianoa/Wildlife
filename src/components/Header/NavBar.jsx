import Wildlife from "../img/Wildlife.png";
import styled from "styled-components";

    

const Nav = styled.nav` 
    background-color: ${window.onscroll};
    margin-top: -5px;
    width: 100%; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    z-index: 3000;
    transition: .6s;
    .logo {
        display: none;
    }
    a{
        color: white;
    }
    ul {
        height: 70px;
        display: flex;
        align-items: center;
        padding-right: 80px;
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${props => (props.open ? 'rgba(255, 255, 255, 0.5)':'none')};
        .logo {
        display: block;
        } 
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
    li a {
        color: #000;
    }
  }
  `     
const NavBar = ({ open }) => {
       
        if (window.screen.width < 768) {
        console.log("Hola")
        return (
            <Nav open={open} >                        
            <ul className="menu" data-animation="diagonal">
            <div className="logo">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
            </div>
                <li>
                    <a href="/nosotros">
                        Nosotros
                        <span className="border border-bottom"></span>
                    </a>
                </li>
                <li>
                    <a href="/servicios">
                        Servicios
                        <span className="border border-bottom"></span>
                    </a>
                </li>
                <li>
                    <a href="/noticias">
                        Noticias
                        <span className="border border-bottom"></span>
                    </a>
                </li>  
            </ul>   
        </Nav>
        )
    }
        if(window.screen.width > 768) {
        window.onscroll = function () {  
        let element = document.getElementById("nav");
        let letra1 = document.getElementById("noticias1");
        let letra2 = document.getElementById("noticias2");
        let letra3 = document.getElementById("noticias3");
        if(window.scrollY>=200 ){
            element.style.backgroundColor='rgba(255, 255, 255, 0.6)';
            letra1.style.color='#111';
            letra2.style.color='#111';
            letra3.style.color='#111';
            
        }
        if(window.scrollY < 200 ) {
            element.style.backgroundColor='';
            letra1.style.color='#fff';
            letra2.style.color='#fff';
            letra3.style.color='#fff';
        }
      }
      return (        
        <Nav open={open} id="nav" >             
            <ul className="menu" data-animation="diagonal">

                <li>
                    <a href="/nosotros" id="noticias2">
                        Nosotros
                        <span className="border border-bottom"></span>
                    </a>
                </li>
                <li>
                    <a href="/servicios" id="noticias1">
                        Servicios
                        <span className="border border-bottom"></span>
                        
                    </a>
                </li>
                <li>
                    <a href="/noticias" id="noticias3">
                        Noticias
                        <span className="border border-bottom"></span>
                    </a>
                </li>  
            </ul>   
        </Nav>
        )
    }
}
export default NavBar;