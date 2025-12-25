import { useState } from "react";

const MobileItem = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <ul className="ml-3 mt-2 space-y-2 text-sm text-gray-600">
          <li>Overview</li>
          <li>Departments</li>
          <li>Programs</li>
        </ul>
      )}
    </li>
  );
};
export default MobileItem;
