import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./page/sidebar";
import Dashboard from "./page/dashboard";
import RouteRequirement from "./page/RouteRequirement";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        {/* RIGHT SIDE FULL WIDTH */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1">
                <Dashboard />
              </div>
            }
          />

          <Route
            path="/requirements/new"
            element={
              <div className="flex-1">
                <RouteRequirement />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

