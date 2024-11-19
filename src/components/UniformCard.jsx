import React, { useState } from 'react';

const UniformCard = ({ uniform }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Imagen principal */}
      <div className="aspect-square overflow-hidden mb-4">
        <img
          src={uniform.images[currentImage]}
          alt={uniform.nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      
      {/* Miniaturas */}
      {uniform.images.length > 1 && (
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {uniform.images.map((img, index) => (
            <button
              key={index}
              className={`w-16 h-16 flex-shrink-0 border-2 rounded 
                ${currentImage === index ? 'border-blue-500' : 'border-gray-200'}`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={img}
                alt={`${uniform.nombre} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Información del uniforme */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{uniform.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{uniform.tipo}</p>
        <div className="text-sm text-gray-700">
          <p className="whitespace-pre-line">{uniform.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default UniformCard;