import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
<<<<<<< Updated upstream
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
=======
import { useState, useEffect } from "react";

// First App.jsx imports
import VehicleProviderRegister from "./pages/VehicleProviderRegister";
import ServiceProviderLogin from "./pages/ServiceProviderLogin";
import HotelProviderDashboard from "./pages/hotel/HotelProviderDashboard";
import VehicleProviderDashboard from "./pages/vehicle/VehicleProviderDashboard";
import TourGuideDashboard from "./pages/tourguide/TourGuideDashboard";
import TourGuideCreatePackage from "./pages/tourguide/TourGuideCreatePackage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/user/UserDashboard";
import EditProfile from "./pages/user/EditProfile";
import ExploreDestinations from "./pages/user/ExploreDestinations";
import MyBooking from "./pages/user/MyBooking";
import AccountSettings from "./pages/user/AccountSettings";
import HotelBooking from "./pages/user/HotelBooking";
import VehicleRental from "./pages/user/VehicleRental";
import TourGuides from "./pages/user/TourGuide";
import TourGuidess from "./pages/TourGuides";
import TravelPackages from "./pages/user/TravelPackages";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import HotelProviderRegister from "./pages/HotelProviderRegister";
import TourGuideRegister from "./pages/TourGuideRegister";
import ProviderReg from "./pages/ServiceProviderRegister";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminRegister from "./pages/Admin/AdminRegister";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HotelListing from "./pages/admin/HotelListing";
import Reports from "./pages/admin/Reports";
import TourGuide from "./pages/admin/TourGuide";
import UIManager from "./pages/Admin/UIManage";
import Users from "./pages/admin/Users";
import VehicleListing from "./pages/admin/VehicleListing";
import HotelListingsService from "./pages/HotelListingsService";
import TourGuidesService from "./pages/TourGuidesService";
import VehicleListingsService from "./pages/VehicleListingsService";
import TourGuideProfile from "./pages/TourGuideProfile";

// Second App.jsx imports
import HotelCollection from "./Pages/HotelCollection";
import HotelDetails from "./Pages/HotelDetails";
import BookingPage from "./Pages/BookingPage";
import PaymentPage from "./Pages/PaymentPage";

// Protected Route Component for Users
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch("/api/verify-token", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } catch {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    };
    if (token) verifyToken();
    else setIsAuthenticated(false);
  }, [token]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// Protected Route Component for Admins
const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch("/api/verify-admin-token", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("admin");
          localStorage.removeItem("adminToken");
        }
      } catch {
        setIsAuthenticated(false);
        localStorage.removeItem("admin");
        localStorage.removeItem("adminToken");
      }
    };
    if (token) verifyToken();
    else setIsAuthenticated(false);
  }, [token]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return children;
};

// Protected Route Component for Service Providers (Tour Guides)
const ProtectedProviderRoute = ({ children }) => {
  const token = localStorage.getItem("providerToken");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch("/api/verify-provider-token", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("provider");
          localStorage.removeItem("providerToken");
        }
      } catch {
        setIsAuthenticated(false);
        localStorage.removeItem("provider");
        localStorage.removeItem("providerToken");
      }
    };
    if (token) verifyToken();
    else setIsAuthenticated(false);
  }, [token]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/service-provider/login" replace />;
  return children;
};
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
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
=======
        {/* First App.jsx Routes */}
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
>>>>>>> Stashed changes
        <Route path="/services/hotel-listings" element={<HotelListingsService />} />
        <Route path="/services/tour-guides" element={<TourGuidesService />} />
        <Route path="/services/vehicle-listings" element={<VehicleListingsService />} />
<<<<<<< Updated upstream

        {/* Contact Us route without Sidebar */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Placeholder Routes for Navigation Links in Service Pages */}
        <Route path="/success-stories" element={<div>Success Stories Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />

        {/* Default route */}
        <Route path="/" element={<ContactUs />} />

        {/* Optional: Redirect for logout */}
        <Route path="/logout" element={<ContactUs />} />
=======
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/explore"
          element={
            <ProtectedRoute>
              <ExploreDestinations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/my-booking"
          element={
            <ProtectedRoute>
              <MyBooking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/account-settings"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/hotels"
          element={
            <ProtectedRoute>
              <HotelBooking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/vehicles"
          element={
            <ProtectedRoute>
              <VehicleRental />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/guides"
          element={
            <ProtectedRoute>
              <TourGuides />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/packages"
          element={
            <ProtectedRoute>
              <TravelPackages />
            </ProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/hotel-listing"
          element={
            <ProtectedAdminRoute>
              <HotelListing />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedAdminRoute>
              <Reports />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/tour-guides"
          element={
            <ProtectedAdminRoute>
              <TourGuide />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/ui-manager"
          element={
            <ProtectedAdminRoute>
              <UIManager />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedAdminRoute>
              <Users />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/vehicle-listing"
          element={
            <ProtectedAdminRoute>
              <VehicleListing />
            </ProtectedAdminRoute>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service-provider/register" element={<ProviderReg />} />
        <Route path="/service-provider/register/hotel" element={<HotelProviderRegister />} />
        <Route path="/service-provider/register/tour-guide" element={<TourGuideRegister />} />
        <Route path="/service-provider/register/vehicle" element={<VehicleProviderRegister />} />
        <Route path="/service-provider/login" element={<ServiceProviderLogin />} />
        <Route
          path="/tour-guide/dashboard"
          element={
            <ProtectedProviderRoute>
              <TourGuideDashboard />
            </ProtectedProviderRoute>
          }
        />
        <Route
          path="/tour-guide/create-package"
          element={
            <ProtectedProviderRoute>
              <TourGuideCreatePackage />
            </ProtectedProviderRoute>
          }
        />
        <Route path="/pages/hotel/dashboard" element={<HotelProviderDashboard />} />
        <Route path="/pages/vehicle/dashboard" element={<VehicleProviderDashboard />} />
        <Route path="/tour-guides" element={<TourGuidess />} />

        {/* Second App.jsx Routes */}
        <Route path="/hotels" element={<HotelCollection />} /> {/* Adjusted path */}
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/booking/:id/:roomType" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;