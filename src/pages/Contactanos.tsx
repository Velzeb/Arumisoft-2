import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Briefcase } from 'lucide-react';

const Contactanos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    servicio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      mensaje: '',
      servicio: ''
    });
  };

  const contactoInfo = [
    {
      icono: "mail",
      titulo: "Email",
      info: "arumisoft@gmail.com",
      descripcion: "Respuesta en menos de 24 horas"
    },
    {
      icono: "phone",
      titulo: "Teléfono",
      info: "+ (591) 71614166",
      descripcion: "Lun - Vie: 9:00 AM - 6:00 PM"
    },
    {
      icono: "map-pin",
      titulo: "Oficina",
      info: "Buenos aires, Ciudad",
      descripcion: "Visítanos en persona"
    }
  ];

  const renderIcon = (iconType: string) => {
    const iconProps = { size: 24, className: "text-white" };
    
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
    <div className="min-h-screen bg-crema">
      {/* Header */}
      <section className="py-16 px-4 bg-naranja-oscuro text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Háblanos sobre tu proyecto y cómo podemos trabajar juntos.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-crema p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-naranja-oscuro mb-6">Envíanos un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Servicio de interés</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="apps-moviles">Aplicaciones Móviles</option>
                    <option value="consultoria">Consultoría TI</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naranja resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-naranja-oscuro mb-6">Información de contacto</h2>
                <p className="text-gray-700 mb-8">
                  Estamos disponibles para responder tus preguntas y discutir cómo podemos ayudarte
                  con tu próximo proyecto tecnológico.
                </p>
              </div>

              {contactoInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-crema rounded-lg">
                  <div className="bg-naranja text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {renderIcon(item.icono)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-naranja-oscuro mb-1">{item.titulo}</h3>
                    <p className="text-gray-800 font-medium mb-1">{item.info}</p>
                    <p className="text-gray-600 text-sm">{item.descripcion}</p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="bg-verde-claro p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-naranja-oscuro mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    {renderIcon('facebook')}
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    {renderIcon('twitter')}
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    {renderIcon('linkedin')}
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    {renderIcon('mail')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) 
      <section className="py-16 px-4 bg-crema">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-naranja-oscuro mb-8">Encuéntranos</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-4 block text-naranja">🗺️</span>
              <p className="text-gray-600">Mapa interactivo próximamente</p>
              <p className="text-sm text-gray-500 mt-2">Calle Principal 123, Ciudad, País</p>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Contactanos;