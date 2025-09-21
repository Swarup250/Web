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
    <>
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Weather Information</h2>
                <div className="text-white/80 text-lg text-center mb-8 font-medium">
                    Timezone: {weather.timezone || 'Loading...'}
                </div>
                {weather.current ? (
                    <ul className="space-y-4">
                        <li className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-white">
                            <span className="text-red-800 font-semibold">🌡️ Apparent Temperature:</span> 
                            <span className="text-2xl font-bold ml-2">{weather.current.apparent_temperature}°C</span>
                        </li>
                        <li className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-white">
                            <span className="text-blue-800 font-semibold">🌧️ Precipitation:</span> 
                            <span className="text-2xl font-bold ml-2">{weather.current.precipitation} mm</span>
                        </li>
                        <li className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-white">
                            <span className="text-green-800 font-semibold">💨 Wind Speed:</span> 
                            <span className="text-2xl font-bold ml-2">{weather.current.wind_speed_10m} m/s</span>
                        </li>
                    </ul>
                ) : (
                    <div className="bg-white/10 rounded-2xl p-8 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/30 border-t-white mx-auto mb-4"></div>
                        <span className="text-white/70 text-lg">Loading weather data...</span>
                    </div>
                )}
            </div>
        </div>
    </>
)

}

export default Weather