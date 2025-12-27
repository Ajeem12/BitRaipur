import { useState } from "react";
import { coursesData } from "../data/courses";
import { getStartedData } from "../data/getStartedCourses";
import { bitRaipurInfoData } from "../data/bitRaipurInfo";
import { trainingPlacementData } from "../data/trainingPlacement";
import { campusLife } from "../data/campusLife";
import { connectsData } from "../data/connect";

const MobileItem = ({ title }) => {
  const [open, setOpen] = useState(false);

  let data = null;
  if (title === "Departments") data = coursesData;
  if (title === "Admissions") data = getStartedData;
  if (title === "About") data = bitRaipurInfoData;
  if (title === "Training & Placement") data = trainingPlacementData;
  if (title === "Campus Life") data = campusLife;
  if (title === "Connect") data = connectsData;

  return (
    <li>
      <button
        onClick={() => data && setOpen(!open)}
        className="w-full flex justify-between items-center py-2 font-medium"
      >
        {title}
        {data && <span>{open ? "−" : "+"}</span>}
      </button>

      {/* Submenu */}
      {open && data && (
        <ul className="ml-4 mt-2 space-y-3 text-sm text-gray-600">
          {data.map((section, i) => (
            <li key={i}>
              <p className="font-semibold text-gray-800">{section.title}</p>
              <ul className="ml-3 mt-1 space-y-1">
                {section.items.map((item, j) => (
                  <li key={j} className="cursor-pointer hover:text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileItem;
