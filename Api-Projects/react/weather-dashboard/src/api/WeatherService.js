const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `${API_BASE_URL}/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Weather data could not be fetched. Please enter a city");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
