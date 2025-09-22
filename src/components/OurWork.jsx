import React from "react";

const work = {
  Corporates: ["Motivational Toolkit", "Employee wellness workshops"],
  Preschools: [
    "Narrative Therapy Workshop",
    "Art & Expressive Therapy Workshop",
  ],
  Schools: ["Lecture on Teenage Emotional & Behavioural Health"],
};

export default function OurWork() {
  return (
    <section className="py-16 bg-anubhuti px-6">
      <h2 className="text-2xl font-bold text-center mb-10">Our Current Work</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(work).map(([k, v]) => (
          <div key={k} className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-4">{k}</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              {v.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
