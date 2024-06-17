// NavBar.jsx
import { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import logo from '../assets/images/logos/logo.png';

export default function NavBar({ home, solutions, aboutUs,contact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigation = [
    { name: 'INICIO', ref: home },
    { name: 'SOLUCIONES', ref: solutions },
    { name: 'NOSOTROS', ref: aboutUs },
    { name: 'CONTACTO', ref: contact },
  ];

  return (
    <nav className="z-30 w-full px-10 sticky top-0">
      <div className={`bg-primary absolute inset-0 ${scrolled ? 'bg-opacity-80' : 'bg-opacity-0'} transition-opacity duration-300`} />
      <Disclosure as="nav" className={`relative flex items-center justify-between w-full px-4 ${scrolled ? 'pt-2' : 'pt-10'} transition-all duration-300`}>
        {({ open }) => (
          <div className="flex items-center justify-center w-full text-base font-normal font-poppins max-w-screen-lg mx-auto">
            <div className="absolute left-0 flex items-center md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <Transition
              show={true}
              appear={true}
              enter="transition-opacity duration-700 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="flex justify-end">
                {navigation.slice(0, 2).map((item) => (
                  <div key={item.name} className="flex-1 hidden md:block text-center px-3">
                    <button
                      onClick={() => handleScrollTo(item.ref)}
                      className={'text-white hover:text-secondary'}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </Transition>

            <Transition
              show={true}
              appear={true}
              enter="transition-opacity duration-700 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="flex-shrink-0 h-18">
                <img className="h-20" src={logo} alt="Your Company" />
              </div>
            </Transition>

            <Transition
              show={true}
              appear={true}
              enter="transition-opacity duration-700 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="flex justify-start">
                {navigation.slice(2).map((item) => (
                  <div key={item.name} className="flex-1 hidden md:block text-center px-3">
                    <button
                      onClick={() => handleScrollTo(item.ref)}
                      className={'text-white hover:text-secondary'}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </Transition>
          </div>
        )}
      </Disclosure>
    </nav>
  );
}

NavBar.propTypes = {
  home: PropTypes.object.isRequired,
  solutions: PropTypes.object.isRequired,
  aboutUs: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};

