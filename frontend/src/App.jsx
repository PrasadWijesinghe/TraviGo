import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import VehicleSidebar from "./components/VehicleSidebar";
import Header from "./components/Header";
import VehicleHeader from "./components/VehicleHeader";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import HotelBooking from "./pages/HotelBooking";
import VehicleRental from "./pages/VehicleRental";
import TourGuides from "./pages/TourGuides";
import TravelPackages from "./pages/TravelPackages";
import ExploreDestinations from "./pages/ExploreDestinations";
import MyBooking from "./pages/MyBooking";
import EditProfile from "./pages/EditProfile";
import AccountSettings from "./pages/AccountSettings";
import VehicleDashboard from "./pages/Vehicle/VehicleDashboard";
import ManageVehicles from "./pages/Vehicle/ManageVehicles";
import VehicleBookings from "./pages/Vehicle/VehicleBookings";
import ProviderSettings from "./pages/Vehicle/ProviderSettings";

function AppContent() {
  const location = useLocation();
  const isVehicleProviderRoute = location.pathname.startsWith('/vehicle');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Conditionally render Sidebar based on route */}
      {isVehicleProviderRoute ? <VehicleSidebar /> : <Sidebar />}
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Conditionally render Header based on route */}
        {isVehicleProviderRoute ? <VehicleHeader /> : <Header />}
        <Routes>
          {/* Tourist Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hotels" element={<HotelBooking />} />
          <Route path="/vehicles" element={<VehicleRental />} />
          <Route path="/guides" element={<TourGuides />} />
          <Route path="/packages" element={<TravelPackages />} />
          <Route path="/explore" element={<ExploreDestinations />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/account-settings" element={<AccountSettings />} />

          {/* Vehicle Provider Routes */}
          <Route path="/vehicle/dashboard" element={<VehicleDashboard />} />
          <Route path="/vehicle/manage-vehicles" element={<ManageVehicles />} />
          <Route path="/vehicle/bookings" element={<VehicleBookings />} />
          <Route path="/vehicle/settings" element={<ProviderSettings />} />

          {/* Sign Out Route */}
          <Route path="/sign-out" element={<div className="p-6">Sign Out Page (Placeholder)</div>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;