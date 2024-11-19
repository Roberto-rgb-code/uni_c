import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductDetail from '../components/ProductDetail';
import { industrialUniforms } from '../data/industrialUniforms';

const IndustrialUniforms = () => {
  const [products, setProducts] = useState(industrialUniforms);
  const [filteredProducts, setFilteredProducts] = useState(industrialUniforms);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product => 
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    if (!value) {
      setFilteredProducts(products);
      return;
    }

    let filtered = [...products];
    
    if (filterType === 'caracteristica') {
      filtered = filtered.filter(product => product.caracteristica === value);
    } else if (filterType === 'tipo') {
      filtered = filtered.filter(product => product.tipo === value);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="flex gap-8">
        <Sidebar 
          products={products}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square mb-4 relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.nombre}
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Imagen+no+disponible';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold mb-2">{product.nombre}</h2>
                  <p className="text-sm text-gray-600">{product.tipo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalle del producto */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default IndustrialUniforms;