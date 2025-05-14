import { useState, useEffect } from "react";
import { cities } from "../constants/cities";
import { getWeather, getForecast } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import CitySelector from "@/components/CitySelector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [selectedCityName, setSelectedCityName] = useState(cities[0].name);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[] | null>(null);
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    getWeather(selectedCityName).then(weather => setWeather(weather));
    setShowForecast(false); // Reset forecast on city change
  }, [selectedCityName]);

  const handleForecastClick = () => {
    getForecast(selectedCityName).then(forcast => setForecast(forcast));
    setShowForecast(true);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="city-selector" className="text-sm font-medium">
          Select a City
        </Label>
        <CitySelector onSelect={setSelectedCityName} />
      </div>
      
      {weather && <WeatherCard data={weather} city={selectedCityName} />}
      
      <div className="space-y-4">
        <Button onClick={handleForecastClick} className="w-full sm:w-auto">
          See Forecast
        </Button>
        <Separator />
      </div>
      
      {showForecast && forecast && <ForecastCard data={forecast} />}
    </div>
  );
}