import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import HotelListings from "./pages/HotelListings";
import VehicleListings from "./pages/VehicleListings";
import TourGuides from "./pages/TourGuides";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import UIManage from "./pages/UIManage";
import ContactUs from "./pages/ContactUs";
// Service Pages
import HotelListingsService from "./pages/HotelListingsService";
import TourGuidesService from "./pages/TourGuidesService";
import VehicleListingsService from "./pages/VehicleListingsService";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes with Sidebar */}
        <Route
          path="/admin/*"
          element={
            <div className="flex h-screen">
              <Sidebar />
              <Routes>
                <Route path="hotel-listings" element={<HotelListings />} />
                <Route path="vehicle-listings" element={<VehicleListings />} />
                <Route path="tour-guides" element={<TourGuides />} />
                <Route path="users" element={<Users />} />
                <Route path="reports" element={<Reports />} />
                <Route path="ui-manage" element={<UIManage />} />
                <Route path="/" element={<AdminDashboard />} />
              </Routes>
            </div>
          }
        />

        {/* Service Routes */}
        <Route path="/services/hotel-listings" element={<HotelListingsService />} />
        <Route path="/services/tour-guides" element={<TourGuidesService />} />
        <Route path="/services/vehicle-listings" element={<VehicleListingsService />} />

        {/* Contact Us route without Sidebar */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Placeholder Routes for Navigation Links in Service Pages */}
        <Route path="/success-stories" element={<div>Success Stories Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />

        {/* Default route */}
        <Route path="/" element={<ContactUs />} />

        {/* Optional: Redirect for logout */}
        <Route path="/logout" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;