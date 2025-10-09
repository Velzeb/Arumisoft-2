import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Procesos from './pages/Procesos';
import Portafolio from './pages/Portafolio';
import Contactanos from './pages/Contactanos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/procesos" element={<Procesos />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
