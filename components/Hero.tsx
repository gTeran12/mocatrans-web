import Image from "next/image";
import { Bus, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-light-surface-container-low pt-12 pb-24 border-b border-light-outline-variant">
      <div className="max-w-7xl mx-auto px-gutter-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-gutter-lg animate-hero-enter">
          <div className="inline-flex items-center self-start gap-gutter-sm px-gutter-md py-1.5 rounded-full bg-light-secondary-container text-light-on-secondary-container">
            <ShieldCheck size={20} aria-hidden="true" />
            <span className="font-body text-label-md">
              Servicio Escolar e Institucional · Guayaquil
            </span>
          </div>

          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance">
            Movilidad segura y puntual para tu comunidad educativa o empresa.
          </h1>

          <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
            Conectamos colegios, universidades y empresas en Guayaquil y
            Samborondón con unidades climatizadas, rutas optimizadas y atención
            directa en cada recorrido.
          </p>

          <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-xs">
            <a
              href="#formulario-cotizacion"
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded-full bg-light-primary text-light-on-primary font-body transition duration-state-change ease-state-change hover:bg-light-primary-container active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <span className="text-label-lg">Solicitar cotización</span>
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded-full bg-light-surface-container-lowest text-light-on-surface border border-light-outline-variant font-body transition duration-state-change ease-state-change hover:bg-light-surface-container active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <span className="text-label-lg">Ver unidades</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 animate-hero-enter-delay">
          <div className="relative rounded-xl overflow-hidden border border-light-outline-variant bg-light-surface-container-lowest">
            <Image
              src="/images/bus-escolar-guayaquil.jpeg"
              alt="Unidad moderna de transporte escolar e institucional de MOCATRANS C.A en Guayaquil"
              width={1280}
              height={720}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full aspect-video object-cover transition duration-card-hover ease-card-hover hover:scale-[1.02]"
            />
            <div className="p-gutter-md bg-light-surface-container-lowest border-t border-light-outline-variant flex items-center justify-between gap-gutter-md">
              <div className="flex items-center gap-gutter-sm">
                <Bus size={24} className="text-light-primary" aria-hidden="true" />
                <span className="font-body text-title-md text-light-on-surface">
                  Flota Escolar &amp; Personal
                </span>
              </div>
              <span className="font-label text-label-sm text-light-on-surface-variant tabular-nums">
                A/C · GPS · Cinturones
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}