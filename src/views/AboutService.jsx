import React from "react";
import { useLocation, useNavigate } from "react-router"; // Importa useHistory
import { ArrowLeftIcon } from '@heroicons/react/24/outline';  // Usando Heroicons v2


const AboutService = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Crea una instancia del historial
  const { img, name, description } = location.state || {};

  // Función para ir hacia atrás
  const handleGoBack = () => {
    navigate("/"); // Vuelve a la página anterior
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-xl  text-white rounded-lg shadow-xl p-8 md:p-12 max-w-6xl mx-auto my-12">
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          {/* Imagen */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={img}
              alt={name}
              className="w-full h-80 object-cover rounded-tr-2xl rounded-bl-2xl shadow-lg"
            />
          </div>

          {/* Título y descripción */}
          <div className="flex flex-col justify-center md:w-2/3 md:ml-10">
            <h1 className="text-4xl md:text-5xl font-light text-center md:text-left bg-clip-text text-white  mb-6">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {/* Botón de retroceder */}
        <button
          onClick={handleGoBack}
          className="absolute top-4 right-7 md:right-4 text-white bg-gray-800/30 p-2 rounded-full hover:bg-gray-700/50 transition duration-300"
        >
          <ArrowLeftIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default AboutService;
