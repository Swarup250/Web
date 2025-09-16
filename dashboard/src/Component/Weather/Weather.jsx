import React, { useEffect, useState } from 'react'

function Weather() {
    
    const [weather,setWeather] = useState({})

    useEffect(() => {
        async function weatherInfo() {
            try {
                const res = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=19.0728&longitude=72.8826&current=apparent_temperature,precipitation,wind_speed_10m&timezone=auto&forecast_days=1'
                );
            
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const data = await res.json();
                setWeather(data);
                console.log(data.current.apparent_temperature)
            } finally {
                console.log('The app is running')
            }
        }
        weatherInfo();
    }, []);
    
    return (
        <div>
            <h2>Weather Information</h2>
            <div>Timezone: {weather.timezone || 'Loading...'}</div>
            {weather.current ? (
                <ul>
                    <li>Apparent Temperature: {weather.current.apparent_temperature}°C</li>
                    <li>Precipitation: {weather.current.precipitation} mm</li>
                    <li>Wind Speed: {weather.current.wind_speed_10m} m/s</li>
                </ul>
            ) : (
                <div>Loading weather data...</div>
            )}
        </div>
    )
}

export default Weather