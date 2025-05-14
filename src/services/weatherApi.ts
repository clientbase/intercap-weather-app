const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;

function formatWeatherData(data: WeatherResponse): WeatherData {
  return {
    date: new Date(data.dt * 1000).toISOString(),
    temp: data.main.temp,
    minTemp: data.main.temp_min,
    maxTemp: data.main.temp_max,
    description: data.weather[0].description
  };
}

function formatForecastData(data: ForecastResponse): WeatherData[] {
  return data.list.map(item => ({
    date: new Date(item.dt * 1000).toISOString(),
    temp: item.main.temp,
    minTemp: item.main.temp_min,
    maxTemp: item.main.temp_max,
    description: item.weather[0].description
  }));
}

export async function getWeather(city: string): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error('OpenWeather API key is not configured');
  }

  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  return formatWeatherData(data);
}

export async function getForecast(city: string): Promise<WeatherData[]> {
  if (!API_KEY) {
    throw new Error('OpenWeather API key is not configured');
  }

  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }

  const data = await response.json();
  return formatForecastData(data);
}
