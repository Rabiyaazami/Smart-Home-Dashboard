const API_KEY = "84fbe328e62e4ce6a2b150624252508";
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";

export const fetchWeather = async (city = "Bangalore") => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
