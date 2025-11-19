'use client';

import { useState } from 'react';

export default function MeditationPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedSession, setSelectedSession] = useState<number | null>(null);
    const [progress, setProgress] = useState(0);
    const [completedSessions, setCompletedSessions] = useState<number[]>([]);

    const meditationSessions = [
        {
            id: 1,
            title: 'Quick Relaxation',
            duration: '5 min',
            description: 'Perfect for a quick break between flights',
            icon: '🧘',
            color: 'from-blue-400 to-blue-600',
            category: 'Quick'
        },
        {
            id: 2,
            title: 'Deep Breathing',
            duration: '10 min',
            description: 'Reduce stress and anxiety with focused breathing',
            icon: '🌬️',
            color: 'from-green-400 to-green-600',
            category: 'Breathing'
        },
        {
            id: 3,
            title: 'Pre-Flight Calm',
            duration: '8 min',
            description: 'Prepare mentally before your next flight',
            icon: '✈️',
            color: 'from-purple-400 to-purple-600',
            category: 'Focus'
        },
        {
            id: 4,
            title: 'Sleep Preparation',
            duration: '15 min',
            description: 'Wind down and prepare for quality rest',
            icon: '🌙',
            color: 'from-indigo-400 to-indigo-600',
            category: 'Sleep'
        },
        {
            id: 5,
            title: 'Body Scan',
            duration: '12 min',
            description: 'Release tension and improve awareness',
            icon: '🧘‍♀️',
            color: 'from-pink-400 to-pink-600',
            category: 'Mindfulness'
        },
        {
            id: 6,
            title: 'Stress Relief',
            duration: '10 min',
            description: 'Let go of work-related stress and tension',
            icon: '😌',
            color: 'from-orange-400 to-orange-600',
            category: 'Stress'
        }
    ];

    const stats = {
        totalSessions: completedSessions.length,
        totalMinutes: completedSessions.length * 10, // Simplified calculation
        streak: 3,
        thisWeek: 5
    };

    const handlePlaySession = (sessionId: number) => {
        setSelectedSession(sessionId);
        setIsPlaying(true);
        setProgress(0);

        // Simulate progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsPlaying(false);
                    if (!completedSessions.includes(sessionId)) {
                        setCompletedSessions([...completedSessions, sessionId]);
                    }
                    return 100;
                }
                return prev + 1;
            });
        }, 100);
    };

    const handleStopSession = () => {
        setIsPlaying(false);
        setProgress(0);
        setSelectedSession(null);
    };

    const currentSession = meditationSessions.find(s => s.id === selectedSession);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">Meditation & Mindfulness</h1>
                <p className="text-purple-100">Find your calm, reduce stress</p>
            </div>

            {/* Stats Overview */}
            <div className="px-4 mb-6">
                <div className="grid grid-cols-4 gap-3">
                    <div className="bg-white rounded-xl p-3 shadow-md text-center">
                        <div className="text-2xl font-bold text-purple-600">{stats.totalSessions}</div>
                        <div className="text-xs text-gray-600 mt-1">Sessions</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-md text-center">
                        <div className="text-2xl font-bold text-indigo-600">{stats.totalMinutes}</div>
                        <div className="text-xs text-gray-600 mt-1">Minutes</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-md text-center">
                        <div className="text-2xl font-bold text-orange-600">{stats.streak}</div>
                        <div className="text-xs text-gray-600 mt-1">Day Streak</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-md text-center">
                        <div className="text-2xl font-bold text-green-600">{stats.thisWeek}</div>
                        <div className="text-xs text-gray-600 mt-1">This Week</div>
                    </div>
                </div>
            </div>

            {/* Active Session Player */}
            {isPlaying && currentSession && (
                <div className="px-4 mb-6">
                    <div className={`bg-gradient-to-br ${currentSession.color} rounded-2xl p-6 shadow-xl text-white`}>
                        <div className="text-center mb-6">
                            <div className="text-6xl mb-4 animate-pulse">{currentSession.icon}</div>
                            <h2 className="text-2xl font-bold mb-2">{currentSession.title}</h2>
                            <p className="text-white/90">{currentSession.description}</p>
                        </div>

                        {/* Progress Circle */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <svg className="w-32 h-32 transform -rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="rgba(255,255,255,0.2)"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="white"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 56}`}
                                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                                        className="transition-all duration-300"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-3xl font-bold">{progress}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleStopSession}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-all active:scale-95"
                            >
                                ⏹️ Stop
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Session Cards */}
            <div className="px-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Available Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {meditationSessions.map((session) => {
                        const isCompleted = completedSessions.includes(session.id);
                        const isActive = selectedSession === session.id;

                        return (
                            <div
                                key={session.id}
                                className={`bg-white rounded-2xl shadow-md border-2 transition-all ${isActive ? 'border-purple-500 shadow-lg scale-105' : 'border-gray-100'
                                    } ${isCompleted ? 'ring-2 ring-green-400' : ''}`}
                            >
                                <div className={`bg-gradient-to-br ${session.color} rounded-t-2xl p-4 text-white`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-4xl">{session.icon}</div>
                                        {isCompleted && (
                                            <div className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                                                ✓ Done
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{session.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-white/90">
                                        <span>🕐 {session.duration}</span>
                                        <span>•</span>
                                        <span>{session.category}</span>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <p className="text-gray-600 text-sm mb-4">{session.description}</p>
                                    <button
                                        onClick={() => handlePlaySession(session.id)}
                                        disabled={isPlaying}
                                        className={`w-full py-3 rounded-xl font-semibold transition-all active:scale-95 ${isPlaying && !isActive
                                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md'
                                            }`}
                                    >
                                        {isActive && isPlaying ? '▶️ Playing...' : '▶️ Start Session'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="px-4 mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">✨ Benefits of Meditation</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">🧠</div>
                            <div>
                                <div className="font-semibold text-gray-900">Improved Focus</div>
                                <div className="text-sm text-gray-600">Enhance concentration for critical flight tasks</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">😌</div>
                            <div>
                                <div className="font-semibold text-gray-900">Stress Reduction</div>
                                <div className="text-sm text-gray-600">Lower cortisol levels and anxiety</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">😴</div>
                            <div>
                                <div className="font-semibold text-gray-900">Better Sleep</div>
                                <div className="text-sm text-gray-600">Improve sleep quality and recovery</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">❤️</div>
                            <div>
                                <div className="font-semibold text-gray-900">Heart Health</div>
                                <div className="text-sm text-gray-600">Support cardiovascular wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tips */}
            <div className="px-4 mt-6 mb-4">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <div className="font-semibold text-gray-900 mb-1">Pro Tip</div>
                            <div className="text-sm text-gray-700">
                                Try meditating at the same time each day to build a consistent habit. Even 5 minutes can make a difference!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
