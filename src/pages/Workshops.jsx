import React from "react";

export default function Workshops() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Schools & Daycare Partnerships</h2>
      <p className="mt-3 text-slate-600">
        Custom 2–3 hour workshops delivered on campus with relaxation rounds and
        optional counselling.
      </p>

      <div className="mt-6 space-y-4">
        <div className="p-4 border rounded-md">
          <h4 className="font-semibold">Popular Tracks (Ages 3–12)</h4>
          <ul className="mt-2 list-disc ml-5 text-sm text-slate-700">
            <li>Emotional expression & regulation</li>
            <li>Social skills & teamwork</li>
            <li>Focus & attention</li>
            <li>Coping with big feelings</li>
          </ul>
        </div>
        <div className="p-4 border rounded-md">
          <h4 className="font-semibold">Full-Year Contracts</h4>
          <p className="text-sm mt-2">
            Monthly/quarterly workshops with feedback loops and priority
            customization.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="mt-12 p-6 bg-slate-50 border rounded-md text-center">
        <h3 className="text-lg font-semibold">Indicative Fees</h3>
        <p className="mt-3 text-slate-600 text-sm">
          Schools & groups typically <b>₹2,000–₹5,500</b> per workshop (40–60
          participants).
          <br />
          Parent/individual sessions typically <b>₹300–₹800</b> per participant
          in group formats; private sessions from <b>₹500</b>.<br />
          Final pricing depends on customization and duration.
        </p>
      </section>
    </div>
  );
}
