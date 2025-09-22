import React from "react";
import { FaInstagram, FaPhone } from "react-icons/fa"; // Phone + Instagram
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info + Instagram */}
        <div>
          <h4 className="font-semibold text-lg">Anubhuti Healing Space</h4>
          <p className="text-sm mt-2 flex flex-col gap-1">
            Pune, Maharashtra
            <br />
            anubhutihealingspace@gmail.com
          </p>
          <div className="mt-2 flex items-center gap-2 text-green-600">
            <FaPhone size={16} />
            <span className="text-sm">95117 43719 / 90110 62197</span>
          </div>

          {/* Instagram link */}
          <div className="mt-3">
            <a
              href="https://www.instagram.com/anubhuti_healing_space?igsh=YmtoYTVkbzV0cDFy" // replace with your IG link
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>Home</li>
            <li>Programs</li>
            <li>Workshops</li>
            <li>Collaborations</li>
          </ul>
        </div>

        {/* Safety & Ethics */}
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
