
import Lottie from "react-lottie"
import treeInicio from "../assets/lottie/tree.json"
import falco from './img/falco.png';
import flor from './img/flor.jpg';
import wl8 from './img/wl8.JPG';
import wlc from './img/wlCirculo.JPG';
import home1 from './img/home1.JPG';
import home2 from './img/home2.png';
import home3 from './img/home3.jpg';
import home4 from './img/home4.JPG';

window.onscroll = function () {
    if(window.scrollY >= 1000){

    }
}

const defaultOptions = {
    loop: true,
    autoplay: true
  }
const Main = () => {
    
    if ('DOMContentLoaded') return  (
        <div className="container-main">
            <div className="columnas-banner">
                <img src={flor} alt="tucan" className="image-banner4"/> 
                <img src={wlc} alt="WLc" className="image-banner2"/>
                <img src={falco} alt="aguila" className="image-banner3"/>
                <img src={wl8} alt="WL8" className="image-banner1"/>
                
            </div>    
            
            <div className="content-inicio">
                <p>
                En Wildlife Management Mexico, buscamos promover la conservación y 
                el manejo de fauna silvestre, así como de los ecosistemas donde habitan, 
                a través del aprovechamiento razonable de los recursos naturales y la 
                educación ambiental.</p>
                <br></br>
                <br></br>
                <p>
                Para impulsar el manejo y conservación de la fauna silvestre
                participamos en diversos proyectos con diferentes actores, tanto con 
                comunidades rurales, dependencias de gobierno, iniciativa privada e 
                instituciones educativas en distintas partes de la República Mexicana y 
                otros países.
                </p>
            </div>

            
            <div className="imgnos">
                <img src={home1} alt="WL1" width="400" height="400"/>
                <img src={home2} alt="WL2" width="400" height="400"/>
                <img src={home3} alt="WL3" width="400" height="400"/>
                <img src={home4} alt="WL4" width="400" height="400"/>
            </div> 

            <br></br>
      
      </div>
    )
    else return <Lottie options={{animationData: treeInicio, ...defaultOptions}}/>
}

export default Main;