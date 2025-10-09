import React from 'react';
import { Globe, Smartphone, Lightbulb, Wrench } from 'lucide-react';

const Servicios: React.FC = () => {
  const servicios = [
    {
      titulo: "Desarrollo Web",
      descripcion: "Creamos sitios web modernos y responsivos con las mejores tecnologías.",
      icono: "web",
      //caracteristicas: ["React/Vue.js", "Node.js", "Bases de datos", "APIs REST"]
    },
    {
      titulo: "Aplicaciones Móviles Internas",
      descripcion: "Desarrollamos apps para Android.",
      icono: "mobile",
     // caracteristicas: ["React Native", "Flutter", "App Store"]
    },
    {
      titulo: "Automatización de Procesos",
      descripcion: "Optimización y automatización de procesos empresariales mediante soluciones tecnológicas.",
      icono: "automation",
     // caracteristicas: ["MCP","n8n"]
    },
    /*
    {
      titulo: "Mantenimiento",
      descripcion: "Soporte técnico continuo y mantenimiento de tus sistemas existentes.",
      icono: "maintenance",
      caracteristicas: ["24/7 Support", "Updates", "Monitoreo", "Optimización"]
    }*/
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'web':
        return <Globe className="text-4xl mr-4 text-naranja" />;
      case 'mobile':
        return <Smartphone className="text-4xl mr-4 text-naranja" />;
      case 'automation':
        return <Lightbulb className="text-4xl mr-4 text-naranja" />;
      case 'maintenance':
        return <Wrench className="text-4xl mr-4 text-naranja" />;
      default:
        return <Globe className="text-4xl mr-4 text-naranja" />;
    }
  };

  return (
    <div className="min-h-screen bg-crema">
      {/* Header */}
      <section className="py-16 px-4 bg-naranja-oscuro text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades de tu negocio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-crema p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {renderIcon(servicio.icono)}
                  <h3 className="text-2xl font-bold text-naranja-oscuro">{servicio.titulo}</h3>
                </div>
                <p className="text-gray-700 mb-6">{servicio.descripcion}</p>
               {/* 
                <div className="grid grid-cols-2 gap-2">
                  {servicio.caracteristicas.map((caracteristica, i) => (
                    <div key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-verde rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600">{caracteristica}</span>
                    </div>
                  ))}
                </div> */}
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors">
                  Más información
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-verde-claro">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-naranja-oscuro mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contáctanos hoy mismo y hablemos sobre cómo podemos ayudarte
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Solicitar cotización
          </button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;