import React, { useState, useEffect } from "react";
import useWeather from "../hooks/useWeather";
import RoomSelector from "./RoomSelector.jsx";
import DeviceGrid from "./DeviceGrid.jsx";
import { devices as mockDevices } from "../data/mockData";

const Dashboard = () => {
  const [city, setCity] = useState("Bangalore");
  const weather = useWeather(city);

  // Device state with localStorage persistence
  const [devices, setDevices] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("devices"));
    const base = Array.isArray(stored) ? stored : mockDevices;
    return base.map((d) => ({
      ...d,
      roomId: typeof d.roomId === "string" ? parseInt(d.roomId, 10) : d.roomId,
    }));
  });

  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [unit, setUnit] = useState("C"); // Temperature unit °C/°F

  // Persist devices to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  // Toggle device ON/OFF
  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, state: !d.state } : d))
    );
  };

  // Filter devices based on selected room
  const filteredDevices = selectedRoomId
    ? devices.filter((d) => Number(d.roomId) === Number(selectedRoomId))
    : devices;

  // Greeting logic
  const hours = new Date().getHours();
  const greeting =
    hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

  // Mock energy usage
  const energyUsage = "24.5"; // kWh (mock)

  const displayTemp =
    weather &&
    (unit === "C" ? weather.current.temp_c : weather.current.temp_f);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Greeting */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {greeting}! 👋
      </h2>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Weather Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700">
              Weather in {city}
            </h3>
            <button
              onClick={() => {
                const newCity = prompt("Enter city name:", city);
                if (newCity && newCity.trim()) {
                  setCity(newCity.trim());
                }
              }}
              className="flex items-center justify-center gap-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-colors duration-200 w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Check Other Place
            </button>
          </div>
          {weather ? (
            <>
              <p className="text-3xl font-bold text-gray-900">
                🌡️ {displayTemp}°{unit}
              </p>
              <p className="text-gray-600 mb-2">{weather.current.condition.text}</p>
              <img
                src={weather.current.condition.icon}
                alt="Weather icon"
                className="w-20 h-20"
              />
              <button
                className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setUnit(unit === "C" ? "F" : "C")}
              >
                Switch to °{unit === "C" ? "F" : "C"}
              </button>
            </>
          ) : (
            <p className="text-gray-500">Loading weather...</p>
          )}
        </div>

        {/* Energy Usage Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Energy Usage</h3>
          <p className="text-3xl font-bold text-gray-900">{energyUsage} kWh</p>
          <p className="text-gray-500 mt-1">This Month</p>
        </div>

        {/* Placeholder Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Other KPI</h3>
          <p className="text-3xl font-bold text-gray-900">--</p>
          <p className="text-gray-500 mt-1">Coming Soon</p>
        </div>
      </div>

      {/* Rooms */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Rooms →</h3>
      <div className="-mx-6 px-6">
        <RoomSelector
          onRoomSelect={setSelectedRoomId}
          devices={devices}
          selectedRoomId={selectedRoomId}
        />
      </div>

      {/* Devices */}
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Devices →</h3>
      <DeviceGrid devices={filteredDevices} toggleDevice={toggleDevice} />
    </div>
  );
};

export default Dashboard;
