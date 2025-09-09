import React from "react";

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-600">
            At Anubhuti Healing Space, we believe true healing begins at the
            root. Our approach combines psychology with creative expression,
            movement, and mindful practices. We design programs to nurture
            resilience, awareness, and healthier patterns from the start.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Normalize conversations about emotions</li>
            <li>Bridge Indian wellness wisdom and modern psychology</li>
            <li>Customize interventions to each learner’s story</li>
          </ul>
        </div>
        <div className="bg-indigo-50 rounded-md p-6">
          <h4 className="font-semibold">Our Purpose</h4>
          <p className="mt-2 text-slate-600">
            Provide a safe, inclusive, and empowering space for emotional
            healing, psychological insight, and balanced living—using
            evidence-based services.
          </p>
          <div className="mt-4">
            <a href="/programs" className="text-indigo-600 underline">
              Explore Programs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
