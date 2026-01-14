function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-10 bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HEADER */}
      <h1 className="text-5xl font-black text-gray-800 mb-4">
        Good Morning, Mohit!
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Monday, 08 Dec 2025 • You're{" "}
        <span className="text-emerald-600 font-bold">+18%</span> ahead of target
      </p>

      {/* KPI GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
        <KpiCard title="Fresh" value="6" color="from-emerald-500 to-green-600" />
        <KpiCard title="Requirements" value="14" color="from-indigo-500 to-purple-600" />
        <KpiCard title="Pending" value="8" color="from-amber-500 to-orange-600" />
        <KpiCard title="Matches" value="11" color="from-purple-500 to-pink-600" />
        <KpiCard title="Tickets" value="3" color="from-red-500 to-rose-600" />
        <KpiCard title="Notes" value="42" color="from-blue-500 to-cyan-600" />
        <KpiCard title="Live Routes" value="68" color="from-teal-500 to-emerald-600" />
        <KpiCard title="Today" value="$28.4k" color="from-pink-500 to-purple-600" />
      </div>

    </div>
  );
}

/* KPI CARD */
function KpiCard({ title, value, color }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-6 rounded-3xl shadow-xl
                  transition-all hover:scale-105 hover:shadow-2xl`}
    >
      <div className="text-4xl font-black">{value}</div>
      <div className="text-sm">{title}</div>
    </div>
  );
}

export default Dashboard;