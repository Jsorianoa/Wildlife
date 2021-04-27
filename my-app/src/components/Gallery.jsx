import wl0 from "./img/wl0.JPG";
import wl3 from "./img/wl3.jpg";
import wl1 from "./img/wl1.png";
import wl2 from "./img/wl2.JPG";
import wl4 from "./img/wl4.jpeg";
import wl5 from "./img/wl5.JPG";
import wl6 from "./img/wl6.jpg";
import wl7 from "./img/wl7.jpg";
import wlCirculo from "./img/wlCirculo.JPG";


function Gallery(){
  return (
    <div className="DivGalleryMain">
      
      <h1 className="TitleGallery">Galeria</h1>

      <div className="galeria-texto">
        <div className="container-gallery">
          <div className="cont-img">
            <img src={wl3} alt="wl1"/>
            <h3>Imagen1</h3>
          </div>
          <div className="cont-img">
            <img  src={wl1} alt="wl2"/>
            <h3>Imagen2</h3>
          </div>
          <div className="cont-img">
            <img  src={wl7} alt="wl3"/>
            <h3>Imagen1</h3>
          </div>
          <div className="cont-img">
            <img  src={wl2} alt="wl4"/>
            <h3>Imagen3</h3>
          </div>
          <div className="cont-img">
            <img  src={wl0} alt="wl5"/>
            <h3>Imagen5</h3>
          </div>
          <div className="cont-img">
            <img  src={wl4} alt="wl6"/>
            <h3>Imagen6</h3>
          </div>
          <div className="cont-img">
            <img  src={wl5} alt="wl7"/>
            <h3>Imagen7</h3>
          </div>
          <div className="cont-img">
            <img  src={wl6} alt="wl8"/>
            <h3>Imagen8</h3>
          </div>
          
        </div>
  
        <div className="parrafo">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus minus commodi excepturi nobis nemo culpa porro! Laborum, recusandae omnis eos earum necessitatibus voluptatem reprehenderit corporis, expedita aperiam iusto temporibus quas?</p>
        </div>
      </div>

    </div>
  );
};

export default Gallery;
