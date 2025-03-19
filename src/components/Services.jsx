import React from 'react'
import Service from './Service';

const Services = () => {
  return (
    <section className="w-full min-h-screen pb-20">
      <div className='font-ligth text-5xl text-white pb-10 md:py-20 px-15'>Servicios</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Service
          img={"analitica.avif"}
          name={"Big Data y Analítica Avanzada"}
          description={
            "Extraemos valor de tus datos a través de modelos de análisis avanzado, inteligencia de negocios y visualización interactiva. Con nuestras soluciones, podrás tomar decisiones basadas en datos en tiempo real, identificar tendencias de mercado y mejorar la eficiencia operativa de tu empresa."
          }
        />
        <Service
          img={"cloud.avif"}
          name={"Infraestructura en la Nube"}
          description={
            "Migramos y gestionamos tu infraestructura tecnológica en plataformas cloud como AWS, Google Cloud o Azure. Ofrecemos soluciones escalables, seguras y flexibles que garantizan alto rendimiento, reducción de costos operativos y acceso seguro a la información desde cualquier lugar del mundo."
          }
        />
        <Service
          img={"ia.avif"}
          name={"Inteligencia Artificial y Machine Learning"}
          description={
            "Implementamos modelos de inteligencia artificial para optimizar procesos, mejorar la experiencia del usuario y automatizar tareas repetitivas. Desde asistentes virtuales hasta análisis predictivo, nuestras soluciones basadas en IA impulsan la innovación en tu negocio."
          }
        />
        <Service
          img={"software.jpg"}
          name={"Desarrollo de Software a Medida"}
          description={
            "Diseñamos y desarrollamos aplicaciones, plataformas web y sistemas personalizados que se adaptan a las necesidades específicas de tu empresa. Utilizamos tecnologías modernas y metodologías ágiles para garantizar productos escalables, eficientes y de alto rendimiento."
          }
        />
        <Service
          img={"ciberseguridad.jpeg"}
          name={"Ciberseguridad y Protección de Datos"}
          description={
            "Protegemos tu negocio contra amenazas digitales con soluciones avanzadas de seguridad. Implementamos firewalls, detección de intrusos, encriptación de datos y auditorías de seguridad para garantizar la integridad y confidencialidad de tu información, minimizando riesgos ante ciberataques."
          }
        />
        <Service
          img={"teamtech.jpg"}
          name={"Consultoría en Transformación Digital"}
          description={
            "Acompañamos a tu empresa en el proceso de digitalización, optimizando flujos de trabajo, integrando nuevas tecnologías y automatizando procesos clave. Nuestro enfoque estratégico permite mejorar la productividad, reducir costos y aprovechar al máximo las oportunidades del entorno digital."
          }
        />
      </div>
    </section>
  );
}

export default Services