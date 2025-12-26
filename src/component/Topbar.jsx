import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Topbar = ({ isScrolled }) => {
  return (
    <div
      className={`w-full h-10 transition-all duration-300 ${
        isScrolled ? "bg-[#3a4c96]" : "bg-[#3a4c96]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between ${
          isScrolled ? "text-white" : "text-white"
        } text-xs sm:text-sm h-full`}
      >
        {/* LEFT LINKS – hidden on mobile, visible from md */}
        <ul className="hidden md:flex gap-5">
          <li>
            <a className="hover:text-gray-200" href="#">
              Research
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Conference
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Lakshya22
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              SPOJ
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              BITRPHARMA
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              ERP CCSMA LOGIN
            </a>
          </li>
        </ul>

        <ul className="flex md:hidden gap-5 ">
          <li>
            <a className="hover:text-gray-200" href="#">
              Research
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Conference
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Lakshya22
            </a>
          </li>
        </ul>

        {/* RIGHT SOCIAL ICONS – always visible, but spaced nicely */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto md:ml-0">
          <a className="hover:text-gray-200" href="#">
            <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a className="hover:text-gray-200" href="#">
            <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a className="hover:text-gray-200" href="#">
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
