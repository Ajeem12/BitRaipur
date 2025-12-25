import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import NavItem from "./NavItem";
import MobileItem from "./MobileItem";
import Topbar from "./Topbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOPBAR (ALWAYS FIXED AT TOP) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Topbar isScrolled={isScrolled} />
      </div>

      {/* MAIN NAVBAR (BELOW TOPBAR) */}
      <header
        className={`
          fixed left-0 w-full z-40 transition-all duration-300 
          ${isScrolled ? "bg-white " : "bg-transparent"}
        `}
        style={{ top: 40 }} // 40px = Topbar height (h-10)
      >
        <div className="max-w-8xl  px-2 sm:px-6 flex flex-col  items-start justify-between h-24 lg:h-auto">
          {/* LOGO */}
          <div className="flex items-center mb-4 lg:mb-0  ">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-5 sm:h-20 w-auto" />
            </Link>
          </div>

          {/* NAV - FULL WIDTH ON DESKTOP */}
          <nav className="w-full lg:w-auto mt-2">
            <div className="bg-white lg:bg-transparent w-full px-4 py-2 lg:px-0">
              <ul className="hidden lg:flex items-center justify-center gap-8 font-medium w-full">
                <NavItem title="About" isScrolled={isScrolled} />
                <NavItem title="Admissions" isScrolled={isScrolled} />
                <NavItem title="Departments" isScrolled={isScrolled} />
                <NavItem title="Training & Placement" isScrolled={isScrolled} />
                <NavItem title="Campus Life" isScrolled={isScrolled} />
                <NavItem title="Connect" isScrolled={isScrolled} />
                <NavItem title="Gallery" isScrolled={isScrolled} />
              </ul>
            </div>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white z-40 transform
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between py-5 px-2 border-b">
          <img src="/logo.png" className="h-5" alt="Logo" />
          <button onClick={() => setMobileOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <ul className="p-5 space-y-4 text-gray-800 font-medium">
          <MobileItem title="Academics" />
          <MobileItem title="Research" />
          <MobileItem title="Campus Life" />
          <MobileItem title="International" />
          <MobileItem title="About" />
          <li className="pt-4">
            <button className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold">
              Admissions 2026
            </button>
          </li>
        </ul>
      </aside>

      {/* Add padding-top to your main page content: pt-[120px] (40 + 80) */}
    </>
  );
};

export default Navbar;
