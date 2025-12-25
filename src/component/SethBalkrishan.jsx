import React from "react";
import { motion } from "framer-motion";

const SethBalkrishan = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* IMAGE SECTION */}
            <motion.div
              className="md:col-span-4 bg-gray-100 p-6 md:p-8 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="seth.png"
                    alt="Seth Balkrishan"
                    className="w-48 h-56 object-cover rounded-md shadow-md mx-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    Late Seth Balkrishan
                  </h3>
                  <p className="text-gray-600 font-medium mt-1">
                    Founding Patron
                  </p>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-2"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* CONTENT SECTION */}
            <motion.div
              className="md:col-span-8 p-6 md:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Legacy of Our Founding Patron
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-1 bg-blue-600 rounded-full mb-4"
                ></motion.div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Seth Balkrishan was a distinguished philanthropist whose
                    vision laid the foundation for Bhilai Institute of
                    Technology. His commitment to{" "}
                    <span className="font-medium text-blue-700">education</span>
                    ,<span className="font-medium text-blue-700"> sports</span>,{" "}
                    <span className="font-medium text-blue-700">
                      social welfare
                    </span>
                    , and
                    <span className="font-medium text-blue-700">
                      {" "}
                      spiritual values
                    </span>{" "}
                    continues to guide our institution's mission.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 my-4">
                    <p className="text-gray-800 italic">
                      "His enlightened vision stands as a beacon, guiding future
                      generations toward excellence and service to society."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Today, as we navigate the challenges of global education,
                    his ideals remind us to integrate technical knowledge with
                    human values. The students of BIT are inspired to excel
                    academically while contributing meaningfully to India's
                    progress.
                  </p>
                </div>
              </div>

              {/* CONTRIBUTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <h4 className="font-bold text-gray-900 mb-3">
                  Key Contributions
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                    Education
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm">
                    Sports Development
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm">
                    Social Service
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm">
                    Spiritual Growth
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            The values and vision of Seth Balkrishan continue to inspire the BIT
            community in its pursuit of academic excellence and social
            responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SethBalkrishan;
