import servicios1 from "./img/servicios-1.jpg";
import servicios2 from "./img/servicios-2.jpg";
import servicios3 from "./img/servicios-3.JPG";
import servicios4 from "./img/servicios-4.jpg";
import servicios5 from "./img/servicios-5.JPG";
import servicios6 from "./img/servicios-6.JPG";
import serviciosBanner from "./img/servicios-banner.jpg";

const Servicios = () => {
  return (
    <div id="servicios">
      <div className="banner-nosotros">
        <img src={serviciosBanner} alt="nosotros" className="img-servicios" />
      </div>
      <div className="servicios-content">
        <h2>SERVICIOS</h2>
        <div className="card-servicio">
          <h3>Aprovechamiento racional de fauna</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>Captura, traslado y liberación de fauna silvestre</li>
              <li>
                Colecta de especies de flora y fauna silvestre con fines de
                investigación científica
              </li>
              <li>
                Renta y/o venta de equipo o materiales para el manejo de fauna
              </li>
            </ul>
            <img
              src={servicios1}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="card-servicio">
          <h3>Apoyo para registro y manejo de UMA's</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>
                Apoyo en el registro de Unidades para la Conservación, Manejo y
                Aprovechamiento Sustentable de la Vida Silvestre (UMA’s) ante
                las autoridades ambientales (DGVS-SEMARNAT)
              </li>
              <li>Redacción y desarrollo de Planes de Manejo de UMA's</li>
              <li>
                Trámites relacionados con la operación, avisos de modificaciones
                de registro o en el plan de manejo de UMA's ante las autoridades
                ambientales (DGVS-SEMARNAT, PROFEPA, etc.)
              </li>
            </ul>
            <img
              src={servicios2}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="card-servicio">
          <h3>Consultoría ambiental</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>
                Asesoría para la gestión de programas de responsabilidad
                ambiental empresarial
              </li>
              <li>Asesoría en temas de normatividad ambiental</li>
              <li>Asesoría para programas de reforestación</li>
              <li>
                Asesoría para llevar a cabo prácticas de mejoramiento de hábitat
              </li>
            </ul>
            <img
              src={servicios3}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="card-servicio">
          <h3>Estudios de biodiversidad</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>Monitoreo y evaluación de poblaciones de fauna silvestre</li>
              <li>Inventarios de flora y fauna silvestre</li>
              <li>Evaluación sobre capacidad de carga de hábitats</li>
            </ul>
            <img
              src={servicios4}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="card-servicio">
          <h3>Talleres de educación ambiental</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>
                Realización de talleres de educación ambiental dirigidos a
                público en general
              </li>
              <li>
                Realización de talleres de educación ambiental para
                instituciones de educación pública y/o privada
              </li>
              <li>
                Realización de talleres de educación ambiental para empresas
              </li>
              <p>
                *Temática: biodiversidad, hotspots, contención de fauna
                silvestre, manejo de depredadores, métodos alternativos de
                producción, monitoreo de fauna silvestre, servicios ambientales,
                temas forestales (árboles nativos, incendios, reforestación,
                entre otros).
              </p>
            </ul>
            <img
              src={servicios5}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="card-servicio">
          <h3>Turismo alternativo y ecoturismo</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="body-servicios"
          >
            <ul className="list-servicios">
              <li>Senderismo</li>
              <li>Aviturismo</li>
              <li>Cacería fotográfica</li>
              <li>Rastreo de fauna silvestre</li>
              <li>Monitoreo biológico in situ</li>
            </ul>
            <img
              src={servicios6}
              alt="servicios"
              width="400"
              height="300"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Servicios;
