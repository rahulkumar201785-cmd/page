import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./page/sidebar";
import Dashboard from "./page/dashboard";
import RouteRequirement from "./page/RouteRequirement";

function App() {
  return (
    <BrowserRouter>
  <div className="flex h-screen bg-white">
    <Sidebar />

    {/* RIGHT SIDE */}
    <div className="flex-1 overflow-y-auto bg-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requirements/new" element={<RouteRequirement />} />
      </Routes>
    </div>

  </div>
</BrowserRouter>
  );
}

export default App;

