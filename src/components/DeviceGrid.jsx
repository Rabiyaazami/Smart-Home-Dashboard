// src/components/DeviceGrid.js
import React from "react";
import DeviceCard from "./DeviceCard";

const DeviceGrid = ({ devices, toggleDevice }) => {
  if (!devices || devices.length === 0) {
    return (
      <div className="mt-4 text-center text-gray-500 italic">
        No devices in this room.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} toggleDevice={toggleDevice} />
      ))}
    </div>
  );
};

export default DeviceGrid;
