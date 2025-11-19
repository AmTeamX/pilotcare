'use client';

import { useState } from 'react';

export default function CircadianRhythmPage() {
    const [selectedView, setSelectedView] = useState<'current' | 'history'>('current');

    const currentFlight = {
        departure: { city: 'London', code: 'LHR', time: '22:00', timezone: 'GMT (UTC+0)' },
        arrival: { city: 'Singapore', code: 'SIN', time: '17:30+1', timezone: 'SGT (UTC+8)' },
        duration: '13h 30m',
        timeDifference: '+8 hours'
    };

    const circadianData = {
        homeTimezone: 'GMT (UTC+0)',
        currentTimezone: 'SGT (UTC+8)',
        bodyClockTime: '09:30',
        localTime: '17:30',
        jetLagLevel: 'Moderate',
        daysToAdjust: 4,
        currentPhase: 'Alert Phase',
        recommendation: 'Your body thinks it\'s morning. Avoid heavy meals and bright light exposure until evening.'
    };

    // Hourly rhythm data for visualization
    const rhythmHours = Array.from({ length: 24 }, (_, i) => {
        const hour = i;
        const bodyHour = (hour - 8 + 24) % 24; // 8 hour difference

        // Energy levels based on circadian rhythm
        let energyLevel = 50;
        if (bodyHour >= 6 && bodyHour < 10) energyLevel = 75; // Morning peak
        else if (bodyHour >= 10 && bodyHour < 14) energyLevel = 85; // Mid-morning peak
        else if (bodyHour >= 14 && bodyHour < 16) energyLevel = 60; // Post-lunch dip
        else if (bodyHour >= 16 && bodyHour < 19) energyLevel = 70; // Evening recovery
        else if (bodyHour >= 19 && bodyHour < 22) energyLevel = 50; // Evening wind down
        else energyLevel = 20; // Night/sleep

        return {
            localHour: hour,
            bodyHour: bodyHour,
            energyLevel: energyLevel,
            isCurrentHour: hour === 17
        };
    });

    const flightHistory = [
        {
            date: 'Nov 15',
            route: 'LHR → SIN',
            shift: '+8h',
            impact: 'High',
            color: 'from-red-400 to-red-600'
        },
        {
            date: 'Nov 10',
            route: 'SIN → LHR',
            shift: '-8h',
            impact: 'High',
            color: 'from-red-400 to-red-600'
        },
        {
            date: 'Nov 5',
            route: 'LHR → JFK',
            shift: '-5h',
            impact: 'Medium',
            color: 'from-orange-400 to-orange-600'
        },
        {
            date: 'Nov 1',
            route: 'JFK → LHR',
            shift: '+5h',
            impact: 'Medium',
            color: 'from-orange-400 to-orange-600'
        },
    ];

    const adjustmentTips = [
        { icon: '☀️', title: 'Light Exposure', description: 'Seek bright light in the morning, avoid in the evening', phase: 'Morning' },
        { icon: '🍽️', title: 'Meal Timing', description: 'Eat according to local time to reset your clock', phase: 'All Day' },
        { icon: '💊', title: 'Melatonin', description: 'Consider 0.5-3mg, 30min before local bedtime', phase: 'Evening' },
        { icon: '☕', title: 'Caffeine Strategy', description: 'Limit after 2 PM local time', phase: 'Morning/Afternoon' },
        { icon: '🏃', title: 'Exercise', description: 'Light exercise in the morning helps adjustment', phase: 'Morning' },
        { icon: '❄️', title: 'Temperature', description: 'Keep bedroom cool (16-19°C) for better sleep', phase: 'Night' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">🌙 Circadian Rhythm</h1>
                <p className="text-indigo-100">Track your body clock across time zones</p>
            </div>

            {/* View Selector */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-1 flex gap-1">
                    <button
                        onClick={() => setSelectedView('current')}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all ${selectedView === 'current'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Current Status
                    </button>
                    <button
                        onClick={() => setSelectedView('history')}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all ${selectedView === 'history'
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Flight History
                    </button>
                </div>
            </div>

            {selectedView === 'current' ? (
                <>
                    {/* Current Flight Info */}
                    <div className="px-4 mb-6">
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                            <h3 className="font-bold text-gray-900 mb-4">✈️ Latest Flight</h3>
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{currentFlight.departure.code}</p>
                                    <p className="text-sm text-gray-600">{currentFlight.departure.city}</p>
                                    <p className="text-xs text-gray-500 mt-1">{currentFlight.departure.time}</p>
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="border-t-2 border-dashed border-gray-300 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                            <span className="text-2xl">✈️</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-center text-gray-500 mt-1">{currentFlight.duration}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{currentFlight.arrival.code}</p>
                                    <p className="text-sm text-gray-600">{currentFlight.arrival.city}</p>
                                    <p className="text-xs text-gray-500 mt-1">{currentFlight.arrival.time}</p>
                                </div>
                            </div>
                            <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
                                <p className="text-sm text-center text-gray-700">
                                    <span className="font-bold text-purple-600">Time Shift: {currentFlight.timeDifference}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Body Clock Status */}
                    <div className="px-4 mb-6">
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg text-white p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm opacity-90 mb-1">Your Body Clock</p>
                                    <p className="text-4xl font-bold">{circadianData.bodyClockTime}</p>
                                    <p className="text-sm opacity-80 mt-1">{circadianData.homeTimezone}</p>
                                </div>
                                <div className="text-6xl">🕐</div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                <div>
                                    <p className="text-sm opacity-90 mb-1">Local Time</p>
                                    <p className="text-2xl font-bold">{circadianData.localTime}</p>
                                    <p className="text-xs opacity-80 mt-1">{circadianData.currentTimezone}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm opacity-90 mb-1">Jet Lag</p>
                                    <p className="text-xl font-bold">{circadianData.jetLagLevel}</p>
                                    <p className="text-xs opacity-80 mt-1">{circadianData.daysToAdjust} days to adjust</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 24-Hour Rhythm Visualization */}
                    <div className="px-4 mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">24-Hour Energy Rhythm</h2>
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                    <span className="text-xs text-gray-600">Your Energy Level</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                    <span className="text-xs text-gray-600">Current Hour</span>
                                </div>
                            </div>

                            {/* Rhythm Chart */}
                            <div className="relative h-48 mb-4">
                                <div className="absolute inset-0 flex items-end justify-between gap-0.5">
                                    {rhythmHours.map((hour, index) => (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-1">
                                            <div
                                                className={`w-full rounded-t transition-all ${hour.isCurrentHour ? 'bg-blue-400' : 'bg-purple-600'
                                                    }`}
                                                style={{ height: `${hour.energyLevel}%` }}
                                            ></div>
                                            {index % 3 === 0 && (
                                                <span className="text-[8px] text-gray-500 font-medium">
                                                    {hour.localHour}:00
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-blue-600">Current Phase: {circadianData.currentPhase}</span>
                                </p>
                                <p className="text-xs text-gray-600 mt-1">{circadianData.recommendation}</p>
                            </div>
                        </div>
                    </div>

                    {/* Adjustment Tips */}
                    <div className="px-4 mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">💡 Adjustment Tips</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {adjustmentTips.map((tip, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="text-3xl">{tip.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-bold text-gray-900">{tip.title}</h3>
                                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                                                    {tip.phase}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{tip.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sleep Windows */}
                    <div className="px-4 mb-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-5">
                            <h3 className="font-bold text-gray-900 mb-4">🌙 Optimal Sleep Windows</h3>
                            <div className="space-y-3">
                                <div className="bg-white rounded-xl p-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">Body Clock Sleep Time</p>
                                            <p className="text-xs text-gray-600">Based on home timezone</p>
                                        </div>
                                        <p className="text-lg font-bold text-indigo-600">01:30 - 09:30</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">Recommended Local Time</p>
                                            <p className="text-xs text-gray-600">For faster adjustment</p>
                                        </div>
                                        <p className="text-lg font-bold text-purple-600">22:00 - 06:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Flight History View */}
                    <div className="px-4 mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">Recent Flights</h2>
                        <div className="space-y-3">
                            {flightHistory.map((flight, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="font-bold text-gray-900">{flight.route}</p>
                                            <p className="text-xs text-gray-500">{flight.date}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${flight.color}`}>
                                            {flight.impact} Impact
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full bg-gradient-to-r ${flight.color}`}
                                                style={{ width: flight.impact === 'High' ? '100%' : '60%' }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{flight.shift}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cumulative Impact */}
                    <div className="px-4 mb-4">
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 p-5">
                            <h3 className="font-bold text-gray-900 mb-3">⚠️ Cumulative Jet Lag</h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Multiple time zone shifts in short succession can compound jet lag effects. Your body needs adequate recovery time.
                            </p>
                            <div className="bg-white rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-900">Recovery Status</span>
                                    <span className="text-lg font-bold text-orange-600">65%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Estimated 2 more days for full recovery</p>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* What is Circadian Rhythm - Educational Section */}
            <div className="px-4 mb-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                            💡
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">What is Circadian Rhythm?</h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                            Your <span className="font-bold text-indigo-600">circadian rhythm</span> is your body's internal 24-hour clock that regulates when you feel awake and when you feel sleepy. It's controlled by a tiny region in your brain that responds to light and darkness.
                        </p>

                        <div className="bg-white rounded-xl p-4 border border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span>🧠</span> How It Works
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                                    <span><strong>Morning light</strong> signals your brain to stop producing melatonin (sleep hormone) and increase cortisol (alertness hormone)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                                    <span><strong>Darkness at night</strong> triggers melatonin production, making you feel drowsy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                                    <span><strong>Body temperature</strong> drops at night and rises in the morning</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span>✈️</span> Why It Matters for Pilots
                            </h3>
                            <p className="text-sm leading-relaxed mb-3">
                                When you fly across time zones, your circadian rhythm doesn't instantly adjust. This mismatch causes <span className="font-bold text-purple-600">jet lag</span>:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠️</span>
                                    <span><strong>Reduced alertness</strong> when your body thinks it should be sleeping</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠️</span>
                                    <span><strong>Poor sleep quality</strong> when trying to sleep at unusual times for your body</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠️</span>
                                    <span><strong>Decreased performance</strong> and slower reaction times</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠️</span>
                                    <span><strong>Digestive issues</strong> and mood changes</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span>🎯</span> Adjustment Time
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Your body can typically adjust about <span className="font-bold text-green-600">1-1.5 hours per day</span>. So after an 8-hour time zone shift, expect <span className="font-bold text-green-600">5-8 days</span> for full adaptation. This tracker helps you manage this transition!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
