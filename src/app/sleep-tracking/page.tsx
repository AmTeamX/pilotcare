'use client';

import { useState } from 'react';

export default function SleepTrackingPage() {
    const [selectedDate, setSelectedDate] = useState('2025-11-06');
    const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success'>('idle');

    // Mock sleep data
    const sleepData = {
        lastNight: {
            totalSleep: 7.5,
            deepSleep: 2.1,
            lightSleep: 4.2,
            remSleep: 1.2,
            awake: 0.5,
            sleepScore: 82,
            bedTime: '22:30',
            wakeTime: '06:00',
            heartRate: {
                avg: 58,
                min: 52,
                max: 64
            },
            hrv: 65,
            respiratoryRate: 14
        },
        weeklyData: [
            { date: 'Mon', hours: 6.5, score: 68 },
            { date: 'Tue', hours: 7.2, score: 75 },
            { date: 'Wed', hours: 8.0, score: 85 },
            { date: 'Thu', hours: 7.5, score: 82 },
            { date: 'Fri', hours: 6.8, score: 72 },
            { date: 'Sat', hours: 8.5, score: 90 },
            { date: 'Sun', hours: 7.5, score: 82 }
        ],
        insights: [
            { icon: '✅', text: 'Consistent sleep schedule this week', type: 'positive' },
            { icon: '⚠️', text: 'Deep sleep below optimal on weekdays', type: 'warning' },
            { icon: '💡', text: 'Best sleep quality on weekends', type: 'info' }
        ]
    };

    const devices = [
        { name: 'Apple Watch Series 9', status: 'connected', battery: 78, lastSync: '2 min ago', icon: '⌚' },
        { name: 'Fitbit Charge 6', status: 'disconnected', battery: null, lastSync: '2 days ago', icon: '📱' },
        { name: 'Oura Ring Gen 3', status: 'connected', battery: 45, lastSync: '5 min ago', icon: '💍' }
    ];

    const handleSync = () => {
        setSyncStatus('syncing');
        setTimeout(() => {
            setSyncStatus('success');
            setTimeout(() => setSyncStatus('idle'), 2000);
        }, 1500);
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreBg = (score: number) => {
        if (score >= 80) return 'from-green-400 to-green-600';
        if (score >= 60) return 'from-yellow-400 to-yellow-600';
        return 'from-red-400 to-red-600';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">Sleep & Recovery</h1>
                <p className="text-indigo-100">Track your rest with wearable devices</p>
            </div>

            {/* Sleep Score Card */}
            <div className="px-4 mb-6">
                <div className={`bg-gradient-to-br ${getScoreBg(sleepData.lastNight.sleepScore)} rounded-2xl p-6 shadow-xl text-white`}>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-white/80 text-sm mb-1">Last Night's Sleep Score</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold">{sleepData.lastNight.sleepScore}</span>
                                <span className="text-2xl opacity-80">/100</span>
                            </div>
                        </div>
                        <div className="text-6xl">😴</div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <div className="flex items-center justify-between text-sm">
                            <span>🛏️ {sleepData.lastNight.bedTime}</span>
                            <span>→</span>
                            <span>⏰ {sleepData.lastNight.wakeTime}</span>
                            <span className="font-bold">{sleepData.lastNight.totalSleep}h total</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sleep Stages */}
            <div className="px-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sleep Stages</h2>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-purple-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                                <span className="text-sm text-gray-600">Deep Sleep</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{sleepData.lastNight.deepSleep}h</div>
                            <div className="text-xs text-gray-500 mt-1">28% of total</div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span className="text-sm text-gray-600">Light Sleep</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{sleepData.lastNight.lightSleep}h</div>
                            <div className="text-xs text-gray-500 mt-1">56% of total</div>
                        </div>

                        <div className="bg-cyan-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-cyan-600"></div>
                                <span className="text-sm text-gray-600">REM Sleep</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{sleepData.lastNight.remSleep}h</div>
                            <div className="text-xs text-gray-500 mt-1">16% of total</div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                <span className="text-sm text-gray-600">Awake</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{sleepData.lastNight.awake}h</div>
                            <div className="text-xs text-gray-500 mt-1">7% of total</div>
                        </div>
                    </div>

                    {/* Sleep Stage Visualization */}
                    <div className="mt-4">
                        <div className="flex h-4 rounded-full overflow-hidden">
                            <div className="bg-purple-600" style={{ width: '28%' }} title="Deep Sleep"></div>
                            <div className="bg-blue-600" style={{ width: '56%' }} title="Light Sleep"></div>
                            <div className="bg-cyan-600" style={{ width: '16%' }} title="REM Sleep"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Health Metrics */}
            <div className="px-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Health Metrics</h2>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="text-2xl mb-2">❤️</div>
                        <div className="text-xs text-gray-600 mb-1">Avg Heart Rate</div>
                        <div className="text-xl font-bold text-gray-900">{sleepData.lastNight.heartRate.avg}</div>
                        <div className="text-xs text-gray-500 mt-1">bpm</div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="text-2xl mb-2">📊</div>
                        <div className="text-xs text-gray-600 mb-1">HRV</div>
                        <div className="text-xl font-bold text-gray-900">{sleepData.lastNight.hrv}</div>
                        <div className="text-xs text-gray-500 mt-1">ms</div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="text-2xl mb-2">🫁</div>
                        <div className="text-xs text-gray-600 mb-1">Resp. Rate</div>
                        <div className="text-xl font-bold text-gray-900">{sleepData.lastNight.respiratoryRate}</div>
                        <div className="text-xs text-gray-500 mt-1">brpm</div>
                    </div>
                </div>
            </div>

            {/* Weekly Trend */}
            <div className="px-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Trend</h2>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                    <div className="flex items-end justify-between gap-2 h-40 mb-4">
                        {sleepData.weeklyData.map((day, index) => {
                            const maxHours = 9;
                            const heightPercent = (day.hours / maxHours) * 100;
                            return (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="text-xs font-semibold text-gray-900">{day.hours}h</div>
                                    <div
                                        className={`w-full rounded-t-lg bg-gradient-to-t ${getScoreBg(day.score)} transition-all`}
                                        style={{ height: `${heightPercent}%` }}
                                    ></div>
                                    <div className="text-xs text-gray-600 font-medium">{day.date}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Weekly Average</div>
                            <div className="text-2xl font-bold text-gray-900">7.4h</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Avg Score</div>
                            <div className="text-2xl font-bold text-green-600">79</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connected Devices */}
            <div className="px-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Connected Devices</h2>
                    <button
                        onClick={handleSync}
                        disabled={syncStatus !== 'idle'}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all active:scale-95 ${syncStatus === 'syncing'
                                ? 'bg-blue-100 text-blue-600'
                                : syncStatus === 'success'
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        {syncStatus === 'syncing' && '🔄 Syncing...'}
                        {syncStatus === 'success' && '✓ Synced!'}
                        {syncStatus === 'idle' && '🔄 Sync All'}
                    </button>
                </div>

                <div className="space-y-3">
                    {devices.map((device, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-4 shadow-md border-2 transition-all ${device.status === 'connected' ? 'border-green-200' : 'border-gray-200'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">{device.icon}</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{device.name}</div>
                                        <div className="text-xs text-gray-500">Last sync: {device.lastSync}</div>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${device.status === 'connected'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-700'
                                    }`}>
                                    {device.status === 'connected' ? '● Connected' : '○ Disconnected'}
                                </div>
                            </div>

                            {device.battery !== null && (
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${device.battery > 50 ? 'bg-green-600' :
                                                    device.battery > 20 ? 'bg-yellow-600' : 'bg-red-600'
                                                }`}
                                            style={{ width: `${device.battery}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium">{device.battery}%</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Insights */}
            <div className="px-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Insights & Recommendations</h2>
                <div className="space-y-3">
                    {sleepData.insights.map((insight, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-4 ${insight.type === 'positive' ? 'bg-green-50 border border-green-200' :
                                    insight.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                                        'bg-blue-50 border border-blue-200'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">{insight.icon}</div>
                                <p className="text-sm text-gray-700 flex-1">{insight.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recovery Score */}
            <div className="px-4 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-white/80 text-sm mb-1">Recovery Score</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">85</span>
                                <span className="text-xl opacity-80">/100</span>
                            </div>
                        </div>
                        <div className="text-5xl">💪</div>
                    </div>
                    <p className="text-white/90 text-sm">
                        Your body is well-recovered and ready for duty. Maintain good sleep habits!
                    </p>
                </div>
            </div>
        </div>
    );
}
