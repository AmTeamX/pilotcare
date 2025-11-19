'use client';

import { useState } from 'react';

export default function WeatherHealthPage() {
    const [selectedLocation, setSelectedLocation] = useState('destination');
    const [selectedCity, setSelectedCity] = useState('jfk');

    const locations = {
        jfk: {
            name: 'New York (JFK)',
            country: 'United States',
            timezone: 'EST (UTC-5)',
            currentWeather: {
                temp: 12,
                condition: 'Partly Cloudy',
                icon: '⛅',
                humidity: 65,
                windSpeed: 18,
                windDirection: 'NW',
                visibility: 10,
                pressure: 1013,
                uvIndex: 3,
                feelsLike: 9
            },
            forecast: [
                { day: 'Today', high: 14, low: 8, condition: '⛅', precipitation: 10 },
                { day: 'Tomorrow', high: 16, low: 10, condition: '☀️', precipitation: 5 },
                { day: 'Sat', high: 13, low: 7, condition: '🌧️', precipitation: 80 },
                { day: 'Sun', high: 15, low: 9, condition: '⛅', precipitation: 20 },
            ],
            healthAdvisories: [
                {
                    type: 'info',
                    icon: '😷',
                    title: 'Flu Activity: Moderate',
                    description: 'Increased flu cases reported. Consider extra hygiene precautions.'
                },
                {
                    type: 'warning',
                    icon: '🌡️',
                    title: 'Cold Weather Alert',
                    description: 'Temperatures dropping. Layer clothing appropriately.'
                },
                {
                    type: 'success',
                    icon: '🌤️',
                    title: 'Air Quality: Good',
                    description: 'Air quality is satisfactory for outdoor activities.'
                },
            ],
            localInfo: {
                timeNow: '14:32',
                sunrise: '06:45',
                sunset: '17:20',
                moonPhase: '🌓'
            }
        },
        dxb: {
            name: 'Dubai (DXB)',
            country: 'United Arab Emirates',
            timezone: 'GST (UTC+4)',
            currentWeather: {
                temp: 32,
                condition: 'Sunny',
                icon: '☀️',
                humidity: 45,
                windSpeed: 12,
                windDirection: 'NE',
                visibility: 10,
                pressure: 1010,
                uvIndex: 9,
                feelsLike: 35
            },
            forecast: [
                { day: 'Today', high: 34, low: 24, condition: '☀️', precipitation: 0 },
                { day: 'Tomorrow', high: 33, low: 25, condition: '☀️', precipitation: 0 },
                { day: 'Sat', high: 35, low: 26, condition: '☀️', precipitation: 0 },
                { day: 'Sun', high: 34, low: 25, condition: '⛅', precipitation: 5 },
            ],
            healthAdvisories: [
                {
                    type: 'warning',
                    icon: '☀️',
                    title: 'Extreme Heat Warning',
                    description: 'Very high temperatures. Stay hydrated and limit sun exposure.'
                },
                {
                    type: 'info',
                    icon: '💧',
                    title: 'Dehydration Risk: High',
                    description: 'Drink plenty of water throughout the day.'
                },
                {
                    type: 'success',
                    icon: '😷',
                    title: 'COVID-19: Low Risk',
                    description: 'Current infection rates are low in this region.'
                },
            ],
            localInfo: {
                timeNow: '23:32',
                sunrise: '06:30',
                sunset: '17:45',
                moonPhase: '🌓'
            }
        },
        sin: {
            name: 'Singapore (SIN)',
            country: 'Singapore',
            timezone: 'SGT (UTC+8)',
            currentWeather: {
                temp: 28,
                condition: 'Thunderstorms',
                icon: '⛈️',
                humidity: 85,
                windSpeed: 15,
                windDirection: 'SW',
                visibility: 7,
                pressure: 1008,
                uvIndex: 6,
                feelsLike: 32
            },
            forecast: [
                { day: 'Today', high: 30, low: 25, condition: '⛈️', precipitation: 90 },
                { day: 'Tomorrow', high: 31, low: 26, condition: '🌧️', precipitation: 70 },
                { day: 'Sat', high: 29, low: 25, condition: '⛈️', precipitation: 85 },
                { day: 'Sun', high: 30, low: 26, condition: '🌧️', precipitation: 60 },
            ],
            healthAdvisories: [
                {
                    type: 'warning',
                    icon: '🦟',
                    title: 'Dengue Alert: Elevated',
                    description: 'Increased mosquito activity. Use insect repellent.'
                },
                {
                    type: 'info',
                    icon: '💨',
                    title: 'Haze Advisory',
                    description: 'Air quality may be affected. Monitor PSI levels.'
                },
                {
                    type: 'info',
                    icon: '🌧️',
                    title: 'Monsoon Season',
                    description: 'Frequent rain expected. Carry an umbrella.'
                },
            ],
            localInfo: {
                timeNow: '03:32',
                sunrise: '07:00',
                sunset: '19:10',
                moonPhase: '🌓'
            }
        }
    };

    const currentLocation = locations[selectedCity as keyof typeof locations];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">🌍 Weather & Health</h1>
                <p className="text-cyan-100">Local conditions and advisories</p>
            </div>

            {/* Location Selector */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Select Location
                    </label>
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-medium"
                    >
                        <option value="jfk">🇺🇸 New York (JFK)</option>
                        <option value="dxb">🇦🇪 Dubai (DXB)</option>
                        <option value="sin">🇸🇬 Singapore (SIN)</option>
                    </select>
                </div>
            </div>

            {/* Current Location Info */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{currentLocation.name}</h2>
                            <p className="text-sm text-gray-600">{currentLocation.country}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Local Time</p>
                            <p className="text-xl font-bold text-blue-600">{currentLocation.localInfo.timeNow}</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">{currentLocation.timezone}</p>
                </div>
            </div>

            {/* Current Weather */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">Current Weather</h2>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg text-white p-6 mb-4">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="text-6xl mb-2">{currentLocation.currentWeather.icon}</div>
                            <p className="text-xl font-semibold opacity-90">{currentLocation.currentWeather.condition}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-bold">{currentLocation.currentWeather.temp}°</div>
                            <p className="text-sm opacity-80 mt-1">Feels like {currentLocation.currentWeather.feelsLike}°</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
                        <div className="text-center">
                            <p className="text-xs opacity-80 mb-1">💧 Humidity</p>
                            <p className="text-lg font-bold">{currentLocation.currentWeather.humidity}%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs opacity-80 mb-1">💨 Wind</p>
                            <p className="text-lg font-bold">{currentLocation.currentWeather.windSpeed} km/h</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs opacity-80 mb-1">👁️ Visibility</p>
                            <p className="text-lg font-bold">{currentLocation.currentWeather.visibility} km</p>
                        </div>
                    </div>
                </div>

                {/* Additional Weather Details */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                        <p className="text-xs text-gray-600 mb-1">☀️ UV Index</p>
                        <p className="text-2xl font-bold text-gray-900">{currentLocation.currentWeather.uvIndex}</p>
                        <p className="text-xs text-orange-600 mt-1">
                            {currentLocation.currentWeather.uvIndex >= 8 ? 'Very High' : currentLocation.currentWeather.uvIndex >= 6 ? 'High' : 'Moderate'}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                        <p className="text-xs text-gray-600 mb-1">🌡️ Pressure</p>
                        <p className="text-2xl font-bold text-gray-900">{currentLocation.currentWeather.pressure}</p>
                        <p className="text-xs text-gray-500 mt-1">hPa</p>
                    </div>
                </div>
            </div>

            {/* 4-Day Forecast */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">4-Day Forecast</h2>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                    <div className="space-y-3">
                        {currentLocation.forecast.map((day, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="text-3xl">{day.condition}</div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{day.day}</p>
                                        <p className="text-xs text-gray-600">💧 {day.precipitation}%</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-gray-900">{day.high}°</p>
                                    <p className="text-sm text-gray-500">{day.low}°</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sun & Moon Info */}
            <div className="px-4 mb-6">
                <div className="bg-gradient-to-r from-orange-100 to-purple-100 rounded-2xl border border-orange-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-4">☀️ Sun & Moon</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                            <p className="text-2xl mb-1">🌅</p>
                            <p className="text-xs text-gray-600 mb-1">Sunrise</p>
                            <p className="font-bold text-gray-900">{currentLocation.localInfo.sunrise}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl mb-1">🌇</p>
                            <p className="text-xs text-gray-600 mb-1">Sunset</p>
                            <p className="font-bold text-gray-900">{currentLocation.localInfo.sunset}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl mb-1">{currentLocation.localInfo.moonPhase}</p>
                            <p className="text-xs text-gray-600 mb-1">Moon</p>
                            <p className="font-bold text-gray-900">Waning</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Health Advisories */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">🏥 Health Advisories</h2>
                <div className="space-y-3">
                    {currentLocation.healthAdvisories.map((advisory, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl shadow-md border p-4 ${advisory.type === 'warning'
                                    ? 'bg-orange-50 border-orange-200'
                                    : advisory.type === 'success'
                                        ? 'bg-green-50 border-green-200'
                                        : 'bg-blue-50 border-blue-200'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-3xl">{advisory.icon}</div>
                                <div className="flex-1">
                                    <h3 className={`font-bold mb-1 ${advisory.type === 'warning'
                                            ? 'text-orange-900'
                                            : advisory.type === 'success'
                                                ? 'text-green-900'
                                                : 'text-blue-900'
                                        }`}>
                                        {advisory.title}
                                    </h3>
                                    <p className="text-sm text-gray-700">{advisory.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Layover Tips */}
            <div className="px-4 mb-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>💡</span> Layover Tips
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Stay hydrated - drink water regularly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Adjust room temperature for better sleep</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Light exercise can help combat jet lag</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Follow local meal times to adjust faster</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
