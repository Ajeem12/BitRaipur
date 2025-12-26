import React from "react";
import { FaNewspaper, FaVideo, FaCamera, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Media = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Media</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with college news, events, and campus activities
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* MEDIA CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* CARD 1 - NEWS */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaNewspaper className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    College News
                  </h3>
                  <p className="text-sm text-gray-500">
                    Latest announcements & updates
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Stay informed with academic achievements, research publications,
                and campus news.
              </p>
              <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Read News
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>

          {/* CARD 2 - VIDEOS */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <FaVideo className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Campus Videos
                  </h3>
                  <p className="text-sm text-gray-500">Events & lectures</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Watch recorded lectures, guest seminars, and campus events.
              </p>
              <button className="flex items-center text-red-600 font-medium hover:text-red-800 transition-colors">
                Watch Videos
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>

          {/* CARD 3 - GALLERY */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaCamera className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Photo Gallery
                  </h3>
                  <p className="text-sm text-gray-500">Campus moments</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Browse photos from convocation, cultural fests, and campus
                activities.
              </p>
              <button className="flex items-center text-green-600 font-medium hover:text-green-800 transition-colors">
                View Gallery
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* QUICK LINKS */}
        {/* <motion.div
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-3 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Events Calendar
            </button>
            <button className="p-3 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Download Brochures
            </button>
            <button className="p-3 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Media Contact
            </button>
          </div>
        </motion.div> */}

        {/* NEWSLETTER */}
        {/* <motion.div
          className="bg-blue-50 rounded-lg p-6 mt-8 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to receive college news and announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Media;
