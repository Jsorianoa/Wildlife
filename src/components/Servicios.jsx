import wl1 from './img/wl1Circulo.png';

const Servicios = () => {
    return (
        <div id="servicios">
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