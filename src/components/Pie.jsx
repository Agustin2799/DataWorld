import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";


const Pie = () => {
  const navigate = useNavigate(); // Para gestionar la navegación

  return (
    <footer className="relative w-full h-auto backdrop-blur-md text-white py-6">
      {/* Capa negra semitransparente */}
      <div className="absolute inset-0 bg-slate-700/40 -z-10"></div>

      {/* Contenido del Footer */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Derechos reservados */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Data Word. Todos los derechos reservados.
        </div>

        {/* Opciones de navegación */}
        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm cursor-pointer hover:text-gray-300 transition"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              navigate("/"); // Navega a la ruta raíz
              setTimeout(() => {
                const targetElement = document.getElementById("services"); // Encuentra el elemento con el id "contact"
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave a la sección
                }
              }, 100);
            }}
            className="text-sm cursor-pointer hover:text-gray-300 transition"
          >
            Servicios
          </button>
          <button
            onClick={() => {
              navigate("/"); // Navega a la ruta raíz
              setTimeout(() => {
                const targetElement = document.getElementById("about"); // Encuentra el elemento con el id "contact"
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave a la sección
                }
              }, 100);
            }}
            className="text-sm cursor-pointer hover:text-gray-300 transition"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => {
              navigate("/"); // Navega a la ruta raíz
              setTimeout(() => {
                const targetElement = document.getElementById("contact"); // Encuentra el elemento con el id "contact"
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave a la sección
                }
              }, 100);
            }}
            className="text-sm cursor-pointer hover:text-gray-300 transition"
          >
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Pie;