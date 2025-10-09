import React from 'react';
import { ShoppingCart, Smartphone, BarChart3, GraduationCap, Truck, TrendingUp } from 'lucide-react';

const Portafolio: React.FC = () => {
  const proyectos = [
    {
      titulo: "Salteñeria Volkan",
      descripcion: "Landing page.",
      tecnologias: ["React", "Node.js"],
      imagen: "shopping-cart",
      categoria: "Web Development",
      enlace: "#"
    },
    /*
    {
      titulo: "Mobile Banking App",
      descripcion: "Aplicación móvil para banca digital con transferencias, pagos y gestión de cuentas.",
      tecnologias: ["React Native", "Firebase", "Redux"],
      imagen: "📱",
      categoria: "Mobile App",
      enlace: "#"
    },
    {
      titulo: "Sistema de Gestión Empresarial",
      descripcion: "ERP completo para gestión de inventario, ventas, compras y reportes financieros.",
      tecnologias: ["Vue.js", "Laravel", "MySQL", "Docker"],
      imagen: "📊",
      categoria: "Enterprise Software",
      enlace: "#"
    },
    {
      titulo: "Plataforma Educativa",
      descripcion: "Sistema de aprendizaje en línea con cursos, evaluaciones y seguimiento de progreso.",
      tecnologias: ["Next.js", "PostgreSQL", "AWS", "Socket.io"],
      imagen: "🎓",
      categoria: "EdTech",
      enlace: "#"
    },
    {
      titulo: "App de Delivery",
      descripcion: "Aplicación para entregas a domicilio con seguimiento en tiempo real y geolocalización.",
      tecnologias: ["Flutter", "Google Maps API", "Firebase"],
      imagen: "🚚",
      categoria: "Mobile App",
      enlace: "#"
    },
    {
      titulo: "Dashboard Analytics",
      descripcion: "Panel de control con visualización de datos, métricas y reportes personalizados.",
      tecnologias: ["React", "D3.js", "Python", "FastAPI"],
      imagen: "📈",
      categoria: "Data Visualization",
      enlace: "#"
    }*/
  ];

  const renderIcon = (iconType: string) => {
    const iconProps = { size: 48, className: "text-naranja" };
    
    switch (iconType) {
      case 'shopping-cart':
        return <ShoppingCart {...iconProps} />;
      case 'smartphone':
        return <Smartphone {...iconProps} />;
      case 'bar-chart':
        return <BarChart3 {...iconProps} />;
      case 'graduation-cap':
        return <GraduationCap {...iconProps} />;
      case 'truck':
        return <Truck {...iconProps} />;
      case 'trending-up':
        return <TrendingUp {...iconProps} />;
      default:
        return <ShoppingCart {...iconProps} />;
    }
  };

  const categorias = ["Todos", "Web Development", "Mobile App", "Automatizacion",];

  return (
    <div className="min-h-screen bg-crema">
      {/* Header */}
      <section className="py-16 px-4 bg-naranja-oscuro text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestro Portafolio</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Proyectos exitosos que demuestran nuestra experiencia y capacidad de innovación
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 bg-crema">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="bg-crema rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                {/* Project Image */}
                <div className="bg-naranja-claro h-48 flex items-center justify-center">
                  {renderIcon(proyecto.imagen)}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-verde text-white text-xs font-medium px-3 py-1 rounded-full">
                      {proyecto.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-naranja-oscuro mb-3">{proyecto.titulo}</h3>
                  <p className="text-gray-700 mb-4">{proyecto.descripcion}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-verde-claro text-verde text-xs font-medium px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                      Ver proyecto
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded border border-gray-600 hover:border-gray-700 transition-colors">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-verde-claro">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-naranja-oscuro mb-2">2+</div>
              <div className="text-gray-700">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-naranja-oscuro mb-2">98%</div>
              <div className="text-gray-700">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-naranja-oscuro mb-2">24/7</div>
              <div className="text-gray-700">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-naranja-oscuro mb-2">1</div>
              <div className="text-gray-700">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-naranja-oscuro text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Estamos listos para convertir tu idea en realidad. Hablemos sobre tu próximo proyecto.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Iniciar conversación
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portafolio;