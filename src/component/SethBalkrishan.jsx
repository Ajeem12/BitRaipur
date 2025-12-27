import React from "react";
import { motion } from "framer-motion";

const SethBalkrishan = () => {
  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/staf/seth.png"
                alt="Late Seth Balkrishan"
                className="w-44 h-56 object-cover rounded-md border border-gray-300"
              />
            </div>

            {/* CONTENT */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3a4c96] mb-2">
                Late Seth Balkrishan
              </h2>

              <p className="text-sm text-gray-600 font-medium mb-4">
                Founder of Bhilai Institute of Technology
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Seth Balkrishan was a visionary philanthropist whose dedication
                to education laid the foundation of Bhilai Institute of
                Technology. His life was guided by values of social service,
                discipline, and commitment to national development.
              </p>

              <p className="text-gray-700 leading-relaxed">
                His ideals continue to inspire the institution to nurture
                technically competent graduates who uphold ethical values and
                contribute positively to society and the nation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-6 max-w-3xl mx-auto"
        >
          The legacy of Late Seth Balkrishan remains a guiding force for the BIT
          community in its pursuit of academic excellence and social
          responsibility.
        </motion.p>
      </div>
    </section>
  );
};

export default SethBalkrishan;
