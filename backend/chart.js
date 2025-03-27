import { useState, useEffect } from "react";

const Reports = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      // Example API call
      const response = await fetch("/api/reports");
      const data = await response.json();
      setChartData({
        labels: data.dates, // e.g., ["01 Mar", "02 Mar", ...]
        datasets: [
          {
            type: "bar",
            label: "Hotel Bookings",
            data: data.hotelBookings, // e.g., [400, 300, ...]
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            yAxisID: "y",
          },
          {
            type: "line",
            label: "Vehicle Rentals",
            data: data.vehicleRentals, // e.g., [30, 25, ...]
            borderColor: "rgba(255, 159, 64, 1)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            fill: false,
            tension: 0.3,
            yAxisID: "y1",
          },
        ],
      });
    };
    fetchData();
  }, []);

  // ... (rest of the component)
};