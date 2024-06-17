import ServiceBox from "./ServiceBox";
import redImage from '../assets/images/servicesImages/redImage2.jpg';
import laptopImage from '../assets/images/servicesImages/laptopImage.png';

export default function ServiceIndex() {
  return (
    <>
      <div className="bg-black text-white text-center pt-20 font-poppins">
        <h1 className="text-5xl md:text-6xl text-white text-center tracking-tight drop-shadow-lg">Nuestros servicios</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black px-6 md:px-14 pb-10">
        <div className="pt-10 md:pb-36">
          <ServiceBox
            serviceImage={laptopImage}
            title={"Servicios de estrategia"}
            text={
              <>
                <p>
                  Nuestros servicios de Consultoría en Innovación Estratégica le ayudarán a crear estrategias de negocio para avanzar en el mundo digital y atraer más clientes.
                </p>
                <br />
                <p>
                  Cada empresa es única, con sus propios desafíos y oportunidades. Trabajamos de manera personalizada para analizar su entorno empresarial, optimizar su presencia digital y facilitar su transformación hacia un futuro digital exitoso.
                </p>
                <br />
                <ul className="list-disc pl-5 space-y-2">
                  <li>Estrategia de Negocio</li>
                  <li>Estratregia de Marketing</li>
                  <li>Servicios de la nube</li>
                  <li>Redes Sociales</li>
                  <li>Identidad Corporativa</li>
                </ul>
              </>
            }
          />
        </div>
        <div className=" md:pt-32">
          <ServiceBox
            serviceImage={redImage}
            title={"Nuestros productos"}
            text={
              <ul className="list-disc pl-5 space-y-2">
                <li>CRM</li>
                <li>ERP</li>
                <li>Aplicaciones</li>
                <li>Sitios Web</li>
                <li>Software personalizado</li>
                <li>Automatización</li>
                <li>Plataforma en Nube Autogestionada</li>
                <li>Hosting</li>
              </ul>
            }
          />
        </div>
      </div>
    </>
  );
}
