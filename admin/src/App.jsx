import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import BookingsManage from "./components/BookingsManage";
import BookingHistory from "./components/BookingHistory";
import EditVehicle from "./components/EditVehicle";
import AddVehicle from "./components/AddVehicle";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute"; // Now resolves correctly

function App() {
  const [adminName] = useState("Admin");
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex h-screen">
                <Sidebar adminName={adminName} />
                <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bookings-manage" element={<BookingsManage />} />
                    <Route path="/booking-history" element={<BookingHistory />} />
                    <Route path="/edit-vehicle" element={<EditVehicle />} />
                    <Route path="/add-vehicle" element={<AddVehicle />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;