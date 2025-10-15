import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from '../Components/PillNav/PillNav';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Procesos', href: '/procesos' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Contactanos', href: '/contactanos' }
  ];

  // Logo personalizado
  const logo = '/src/assets/f.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[#F17F26]">
      <div className="w-full flex justify-center py-3">
        <PillNav
          logo={logo}
          logoAlt="ArumiSoft Logo"
          items={navItems}
          activeHref={location.pathname}
          ease="power2.easeOut"
          baseColor="#FFFFFF" // texto base dentro del header
          pillColor="#FFFFFF" // crema (fondo de las pills)
          hoveredPillTextColor="#F17F26" // naranja-oscuro (texto al hacer hover)
          pillTextColor="#F17F26" // naranja-oscuro (texto de las pills)
        />
      </div>
    </header>
  );
};

export default Header;