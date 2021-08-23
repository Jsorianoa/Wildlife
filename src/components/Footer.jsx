
const Footer = () => {
    return (

        <div className="jumbotron" id="footerEdit">
            <div id="contacto">
                <h2>Contacto</h2>
                <br />
                <br />
                <div className="info">
                    <a href="mailto:contacto@wildlifemanagementmexico.com">contacto@wildlifemanagementmexico.com</a>          
                    <p>(+52)444 121 4148 / (+52) 55 18 23 9731</p>
                    <p>Monte Champaquí #240, Col. Lomas 3° sección, C.P. 78216, San Luis Potosí, S.L.P </p>
                </div>
                <div className="info-redes">
                
                    <a href="https://www.facebook.com/wildlifemanagementmx" target="_blank"><i className="fab fa-facebook" ></i></a>
                    <a href="https://twitter.com/MxWildlife?s=20" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="mailto:contacto@wildlifemanagementmexico.com"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.instagram.com/wildlifemanagementmx/?hl=es-la" target="_blank" ><i className="fab fa-instagram"></i></a>
                </div>
                
            </div>
            
            <div id="footterCopyright">

                <p>© Copyright - A quien corresponfa por "nombre de la empresa"</p>
            </div>

        </div>

    )

}
export default Footer;