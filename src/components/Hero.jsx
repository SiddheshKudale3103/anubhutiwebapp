import React from "react";

export default function Hero() {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Play. Create. Heal.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Mental well-being for children, parents, and educators—grounded in
          psychology, powered by creativity, and designed for real life. Based
          in Pune, we bring research-backed workshops and counselling to
          schools, families, communities, and organizations.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/workshops"
            className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow"
          >
            Book a School Workshop
          </a>
          <a
            href="/contact"
            className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md"
          >
            Talk to a Psychologist
          </a>
        </div>
      </div>
    </section>
  );
}
