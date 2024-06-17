import PropTypes from 'prop-types';

export default function ColourCard({ serviceImage, title, text }) {
  return (
    <div className="">
      <div className=" lg:p-24 bg-gradient-to-b from-black via-80% via-amber-900 to-tertiary flex items-center justify-center">
        <div className="max-w-screen px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera columna para título y texto */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl text-white text-center py-10 tracking-tight drop-shadow-lg">{title}</h1>
            <p className="text-lg text-gray-200 mt-4 text-left">{text}</p>
          </div>

          {/* Segunda columna para la imagen */}
          <div className="flex justify-center px-12 pb-10 lg:p-0">
            <img src={serviceImage} alt={title} className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

ColourCard.propTypes = {
  serviceImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
