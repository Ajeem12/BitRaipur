import { coursesData } from "../data/courses";
import { getStartedData } from "../data/getStartedCourses";
import { bitRaipurInfoData } from "../data/bitRaipurInfo";
import { trainingPlacementData } from "../data/trainingPlacement";
import { campusLife } from "../data/campusLife";
import { connectsData } from "../data/connect";

const NavItem = ({ title, isScrolled }) => {
  const isDepartment = title === "Departments";
  const isAdmissions = title === "Admissions";
  const isAbout = title === "About";
  const isTrainingPlacement = title === "Training & Placement";
  const isCampusLife = title === "Campus Life";
  const isConnect = title === "Connect";

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 font-medium transition
        ${isScrolled ? "text-gray-800" : "text-white"}`}
      >
        {title}
      </button>

      {/* NORMAL DROPDOWN */}
      {!isDepartment && (
        <div
          className={`absolute left-0 top-full mt-3 min-w-[220px]
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 rounded-md shadow-lg
          ${
            isScrolled
              ? "bg-white text-black"
              : "bg-black/80 text-white backdrop-blur"
          }`}
        >
          <ul className="p-3 space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Overview</li>
            <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
          </ul>
        </div>
      )}

      {/* DEPARTMENTS MEGA DROPDOWN */}
      {isDepartment && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {coursesData.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {isAdmissions && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {getStartedData.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {isAbout && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {bitRaipurInfoData.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {isTrainingPlacement && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {trainingPlacementData.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {isCampusLife && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {campusLife.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {isConnect && (
        <div
          className={`fixed left-0 top-[120px] w-full
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 z-30
          ${isScrolled ? "bg-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {connectsData.map((course, index) => (
              <div key={index}>
                <h4 className="font-semibold text-[#3a4c96] mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {course.items.map((item, idx) => (
                    <liz
                      key={idx}
                      className="hover:text-red-600 cursor-pointer transition"
                    >
                      {item}
                    </liz>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
