import { Eye, Flag } from "lucide-react";

// TODO: reemplazar por la misión y visión oficiales antes de publicar
const bloques = [
  {
    id: "mision",
    Icon: Flag,
    title: "Misión",
    text: "[Espacio para tu Misión] Describe aquí el propósito diario de MOCATRANS C.A: cómo garantizan un traslado escolar y de personal seguro, puntual y confortable para las instituciones y familias de Guayaquil.",
  },
  {
    id: "vision",
    Icon: Eye,
    title: "Visión",
    text: "[Espacio para tu Visión] Define aquí la meta de MOCATRANS C.A a mediano y largo plazo: consolidarse como referente en transporte escolar e institucional moderno, ampliando su flota y tecnología de seguimiento.",
  },
];

export function Identidad() {
  return (
    <section
      id="nosotros"
      className="py-section bg-light-surface-container-low border-y border-light-outline-variant"
    >
      <div className="max-w-7xl mx-auto px-gutter-lg">
        <div className="flex flex-col gap-gutter-sm max-w-xl mb-gutter-xl">
          <h2 className="font-headline text-display-md-mobile md:text-display-md text-light-on-surface">
            Nuestra identidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
          {bloques.map(({ id, Icon, title, text }) => (
            <article
              key={id}
              id={id}
              className="h-full scroll-mt-24 bg-light-surface-container-lowest rounded-lg border border-light-outline-variant p-gutter-xl flex flex-col gap-gutter-md transition duration-card-hover ease-card-hover hover:-translate-y-1"
            >
              <div className="inline-flex items-center gap-gutter-sm">
                <Icon size={28} className="text-light-primary" aria-hidden="true" />
                <h3 className="font-headline text-headline-md text-light-on-surface">{title}</h3>
              </div>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}