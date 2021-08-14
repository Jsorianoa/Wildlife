import nosotros from './img/banner-nosotros.JPG';
import wl1 from './img/wl1Circulo.png';
import mauricio from './img/mauricio.jpg';
import adrian from './img/adrian.jpg';
import jorge from './img/jorge.png';
import emmanuel from './img/emmanuel.jpg';
import luis from './img/luis.jpg';
import raul from './img/raul.jpeg';
import castro from './img/jorge-castro.jpg';
const Nosotros = () => {
    return (
        <div id="nosotros">

            <div className="banner-nosotros">
                <img src={nosotros} alt="nosotros" className="img-nosotros"/> 
            </div>
            <div className="nosotros-content">
                    <div className="nosotros-vm">
                        <h2>Nosotros</h2>
                        <p>
                            Wildlife Management Mexico (WMM), es una organización no gubernamental 
                            (ONG) fundada en 2018 como resultado de la inquietud de un Ingeniero Agrónomo 
                            y un Médico Veterinario Zootecnista por ser agentes de cambio en su comunidad. 
                            Con años de experiencia trabajando en campo, identificamos el lugar común en 
                            varias regiones de México y Latinoamérica, la existencia de áreas naturales ricas en 
                            biodiversidad, pero con serios rezagos educativos, así como económicos. 
                        </p>
                        <br />
                        <br />
                        <p>    
                            WMM se presenta como una oportunidad para que a través del manejo y
                            conservación de la fauna silvestre se concreten proyectos productivos con miras a 
                            generar conocimiento, riqueza y prosperidad para aquellos actores involucrados 
                            con o que convivan diariamente con poblaciones de fauna silvestre.    
                        </p>
                        <br />
                        <br />
                        <h3>Misión</h3>
                        <br />
                        <p>
                            Promover la conservación de la riqueza biológica y cultural, así como los bienes y 
                            servicios ecosistémicos que los espacios naturales provee a la sociedad, a través del 
                            desarrollo de proyectos de promoción, manejo y conservación de la biodiversidad 
                            que fomenten el desarrollo social y comunitario, impulsando la realización de 
                            actividades que beneficien a la sociedad y favorezcan su inclusión, mediante 
                            alternativas productivas sustentables.
                        </p>
                        <br />
                        <br />
                        <h3>Visión</h3>
                        <br />
                        <p>
                            Ser un referente dentro de las ONG en México en cuanto a la promoción, manejo 
                            y conservación de la biodiversidad a través del aprovechamiento razonable y 
                            sustentable de la misma, buscando trascender a nivel internacional.
                        </p>
                        <br />
                        <br />
                    </div>
                    <div className="dos-columnas">
                        <div className="columna1">
                            <h3>OBJETIVOS</h3>
                            <br />
                            <br />
                            <h4>CONSERVACIÓN</h4>
                            <br />
                            <p>Desarrollar programas de monitoreo, manejo,
                            aprovechamiento y protección de fauna silvestre y 
                            sus hábitats con base en evidencia científica sólida.
                            </p>
                            <br />
                            <h4>RESTAURACIÓN</h4>
                            <br />
                            <p>Implementar acciones de manejo y mejoramiento 
                            de hábitat, enfocado en la recuperación de los 
                            recursos naturales.</p>
                            <br />
                            <h4>EDUCACIÓN</h4>
                            <br />
                            <p>Difundir el conocimiento, así como concientizar 
                            acerca de la importancia de las especies de flora y 
                            fauna silvestres</p>
                            <br />
                            <h4>DIVULGACIÓN</h4>
                            <br />
                            <p>Dar a conocer el trabajo realizado dentro de los 
                            proyectos de investigación y programas de manejo 
                            y conservación en los cuales participemos.</p>
                            <br />
                        </div>
                       
                        <div className="columna2">
                        <h3>VALORES</h3>
                        <br />
                        <br />
                            <ul>
                                <li>Honestidad</li>
                                <li>Calidad</li>
                                <li>Eficiencia</li>
                                <li>Trabajo en equipo</li>
                                <li>Responsabilidad social</li>
                                <li>Conciencia ambiental</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="quienes-somos">
                        <h3>¿QUIÉNES SOMOS?</h3>
                        <br />
                        <br />
                        <div className="card-somos">
                           <div className="image-somos">
                                <img src={mauricio} alt="mauricio" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Mauricio Sánchez López</h4>
                                <br />
                                <p>
                                    Ingeniero Agrónomo Zootecnista egresado de la 
                                    Universidad Autónoma de San Luis Potosí. Cuenta con 
                                    más de 15 años de experiencia en manejo de fauna, 
                                    enfocado principalmente en cérvidos, igualmente ha 
                                    realizado trabajos exitosos de reintroducción de 
                                    guajolote silvestre en SLP. Fungió como técnico de 
                                    conservación y manejo ecosistémico, encargado de los 
                                    programas de monitoreo biológico, incendios forestales 
                                    y sinergia internacional de la Reserva de la Biosfera Sierra 
                                    del Abra Tanchipa.
                                </p>
                                <br />
                                <span>m.sanchez@wildlifemanagementmexico.com</span>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos" style={{ display:'flex', flexDirection:'row-reverse', justifyContent:'space-around' }}>
                           <div className="image-somos">
                                <img src={adrian} alt="adrian" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Adrián Silva-Caballero</h4>
                                <br />
                                <p>
                                    Médico Veterinario Zootecnista graduado de la 
                                    Universidad Autónoma del Estado de México. Realizó 
                                    estudios de Maestría en la Escuela Nacional de Ciencias 
                                    Biológicas del Instituto Politécnico Nacional. Obtuvo el 
                                    grado de Doctor en Ciencias por parte del Colegio de 
                                    Postgraduados (Montecillo). Se ha desempeñado como 
                                    veterinario clínico, docente, técnico de campo de diversos 
                                    proyectos de investigación, responsable técnico de UMA 
                                    y consultor ambiental independiente. Con más de una 
                                    década de trabajo con poblaciones de fauna silvestre, 
                                    cuenta en su haber con varias publicaciones arbitradas, 
                                    relacionadas principalmente a carnívoros. Asimismo, ha 
                                    participado como ponente en diversos congresos y 
                                    reuniones, tanto nacionales como internacionales.
                                </p>
                                <br />
                                <span>a.caballero@wildlifemanagementmexico.com</span>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos">
                           <div className="image-somos">
                                <img src={wl1} alt="WL1" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Rodrigo A. Sánchez López</h4>
                                <br />
                                <p>
                                    Ingeniero Agrónomo Zootecnista egresado de la 
                                    Universidad Autónoma de San Luis Potosí. Maestro en 
                                    Ciencias por la Universidad Autónoma de Querétaro.
                                    Cuenta con más de 15 años trabajando con pequeños 
                                    rumiantes, su área de especialización es la reproducción 
                                    animal, aunque también ha trabajado en el manejo y 
                                    monitoreo de cérvidos. Ha participado en programas de 
                                    reintroducción de guajolote silvestre del cual sacó su 
                                    trabajo de tesis de licenciatura, así como en proyectos 
                                    de rescate de flora y fauna del altiplano potosino. 
                                    Igualmente ha sido combatiente de incendios forestales 
                                    en la sierra de San Miguelito, en SLP
                                </p>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos" style={{ display:'flex', flexDirection:'row-reverse', justifyContent:'space-around' }}>
                           <div className="image-somos">
                                <img src={jorge} alt="WL1" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Jorge Sánchez Ortega</h4>
                                <br />
                                <p>
                                    Médico Veterinario Zootecnista por la Universidad 
                                    Autónoma de Zacatecas. Obtuvo su maestría en Ciencias 
                                    Agropecuarias en Pequeños Rumiantes por parte de la 
                                    Universidad Autónoma de San Luis Potosí. Tiene más de 
                                    30 años de experiencia en el manejo de fauna silvestre, 
                                    principalmente en captura de cérvidos nativos y exóticos. 
                                    Fungió como Director del Área de Vida Silvestre y 
                                    Director General Forestal y de Vida Silvestre en la 
                                    Secretaría de Desarrollo Agropecuario y Recursos 
                                    Hidráulicos del Gobierno del Estado de San Luis Potosí. 
                                    Estuvo involucrado en el proyecto que reintrodujo 
                                    exitosamente guajolotes silvestres en dos municipios de 
                                    SLP. Asimismo, tiene amplia experiencia en el manejo y 
                                    reproducción caprina, siendo Director del Centro de 
                                    Selección Caprina del Gobierno del Estado de San Luis 
                                    Potosí en varios períodos. 
                                </p>
                                <span></span>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <h3>Aliados</h3>
                        <br />
                        <br />
                        <div className="card-somos">
                           <div className="image-somos">
                                <img src={emmanuel} alt="emmanuel" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Emmanuel Pineda-Pérez</h4>
                                <br />
                                <p>
                                    Ingeniero en Recursos Forestales egresado de la 
                                    Universidad Autónoma Chapingo. Maestro en Ciencias 
                                    por el Colegio de Postgraduados (SLP). Ha fungido como 
                                    técnico de campo en diversos proyectos de monitoreo 
                                    biológico, enfocándose en avifauna y fototrampeo.
                                    Asimismo, trabajó como Coordinador de Restauración 
                                    Ambiental (CEMEX), Director de Ecología Municipal 
                                    (Tamuín) y Técnico Productivo de la Secretaría del 
                                    Bienestar.
                                </p>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos" style={{ display:'flex', flexDirection:'row-reverse', justifyContent:'space-around' }}>
                           <div className="image-somos">
                                <img src={luis} alt="luis" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Luis E. Martínez Hernández</h4>
                                <br />
                                <p>
                                Experto en Cartografía y Sistemas de Información 
                                Geográfica. Amplia experiencia como fotógrafo de vida 
                                silvestre y técnico de campo en diversos proyectos de 
                                investigación, especialmente relacionados a avifauna.
                                </p>
                                <span></span>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos">
                           <div className="image-somos">
                                <img src={raul} alt="raul" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Raúl Castro Urbiola</h4>
                                <br />
                                <p>
                                    Fotógrafo de vida silvestre con amplia experiencia en
                                    macrofotografía y paisajismo. Su trabajo ha sido 
                                    publicado en revistas como National Geographic, Muy 
                                    Interesante, entre otras. 
                                </p>
                                <br />
                                <span style={{ fontWeight: '600' }}><i class="fab fa-facebook-square"></i> @raulcastrou</span>
                                <br />
                                <br />
                                <span style={{ fontWeight: '600' }}><i class="fab fa-instagram"></i> @raulcastrou</span>
                           </div> 
                        </div>
                        <br />
                        <br />
                        <div className="card-somos" style={{ display:'flex', flexDirection:'row-reverse', justifyContent:'space-around' }}>
                           <div className="image-somos">
                                <img src={castro} alt="castro" width="300" height="300" style={{ objectFit: 'cover', borderRadius: '50%' }}/>
                           </div>
                           <div className="content-somos">
                                <h4>Jorge Castro Urbiola</h4>
                                <br />
                                <p>
                                    Fotógrafo de vida silvestre con amplia experiencia en la 
                                    fotografía de flora y fauna, paisajismo y fotografía con 
                                    drones. Su trabajo ha sido publicado en revistas como 
                                    National Geographic, Muy Interesante, así como algunos 
                                    libros especializados. 
                                </p>
                                <br />
                                <span style={{ fontWeight: '600' }}><i class="fab fa-facebook-square"></i> @thesantogrial</span>
                                <br />
                                <br />
                                <span style={{ fontWeight: '600' }}><i class="fab fa-instagram"></i> @thesantogrial</span>
                           </div> 
                        </div>
                    </div>
                </div>
         
        </div>
    )
}
export default Nosotros;