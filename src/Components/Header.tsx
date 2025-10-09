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
  const logo = '/src/assets/logon.jpg';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crema shadow-md">
      <PillNav
        logo={logo}
        logoAlt="ArumiSoft Logo"
        items={navItems}
        activeHref={location.pathname}
        ease="power2.easeOut"
        baseColor="#F17F26" // naranja-oscuro (texto base)
        pillColor="#FFF2D2" // crema (fondo de las pills)
        hoveredPillTextColor="#ffffff" // naranja-oscuro (texto al hacer hover)
        pillTextColor="#F17F26" // naranja-oscuro (texto de las pills)
      />
    </header>
  );
};

export default Header;