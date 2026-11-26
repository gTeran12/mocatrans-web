import Image from "next/image";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

const linkClass =
  "font-body text-body-sm text-light-on-primary-container hover:text-light-on-primary transition duration-state-change ease-state-change";

export function Footer() {
  return (
    <footer className="bg-light-primary text-light-on-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-gutter-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-xl pb-12 border-b border-light-primary-container">
          <div className="lg:col-span-5 flex flex-col gap-gutter-md">
            <div className="flex items-center gap-gutter-sm">
              <Image
                src="/logo.png"
                alt={`Logo de ${site.name}`}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-contain bg-light-surface-container-lowest p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-headline text-title-lg text-light-on-primary leading-tight">
                  {site.name}
                </span>
                <span className="font-label text-label-sm text-light-on-primary-container">
                  Transporte Escolar y Personal
                </span>
              </div>
            </div>
            <p className="font-body text-body-sm text-light-on-primary-container max-w-sm text-pretty">
              Movilidad segura, climatizada y puntual para colegios, universidades y empresas en Guayaquil y Samborondón.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página" className="lg:col-span-2 flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-label-lg text-light-on-primary">Navegación</h2>
            <ul className="flex flex-col gap-gutter-xs">
              {navLinks
                .filter((l) => l.href !== "#contacto")
                .map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={linkClass}>{l.label}</a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-label-lg text-light-on-primary">Servicios</h2>
            <ul className="flex flex-col gap-gutter-xs">
              <li><a href="#servicios" className={linkClass}>Transporte Escolar</a></li>
              <li><a href="#servicios" className={linkClass}>Transporte de Personal</a></li>
              <li><a href="#contacto" className={linkClass}>Cotizar ruta</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-label-lg text-light-on-primary">Contacto</h2>
            <ul className="flex flex-col gap-gutter-xs text-light-on-primary-container">
              <li className="flex items-center gap-gutter-xs">
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${site.phone}`} className="font-body text-body-sm tabular-nums">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-gutter-xs">
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="font-body text-body-sm">{site.email}</a>
              </li>
              <li className="flex items-center gap-gutter-xs">
                <MapPin size={16} aria-hidden="true" />
                <span className="font-body text-body-sm">{site.city}, Ecuador</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-gutter-lg flex flex-col sm:flex-row items-center justify-between gap-gutter-md">
          <p className="font-body text-body-sm text-light-on-primary-container">
            © 2026 {site.name}. Todos los derechos reservados.
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-gutter-xs font-body text-label-lg text-light-on-primary hover:text-light-on-primary-container transition duration-state-change ease-state-change"
          >
            <span>Volver arriba</span>
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}