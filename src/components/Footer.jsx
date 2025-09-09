import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg">Anubhuti Healing Space</h4>
          <p className="text-sm mt-2">
            Pune, Maharashtra
            <br />
            anubhutihealingspace@gmail.com
            <br />
            📞 95117 43719 / 90110 62197
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>Home</li>
            <li>Programs</li>
            <li>Workshops</li>
            <li>Collaborations</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Safety & Ethics</h5>
          <p className="text-sm mt-2">
            Confidential, culturally sensitive, trauma-informed care. Consent
            and child-safety protocols in place.
          </p>
        </div>
      </div>
      <div className="bg-white text-center py-4 text-sm border-t">
        © {new Date().getFullYear()} Anubhuti Healing Space — All rights
        reserved
      </div>
    </footer>
  );
}
