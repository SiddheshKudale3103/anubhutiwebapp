import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-16 bg-anubhuti px-6 text-center">
      <motion.h2
        className="text-2xl font-bold text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Vision Behind Anubhúti Healing Space
      </motion.h2>
      <motion.p
        className="mt-4 max-w-3xl mx-auto text-slate-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        To build a world where mental well-being begins at the roots—empowering
        children, families, and communities to grow with resilience, awareness,
        and balance, long before struggles become crises.
      </motion.p>
      <p className="mt-6 italic font-medium text-accent">
        “Every child and adult living with clarity of mind, strength of heart,
        and the confidence to face life’s challenges with creativity, courage,
        and compassion.”
      </p>
    </section>
  );
}
