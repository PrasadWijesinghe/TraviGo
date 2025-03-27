const TourGuides = () => {
  const tourGuides = [
    { id: 1, name: "Alice Johnson", location: "New York", experience: 5 },
    { id: 2, name: "Bob Smith", location: "Miami", experience: 3 },
    { id: 3, name: "Clara Davis", location: "Colorado", experience: 7 },
    { id: 4, name: "David Lee", location: "San Francisco", experience: 4 },
    { id: 5, name: "Emma Brown", location: "Chicago", experience: 6 },
  ];

  const handleUpdate = (id) => {
    console.log(`Update tour guide ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete tour guide ${id}`);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Tour Guides</h2>
        <div className="space-y-4">
          {tourGuides.map((guide) => (
            <div
              key={guide.id}
              className="flex items-center justify-between p-4 bg-pink-50 rounded-lg shadow-md"
            >
              <div>
                <span className="text-lg font-medium">{guide.name}</span>
                <p className="text-sm text-gray-600">
                  Location: {guide.location} | Experience: {guide.experience}/5
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleUpdate(guide.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(guide.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourGuides;