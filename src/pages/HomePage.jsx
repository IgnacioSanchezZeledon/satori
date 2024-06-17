// HomePage.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.jsx';

import NavBar from '../components/NavBar.jsx';
import HomePageVideo from '../components/HomePageVideo.jsx';
import Footer from '../components/Footer.jsx';
import BoxesPart from '../components/BoxesPart.jsx';
import ServiceIndex from '../components/ServiceIndex.jsx';
import ColourCard from '../components/ColourCard.jsx';
import ContactPart from '../components/ContactPart.jsx';

import team from '../assets/images/aboutUsImages/team.jpg';

export default function HomePage() {
  const [isBoxesPartVisible, boxesPartRef] = useIntersectionObserver();
  const [isServiceIndexVisible, serviceIndexRef] = useIntersectionObserver();
  const [isAboutUsIndexVisible, aboutUsRef] = useIntersectionObserver();
  const [isContactVisible, contactRef] = useIntersectionObserver();
  const [isFooterVisible, footerRef] = useIntersectionObserver();

  return (
    <>
      <HomePageVideo>
        <NavBar 
          home={boxesPartRef}  // Pass the ref for HomePageVideo
          solutions={serviceIndexRef}
          aboutUs={aboutUsRef}
          contact={contactRef} 
        />
      </HomePageVideo>

      <div
        ref={boxesPartRef}
        id="boxesPart"
        className={`transition-opacity duration-1000 transform ${
          isBoxesPartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <BoxesPart />
      </div>

      <div
        ref={serviceIndexRef}
        id="serviceIndex"
        className={`transition-opacity duration-1000 transform ${
          isServiceIndexVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ServiceIndex />
      </div>

      <div
        ref={aboutUsRef}
        id="aboutUs"
        className={`transition-opacity duration-1000 transform ${
          isAboutUsIndexVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ColourCard 
          serviceImage={team}
          title="Acerca de Satori BoldVision"
          text="Nuestra empresa se fundó con el propósito de guiar a nuestros clientes en la creación de sus empresas digitales y en la adopción de la transformación digital, así como en incrementar sus ventas y fomentar el crecimiento de sus negocios mediante tecnología avanzada y las mejores prácticas empresariales."
        />
      </div>

      <div 
        ref={contactRef}
        id="contact"
        className={`transition-opacity duration-1000 transform ${
          isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ContactPart />
      </div>


      <div
        ref={footerRef}
        id="footer"
        className={`transition-opacity duration-1000 transform ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Footer />
      </div>
    </>
  );
}
