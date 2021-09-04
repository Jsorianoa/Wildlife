import ImageGallery from 'react-image-gallery';
import wl0 from "./img/wl0.JPG";
import ga2 from "./img/ga2.png";
import ga3 from "./img/ga3.JPG";
import wl2 from "./img/wl2.JPG";
import ga7 from "./img/ga7.jpeg";
import ga5 from "./img/ga5.JPG";
import wl6 from "./img/wl6.jpg";
import ga9 from "./img/ga9.jpg";

const state = {
  showIndex: false,
  showBullets: true,
  infinite: true,
  showThumbnails: true,
  showFullscreenButton: true,
  showGalleryFullscreenButton: true,
  showPlayButton: true,
  showGalleryPlayButton: true,
  showNav: true,
  isRTL: false,
  slideDuration: 450,
  slideInterval: 2000,
  slideOnThumbnailOver: false,
  thumbnailPosition: 'bottom',
  showVideo: {},
  useWindowKeyDown: true,
};

const images = [
  {
    original: `${wl0}`,
    
    originalWidth: 400
  },
  {
    original: `${ga2}`,
    
    originalWidth: 400
  },
  {
    original: `${ga3}`,
   
    originalWidth: 400
  },
  {
    original: `${wl2}`,
    
    originalWidth: 400
  },
  {
    original: `${ga7}`,
    
    originalWidth: 400
  },
  {
    original: `${ga5}`,
    
    originalWidth: 400
  },
  {
    original: `${wl6}`,
    
    originalWidth: 400
  },
];


function Gallery(){

  if (window.screen.width < 768) {
    return (
      <div style={{background:'#464F41'}}>
        <h1 className="TitleGallery">Galeria</h1>
      <ImageGallery items={images} infinite={state.infinite} showFullscreenButton={state.showFullscreenButton && state.showGalleryFullscreenButton}/>
      </div>
    )
  }
  else {
  return (
    <div className="DivGalleryMain">
      
      <h1 className="TitleGallery">Galeria</h1>

      <div className="galeria-texto">
        <div className="container-gallery">
          <div className="cont-img">
            <img src={ga2} alt="wl1"/>
          </div>
          <div className="cont-img">
            <img  src={ga7} alt="wl2"/>
        
          </div>
          <div className="cont-img">
            <img  src={ga5} alt="wl3"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl2} alt="wl4"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl0} alt="wl5"/>
            
          </div>
          <div className="cont-img">
            <img  src={ga9} alt="wl6"/>
            
          </div>
          <div className="cont-img">
            <img  src={ga3} alt="wl7"/>
            
          </div>
          <div className="cont-img">
            <img  src={wl6} alt="wl8"/>
           
          </div>
          
        </div>
  
      </div>

    </div>
  );
  }
};

export default Gallery;
