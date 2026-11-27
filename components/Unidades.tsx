import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ficha = [
  { label: "Capacidad por unidad", value: "15 – 18 pasajeros" },
  { label: "Seguridad activa", value: "GPS + Disco PARE" },
  { label: "Habilitación", value: "Escolar e Institucional" },
  { label: "Cobertura", value: "Guayaquil y Samborondón" },
];

export function Unidades() {
  return (
    <section id="unidades" className="py-section max-w-7xl mx-auto px-gutter-lg">
      <div className="flex flex-col gap-gutter-sm max-w-xl mb-gutter-xl">
        <h2 className="font-headline text-display-md-mobile md:text-display-md text-light-on-surface">
          Nuestras unidades
        </h2>
        <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
          Furgonetas amarillas habilitadas para servicio escolar e institucional, con mantenimiento preventivo al día.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
        <div className="lg:col-span-7 rounded-xl overflow-hidden border border-light-outline-variant bg-light-surface-container-lowest">
          <Image
            src="/images/unidades.jpeg"
            alt="Interior ergonómico y climatizado de furgoneta MOCATRANS C.A"
            width={1200}
            height={640}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="w-full h-80 object-cover"
          />
          <div className="p-gutter-lg flex flex-col gap-gutter-xs">
            <h3 className="font-headline text-title-lg text-light-on-surface">
              Cabina amplia y climatizada
            </h3>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Asientos reclinables, cinturones individuales y ventilación uniforme para trayectos cómodos.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-gutter-lg justify-between">
          <dl className="bg-light-surface-container-low rounded-xl border border-light-outline-variant p-gutter-lg flex flex-col gap-gutter-md flex-1 justify-center">
            {ficha.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center justify-between gap-gutter-md ${
                  i < ficha.length - 1 ? "border-b border-light-outline-variant pb-gutter-sm" : ""
                }`}
              >
                <dt className="font-body text-body-md text-light-on-surface-variant">{f.label}</dt>
                <dd className="font-label text-label-sm text-light-on-surface tabular-nums text-right">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#contacto"
            className="bg-light-primary text-light-on-primary rounded-xl p-gutter-lg flex items-center justify-between gap-gutter-md transition duration-card-hover ease-card-hover hover:bg-light-primary-container hover:-translate-y-1"
          >
            <div className="flex flex-col gap-gutter-xs">
              <h3 className="font-headline text-title-lg">¿Necesitas una ruta a medida?</h3>
              <p className="font-body text-body-sm text-light-on-primary-container">
                Coordinamos horarios y paradas según tu institución.
              </p>
            </div>
            <ArrowRight size={28} className="shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}