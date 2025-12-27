import React from "react";
import { motion } from "framer-motion";
import { coursesData } from "../data/courses";

const programImages = {
  "B.Tech Courses": "/programs/btech.jpg",
  "M.Tech Courses": "/programs/mtech.jpg",
  "Pharmacy Courses": "/programs/pharmacy.jpg",
  "Diploma Courses": "/programs/diploma.jpg",
  "Degree Courses": "/programs/degree.jpg",
  Sciences: "/programs/science.jpg",
  "Ph.D.": "/programs/phd.jpg",
};

const Programs = () => {
  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Academic Programs
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our diverse range of programs
          </p>
        </motion.div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={programImages[program.title]}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {program.title}
                </h3>

                <button
                  className="
                    px-5 py-2 text-sm font-medium
                    rounded-md
                    bg-[#3a4c96] text-white
                    hover:bg-[#2f3c78]
                    transition
                  "
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
