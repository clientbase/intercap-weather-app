import { getWeather, getForecast } from './services/weatherApi';

async function testWeatherAPI() {
  try {
    console.log('Testing current weather for London:');
    const currentWeather = await getWeather('London');
    console.log(JSON.stringify(currentWeather, null, 2));

    console.log('\nTesting 5-day forecast for London:');
    const forecast = await getForecast('London');
    console.log(JSON.stringify(forecast, null, 2));
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

testWeatherAPI(); 