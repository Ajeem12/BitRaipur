import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import NavItem from "./NavItem";
import MobileItem from "./MobileItem";
import Topbar from "./Topbar";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // refs
  const navRef = useRef(null);
  const sentinelRef = useRef(null);

  // sticky state (THIS replaces scrollY logic)
  const [isStickyActive, setIsStickyActive] = useState(false);

  // detect sticky start using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // when sentinel leaves viewport → sticky active
        setIsStickyActive(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  // close mega menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* TOPBAR (normal flow) */}
      <div className="w-full z-50">
        <Topbar isScrolled={isStickyActive} />
      </div>

      {/* LOGO SECTION (normal scrolls away) */}
      <header className="sticky top-0 z-50 lg:relative h-10 bg-white sm:bg-transparent ">
        <div className="flex items-center justify-between ">
          <div>
            <div className="max-w-7xl ml-2  hidden lg:block">
              <Link to="/">
                <img src="/tlogo.png" alt="Logo" className="h-22" />
              </Link>
            </div>
            <div className="max-w-7xl ml-2 lg:hidden mt-1">
              <Link to="/">
                <img src="/mlogo.png" alt="Logo" className="h-7" />
              </Link>
            </div>
          </div>
          {/* MOBILE MENU BUTTON */}
          <div className="mt-1">
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden ${
                isStickyActive ? "text-black" : "text-black"
              }`}
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* SENTINEL – tells us when sticky hits top */}
      <div ref={sentinelRef} className="h-px" />

      {/* STICKY NAV ITEMS ONLY */}
      <div
        ref={navRef}
        className={`
            hidden lg:block sticky top-0 z-50
          transition-all duration-300 ease-in-out  
          ${
            isStickyActive
              ? "bg-[#3a4c96] h-10 shadow-md border-b-[2.5px] border-yellow-100"
              : "bg-transparent h-14 mt-10"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-center h-full">
            <ul className="hidden lg:flex items-center gap-8 font-medium">
              {[
                "About",
                "Admissions",
                "Departments",
                "Training & Placement",
                "Campus Life",
                "Connect",
              ].map((title) => (
                <NavItem
                  key={title}
                  title={title}
                  isScrolled={isStickyActive}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* OVERLAY FOR MEGA MENU */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpenMenu(null)}
        />
      )}

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {mobileOpen && (
          <div className="flex items-center justify-between p-4 border-b lg:hidden">
            <img src="/logo.png" className="h-5" alt="Logo" />
            <button onClick={() => setMobileOpen(false)}>
              <FiX size={20} />
            </button>
          </div>
        )}

        <ul className="p-5 space-y-4">
          <MobileItem title="Academics" />
          <MobileItem title="Research" />
          <MobileItem title="Campus Life" />
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
