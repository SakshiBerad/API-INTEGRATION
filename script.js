const API_KEY = '9cb20fac14dc430ad2920d902aedfbc9'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return;

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  
  const data = await response.json();
  
  const resultDiv = document.getElementById('weatherResult');

  if (data.cod === 200) {
    resultDiv.innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>City not found!</p>`;
  }
}
