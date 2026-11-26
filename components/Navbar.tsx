import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { site, whatsappUrl } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-light-surface-container-lowest border-b border-light-outline-variant">
      <div className="max-w-7xl mx-auto px-gutter-lg py-gutter-md flex items-center justify-between gap-gutter-lg">
        <a href="#inicio" className="group flex items-center gap-gutter-sm">
          <Image
            src="/logo.png"
            alt={`Logo de ${site.name}`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain bg-light-surface-container-low transition duration-state-change ease-state-change group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-headline text-title-md text-light-on-surface leading-none">
              {site.name}
            </span>
            <span className="font-label text-label-sm text-light-on-surface-variant">
              Transporte Escolar y Personal
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-gutter-lg"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-label-lg text-light-on-surface-variant transition duration-state-change ease-state-change hover:text-light-primary whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-3 rounded-full bg-light-primary text-light-on-primary font-body transition duration-state-change ease-state-change hover:bg-light-primary-container active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary shrink-0"
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span className="text-label-lg whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}