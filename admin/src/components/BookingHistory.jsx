function BookingHistory() {
    const history = [
      { id: 1, customer: "Alice", vehicle: "Car A", date: "2025-03-20" },
      { id: 2, customer: "Bob", vehicle: "Car B", date: "2025-03-25" },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Booking History</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Customer</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-3">{booking.customer}</td>
                  <td className="p-3">{booking.vehicle}</td>
                  <td className="p-3">{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default BookingHistory;