import { Transition } from '@headlessui/react';
import HoverBox from '../components/HoverBox.jsx';
import marketingImage from '../assets/images/boxesImages/marketing.jpg';
import organizationImage from '../assets/images/boxesImages/organizacion.jpg';
import technologyImage from '../assets/images/boxesImages/tecnologia.jpg';

export default function BoxesPart() {
  return (
    <>
      <Transition
        show={true}
        appear={true}
        enter="transition-all duration-700 ease-out"
        enterFrom="opacity-0 transform -translate-y-10"
        enterTo="opacity-100 transform translate-y-0"
      >
        <div className="bg-gradient-to-b from-black via-tertiary to-black px-6 md:px-20 py-10 font-poppins">

          <h1 className="text-5xl md:text-6xl text-white text-center py-24 tracking-tight drop-shadow-lg">¿Qué hacemos?</h1>
          <h2 className="text-lg md:text-xl text-white text-center px-4 md:px-44 leading-relaxed tracking-tight drop-shadow-md">
            &quot;Somos <span className="text-secondary">socios estratégicos</span> en la transición hacia lo digital, guiando a las empresas en su transformación. Nos convertimos en el <span className="text-secondary">aliado esencial</span> para lograr <span className="text-secondary">innovación y crecimiento empresarial</span>.&quot;
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 rounded-lg shadow-xl">
            <div className="p-12">
              <HoverBox 
                imageSrc={marketingImage} 
                title={"Estrategia"} 
                description={"Guiamos la evolución hacia lo digital de nuestros clientes."} 
              />
            </div>
            <div className="p-12">
              <HoverBox 
                imageSrc={organizationImage} 
                title={"Organización"} 
                description={"Desarrollamos capacidades para la adopción del cambio digital."} 
              />
            </div>
            <div className="p-12">
              <HoverBox 
                imageSrc={technologyImage} 
                title={"Innovación y Tecnología"} 
                description={"Impulsamos la innovación y tecnología, integrando soluciones avanzadas para optimizar procesos y eficiencia operativa."} 
              />
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
