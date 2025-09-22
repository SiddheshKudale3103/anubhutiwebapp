import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-20">
      {/* Image container */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {images.map((img, i) =>
            i === index ? (
              <motion.img
                key={i}
                src={img}
                alt="hero"
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            ) : null
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/70" /> {/* overlay */}
      </div>

      {/* Text content */}
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
          <Link
            to="/workshops"
            className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow"
          >
            Book a School Workshop
          </Link>
          <Link
            to="/contact"
            className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md"
          >
            Talk to a Psychologist
          </Link>
        </div>
      </div>
    </section>
  );
}
