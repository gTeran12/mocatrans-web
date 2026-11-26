export const site = {
  name: "MOCATRANS S.A",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Transporte escolar y de personal seguro, climatizado y puntual en Guayaquil y Samborondón.",
  phone: "+593994365932", // REEMPLAZAR por el real
  phoneDisplay: "+593 99 436 5932", // REEMPLAZAR por el real
  whatsapp: "593994365932", // REEMPLAZAR
  email: "contacto@mocatrans.com.ec",
  city: "Guayaquil",
  region: "Guayas",
  country: "EC",
  areaServed: ["Guayaquil", "Samborondón"],
};

export const whatsappUrl = (
  msg = "Hola, quisiera cotizar un servicio de transporte."
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;