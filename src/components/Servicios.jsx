import wl1 from './img/wl1Circulo.png';
import serviciosBanner from "./img/servicios-banner.jpg";

const Servicios = () => {
    return (
        <div id="servicios">
            <div className="banner-nosotros">
                <img src={serviciosBanner} alt="nosotros" className="img-nosotros"/> 
            </div>
                <h2>Servicios</h2>
                <div className="imgserv">
                    <img src={wl1} alt="WL1" width="300" height="300"/>
                </div> 
                <div className="texto-nosotros">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quisquam id quam dolore, velit consectetur aliquam repellat mollitia atque consequuntur modi at eaque quidem itaque illo. Odio ut eius quaerat!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto necessitatibus eaque, ad quos debitis porro eveniet, deleniti impedit quibusdam dolorum facere atque possimus quia natus eum amet aspernatur. Ex.</p>
                </div>     
            </div>
    )
}
export default Servicios;