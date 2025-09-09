import React from "react";
import { motion } from "framer-motion"; // 👈 import motion
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  const workshops = [
    {
      title: "Rewriting the Problem — Rewriting My Story",
      desc: "Kids learn to separate who they are from what they’re struggling with—through stories, metaphors, and creative play—building self-awareness, resilience, and confidence.",
    },
    {
      title: "Social Media Awareness",
      desc: "Interactive simulations explore communication, emotions, cyberbullying, FOMO, focus and lifestyle—leading to phone-free creativity and practical digital-detox strategies.",
    },
    {
      title: "Art & Expressive Therapy",
      desc: "Drawing, collage, writing, movement and symbolism help participants release safely, understand themselves, and create personal anchors for resilience.",
    },
    {
      title: "Dance Movement Therapy",
      desc: "Mind–body sessions use posture, mirroring, storytelling, and relaxation to unlock expression, release tension, and restore balance.",
    },
    {
      title: "Emotional Development & Aggression Management",
      desc: "Builds emotion awareness, coping, empathy, problem-solving, and assertive communication—replacing aggression with choice and connection.",
    },
    {
      title: "Embrace & Understand Parenting",
      desc: "A multi-session, child-centred program on boundaries, defence mechanisms, big feelings, congruence, and self-concept—plus a “reverse control room” for perspective-taking.",
    },
  ];

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-lg font-semibold mb-6">Transformative Workshops</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              className="relative p-4 border rounded-md bg-white shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Gradient ribbon (top border) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500"></div>

              <h4 className="font-semibold mt-2">{w.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
