interface WeatherData {
    date: string;
    dt: number;
    temp: number;
    minTemp: number;
    maxTemp: number;
    description: string;
  }
  
  interface WeatherResponse {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      description: string;
    }>;
    dt: number;
  }
  
  interface ForecastResponse {
    list: Array<{
      dt: number;
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
      };
      weather: Array<{
        description: string;
      }>;
    }>;
  }

  interface City { 
    id: number, 
    name: string, 
    country: string 
  }