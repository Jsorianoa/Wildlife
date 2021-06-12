import wl0 from './img/wl0.JPG';
import wl1 from './img/wl1Circulo.png';
import wl2 from './img/wl2Circulo.JPG';
import wl3 from './img/wl3.jpg';
import wlc from './img/wlCirculo.JPG';


window.onscroll = function () {
    if(window.scrollY>=1000){

    }
}


const Main = () => {
    return (
        <div className="container-main">    
            <div id="nosotros">
                <h2>Nosotros</h2>
                <div className="imgnos">
                    <img src={wl1} alt="WL1" width="300" height="300"/>
                    <img src={wl2} alt="WL2" width="300" height="300"/>
                    <img src={wlc} alt="WL3" width="300" height="300"/>
                    <img src={wl1} alt="WL4" width="300" height="300"/>
                </div> 
                <div className="texto-nosotros">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quisquam id quam dolore, velit consectetur aliquam repellat mollitia atque consequuntur modi at eaque quidem itaque illo. Odio ut eius quaerat!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto necessitatibus eaque, ad quos debitis porro eveniet, deleniti impedit quibusdam dolorum facere atque possimus quia natus eum amet aspernatur. Ex.</p>
                </div>     
            </div>


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
                        <img src={wl3} alt="wl1" width="250" height="250"/>                    
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
                        <img src={wl3} alt="wl1" width="250" height="250"/>               
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis mollitia ducimus sit quos, fuga sed cum repellat sint illo voluptatibus fugiat nesciunt eum quisquam! Animi assumenda nemo est amet.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wl3} alt="wl1" width="250" height="250"/>                    
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium dolor. Sint, nobis sunt temporibus, praesentium et ducimus molestiae deserunt dolor ut, alias voluptatem illo dolores iure nesciunt. Dicta, tenetur?</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wl3} alt="wl1" width="250" height="250"/>                    
                        <div className="container">
                            <h4>John Doe</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium dolor. Sint, nobis sunt temporibus, praesentium et ducimus molestiae deserunt dolor ut, alias voluptatem illo dolores iure nesciunt. Dicta, tenetur?</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <br></br>


            
            <div id="contacto">
                <h2>Contacto</h2>
                <div className="info">          
                    <p>Correo: waldlife@gmail.com</p>
                    <p>Telefono: 55-5555-5555</p>
                    <p>Movil: 55-0000-0000</p>
                    <p>Dirección: San Luis Potosí 000, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</p>
                </div>
                <div className="info-redes">
                    <a href="https://www.facebook.com/wildlifemanagementmx"><i className="fab fa-facebook" ></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.instagram.com/wildlifemanagementmx/?hl=es-la"><i className="fab fa-instagram"></i></a>
                </div>
                
            </div>      
      </div>
    )
}

export default Main;