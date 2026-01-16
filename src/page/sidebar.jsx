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
    <div className="group h-screen bg-white border-r shadow-lg
      w-20 hover:w-[260px] transition-all duration-300 overflow-hidden">

      {/* LOGO */}
      <div className="p-6 border-b flex flex-col items-center">
        <FaSatelliteDish className="text-3xl text-indigo-600" />
        <span className="mt-2 text-lg font-black text-indigo-600 hidden group-hover:block">
          Sales Portal
        </span>
      </div>

      {/* MENU */}
      <nav className="px-3 py-4 space-y-2">
        <MenuItem icon={<FaHome />} text="Dashboard" to="/" color="text-indigo-600" />
        <MenuItem icon={<FaPlusCircle />} text="New Requirement" to="/requirements/new" color="text-emerald-600" />
        <MenuItem icon={<FaVial />} text="Route Promotion" to="#" color="text-orange-500" />
        <MenuItem icon={<FaFire />} text="Fresh Promotions" to="#" color="text-red-500" />
      </nav>
    </div>
  );
}

function MenuItem({ icon, text, to, color }) {
  return (
  <Link
  to={to}
  className="flex items-center gap-5 px-6 py-4 rounded-xl
  text-gray-700 font-semibold
  hover:bg-indigo-50 hover:text-indigo-700 transition-all"
>
  <span className="text-xl w-8 text-center text-indigo-600">
    {icon}
  </span>

  <span className="hidden group-hover:block whitespace-nowrap">
    {text}
  </span>
</Link>

  );
}

export default Sidebar;
