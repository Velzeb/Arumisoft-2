import React from 'react';
import { Rocket, Target, Handshake } from 'lucide-react';
import Iridescence from '../Backgrounds/Iridescence/Iridescence';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <Iridescence color={[1, 0.5, 0.2]} mouseReact={false} amplitude={0.1} speed={1.0} />
      </div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-50">
            Bienvenidos a ArumiSoft
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Soluciones tecnológicas innovadoras para tu negocio. Desarrollamos software
            de calidad que impulsa el crecimiento de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Conoce nuestros servicios
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Ver portafolio
            </button>
          </div>
        </div>
      </section>

  {/* Features Section */}
  <section className="py-16 px-4 bg-crema">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-naranja-oscuro text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-2xl text-naranja" />
              </div>
              <h3 className="text-xl font-semibold text-naranja-oscuro mb-3">Innovación</h3>
              <p className="text-gray-600">Utilizamos las últimas tecnologías para crear soluciones modernas y eficientes.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-2xl text-naranja" />
              </div>
              <h3 className="text-xl font-semibold text-naranja-oscuro mb-3">Calidad</h3>
              <p className="text-gray-600">Nos enfocamos en la calidad del código y la experiencia del usuario.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-naranja-claro rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-2xl text-naranja" />
              </div>
              <h3 className="text-xl font-semibold text-naranja-oscuro mb-3">Compromiso</h3>
              <p className="text-gray-600">Trabajamos de la mano con nuestros clientes para lograr sus objetivos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;