import wl0 from './img/wl0.JPG';
import wl1 from './img/wl1Circulo.png';

import Gallery from "./Gallery";
const Noticias = () => {
    return (
        <div id="noticias">
                <h2>Noticias</h2>
                <div className="cards">
                    <div className="card">
                        <img src={wl0} alt="wl1" width="100%" height="250"/>                   
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam veritatis accusamus? Hic nobis earum sapiente quas esse libero quia! Quod fuga modi nisi similique iure saepe sequi veniam provident.r</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wl1} alt="wl1" width="250" height="250"/>                    
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium dolor. Sint, nobis sunt temporibus, praesentium et ducimus molestiae deserunt dolor ut, alias voluptatem illo dolores iure nesciunt. Dicta, tenetur?</p>
                        </div>
                    </div>
                    <div className="card">    
                        <img src={wl1} alt="wl1" width="250" height="250"/>               
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis mollitia ducimus sit quos, fuga sed cum repellat sint illo voluptatibus fugiat nesciunt eum quisquam! Animi assumenda nemo est amet.</p>
                        </div>
                    </div>
                    <div className="card">    
                        <img src={wl1} alt="wl1" width="250" height="250"/>               
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis mollitia ducimus sit quos, fuga sed cum repellat sint illo voluptatibus fugiat nesciunt eum quisquam! Animi assumenda nemo est amet.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wl1} alt="wl1" width="250" height="250"/>                    
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium dolor. Sint, nobis sunt temporibus, praesentium et ducimus molestiae deserunt dolor ut, alias voluptatem illo dolores iure nesciunt. Dicta, tenetur?</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wl1} alt="wl1" width="250" height="250"/>                    
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium dolor. Sint, nobis sunt temporibus, praesentium et ducimus molestiae deserunt dolor ut, alias voluptatem illo dolores iure nesciunt. Dicta, tenetur?</p>
                        </div>
                    </div>
                    
                </div>
                <Gallery />
            </div>
            
    )
}
export default Noticias;