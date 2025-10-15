import React from 'react';
import { Rocket, Target, Handshake } from 'lucide-react';
import Iridescence from '../Backgrounds/Iridescence/Iridescence';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed full-viewport background that covers all Home sections */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <Iridescence color={[1, 0.5, 0.2]} mouseReact={true} amplitude={0.1} speed={1.0} />
      </div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-50">
            Bienvenidos a ArumiSoft
          </h1>
          <br></br>
           <br></br>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Soluciones tecnológicas innovadoras para tu negocio. Desarrollamos software
            de calidad que impulsa el crecimiento de tu empresa.
          </p>
           <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-green-200 text-green-500 font-bold py-3 px-8 rounded-lg transition-colors">
              Conoce nuestros servicios
            </button>

            
          </div>
        </div>
      </section>

  {/* Features Section */}
  <section className="py-16 px-4 bg-transparent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-50 text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovación</h3>
              <p className="text-white">Utilizamos las últimas tecnologías para crear soluciones modernas y eficientes.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Calidad</h3>
              <p className="text-white">Nos enfocamos en la calidad del código y la experiencia del usuario.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compromiso</h3>
              <p className="text-white">Trabajamos de la mano con nuestros clientes para lograr sus objetivos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;