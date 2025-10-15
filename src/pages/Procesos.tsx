import React from 'react';
import { ClipboardList, Palette, Settings, TestTube, Rocket, Wrench } from 'lucide-react';

const Procesos: React.FC = () => {
  const procesos = [
    {
      paso: "01",
      titulo: "Análisis y Planificación",
      descripcion: "Entendemos tus necesidades y objetivos para crear un plan detallado del proyecto.",
      icono: "clipboard",
      color: "bg-naranja"
    },
    {
      paso: "02",
      titulo: "Diseño y Prototipado",
      descripcion: "Creamos wireframes, mockups y prototipos interactivos para validar la solución.",
      icono: "palette",
      color: "bg-naranja-claro"
    },
    {
      paso: "03",
      titulo: "Desarrollo",
      descripcion: "Implementamos la solución utilizando las mejores prácticas y tecnologías modernas.",
      icono: "settings",
      color: "bg-verde"
    },
    {
      paso: "04",
      titulo: "Testing y QA",
      descripcion: "Realizamos pruebas exhaustivas para asegurar la calidad y funcionalidad.",
      icono: "testtube",
      color: "bg-verde-claro"
    },
    {
      paso: "05",
      titulo: "Despliegue",
      descripcion: "Lanzamos la solución en producción con monitoreo continuo.",
      icono: "rocket",
      color: "bg-naranja-oscuro"
    },
    {
      paso: "06",
      titulo: "Mantenimiento",
      descripcion: "Proporcionamos soporte continuo y actualizaciones para mantener tu sistema al día.",
      icono: "wrench",
      color: "bg-crema"
    }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'clipboard':
        return <ClipboardList className="text-3xl text-naranja" />;
      case 'palette':
        return <Palette className="text-3xl text-naranja" />;
      case 'settings':
        return <Settings className="text-3xl text-naranja" />;
      case 'testtube':
        return <TestTube className="text-3xl text-naranja" />;
      case 'rocket':
        return <Rocket className="text-3xl text-naranja" />;
      case 'wrench':
        return <Wrench className="text-3xl text-naranja" />;
      default:
        return <Settings className="text-3xl text-naranja" />;
    }
  };

  return (
    <div className="min-h-screen bg-crema">
      {/* Header with image background */}
      <section
        className="py-16 px-4 text-white"
        style={{
          backgroundImage: `url('/src/assets/procesos.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center">
          <div className="bg-black/50 inline-block p-6 rounded">
            <h1 className="text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Metodología probada que garantiza resultados excepcionales en cada proyecto
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procesos.map((proceso, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < procesos.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-naranja transform translate-x-4 z-0"></div>
                )}

                <div className="relative z-10 bg-crema p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`${proceso.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4`}>
                      {proceso.paso}
                    </div>
                    <span className="text-3xl text-naranja">{renderIcon(proceso.icono)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-naranja-oscuro mb-3">{proceso.titulo}</h3>
                  <p className="text-gray-700">{proceso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Procesos;