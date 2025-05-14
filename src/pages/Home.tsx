import { useState, useEffect } from "react";
import { cities } from "../constants/cities";
import { getWeather, getForecast } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import CitySelector from "@/components/CitySelector";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedCityId, setSelectedCityId] = useState(cities[0].name);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[] | null>(null);
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    getWeather(selectedCityId).then(weather => setWeather(weather));
    setShowForecast(false); // Reset forecast on city change
  }, [selectedCityId]);

  const handleForecastClick = () => {
    getForecast(selectedCityId).then(forcast => setForecast(forcast));
    setShowForecast(true);
  };

  return (
    <div className="container mx-auto p-4">
      <CitySelector onSelect={setSelectedCityId} />
      {weather && <WeatherCard data={weather} />}
      <div className="mt-4">
        <Button onClick={handleForecastClick}>
          See Forecast
        </Button>
      </div>
      {showForecast && forecast && <ForecastCard data={forecast} />}
    </div>
  );
}