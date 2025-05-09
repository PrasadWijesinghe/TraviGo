import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';
import Footer from '../components/Footer';

const VehicleProviderRegister = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleModel: '',
    licensePlate: '',
    insuranceDetails: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [providerId, setProviderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('providerId');
    const providerType = localStorage.getItem('providerType');
    if (!id || providerType !== 'VehicleProvider') {
      navigate('/service-provider/register');
    } else {
      setProviderId(id);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/service-provider/register-advanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          providerId,
          providerType: 'VehicleProvider',
          advancedDetails: formData,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        localStorage.removeItem('providerId');
        localStorage.removeItem('providerType');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message);
      }
    } catch {
      setError('Failed to connect to the server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />
      <main className="flex-grow flex mt-20 lg:mt-24 mb-12 lg:mb-16">
        <div className="w-full flex justify-center items-center p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-6 lg:mt-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Vehicle Provider Registration</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  placeholder="Vehicle Type (e.g., Car, Van, Bus)"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  placeholder="Vehicle Model"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  placeholder="License Plate"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="insuranceDetails"
                  value={formData.insuranceDetails}
                  onChange={handleChange}
                  placeholder="Insurance Details"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VehicleProviderRegister;