import React from "react";
import { FaNewspaper, FaVideo, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

const Media = () => {
  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Media
          </h2>
          <p className="text-gray-600 mt-2">
            News, events, and campus activities
          </p>
        </motion.div>

        {/* MEDIA ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NEWS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-md p-6"
          >
            <div className="flex items-center mb-4">
              <FaNewspaper className="text-[#3a4c96] text-xl mr-3" />
              <h3 className="text-lg font-medium text-gray-900">
                College News
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Official announcements, academic updates, and institutional news.
            </p>
            <button className="text-sm text-[#3a4c96] font-medium hover:underline">
              View News
            </button>
          </motion.div>

          {/* VIDEOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-md p-6"
          >
            <div className="flex items-center mb-4">
              <FaVideo className="text-[#3a4c96] text-xl mr-3" />
              <h3 className="text-lg font-medium text-gray-900">Videos</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Recorded lectures, seminars, and campus events.
            </p>
            <button className="text-sm text-[#3a4c96] font-medium hover:underline">
              View Videos
            </button>
          </motion.div>

          {/* GALLERY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-md p-6"
          >
            <div className="flex items-center mb-4">
              <FaCamera className="text-[#3a4c96] text-xl mr-3" />
              <h3 className="text-lg font-medium text-gray-900">
                Photo Gallery
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Images from academic, cultural, and sports activities.
            </p>
            <button className="text-sm text-[#3a4c96] font-medium hover:underline">
              View Gallery
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Media;
