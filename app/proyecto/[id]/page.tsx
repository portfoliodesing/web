"use client"

import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { getProjectById } from "@/lib/projects-data"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(Number.parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {project.category.toUpperCase()}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
              <span>Cliente: {project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Resumen del Proyecto</h2>
          <p className="text-xl leading-relaxed text-muted-foreground">{project.overview}</p>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="px-6 mb-24 bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">El Desafío</h2>
          <p className="text-lg leading-relaxed">{project.challenge}</p>
        </div>
      </div>

      {/* Image 1 */}
      <div className="px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={project.images[0] || "/placeholder.svg"}
              alt={`${project.title} - Detalle 1`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Proceso Creativo</h2>
          <p className="text-lg leading-relaxed">{project.process}</p>
        </div>
      </div>

      {/* Image Grid 2-3 */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img
                src={project.images[1] || "/placeholder.svg"}
                alt={`${project.title} - Detalle 2`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img
                src={project.images[2] || "/placeholder.svg"}
                alt={`${project.title} - Detalle 3`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="px-6 mb-24 bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">La Solución</h2>
          <p className="text-lg leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Image 4 */}
      <div className="px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={project.images[3] || "/placeholder.svg"}
              alt={`${project.title} - Aplicación`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Resultados e Impacto</h2>
          <p className="text-lg leading-relaxed mb-12">{project.results}</p>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-xl">
              <p className="text-lg italic mb-4">"{project.testimonial}"</p>
              <p className="font-semibold">— {project.testimonialAuthor}</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16 mb-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl mb-8 opacity-90">Trabajemos juntos para crear algo extraordinario</p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            Contactar
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
