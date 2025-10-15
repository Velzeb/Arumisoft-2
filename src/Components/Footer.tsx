import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const renderIcon = (iconType: string) => {
    const iconProps = { size: 20, className: "text-white" };

    switch (iconType) {
      case 'mail':
        return <Mail {...iconProps} />;
      case 'phone':
        return <Phone {...iconProps} />;
      case 'map-pin':
        return <MapPin {...iconProps} />;
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'linkedin':
        return <Briefcase {...iconProps} />;
      default:
        return <Mail {...iconProps} />;
    }
  };

  return (
    <footer className="bg-naranja-oscuro text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/src/assets/logon.jpg"
                alt="ArumiSoft Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold">ArumiSoft</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento
              de tu negocio. Transformamos ideas en realidad digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-crema transition-colors">
                {renderIcon('facebook')}
              </a>
              <a href="#" className="hover:text-crema transition-colors">
                {renderIcon('twitter')}
              </a>
              <a href="#" className="hover:text-crema transition-colors">
                {renderIcon('linkedin')}
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/procesos" className="text-gray-300 hover:text-white transition-colors">Procesos</a></li>
              <li><a href="/portafolio" className="text-gray-300 hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="/contactanos" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="mr-3">
                  {renderIcon('mail')}
                </div>
                <span className="text-gray-300">contacto@arumisoft.com</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  {renderIcon('phone')}
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  {renderIcon('map-pin')}
                </div>
                <span className="text-gray-300">Calle Principal 123, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ArumiSoft. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;