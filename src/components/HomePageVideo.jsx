import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import video from '../assets/uploads/video.mp4';
import video2 from '../assets/uploads/video.webm';
import gif from '../assets/uploads/video.gif';

export default function HomePageVideo({children}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
            
      {/* Video de fondo */}
      <div className="div">
        {/* Gif de fondo para dispositivos móviles (md) */}
        <img 
          src={gif} 
          alt="Fondo animado" 
          className="md:hidden absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Video para dispositivos mayores a móviles (md) */}
        <video 
          className="md:block hidden absolute inset-0 w-full h-full object-cover z-0" 
          autoPlay
          loop 
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          <source src={video2} type="video/webm" />

          Your browser does not support the video tag.
        </video>
      </div>

      
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100 z-100"></div>
      
      {/* Contenido principal con texto animado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-20 ">
        <Transition
          show={true}
          appear={true}
          enter="transition-transform duration-700 ease-out"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
        >
          <h1 className="py-6 homePageTitle tracking-tight">
            <span>Expertos en transformación digital</span>
          </h1>
          <span className="homePageSubTitle text-secondary tracking-tight">
            Construimos Negocios Digitales a través de la tecnología, la innovación y la consultoría estratégica.
          </span>
        </Transition>
      </div>

      {/* Navbar (u otros elementos pasados como children) */}
      {/* Mover el children fuera del div principal */}
      <div className="fixed top-0 left-0 w-full z-30">
        {children}
      </div>
    </div>
  );
}

HomePageVideo.propTypes = {
  children: PropTypes.node.isRequired,
};
