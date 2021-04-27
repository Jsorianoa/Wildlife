import wl3 from "./img/wl3.jpg";

function Gallery(){
  return (
    <div className="DivGalleryMain">
      
      <h1 className="TitleGallery">Galeria</h1>

      <div className="container-gallery">
        <div className="m1"><img  src={wl3} alt="wl3"/></div>
        <div className="m2"><img  src={wl3} alt="wl3"/></div>
        <div className="m3"><img  src={wl3} alt="wl3"/></div>
        <div className="m4"><img  src={wl3} alt="wl3"/></div>
        <div className="m5"><img  src={wl3} alt="wl3"/></div>
        <div className="m6"><img  src={wl3} alt="wl3"/></div>
        <div className="m7"><img  src={wl3} alt="wl3"/></div>
        <div className="m8"><img  src={wl3} alt="wl3"/></div>
        <div className="m9"><img  src={wl3} alt="wl3"/></div>
      </div>

    </div>
  );
};

export default Gallery;
