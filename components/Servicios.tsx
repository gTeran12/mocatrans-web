import Image from "next/image";
import { ArrowRight, Briefcase, CircleCheck, GraduationCap } from "lucide-react";

const servicios = [
  {
    badge: "Colegios y Universidades",
    Icon: GraduationCap,
    title: "Transporte Escolar",
    text: "Recorridos puerta a puerta en Guayaquil y sectores aledaños, priorizando puntualidad en horarios de entrada y salida.",
    image: "/images/transporte-escolar-guayaquil.jpg",
    alt: "Estudiantes y pasajeros abordando unidad escolar MOCATRANS C.A",
    items: [
      "Cinturones en cada asiento",
      "Comunicación con padres",
      "Unidades climatizadas",
      "Conductores profesionales",
    ],
    cta: "Consultar ruta escolar",
  },
  {
    badge: "Empresas e Industrias",
    Icon: Briefcase,
    title: "Transporte de Personal",
    text: "Movilización continua para equipos administrativos y operativos en horarios fijos o rotativos, respaldada por nuestra experiencia institucional.",
    image: "/images/transporte-de-personal-guayaquil.jpg",
    alt: "Interior climatizado de unidad corporativa MOCATRANS C.A",
    items: [
      "Rutas corporativas a medida",
      "Turnos diurnos y nocturnos",
      "Facturación empresarial",
      "Control de puntualidad",
    ],
    cta: "Solicitar propuesta corporativa",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-section max-w-7xl mx-auto px-gutter-lg">
      <div className="flex flex-col gap-gutter-sm max-w-xl mb-gutter-xl">
        <h2 className="font-headline text-display-md-mobile md:text-display-md text-light-on-surface text-balance">
          Servicios diseñados para cada ruta
        </h2>
        <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
          Dos líneas de operación independientes para atender a instituciones educativas y empresas con la misma puntualidad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-xl items-stretch">
        {servicios.map(({ badge, Icon, title, text, image, alt, items, cta }) => (
          <article
            key={title}
            className="h-full bg-light-surface-container-lowest rounded-xl border border-light-outline-variant overflow-hidden flex flex-col justify-between transition duration-card-hover ease-card-hover hover:-translate-y-1"
          >
            <div>
              <Image
                src={image}
                alt={alt}
                width={800}
                height={480}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-60 object-cover"
              />
              <div className="p-gutter-xl flex flex-col gap-gutter-md">
                <div className="inline-flex items-center self-start gap-gutter-xs px-3 py-1 rounded-full bg-light-surface-variant text-light-on-surface-variant">
                  <Icon size={16} className="text-light-primary" aria-hidden="true" />
                  <span className="font-body text-label-md">{badge}</span>
                </div>
                <h3 className="font-headline text-headline-lg text-light-on-surface">{title}</h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">{text}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-sm pt-gutter-xs">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-gutter-sm">
                      <CircleCheck size={16} className="text-light-primary shrink-0" aria-hidden="true" />
                      <span className="font-body text-body-sm text-light-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <footer className="px-gutter-xl pb-gutter-xl pt-gutter-xs">
              <a
                href="#contacto"
                className="inline-flex items-center gap-gutter-xs font-body text-label-lg text-light-primary hover:underline"
              >
                <span>{cta}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}