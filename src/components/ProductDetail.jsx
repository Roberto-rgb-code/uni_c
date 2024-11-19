import React, { useState } from 'react';

const ProductDetail = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Botón cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Galería de imágenes */}
          <div>
            {/* Imagen principal */}
            <div className="aspect-square mb-4 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.nombre}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 
                    ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                >
                  <img
                    src={image}
                    alt={`${product.nombre} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.nombre}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Tipo</h3>
                <p>{product.tipo}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Característica</h3>
                <p>{product.caracteristica}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Descripción</h3>
                <p className="whitespace-pre-line">{product.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;