"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const fieldBase =
  "w-full rounded-md bg-light-surface-container-lowest border border-light-outline-variant py-3 text-body-md text-light-on-surface placeholder:text-light-outline transition duration-state-change ease-state-change focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const msg = [
      "Hola, quisiera cotizar un servicio de transporte.",
      `Nombre o institución: ${d.get("nombre")}`,
      `Correo: ${d.get("correo")}`,
      d.get("telefono") ? `Teléfono: ${d.get("telefono")}` : "",
      `Servicio: ${d.get("servicio")}`,
      d.get("detalles") ? `Detalles: ${d.get("detalles")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    form.reset();
    setSent(true);
  }

  return (
    <form className="flex flex-col gap-gutter-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
        <label className="flex flex-col gap-gutter-xs">
          <span className="font-body text-label-md text-light-on-surface">Nombre o institución</span>
          <input
            name="nombre"
            type="text"
            required
            autoComplete="organization"
            placeholder="Ej. Unidad Educativa / Empresa"
            className={`${fieldBase} px-gutter-md`}
          />
        </label>
        <label className="flex flex-col gap-gutter-xs">
          <span className="font-body text-label-md text-light-on-surface">Correo electrónico</span>
          <div className="relative flex items-center">
            <Mail size={16} className="text-light-outline absolute left-3 pointer-events-none" aria-hidden="true" />
            <input
              name="correo"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              placeholder="correo@institucion.com"
              className={`${fieldBase} pl-10 pr-gutter-md`}
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
        <label className="flex flex-col gap-gutter-xs">
          <span className="font-body text-label-md text-light-on-surface">Teléfono / WhatsApp</span>
          <input
            name="telefono"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="099 000 0000"
            className={`${fieldBase} px-gutter-md`}
          />
        </label>
        <label className="flex flex-col gap-gutter-xs">
          <span className="font-body text-label-md text-light-on-surface">Tipo de servicio</span>
          <select name="servicio" className={`${fieldBase} px-gutter-md`}>
            <option value="Transporte Escolar">Transporte Escolar</option>
            <option value="Transporte de Personal">Transporte de Personal</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-gutter-xs">
        <span className="font-body text-label-md text-light-on-surface">Detalles de la ruta</span>
        <textarea
          name="detalles"
          rows={3}
          placeholder="Sector de origen, destino, horarios o número aproximado de pasajeros..."
          className={`${fieldBase} px-gutter-md`}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-gutter-md pt-gutter-sm">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded-full bg-light-primary text-light-on-primary font-body transition duration-state-change ease-state-change hover:bg-light-primary-container active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
        >
          <span className="text-label-lg">Enviar solicitud de cotización</span>
        </button>
        {sent && (
          <span role="status" className="font-body text-body-sm text-light-primary">
            Abrimos WhatsApp con tu solicitud. ¡Te contactaremos pronto!
          </span>
        )}
      </div>
    </form>
  );
}