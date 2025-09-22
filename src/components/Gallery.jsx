import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const modules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,svg}", {
      eager: true,
    });
    const imgs = Object.values(modules).map((m) => m.default);
    setImages(imgs);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-8">Some Highlights</h2>

      <div className="relative overflow-hidden rounded-2xl shadow-xl w-full aspect-video bg-white">
        <AnimatePresence mode="wait" custom={direction}>
          {images.length > 0 && (
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-2xl"
              initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 100 || velocity.x > 500) {
                  prevSlide();
                } else if (offset.x < -100 || velocity.x < -500) {
                  nextSlide();
                }
              }}
            />
          )}
        </AnimatePresence>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-accent scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
