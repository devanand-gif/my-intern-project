/**
 * Asynchronous function to fetch current weather data for a specific location (London).
 * Uses the Open-Meteo API.
 *
 * @returns {Promise<Object>} - A promise that resolves with the weather data (JSON object)
 * @throws {Error} - Throws an error if the network response is not ok.
 */
export const fetchWeather = async () => {
  // Performs a fetch request to the Open-Meteo API for London's temperature
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=0.1278&current=temperature_2m"
  );

  // Checks if the HTTP response status is not successful (e.g., 404, 500)
  if (!res.ok) {
    // Throws an error if the fetch failed, indicating an issue with the request or server
    throw new Error("Failed to fetch weather data");
  }

  // Parses the JSON response body and returns the resulting JavaScript object
  return res.json();
};