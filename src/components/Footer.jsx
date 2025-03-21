const Footer = () => {
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
          <a href="#home" className="text-sm hover:text-gray-300 transition">
            Inicio
          </a>
          <a href="#about" className="text-sm hover:text-gray-300 transition">
            Sobre Nosotros
          </a>
          <a href="#contact" className="text-sm hover:text-gray-300 transition">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
