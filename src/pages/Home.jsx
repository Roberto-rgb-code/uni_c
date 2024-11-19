import React from 'react';
import { Link } from 'react-router-dom';
import uniformesIndustriales from "../assets/uniformes2-min.jpg";
import uniformesMedicos from "../assets/Uniformes-médicos.jpg";
import uniformesEscolares from "../assets/images.jpeg";
import uniformesCorporativos from "../assets/uniformes-de-calidad-en-merida.jpg"

const Home = () => {
  const uniformCategories = [
    {
      title: "Uniformes industriales",
      link: "/uniformes-industriales",
      image: uniformesIndustriales,
      buttonText: "ver"
    },
    {
      title: "Uniformes Medicos",
      link: "/uniformes-medicos",
      image: uniformesMedicos,
      buttonText: "ver"
    },
    {
      title: "Uniformes escolares",
      link: "/uniformes-escolares",
      image: uniformesEscolares,
      buttonText: "ver"
    },
    {
      title: "Uniformes corporativo",
      link: "/uniformes-corporativo",
      image: uniformesCorporativos,
      buttonText: "ver"
    }
  ];

  return (
    <div className="py-12 bg-[#6366F1]"> {/* Color morado similar al de tu imagen */}
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Título principal centrado */}
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Uniformes
        </h1>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uniformCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white text-center mb-4">
                {category.title}
              </h2>
              <Link
                to={category.link}
                className="bg-white text-black px-8 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {category.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;