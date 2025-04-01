import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VehiclesPage from './pages/VehiclesPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import VehicleRentPage from './pages/VehicleRentPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VehiclesPage />} />
        <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
        <Route path="/rent" element={<VehicleRentPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;