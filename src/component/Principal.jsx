// import React from "react";
// import { motion } from "framer-motion";
// import { FaGraduationCap, FaQuoteLeft, FaStar } from "react-icons/fa";

// const Principal = () => {
//   return (
//     <section className="relative py-16 px-4 md:py-20 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-br from-white via-blue-50 to-white
//                      rounded-2xl shadow-xl overflow-hidden
//                      border border-gray-100"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
//             {/* IMAGE SECTION WITH BADGE */}
//             <div className="relative bg-gradient-to-b from-blue-50 to-white p-8 lg:p-10">
//               {/* Image container with decorative border */}
//               <div className="relative mx-auto w-64 h-64">
//                 {/* Decorative circles */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10 blur-sm"></div>
//                 <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-10"></div>

//                 {/* Image with border */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   className="relative w-full h-full"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-1">
//                     <div className="w-full h-full bg-white rounded-full p-2">
//                       <img
//                         src="/principal.png"
//                         alt="Principal"
//                         className="w-full h-full object-cover rounded-full shadow-lg"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Name and title */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 viewport={{ once: true }}
//                 className="text-center mt-8"
//               >
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Dr. R.K. Mishra
//                 </h3>
//                 <p className="text-gray-600 font-medium">
//                   Principal, BIT Raipur
//                 </p>
//                 <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-3 rounded-full"></div>
//               </motion.div>
//             </div>

//             {/* CONTENT SECTION */}
//             <div className="lg:col-span-2 p-8 lg:p-10">
//               {/* Header with icon */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="flex items-center mb-6"
//               >
//                 <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-lg mr-4">
//                   <FaQuoteLeft className="text-white text-xl" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                     Message from the{" "}
//                     <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                       Principal
//                     </span>
//                   </h2>
//                   <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
//                 </div>
//               </motion.div>

//               {/* Message content with gradient border */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 {/* Decorative quote marks */}
//                 <div className="absolute -top-4 -left-4 text-blue-100 text-6xl opacity-20">
//                   "
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 text-blue-100 text-6xl opacity-20">
//                   "
//                 </div>

//                 <p className="text-gray-700 leading-relaxed text-lg relative z-10 bg-gradient-to-br from-blue-50/50 to-white/50 p-6 rounded-xl">
//                   Bhilai Institute Of Technology, Raipur, with a mission to
//                   provide world-class technical manpower to serve industry,
//                   profession, and society, has established itself as one of the
//                   premier technological institutions of India. The institute
//                   continuously strives to contribute effectively to national
//                   economic development by nurturing skilled, ethical, and
//                   innovative professionals.
//                 </p>
//               </motion.div>

//               {/* Decorative elements at bottom */}
//               <motion.div
//                 initial={{ opacity: 0, width: 0 }}
//                 whileInView={{ opacity: 1, width: "100%" }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="mt-8 flex items-center justify-between"
//               >
//                 <div className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex-1"></div>
//                 <div className="mx-4 text-blue-600 font-semibold text-sm">
//                   BIT Raipur
//                 </div>
//                 <div className="h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex-1"></div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Principal;

import React from "react";
import { motion } from "framer-motion";

const Principal = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/staf/principal.png"
                alt="Principal"
                className="w-44 h-56 object-cover rounded-lg border-4 border-[#3a4c96]"
              />
            </div>

            {/* CONTENT */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3a4c96] mb-2">
                Message from the Principal
              </h2>

              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Dr. R. K. Mishra
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Principal, BIT Raipur
              </p>

              <p className="text-gray-700 leading-relaxed">
                Bhilai Institute Of Technology, Raipur, with a mission to
                provide world-class technical manpower to serve industry,
                profession, and society, has emerged as one of the premier
                technological institutions of India. The institute is committed
                to nurturing ethical, skilled, and innovative professionals who
                contribute meaningfully to national development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Principal;
