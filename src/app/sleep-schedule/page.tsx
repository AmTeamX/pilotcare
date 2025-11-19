'use client';

import { useState } from 'react';

export default function SleepSchedulePage() {
    const [selectedFlight, setSelectedFlight] = useState('upcoming');

    const upcomingFlight = {
        flightNumber: 'BA123',
        departure: { city: 'London', code: 'LHR', time: '10:30', date: 'Nov 18', timezone: 'GMT (UTC+0)' },
        arrival: { city: 'Tokyo', code: 'NRT', time: '06:30+1', date: 'Nov 19', timezone: 'JST (UTC+9)' },
        duration: '11h 30m',
        timeShift: '+9 hours',
        daysUntil: 3
    };

    const sleepSchedule = {
        current: {
            timezone: 'GMT (UTC+0)',
            bedtime: '23:00',
            waketime: '07:00',
            sleepDuration: '8h'
        },
        destination: {
            timezone: 'JST (UTC+9)',
            recommendedBedtime: '22:00',
            recommendedWaketime: '06:00',
            targetSleepDuration: '8h'
        },
        adjustment: {
            strategy: 'Gradual Advance',
            shiftPerDay: '1-2 hours earlier',
            startDate: 'Nov 15',
            daysNeeded: 3
        }
    };

    const dailySchedule = [
        {
            date: 'Nov 15 (Today)',
            day: 'Day 1',
            bedtime: '22:00',
            waketime: '06:00',
            lightExposure: 'Morning: 07:00-09:00',
            mealTimes: ['Breakfast: 06:30', 'Lunch: 12:00', 'Dinner: 18:00'],
            notes: 'Start shifting 1 hour earlier',
            completed: false
        },
        {
            date: 'Nov 16',
            day: 'Day 2',
            bedtime: '21:00',
            waketime: '05:00',
            lightExposure: 'Morning: 05:30-07:30',
            mealTimes: ['Breakfast: 05:30', 'Lunch: 11:00', 'Dinner: 17:00'],
            notes: 'Shift another hour earlier',
            completed: false
        },
        {
            date: 'Nov 17',
            day: 'Day 3',
            bedtime: '22:00',
            waketime: '06:00',
            lightExposure: 'Morning: 06:30-08:30',
            mealTimes: ['Breakfast: 06:30', 'Lunch: 12:00', 'Dinner: 18:00'],
            notes: 'Final adjustment day',
            completed: false
        },
        {
            date: 'Nov 18',
            day: 'Flight Day',
            bedtime: 'On flight',
            waketime: '06:00 JST',
            lightExposure: 'Upon arrival in Tokyo',
            mealTimes: ['Eat according to Tokyo time'],
            notes: 'Sleep on the plane, arrive ready',
            completed: false,
            isFlightDay: true
        },
    ];

    const adjustmentTechniques = [
        {
            icon: '☀️',
            title: 'Light Therapy',
            description: 'Expose yourself to bright light in the morning to shift your circadian rhythm forward',
            timing: 'Morning',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: '🌙',
            title: 'Darkness in Evening',
            description: 'Dim lights and avoid screens 2 hours before new bedtime',
            timing: 'Evening',
            color: 'from-indigo-400 to-purple-500'
        },
        {
            icon: '🍽️',
            title: 'Meal Timing',
            description: 'Gradually shift meal times to match destination timezone',
            timing: 'All Day',
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: '💊',
            title: 'Melatonin',
            description: 'Take 0.5-3mg melatonin 30 minutes before your new bedtime',
            timing: 'Evening',
            color: 'from-blue-400 to-cyan-500'
        },
        {
            icon: '🏃',
            title: 'Exercise',
            description: 'Light exercise in the morning helps reinforce the new schedule',
            timing: 'Morning',
            color: 'from-pink-400 to-rose-500'
        },
        {
            icon: '☕',
            title: 'Caffeine Management',
            description: 'Avoid caffeine after 2 PM to protect your new sleep time',
            timing: 'Afternoon',
            color: 'from-amber-400 to-orange-500'
        },
    ];

    const flightTips = [
        { icon: '✈️', tip: 'Set your watch to destination time when you board' },
        { icon: '💧', tip: 'Stay hydrated - drink water every hour' },
        { icon: '🚫', tip: 'Avoid alcohol - it disrupts sleep quality' },
        { icon: '😴', tip: 'Use eye mask and earplugs for better sleep' },
        { icon: '🧘', tip: 'Practice deep breathing or meditation' },
        { icon: '🚶', tip: 'Move around the cabin every 2 hours' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">😴 Sleep Schedule</h1>
                <p className="text-purple-100">Adapt to your destination timezone</p>
            </div>

            {/* Flight Info Card */}
            <div className="px-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg text-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-sm opacity-90 mb-1">Next Flight</p>
                            <p className="text-2xl font-bold">{upcomingFlight.flightNumber}</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                            <p className="text-sm opacity-90">In {upcomingFlight.daysUntil} days</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold">{upcomingFlight.departure.code}</p>
                            <p className="text-sm opacity-90">{upcomingFlight.departure.city}</p>
                            <p className="text-xs opacity-75 mt-1">{upcomingFlight.departure.date}</p>
                            <p className="text-xs opacity-75">{upcomingFlight.departure.time}</p>
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="border-t-2 border-dashed border-white/40 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 px-2">
                                    <span className="text-2xl">✈️</span>
                                </div>
                            </div>
                            <p className="text-xs text-center opacity-75 mt-1">{upcomingFlight.duration}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">{upcomingFlight.arrival.code}</p>
                            <p className="text-sm opacity-90">{upcomingFlight.arrival.city}</p>
                            <p className="text-xs opacity-75 mt-1">{upcomingFlight.arrival.date}</p>
                            <p className="text-xs opacity-75">{upcomingFlight.arrival.time}</p>
                        </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <p className="text-sm text-center">
                            <span className="font-bold">Time Zone Shift: {upcomingFlight.timeShift}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Current vs Destination Sleep Times */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">⏰ Sleep Time Comparison</h2>
                <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🏠</span>
                            <div>
                                <h3 className="font-bold text-gray-900">Current Schedule</h3>
                                <p className="text-xs text-gray-600">{sleepSchedule.current.timezone}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-indigo-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">Bedtime</p>
                                <p className="text-xl font-bold text-gray-900">{sleepSchedule.current.bedtime}</p>
                            </div>
                            <div className="bg-cyan-50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 mb-1">Wake Time</p>
                                <p className="text-xl font-bold text-gray-900">{sleepSchedule.current.waketime}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg text-white p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🎯</span>
                            <div>
                                <h3 className="font-bold">Target Schedule</h3>
                                <p className="text-xs opacity-90">{sleepSchedule.destination.timezone}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                                <p className="text-xs opacity-90 mb-1">Bedtime</p>
                                <p className="text-xl font-bold">{sleepSchedule.destination.recommendedBedtime}</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                                <p className="text-xs opacity-90 mb-1">Wake Time</p>
                                <p className="text-xl font-bold">{sleepSchedule.destination.recommendedWaketime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adjustment Strategy */}
            <div className="px-4 mb-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>📋</span> Your Adjustment Plan
                    </h3>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Strategy:</span>
                            <span className="font-bold text-gray-900">{sleepSchedule.adjustment.strategy}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Daily Shift:</span>
                            <span className="font-bold text-gray-900">{sleepSchedule.adjustment.shiftPerDay}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Days Needed:</span>
                            <span className="font-bold text-gray-900">{sleepSchedule.adjustment.daysNeeded} days</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-3">
                        <p className="text-xs text-gray-700">
                            💡 <span className="font-semibold">Pro Tip:</span> Start adjusting 3 days before your flight for best results.
                            Gradual shifts are easier on your body than sudden changes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Daily Schedule */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">📅 Day-by-Day Schedule</h2>
                <div className="space-y-3">
                    {dailySchedule.map((day, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl shadow-md border p-5 ${day.isFlightDay
                                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-blue-300'
                                    : 'bg-white border-gray-100'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h3 className={`font-bold text-lg ${day.isFlightDay ? 'text-white' : 'text-gray-900'}`}>
                                        {day.day}
                                    </h3>
                                    <p className={`text-sm ${day.isFlightDay ? 'text-white/90' : 'text-gray-600'}`}>
                                        {day.date}
                                    </p>
                                </div>
                                {day.isFlightDay && <span className="text-3xl">✈️</span>}
                            </div>

                            <div className="space-y-3">
                                <div className={`${day.isFlightDay ? 'bg-white/20 backdrop-blur-sm' : 'bg-purple-50'} rounded-xl p-3`}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <p className={`text-xs mb-1 ${day.isFlightDay ? 'text-white/80' : 'text-gray-600'}`}>
                                                🌙 Bedtime
                                            </p>
                                            <p className={`font-bold ${day.isFlightDay ? 'text-white' : 'text-gray-900'}`}>
                                                {day.bedtime}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={`text-xs mb-1 ${day.isFlightDay ? 'text-white/80' : 'text-gray-600'}`}>
                                                ☀️ Wake Time
                                            </p>
                                            <p className={`font-bold ${day.isFlightDay ? 'text-white' : 'text-gray-900'}`}>
                                                {day.waketime}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className={`text-xs font-semibold mb-2 ${day.isFlightDay ? 'text-white/90' : 'text-gray-700'}`}>
                                        💡 Light Exposure
                                    </p>
                                    <p className={`text-sm ${day.isFlightDay ? 'text-white/90' : 'text-gray-600'}`}>
                                        {day.lightExposure}
                                    </p>
                                </div>

                                <div>
                                    <p className={`text-xs font-semibold mb-2 ${day.isFlightDay ? 'text-white/90' : 'text-gray-700'}`}>
                                        🍽️ Meal Times
                                    </p>
                                    <div className="space-y-1">
                                        {day.mealTimes.map((meal, mealIndex) => (
                                            <p key={mealIndex} className={`text-xs ${day.isFlightDay ? 'text-white/80' : 'text-gray-600'}`}>
                                                • {meal}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className={`${day.isFlightDay ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-50'} rounded-lg p-3`}>
                                    <p className={`text-xs ${day.isFlightDay ? 'text-white/90' : 'text-blue-900'}`}>
                                        📝 {day.notes}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Adjustment Techniques */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">🛠️ Adjustment Techniques</h2>
                <div className="grid grid-cols-1 gap-3">
                    {adjustmentTechniques.map((technique, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                            <div className="flex items-start gap-3">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${technique.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                                    {technique.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-bold text-gray-900">{technique.title}</h3>
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">
                                            {technique.timing}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{technique.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* In-Flight Tips */}
            <div className="px-4 mb-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-5">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>✈️</span> In-Flight Tips
                    </h3>
                    <div className="space-y-2">
                        {flightTips.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3">
                                <span className="text-xl">{item.icon}</span>
                                <p className="text-sm text-gray-700 flex-1">{item.tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
