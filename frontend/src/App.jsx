import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelCollection from "./Pages/HotelCollection";
import HotelDetails from "./Pages/HotelDetails";
import BookingPage from "./Pages/BookingPage";

function App() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<HotelCollection />} />
                <Route path="/hotel/:id" element={<HotelDetails  />} />
                <Route path="/booking/:id/:roomType" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
