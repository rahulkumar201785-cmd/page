import { useState } from "react";
<div className="min-h-screen bg-red-600 text-white text-4xl flex items-center justify-center">
  TAILWIND WORKING
</div>

export default function RouteRequirement() {
  const [customer, setCustomer] = useState("");
  const [routes, setRoutes] = useState([]);

  const [form, setForm] = useState({
    destination: "",
    operator: "",
    rate: "",
    quality: "",
    capacity: "",
    acd: "",
    asr: "",
    cli: "",
    remarks: "",
  });

  const addRoute = () => {
    if (!customer || !form.destination || !form.operator || !form.rate || !form.quality) {
      alert("Customer name + required fields fill karo");
      return;
    }
    setRoutes([...routes, form]);
    setForm({
      destination: "",
      operator: "",
      rate: "",
      quality: "",
      capacity: "",
      acd: "",
      asr: "",
      cli: "",
      remarks: "",
    });
  };

  const removeRoute = (index) => {
    setRoutes(routes.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    if (window.confirm("Clear all routes?")) {
      setRoutes([]);
    }
  };

  const submitAll = () => {
    alert(`Submitted ${routes.length} routes for ${customer}`);
  };

  return (
       <div className="h-full bg-white p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-7 text-center">
          <h1 className="text-3xl font-bold">New Route Requirement – Multiple Destinations</h1>
          <p className="mt-2 opacity-90">One customer → Add as many routes as needed</p>
        </div>

     <div className="h-full bg-white p-4 overflow-hidden">



          {/* CUSTOMER */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl">
            <label className="font-semibold block mb-2">
              Customer Name (applies to all routes) <span className="text-red-600">*</span>
            </label>
            <input
              placeholder="e.g., GlobalCall Ltd"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full border-2 border-indigo-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* ADD ROUTE */}
          <div className="bg-gray-50 border rounded-2xl p-2">
            <h2 className="text-xl font-bold mb-4">Add Route Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <input placeholder="Destination*" className="border p-3 rounded"
                value={form.destination}
                onChange={e=>setForm({...form,destination:e.target.value})}
              />
              <input placeholder="Operator*" className="border p-3 rounded"
                value={form.operator}
                onChange={e=>setForm({...form,operator:e.target.value})}
              />
              <input placeholder="Target Rate*" type="number" className="border p-3 rounded"
                value={form.rate}
                onChange={e=>setForm({...form,rate:e.target.value})}
              />
              <select className="border p-3 rounded"
                value={form.quality}
                onChange={e=>setForm({...form,quality:e.target.value})}
              >
                <option value="">Quality*</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
                <option>Gray</option>
              </select>

              <input placeholder="Capacity" className="border p-3 rounded"
                value={form.capacity}
                onChange={e=>setForm({...form,capacity:e.target.value})}
              />
              <input placeholder="Min ACD" className="border p-3 rounded"
                value={form.acd}
                onChange={e=>setForm({...form,acd:e.target.value})}
              />
              <input placeholder="Min ASR %" className="border p-3 rounded"
                value={form.asr}
                onChange={e=>setForm({...form,asr:e.target.value})}
              />
              <input placeholder="CLI? Yes/No" className="border p-3 rounded"
                value={form.cli}
                onChange={e=>setForm({...form,cli:e.target.value})}
              />
              <textarea placeholder="Remarks" className="border p-3 rounded col-span-2"
                value={form.remarks}
                onChange={e=>setForm({...form,remarks:e.target.value})}
              />
            </div>

            <button
              onClick={addRoute}
              className="mt-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-xl font-bold"
            >
              Add This Route
            </button>
          </div>

          {/* TABLE */}
          <div className="border rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-indigo-50">
              <h2 className="font-bold">
                Routes to Submit (<span className="text-emerald-600">{routes.length}</span>)
              </h2>
              <button onClick={clearAll} className="text-red-600 font-medium">Clear All</button>
            </div>

            {routes.length === 0 ? (
              <p className="text-center py-16 text-gray-400">No routes added yet</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-3">Destination</th>
                    <th className="p-3">Operator</th>
                    <th className="p-3">Rate</th>
                    <th className="p-3">Quality</th>
                    <th className="p-3">Capacity</th>
                    <th className="p-3">ACD</th>
                    <th className="p-3">ASR</th>
                    <th className="p-3">CLI</th>
                    <th className="p-3">Remarks</th>
                    <th className="p-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((r, i) => (
                    <tr key={i} className="border-b text-center">
                      <td className="p-2">{r.destination}</td>
                      <td className="p-2">{r.operator}</td>
                      <td className="p-2 text-emerald-600 font-bold">{r.rate}</td>
                      <td className="p-2">{r.quality}</td>
                      <td className="p-2">{r.capacity || "-"}</td>
                      <td className="p-2">{r.acd || "-"}</td>
                      <td className="p-2">{r.asr || "-"}</td>
                      <td className="p-2">{r.cli || "-"}</td>
                      <td className="p-2">{r.remarks || "-"}</td>
                      <td className="p-2">
                        <button onClick={()=>removeRoute(i)} className="text-red-600">❌</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* SUBMIT */}
          <div className="text-center">
            <button
              disabled={routes.length === 0}
              onClick={submitAll}
              className={`px-20 py-5 rounded-2xl text-white font-bold text-xl 
                ${routes.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-emerald-600 to-green-700"}`}
            >
              Submit All Routes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
