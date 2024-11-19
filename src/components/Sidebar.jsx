import React, { useState, useEffect } from 'react';

const Sidebar = ({ products, onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCaracteristica, setSelectedCaracteristica] = useState('');
  const [tipos, setTipos] = useState([]);
  
  // Obtener características únicas
  const caracteristicas = [...new Set(products.map(product => product.caracteristica))];
  
  // Actualizar tipos cuando se selecciona una característica
  useEffect(() => {
    if (selectedCaracteristica) {
      const filteredTipos = [...new Set(
        products
          .filter(product => product.caracteristica === selectedCaracteristica)
          .map(product => product.tipo)
      )];
      setTipos(filteredTipos);
    } else {
      setTipos([]);
    }
  }, [selectedCaracteristica, products]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCaracteristicaChange = (caracteristica) => {
    setSelectedCaracteristica(caracteristica);
    onFilterChange('caracteristica', caracteristica);
  };

  const handleTipoChange = (tipo) => {
    onFilterChange('tipo', tipo);
  };

  return (
    <div className="w-64 flex-shrink-0">
      {/* Buscador */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">BÚSQUEDA</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border rounded mb-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit"
            className="w-full bg-[#242964] text-white py-2 rounded hover:bg-[#1e2255] transition-colors"
          >
            BUSCAR
          </button>
        </form>
      </div>

      {/* Filtros */}
      <div className="space-y-4">
        {/* Características */}
        <div>
          <h3 className="font-medium mb-2">CARACTERÍSTICAS</h3>
          <div className="space-y-2">
            <div 
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => handleCaracteristicaChange('')}
            >
              <input
                type="radio"
                name="caracteristica"
                checked={selectedCaracteristica === ''}
                onChange={() => {}}
                className="mr-2"
              />
              <span>Todos</span>
            </div>
            {caracteristicas.map((caracteristica) => (
              <div 
                key={caracteristica}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleCaracteristicaChange(caracteristica)}
              >
                <input
                  type="radio"
                  name="caracteristica"
                  checked={selectedCaracteristica === caracteristica}
                  onChange={() => {}}
                  className="mr-2"
                />
                <span>{caracteristica}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos */}
        {selectedCaracteristica && tipos.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">TIPOS</h3>
            <div className="space-y-2">
              <div 
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleTipoChange('')}
              >
                <input
                  type="radio"
                  name="tipo"
                  onChange={() => {}}
                  className="mr-2"
                />
                <span>Todos</span>
              </div>
              {tipos.map((tipo) => (
                <div 
                  key={tipo}
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                  onClick={() => handleTipoChange(tipo)}
                >
                  <input
                    type="radio"
                    name="tipo"
                    onChange={() => {}}
                    className="mr-2"
                  />
                  <span>{tipo}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;