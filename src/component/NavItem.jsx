import { coursesData } from "../data/courses";
import { getStartedData } from "../data/getStartedCourses";
import { bitRaipurInfoData } from "../data/bitRaipurInfo";
import { trainingPlacementData } from "../data/trainingPlacement";
import { campusLife } from "../data/campusLife";
import { connectsData } from "../data/connect";

const NavItem = ({ title, isScrolled, openMenu, setOpenMenu }) => {
  let data = null;

  if (title === "Departments") data = coursesData;
  if (title === "Admissions") data = getStartedData;
  if (title === "About") data = bitRaipurInfoData;
  if (title === "Training & Placement") data = trainingPlacementData;
  if (title === "Campus Life") data = campusLife;
  if (title === "Connect") data = connectsData;

  const isOpen = openMenu === title;

  return (
    <li className="relative">
      <button
        onClick={() => setOpenMenu(isOpen ? null : title)}
        className={`font-medium transition text-lg ${
          isScrolled ? "text-white mt-1" : "text-white"
        } ${isOpen ? "text-blue-600" : ""}`}
      >
        {title}
      </button>

      {data && (
        <div
          className={`
    absolute left-1/2 top-full -translate-x-1/2
${title === "Departments" ? "w-[1100px]" : "w-[600px]"}
    bg-white shadow-2xl rounded-xl
    transition-all duration-300
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }
  `}
        >
          <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((section, i) => (
              <div key={i}>
                <h4 className="text-[#3a4c96] font-semibold mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {section.items.map((item, j) => (
                    <li key={j} className="hover:text-red-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;
