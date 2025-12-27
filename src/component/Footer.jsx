import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#062242] text-gray-200">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex justify-center mb-10">
          <img src="/logo/bottom.png" alt="" className="h-20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ADDRESS */}
          <motion.div
            variants={itemAnim}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-green-400 font-semibold mb-4">ADDRESS</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <FaMapMarkerAlt className="mt-1 text-green-400" />
                <span>
                  Institute Code: EN-139 <br />
                  Near Kendri Railway Station <br />
                  Abhanpur Road, Raipur (C.G.)
                </span>
              </li>
              <li className="flex gap-2">
                <FaEnvelope className="mt-1 text-green-400" />
                principal@bitraipur.ac.in
              </li>
              <li className="flex gap-2">
                <FaPhoneAlt className="mt-1 text-green-400" />
                91091-03522, 99079-71651
              </li>
            </ul>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            variants={itemAnim}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-yellow-400 font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Sports",
                "BITCON",
                "BITUDAY",
                "NSS",
                "Hostel",
                "Facilities",
                "Online Fee Payment",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DOWNLOADS */}
          <motion.div
            variants={itemAnim}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-cyan-400 font-semibold mb-4">DOWNLOADS</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Admission Form",
                "Prospectus",
                "AICTE Approval 2024-25",
                "Press Release",
                "Flyer",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IMPORTANT LINKS */}
          <motion.div
            variants={itemAnim}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-red-400 font-semibold mb-4">IMPORTANT LINKS</h3>
            <ul className="space-y-3 text-sm">
              {[
                {
                  label: "CSVTU Calendar",
                  url: "https://csvtu.ac.in",
                },
                {
                  label: "AICTE",
                  url: "https://aicte-india.org",
                },
                {
                  label: "UGC",
                  url: "https://ugc.ac.in",
                },
                {
                  label: "DTE Raipur",
                  url: "https://cgdte.in",
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2025 Bhilai Institute of Technology, Raipur (C.G.)</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
