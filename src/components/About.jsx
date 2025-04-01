import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  const typewriterRef = useRef(null);
  const [startWriting, setStartWriting] = useState(false);

  // Configuración del Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartWriting(true); // Inicia la animación cuando el componente entra en la pantalla
        }
      },
      {
        threshold: 0.5, // Cuando al menos el 50% del componente es visible
      }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    // Limpieza del observer
    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-start py-20 md:py-0 md:pb-10">
      <div className="font-ligth text-5xl text-white pb-10 md:py-20 px-15 text-start">
        Nosotros
      </div>
      <div
        className="text-2xl h-min  flex-1 font-light text-white"
        ref={typewriterRef}
      >
        {startWriting && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "En Data World, nos apasiona la innovación y la tecnología. Nos especializamos en ofrecer soluciones tecnológicas avanzadas que impulsan a las empresas hacia el futuro."
                )
                .pauseFor(500)
                .typeString(
                  "<br/><br/>Con un equipo de expertos en desarrollo de software, inteligencia artificial y ciberseguridad, ayudamos a transformar negocios mediante la integración de herramientas digitales de vanguardia."
                )
                .pauseFor(500)
                .typeString(
                  "<br/><br/>Nuestra misión es conectar el mundo a través de la tecnología, brindando a las empresas las herramientas necesarias para crecer, innovar y liderar en la era digital."
                )
                .pauseFor(500)
                .typeString(
                  "<br/><br/>En Data World, creemos que la tecnología no solo resuelve problemas, sino que también crea oportunidades ilimitadas."
                )
                .start();
            }}
            options={{
              autoStart: true,
              loop: false, // No se borra
              delay: 5, // Velocidad de escritura
              wrapperClassName: "typewriter-text", // Agregar clase para el estilo
            }}
          />
        )}
      </div>
    </section>
  );
};

export default About;
