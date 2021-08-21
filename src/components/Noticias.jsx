import noticias1 from './img/noticias-1.png';
import noticias2 from './img/noticias-2.JPG';
import noticias3 from './img/noticias-3.jpeg';
import noticias from "./img/noticias.jpg";

import Gallery from "./Gallery";
const Noticias = () => {
    return (
        <div id="noticias">
            <div className="banner-nosotros">
                <img src={noticias} alt="nosotros" className="img-nosotros"/> 
            </div>
                <div className="noticias-content">
                    <h2>Noticias</h2>
                    <div className="cards">
                        <div className="card">
                            <img src={noticias1} alt="noticias" style={{ width:'100%',height:'455px',objectFit: "cover", borderRadius: "20px" }}/>                   
                            <div className="container">
                                <h3>Venta de trampas-cámara y equipo</h3>
                                <p>Si necesitas monitorear fauna silvestre a través de fototrampeo, nosotros podemos ayudarte a conseguir la mejor trampa-cámara que se ajuste a tus necesidades, tanto de logística como económicas, ya sean fotos tradicionales o panorámicas. Ofrecemos modelos de las principales marcas en el ramo como: 𝗕𝗿𝗼𝘄𝗻𝗶𝗻𝗴, 𝗕𝘂𝘀𝗵𝗻𝗲𝗹𝗹, 𝗖𝘂𝗱𝗱𝗲𝗯𝗮𝗰𝗸, 𝗠𝗼𝘂𝗹𝘁𝗿𝗶𝗲, 𝗦𝘁𝗲𝗮𝗹𝘁𝗵𝗖𝗮𝗺, entre otras.Igualmente te podemos ofrecer otros materiales y equipos para el manejo y monitoreo de fauna silvestre. Acércate a nosotros, contáctanos por redes sociales o a nuestro e-mail de contacto (𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗼@𝘄𝗶𝗹𝗱𝗹𝗶𝗳𝗲𝗺𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁𝗺𝗲𝘅𝗶𝗰𝗼.𝗰𝗼𝗺). ¹ Envíos a través de las principales paqueterías (𝘋𝘏𝘓, 𝘌𝘴𝘵𝘢𝘧𝘦𝘵𝘢, 𝘍𝘦𝘥𝘌𝘹).² Podemos expedir facturas por las compras.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={noticias2} alt="noticias" style={{ width:'100%',height:'455px',objectFit: "cover", borderRadius: "20px" }}/>                    
                            <div className="container">
                                <h3>Comienza el trabajo con las comunidades de Sierra de Álvarez</h3>
                                <p>En semanas pasadas comenzamos actividades con los monitores comunitarios de la APFF Sierra de Álvarez. Este año estaremosfortaleciendo los esfuerzos en cuanto al manejo y conservación de esta área natural a través de la asesoría, capacitación e intercambio de experiencias con estos importantísimos actores, así como las autoridades medioambientales. Estamos convencidos de que el trabajo con las comunidades es indispensable para que cualquier programa enfocado al manejo y conservación de los recursos naturales sea exitoso. Además, el rescatar el conocimiento tradicional y la experiencia en sus territorios es fundamental para desarrollar protocolos de vigilancia y monitoreo de fauna silvestre funcionales.</p>
                            </div>
                        </div>
                        <div className="card">    
                            <img src={noticias3} alt="noticias" style={{ width:'100%',height:'455px',objectFit: "cover", borderRadius: "20px" }}/>               
                            <div className="container">
                                <h3>Continua el monitoreo de fauna boreal</h3>
                                <p>Desde hace algunos meses se ha venido llevando a cabo un programa piloto de monitoreo de fauna silvestre en Alberta, Canadá. Nuestro colega Rodrigo Sánchezha colectado registros muy interesantes y a pesar de las complejidades propias del clima (nevadas, temperaturas bajo cero, entre otros), ya tenemos las primeras postales (mediante fototrampeo) de la fauna silvestre en hábitats septentrionales.El fototrampeo consiste en la colocación de cámaras fotográficas dotadas de 𝘀𝗲𝗻𝘀𝗼𝗿𝗲𝘀 𝗱𝗲𝗺𝗼𝘃𝗶𝗺𝗶𝗲𝗻𝘁𝗼 o células fotoeléctricas (𝘀𝗲𝗻𝘀𝗼𝗿 𝗱𝗲 𝗰𝗮𝗹𝗼𝗿) activadas cuando un animal camina frente al objetivo. Es una de las principales herramientas para la investigación de poblaciones de fauna silvestre en nuestros días</p>
                            </div>
                        </div>
                        
                    </div>
                    <Gallery />
                </div>
            </div>
            
    )
}
export default Noticias;