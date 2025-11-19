'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [sleepScore] = useState(78);
  const [fatigueRisk] = useState('Medium');

  const dutySchedule = [
    { date: 'Oct 18', flight: 'BA123 LHR-JFK', hours: 8.5, status: 'Completed' },
    { date: 'Oct 19', flight: 'BA124 JFK-LHR', hours: 7.2, status: 'Scheduled' },
    { date: 'Oct 20', flight: 'Rest Day', hours: 0, status: 'Rest' },
    { date: 'Oct 21', flight: 'BA456 LHR-DXB', hours: 6.8, status: 'Scheduled' },
  ];

  const healthMetrics = [
    { label: 'Sleep', value: sleepScore, unit: '/100', icon: '😴', color: sleepScore >= 70 ? 'from-green-500 to-green-600' : 'from-orange-500 to-orange-600' },
    { label: 'Sleep Hours', value: '6.5', unit: 'hrs', icon: '🕐', color: 'from-blue-500 to-blue-600' },
    { label: 'Heart Rate', value: '68', unit: 'bpm', icon: '❤️', color: 'from-red-500 to-red-600' },
    { label: 'Recovery', value: '82', unit: '%', icon: '💪', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-6 mb-4">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-indigo-100 text-sm">Your health overview</p>
      </div>

      {/* Fatigue Risk Alert */}
      <div className="px-4 mb-4">
        <div className={`rounded-2xl p-4 shadow-md ${fatigueRisk === 'High' ? 'bg-gradient-to-r from-red-500 to-red-600' :
            fatigueRisk === 'Medium' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
              'bg-gradient-to-r from-green-500 to-green-600'
          } text-white`}>
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3">⚠️</span>
            <div className="flex-1">
              <p className="text-sm opacity-90 mb-1">Fatigue Risk Level</p>
              <p className="text-2xl font-bold">{fatigueRisk}</p>
            </div>
          </div>
          <p className="text-sm opacity-90">
            Based on your sleep and duty schedule
          </p>
        </div>
      </div>

      {/* Sleep Score Card */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Sleep Score</h2>
            <span className="text-3xl">😴</span>
          </div>
          <div className="flex items-end space-x-4 mb-3">
            <div className="text-4xl font-bold text-indigo-600">{sleepScore}</div>
            <div className="text-gray-600 pb-1">/100</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className={`h-3 rounded-full transition-all ${sleepScore >= 70 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
              style={{ width: `${sleepScore}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {sleepScore >= 80 ? '✨ Excellent! You\'re well rested.' :
              sleepScore >= 70 ? '👍 Good quality. Keep it up!' :
                '⚠️ Below optimal. Consider more rest.'}
          </p>
        </div>
      </div>

      {/* Health Metrics Grid */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 px-2">Health Metrics</h2>
        <div className="grid grid-cols-2 gap-3">
          {healthMetrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-xl mb-3 shadow-sm`}>
                {metric.icon}
              </div>
              <p className="text-xs text-gray-600 mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900">
                {metric.value}
                <span className="text-sm ml-1 text-gray-600">{metric.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Duty Schedule */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 px-2">Duty Schedule</h2>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {dutySchedule.map((duty, index) => (
            <div
              key={index}
              className={`p-4 ${index !== dutySchedule.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{duty.flight}</p>
                  <p className="text-xs text-gray-600">{duty.date}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${duty.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    duty.status === 'Rest' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                  }`}>
                  {duty.status}
                </span>
              </div>
              {duty.hours > 0 && (
                <div className="flex items-center text-xs text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {duty.hours}h duty time
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overall Condition */}
      <div className="px-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Overall Condition</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Your health status is <strong>Good</strong>. Sleep quality is acceptable.
                Monitor fatigue levels before your next flight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

