"use client"

import { useState } from "react"
import { Menu, X, Mail, Linkedin, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = {
  packaging: [
    {
      id: 1,
      title: "Empaque Premium Cosmético",
      client: "Beauty Lab Co.",
      description: "Diseño de empaque minimalista para línea de productos de cuidado facial premium.",
      year: "2024",
      image: "/packaging-design-project-.jpg?height=600&width=800&query=premium+cosmetic+packaging+design",
    },
  ],
  branding: [
    {
      id: 2,
      title: "Identidad Corporativa Tech",
      client: "InnovateLab",
      description:
        "Desarrollo completo de identidad de marca para startup tecnológica especializada en soluciones de inteligencia artificial.",
      year: "2024",
      image: "/branding-identity-design-project-.jpg?height=600&width=800&query=tech+brand+identity+design",
    },
  ],
  flyers: [
    {
      id: 3,
      title: "Campaña de Flyers Evento Cultural",
      client: "Festival de Arte Urbano",
      description: "Diseño de serie de flyers para festival de arte callejero con estética vibrante y urbana.",
      year: "2024",
      image: "/urban-art-festival-flyer-design.jpg",
    },
  ],
  senaletica: [
    {
      id: 4,
      title: "Señalética Hospital",
      client: "Centro Médico Sur",
      description:
        "Sistema completo de wayfinding para hospital de especialidades con 5 pisos y más de 200 consultorios.",
      year: "2024",
      image: "/signage-wayfinding-design-.jpg?height=600&width=800&query=hospital+wayfinding+signage",
    },
  ],
  album: [
    {
      id: 5,
      title: "Portada Álbum Indie",
      client: "The Midnight Sons",
      description:
        "Diseño de portada para álbum debut de banda indie rock que explora temas de nostalgia y crecimiento personal.",
      year: "2024",
      image: "/indie-rock-album-cover-design-artistic.jpg",
    },
  ],
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Proyectos
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#trabajos" className="text-gray-700 hover:text-gray-900 transition-colors">
                Trabajos
              </a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sobre mí
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#trabajos"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trabajos
              </a>
              <a
                href="#sobre-mi"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre mí
              </a>
              <a
                href="#contacto"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/modern-graphic-design-workspace-creative-studio.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Diseño Gráfico con Propósito</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty">
            Creando identidades visuales memorables que conectan marcas con sus audiencias
          </p>
          <a
            href="#trabajos"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="trabajos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Proyectos Destacados</h2>

          {/* Packaging Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Packaging</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.packaging.map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver proyecto completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Branding Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Branding</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.branding.map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver proyecto completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Flyers Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Flyers & Material Promocional</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.flyers.map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver proyecto completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Señalética Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Señalética & Wayfinding</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.senaletica.map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver proyecto completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Album Cover Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Portadas de Álbum</h3>
            <div className="grid grid-cols-1 gap-8">
              {projects.album.map((project) => (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.client} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver proyecto completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img src="/graphic-designer-portrait-professional.jpg" alt="Designer" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quién soy</h3>
              <p className="text-gray-600 leading-relaxed">
                Soy diseñador gráfico con más de 8 años de experiencia creando identidades visuales que cuentan
                historias. Mi enfoque combina estrategia, creatividad y atención al detalle para entregar soluciones de
                diseño que no solo se ven bien, sino que funcionan.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ayudar a marcas y empresas a comunicar su esencia a través del diseño, creando conexiones auténticas con
                sus audiencias y generando impacto visual memorable.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocido como un referente en diseño estratégico que transforma negocios, combinando creatividad
                con pensamiento analítico para resolver desafíos complejos de comunicación visual.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Propuesta de Valor</h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrezco diseño con propósito: cada elemento visual está pensado estratégicamente para cumplir objetivos
                de negocio, combinando estética impecable con funcionalidad y resultados medibles.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="mailto:contacto@ejemplo.com"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Me encantaría conocer más sobre tu idea y cómo podemos trabajar juntos
          </p>
          <a
            href="mailto:contacto@ejemplo.com"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Proyectos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
