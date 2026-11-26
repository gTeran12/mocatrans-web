import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { site, whatsappUrl } from "@/lib/site";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="py-section bg-light-surface-container-low border-t border-light-outline-variant"
    >
      <div className="max-w-7xl mx-auto px-gutter-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
        <div className="lg:col-span-5 flex flex-col gap-gutter-lg">
          <div className="flex flex-col gap-gutter-sm">
            <h2 className="font-headline text-display-md-mobile md:text-display-md text-light-on-surface text-balance">
              Cotiza tu ruta hoy
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Escríbenos directamente por WhatsApp, llámanos o completa el formulario y te responderemos a la brevedad.
            </p>
          </div>

          <div className="flex flex-col gap-gutter-md bg-light-surface-container-lowest rounded-lg border border-light-outline-variant p-gutter-lg">
            <div className="flex items-center gap-gutter-md">
              <Phone size={24} className="text-light-primary" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-body text-label-md text-light-on-surface-variant">Teléfono</span>
                <a href={`tel:${site.phone}`} className="font-body text-title-md text-light-on-surface tabular-nums">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-gutter-md">
              <Mail size={24} className="text-light-primary" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-body text-label-md text-light-on-surface-variant">Correo electrónico</span>
                <a href={`mailto:${site.email}`} className="font-body text-title-md text-light-on-surface">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-gutter-md">
              <MapPin size={24} className="text-light-primary" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-body text-label-md text-light-on-surface-variant">Ciudad</span>
                <span className="font-body text-title-md text-light-on-surface">{site.city}, Ecuador</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded-full bg-light-primary text-light-on-primary font-body transition duration-state-change ease-state-change hover:bg-light-primary-container active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span className="text-label-lg">Escribir por WhatsApp</span>
            </a>
          </div>
        </div>

        <div
          id="formulario-cotizacion"
          className="lg:col-span-7 bg-light-surface-container-lowest rounded-xl border border-light-outline-variant p-gutter-xl"
        >
          <h3 className="font-headline text-headline-md text-light-on-surface mb-gutter-lg">
            Formulario de cotización
          </h3>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}