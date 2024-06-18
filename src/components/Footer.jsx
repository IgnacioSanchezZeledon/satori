import logo from '../assets/images/logos/logo.png';


export default function Footer() {
  return (
    <>
      <footer className='grid grid-cols-1 sm:grid-cols-2 text-center w-full bg-primary font-poppins text-white py-4 px-20 justify-between'>
        

        <div className='flex flex-col content-center py-2'>
          <img
            className="block  rounded-full my-auto mx-auto h-36"
            src={logo}
            alt="Your Company"
          />

          <ul>
            <li>+506 8704 0004</li>
            <li>info@satoriboldvision.com</li>
          </ul>

        </div>

        

        <div className=' py-2'>
          <h3>Redes Sociales</h3>
          <ul className='grid grid-rows-3'>

            <div className='py-3'>
            <a href="https://www.facebook.com/satoribv" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-facebook fa-3x ml-auto pr-1 hover:text-gray-500"></i>
            </a>
            </div>

            <div className='py-3'>
            <a href="https://www.linkedin.com/company/satoriboldvision" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-3x ml-auto  pr-1 hover:text-gray-500"></i>
            </a>
            </div>

            <div className='py-3'>
            <a href="https://wa.me/50687040004" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-whatsapp fa-3x ml-auto  pr-1 hover:text-gray-500"></i>
            </a>
            </div>

          </ul>
        </div>
      </footer>
      
    </>
  );
}
