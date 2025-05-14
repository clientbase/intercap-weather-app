# Cloud-9 Forecasts - Weather App

A modern, responsive weather application built with React, TypeScript, and Vite. This project demonstrates best practices in front-end development and serves as a showcase for technical interview purposes.

## About

This weather application provides current weather information and 5-day forecasts for selected cities. Built with modern React patterns and TypeScript for type safety, the app demonstrates proficiency in:

- Modern React development with hooks (useState, useEffect)
- TypeScript for enhanced developer experience and type safety
- Component-based architecture with reusable UI components
- API integration with the OpenWeather API
- Responsive design principles
- Modern UI components using shadcn/ui

## Technologies Used

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **shadcn/ui** - Modern, accessible UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Recharts** - Composable charting library for data visualization

## Features

- 🌤️ Current weather display for selected cities
- 📊 Interactive temperature charts showing daily progression
- 📅 5-day weather forecast with detailed hourly breakdowns
- 🏙️ City selector with pre-configured locations (Toronto, Ottawa, Tokyo)
- 📱 Fully responsive design
- ♿ Accessible UI components following WCAG guidelines
- 🎨 Modern, clean interface with dark header design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root and add your OpenWeather API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
   
   To get an API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key from your dashboard  

## Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

src/  
├── components/ # Reusable UI components  
│ ├── ui/ # shadcn/ui components  
│ ├── CitySelector.tsx  
│ ├── WeatherCard.tsx  
│ └── ForecastCard.tsx  
├── constants/ # Application constants  
│ └── cities.ts  
├── pages/ # Page components  
│ └── Home.tsx  
├── services/ # API service layer  
│ └── weatherApi.ts  
└── App.tsx # Main application component  

## Key Implementation Details

### Best Practices Demonstrated

1. **Type Safety**: Full TypeScript implementation with proper interfaces
2. **Component Architecture**: Modular, reusable components with clear separation of concerns
3. **State Management**: Proper use of React hooks for local state management
4. **Error Handling**: Comprehensive error handling for API calls
5. **Responsive Design**: Mobile-first approach with Tailwind CSS
6. **Accessibility**: Using semantic HTML and accessible UI components
7. **Code Organization**: Clean file structure with logical grouping
8. **Environment Variables**: Secure API key management

### API Integration

The application integrates with the OpenWeather API to fetch:
- Current weather data (`/weather` endpoint)
- 5-day forecast data (`/forecast` endpoint)

All API calls include proper error handling and loading states for excellent user experience.

## Future Enhancements

- Add geolocation support for automatic city detection
- Implement weather alerts and notifications
- Add more detailed weather metrics (UV index, visibility, etc.)
- Include weather animations and icons
- Add unit conversion (Celsius/Fahrenheit)
- Implement data caching for improved performance

## Author

**Tyrone Melkioty**

This project was developed as a demonstration of modern React development skills and best practices for interview purposes.

---

*Built with ❤️ using React, TypeScript, and shadcn/ui*

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
