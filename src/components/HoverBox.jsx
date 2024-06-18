import { useState } from 'react';
import PropTypes from 'prop-types';

export default function HoverBox({ imageSrc, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative size-56 sm:size-64 overflow-hidden bg-secondary shadow-md transition-transform duration-300 ease-in-out transform hover:scale-150"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover border border-gray-800"
        src={imageSrc}
        alt={`Imagen de ${title}`}
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white transition-opacity duration-300 ease-in-out opacity-90">
          <h2 className="text-xl text-center">{title}</h2>
          <h3 className="text-sm text-center p-4">{description}</h3>
        </div>
      )}
    </div>
  );
}

HoverBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
