// // src/components/DeviceCard.js
// import React from "react";

// const DeviceCard = ({ device, toggleDevice }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white shadow hover:shadow-lg transition">
//       <span className="text-4xl">{device.icon}</span>
//       <p className="mt-2 font-medium">{device.name}</p>
//       <button
//         onClick={() => toggleDevice(device.id)}
//         className={`mt-2 px-4 py-1 rounded-full ${
//           device.state ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
//         }`}
//       >
//         {device.state ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// };

// export default DeviceCard;

// src/components/DeviceCard.jsx
import React from "react";

const DeviceCard = ({ device, toggleDevice }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-white shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
      <span
        className={`text-4xl transition-colors duration-300 ${
          device.state ? "text-green-500" : "text-gray-400"
        }`}
      >
        {device.icon}
      </span>
      <p className="mt-2 font-medium">{device.name}</p>
      <button
        onClick={() => toggleDevice(device.id)}
        className={`mt-2 px-4 py-1 rounded-full ${
          device.state ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        {device.state ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default DeviceCard;
