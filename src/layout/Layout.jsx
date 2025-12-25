import Navbar from "../component/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* push page content below fixed bars */}
      <main className="flex-1 pt-[120px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
