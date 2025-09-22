import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images from your assets folder
import DarshaniImg from "../assets/Founders/Darshani.jpg";
import DhanashriImg from "../assets/Founders/Dhanashri.jpg";

const founders = [
  {
    name: "Darshani Darwatkar",
    degree: "M.A Clinical Psychology, Vishwakarma University, Pune",
    linkedin: "https://www.linkedin.com/in/darshani-darwatkar-8528422b5",
    phone: "9011062197",
    bio: "Clinical Psychology postgraduate with strong interest in neuropsychology and diverse hands-on experience across rehabilitation centers, schools, and community settings...",
    img: DarshaniImg,
  },
  {
    name: "Dhanashri Patil",
    degree: "M.A Clinical Psychology, Fergusson College, Pune",
    linkedin: "https://www.linkedin.com/in/dhanashri-patil-b9ab21229",
    phone: "9511743719",
    bio: "Bachelor’s in Psychology from Abasaheb Garware College, passionate about child & clinical psychology with experience in hospitals and school counseling...",
    img: DhanashriImg,
  },
];

export default function Founders() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10">Our Founders</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {founders.map((f, i) => (
          <div
            key={f.name}
            className="p-6 border rounded-xl shadow-md bg-white flex flex-col md:flex-row items-center md:items-start gap-4"
          >
            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">{f.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{f.degree}</p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 text-sm justify-center md:justify-start">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent"
                >
                  LinkedIn
                </a>
                <span>{f.phone}</span>
              </div>
              <button
                className="mt-4 text-sm text-accent underline"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {open === i ? "Hide Bio" : "Read Bio"}
              </button>
              {open === i && (
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                  {f.bio}
                </p>
              )}
            </div>

            {/* Right: Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
