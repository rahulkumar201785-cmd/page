import {
  FaHome,
  FaPlusCircle,
  FaVial,
  FaFire,
  FaSatelliteDish,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="group h-screen bg-white border-r border-gray-200 shadow-xl 
      w-20 hover:w-[280px] transition-all duration-300 flex flex-col overflow-hidden">

      {/* LOGO */}
      <div className="p-6 border-b border-gray-200 flex flex-col items-center">
        <FaSatelliteDish className="text-3xl text-indigo-600" />
        <span className="mt-2 text-xl font-black text-indigo-600 hidden group-hover:block">
          Sales Portal
        </span>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-4 space-y-2">

        <MenuItem icon={<FaHome />} text="My Dashboard" to="/" />
        <MenuItem icon={<FaPlusCircle />} text="New Requirement" to="/requirements/new" />
        <MenuItem icon={<FaVial />} text="Route Promotion (NOC)" to="#" />
        <MenuItem icon={<FaFire />} text="Fresh Promotions" to="#" />

      </nav>
    </div>
  );
}

function MenuItem({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-5 px-6 py-4 rounded-xl 
      text-gray-700 font-semibold cursor-pointer
      hover:bg-indigo-50 hover:text-indigo-700 transition-all"
    >
      <span className="text-xl w-8 text-center">{icon}</span>
      <span className="hidden group-hover:block whitespace-nowrap">
        {text}
      </span>
    </Link>
  );
}

export default Sidebar;
