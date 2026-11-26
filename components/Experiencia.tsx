const clients = [
  {
    name: "CNEL EP",
    sector: "Sector eléctrico",
    logo: (
      <svg viewBox="0 0 120 44" className="h-10 w-auto" aria-hidden="true">
        <path d="M18 32 C6 26, 8 10, 26 8 C38 6, 48 12, 46 18" fill="none" stroke="#EAB308" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 35 C34 40, 48 34, 48 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        <text x="58" y="27" textAnchor="middle" className="font-headline" fontWeight="700" fontSize="18" fill="#16428B">CNEL</text>
        <text x="96" y="27" textAnchor="middle" className="font-headline" fontWeight="700" fontSize="10" fill="#DC2626">EP</text>
      </svg>
    ),
  },
  {
    name: "ESPOL",
    sector: "Educación superior",
    logo: (
      <svg viewBox="0 0 120 44" className="h-10 w-auto" aria-hidden="true">
        <text x="60" y="29" textAnchor="middle" className="font-headline" fontWeight="700" fontSize="24" letterSpacing="-1" fill="#191C1E">espol</text>
        <rect x="22" y="34" width="76" height="3" rx="1.5" fill="#002C69" />
      </svg>
    ),
  },
  {
    name: "Alemán Humboldt",
    sector: "Unidad educativa",
    logo: (
      <svg viewBox="0 0 80 44" className="h-11 w-auto" aria-hidden="true">
        <rect x="16" y="6" width="14" height="32" fill="#191C1E" />
        <polygon points="34,38 42,6 50,38" fill="#DC2626" />
        <rect x="54" y="6" width="12" height="32" fill="#EAB308" />
      </svg>
    ),
  },
  {
    name: "PROEXPO",
    sector: "Sector exportador",
    logo: (
      <svg viewBox="0 0 120 44" className="h-10 w-auto" aria-hidden="true">
        <circle cx="24" cy="22" r="13" fill="none" stroke="#191C1E" strokeWidth="2" />
        <polygon points="18,26 24,14 30,26" fill="#16428B" />
        <text x="76" y="27" textAnchor="middle" className="font-headline" fontWeight="700" fontSize="15" fill="#191C1E">PROEXPO</text>
      </svg>
    ),
  },
  {
    name: "INSTUGO S.A.",
    sector: "Ingeniería y obras",
    logo: (
      <svg viewBox="0 0 120 44" className="h-10 w-auto" aria-hidden="true">
        <circle cx="26" cy="22" r="12" fill="#0062A2" opacity="0.18" />
        <circle cx="26" cy="22" r="8" fill="none" stroke="#002C69" strokeWidth="2.5" />
        <text x="78" y="26" textAnchor="middle" className="font-headline" fontWeight="700" fontSize="14" fill="#002C69">INSTUGO</text>
      </svg>
    ),
  },
];

export function Experiencia() {
  return (
    <section
      id="experiencia"
      aria-label="Instituciones que confían en nosotros"
      className="max-w-7xl mx-auto px-gutter-lg -mt-10 relative z-10"
    >
      <div className="bg-light-surface-container-lowest rounded-xl border border-light-outline-variant p-gutter-lg lg:p-gutter-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-gutter-sm mb-gutter-lg">
          <div>
            <p className="font-body text-label-md text-light-primary">Nuestra experiencia</p>
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Instituciones y empresas atendidas
            </h2>
          </div>
          <p className="font-body text-body-sm text-light-on-surface-variant">
            Trayectoria comprobada en Guayaquil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter-md items-stretch">
          {clients.map((c) => (
            <article
              key={c.name}
              className="h-full bg-light-surface-container-low rounded-lg border border-light-outline-variant p-gutter-md flex flex-col items-center justify-between text-center gap-gutter-sm transition duration-card-hover ease-card-hover hover:-translate-y-1"
            >
              <div className="h-14 flex items-center justify-center">{c.logo}</div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-headline text-title-md text-light-on-surface">{c.name}</h3>
                <p className="font-body text-body-sm text-light-on-surface-variant">{c.sector}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}