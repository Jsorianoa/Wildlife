import styled from "styled-components";
import Wildlife from "../img/Wildlife.png";
import letras from "../img/EscudoWild.png";
const Ti = styled.div`
    width: 100%;
    z-index: 2000;
    position: relative;
    .logo-desktop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 80px;
    }
    .logo-desktop img {
      max-width: 250px;
    }
 
  @media (max-width: 768px){
    width: 100%;
    
  }
`


const Title = ({open}) => {

  if (window.screen.width < 768) 
        return (
          <Ti open={open}>
            <div className="logo-desktop">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
                <img src={letras} alt="Wildlife"/>
            </div> 
          </Ti>
        )
  if (window.screen.width > 768)
        return (
          <Ti open={open}>
            <div className="logo-desktop">
                <a href="/" ><img src={Wildlife} alt="Wildlife" /></a>
                <img src={letras} alt="Wildlife" />
            </div> 
          </Ti>
        )
}

export default Title;