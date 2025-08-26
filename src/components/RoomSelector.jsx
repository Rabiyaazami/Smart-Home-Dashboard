// // src/components/RoomSelector.js
// import React, { useState } from "react";
// import { rooms, devices } from "../data/mockData";

// const RoomSelector = ({ onRoomSelect }) => {
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   const handleClick = (room) => {
//     setSelectedRoom(room.id);
//     onRoomSelect(room.id);
//   };

//   const getActiveDevicesCount = (roomId) => {
//     return devices.filter((d) => d.roomId === roomId && d.state).length;
//   };

//   return (
//     <div className="flex overflow-x-auto space-x-4 py-2 px-2">
//       {rooms.map((room) => (
//         <div
//           key={room.id}
//           onClick={() => handleClick(room)}
//           className={`flex-shrink-0 w-40 h-24 rounded-xl p-4 cursor-pointer border transition-colors duration-200
//             ${
//               selectedRoom === room.id
//                 ? "bg-blue-500 text-white border-blue-500"
//                 : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//             }`}
//         >
//           <div className="text-3xl">{room.icon}</div>
//           <h3 className="mt-2 font-semibold">{room.name}</h3>
//           <p className="text-sm mt-1">
//             Active Devices: {getActiveDevicesCount(room.id)}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RoomSelector;


// src/components/RoomSelector.jsx
// import React, { useState, useRef } from "react";
// import { rooms as mockRooms, devices as mockDevices } from "../data/mockData";

// const RoomSelector = ({ onRoomSelect }) => {
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const scrollRef = useRef(null);

//   // Handle room click
//   const handleClick = (room) => {
//     setSelectedRoom(room.id);
//     onRoomSelect(room.id);

//     // Optional: scroll room into center smoothly
//     const card = document.getElementById(`room-${room.id}`);
//     if (card && scrollRef.current) {
//       const scrollLeft =
//         card.offsetLeft - scrollRef.current.offsetWidth / 2 + card.offsetWidth / 2;
//       scrollRef.current.scrollTo({
//         left: scrollLeft,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Count active devices per room
//   const getActiveDevicesCount = (roomId) => {
//     return mockDevices.filter((d) => d.roomId === roomId && d.state).length;
//   };

//   return (
//     <div
//       ref={scrollRef}
//       className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide"
//     >
//       {mockRooms.map((room) => (
//         <div
//           key={room.id}
//           id={`room-${room.id}`}
//           onClick={() => handleClick(room)}
//           className={`flex-shrink-0 w-40 h-32 rounded-xl p-4 cursor-pointer border transition-all duration-300 transform
//             ${
//               selectedRoom === room.id
//                 ? "bg-blue-500 text-white border-blue-500 scale-105 shadow-lg"
//                 : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//             }`}
//         >
//           <div className="text-3xl">{room.icon}</div>
//           <h3 className="mt-2 font-semibold">{room.name}</h3>
//           <p className="text-sm mt-1">
//             Active Devices: {getActiveDevicesCount(room.id)}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RoomSelector;
import React, { useState, useRef, useEffect } from "react";
import { rooms as mockRooms } from "../data/mockData";

const RoomSelector = ({ onRoomSelect, devices, selectedRoomId }) => {
  const [selectedRoom, setSelectedRoom] = useState(selectedRoomId ?? null);
  const scrollRef = useRef(null);

  useEffect(() => {
    setSelectedRoom(selectedRoomId ?? null);
  }, [selectedRoomId]);

  const handleClick = (room) => {
    const numericId = Number(room.id);
    setSelectedRoom(numericId);
    onRoomSelect(numericId);

    // Scroll selected card into center
    const card = document.getElementById(`room-${room.id}`);
    if (card && scrollRef.current) {
      const scrollLeft =
        card.offsetLeft -
        scrollRef.current.offsetWidth / 2 +
        card.offsetWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const getActiveDevicesCount = (roomId) =>
    (devices || []).filter((d) => Number(d.roomId) === Number(roomId) && d.state)
      .length;

  return (
    <div
      className="w-full overflow-x-auto no-scrollbar"
      ref={scrollRef}
      style={{ WebkitOverflowScrolling: "touch", overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <div
        className="inline-flex gap-4 py-2 px-2 snap-x snap-mandatory"
        style={{ display: "inline-flex", gap: "1rem" }}
      >
        {mockRooms.map((room) => (
          <div
            key={room.id}
            id={`room-${room.id}`}
            onClick={() => handleClick(room)}
            className={`snap-start flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 h-32 flex flex-col justify-between rounded-xl p-4 cursor-pointer border transition-all duration-300 transform
              ${
                (selectedRoomId ?? selectedRoom) === room.id
                  ? "bg-blue-500 text-white border-blue-500 scale-105 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            style={{ minWidth: "9rem" }}
          >
            <div className="text-3xl">{room.icon}</div>
            <div>
              <h3 className="mt-1 font-semibold text-sm sm:text-base">{room.name}</h3>
              <p className="text-xs sm:text-sm mt-1">
                Active Devices: {getActiveDevicesCount(room.id)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;


