import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";

const useWeather = (city = "Bangalore") => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather(city);
      setWeather(data);
    };
    loadWeather();
  }, [city]);

  return weather;
};

export default useWeather;
