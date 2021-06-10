import wl0 from "./img/wl0.JPG";
import wl3 from "./img/wl3.jpg";
import wl1 from "./img/wl1.png";
import wl2 from "./img/wl2.JPG";
import wl4 from "./img/wl4.jpeg";
import wl5 from "./img/wl5.JPG";
import wl6 from "./img/wl6.jpg";
import wl7 from "./img/wl7.jpg";



function Gallery(){
  return (
    <div className="DivGalleryMain">
      
      <h1 className="TitleGallery">Galeria</h1>

      <div className="galeria-texto">
        <div className="container-gallery">
          <div className="cont-img">
            <img src={wl3} alt="wl1"/>
          </div>
          <div className="cont-img">
            <img  src={wl1} alt="wl2"/>
        
          </div>
          <div className="cont-img">
            <img  src={wl7} alt="wl3"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl2} alt="wl4"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl0} alt="wl5"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl4} alt="wl6"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl5} alt="wl7"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl6} alt="wl8"/>
           
          </div>
          
        </div>
  
      </div>

    </div>
  );
};

export default Gallery;
