# Smart Home Control Panel

## Project Description

This is a **Smart Home Dashboard** responsive web application built with **React** and **Tailwind CSS**.
It allows users to view and control smart devices grouped by rooms, providing an interactive and visually clean dashboard experience.

The app includes **real-time weather**, **energy usage**, and **device state management** with local persistence.

---

## Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **State Management:** Local state with React Hooks
* **API:** Weather data fetched from [WeatherAPI](https://www.weatherapi.com/)
* **Persistence:** LocalStorage for device states
* **Other:** Vite (build tool)

---

## Features

### Dashboard

* Dynamic greeting based on time of day
* Current weather display (°C/°F toggle)
* Energy usage summary (mocked)
* Responsive card layout

### Rooms

* Horizontally scrollable list of rooms
* Room card shows:

  * Room name
  * Icon
  * Active Devices count (updates when devices are toggled)
* Smooth selection animation on the selected room

### Devices

* Grid of devices per selected room
* Each device card includes:

  * Icon + Name
  * Toggle ON/OFF (state saved in localStorage)
  * Optional live reading (mocked)
* Device state updates immediately reflect in **Active Devices count**

### Bonus Features

* Toggle state persistence via localStorage
* Smooth room selection animation
* Icon theming based on device state
* Responsive layout for mobile, tablet, and desktop
* Temperature unit toggle (°C ↔ °F)

## Installation & Setup

1. Clone the repository:
   `git clone https://github.com/Rabiyaazami/Smart-Home-Dashboard.git`
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`
4. Open the app in your browser at `http://localhost:5173/`

---

## Usage

* Click on a room to view its devices
* Toggle devices ON/OFF, and the **Active Devices count** will update
* Switch temperature units in the Weather card
* The app is fully responsive on mobile and desktop


## Conclusion

This project demonstrates:

* React component architecture
* Dynamic state management with hooks and localStorage
* Responsive UI using Tailwind CSS
* Smooth animations and interactive UX
