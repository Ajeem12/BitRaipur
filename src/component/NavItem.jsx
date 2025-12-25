const NavItem = ({ title, isScrolled }) => {
  return (
    <div className="relative group ">
      <button
        className={`flex items-center gap-1 transition
        ${isScrolled ? "text-gray-800" : "text-white"}`}
      >
        {title}
        <span className="text-xs"></span>
      </button>

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
          <li className="hover:text-yellow-400 cursor-pointer">Departments</li>
          <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
          <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
        </ul>
      </div>
    </div>
  );
};
export default NavItem;
