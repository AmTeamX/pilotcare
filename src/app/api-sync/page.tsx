'use client';

import { useState } from 'react';

export default function ApiSync() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState('2 min ago');
  const [syncStatus, setSyncStatus] = useState<'success' | 'error' | 'pending'>('success');

  const dutyLimitations = [
    {
      label: 'Flight Duty',
      current: 42.5,
      limit: 100,
      unit: 'hrs/month',
      icon: '✈️',
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Daily Time',
      current: 6.2,
      limit: 8,
      unit: 'hrs/day',
      icon: '⏰',
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Rest Required',
      current: 11,
      limit: 12,
      unit: 'hours',
      icon: '😴',
      color: 'from-red-500 to-red-600',
      warning: true,
    },
    {
      label: 'Consecutive Days',
      current: 5,
      limit: 6,
      unit: 'days',
      icon: '📅',
      color: 'from-green-500 to-green-600',
    },
  ];

  const flightData = [
    { id: 'BA123', route: 'LHR → JFK', date: 'Oct 18', hours: 8.5, status: 'Synced' },
    { id: 'BA124', route: 'JFK → LHR', date: 'Oct 19', hours: 7.2, status: 'Synced' },
    { id: 'BA456', route: 'LHR → DXB', date: 'Oct 21', hours: 6.8, status: 'Pending' },
  ];

  const handleSync = () => {
    setIsSyncing(true);
    setSyncStatus('pending');
    
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('success');
      setLastSync('Just now');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-6 mb-4">
        <h1 className="text-2xl font-bold mb-1">Airline Sync</h1>
        <p className="text-blue-100 text-sm">Flight duty tracking</p>
      </div>

      {/* Sync Status Card */}
      <div className="px-4 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">SYNC STATUS</p>
              <p className="font-semibold text-gray-900">Last synced: {lastSync}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              syncStatus === 'success' ? 'bg-green-100 text-green-700' :
              syncStatus === 'error' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }`}>
              {syncStatus === 'success' ? '✅ Connected' :
               syncStatus === 'error' ? '❌ Failed' :
               '⏳ Syncing'}
            </div>
          </div>
          
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className={`w-full py-3 rounded-xl font-medium transition-all ${
              isSyncing
                ? 'bg-gray-200 text-gray-500'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white active:scale-95'
            }`}
          >
            {isSyncing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Syncing...
              </span>
            ) : (
              '🔄 Sync Now'
            )}
          </button>
        </div>
      </div>

      {/* Duty Limitations */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 px-2">Flight Limitations</h2>
        <div className="grid grid-cols-2 gap-3">
          {dutyLimitations.map((limit, index) => {
            const percentage = (limit.current / limit.limit) * 100;
            const isWarning = percentage > 80 || limit.warning;
            
            return (
              <div key={index} className={`bg-white rounded-2xl p-4 shadow-md border ${
                isWarning ? 'border-orange-200' : 'border-gray-100'
              }`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${limit.color} flex items-center justify-center text-xl mb-3 shadow-sm`}>
                  {limit.icon}
                </div>
                <p className="text-xs text-gray-500 mb-2">{limit.label}</p>
                <div className="mb-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-bold text-gray-900">{limit.current}</span>
                    <span className="text-sm text-gray-500">/{limit.limit}</span>
                  </div>
                  <p className="text-xs text-gray-400">{limit.unit}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      isWarning ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-green-500 to-green-600'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                {limit.warning && (
                  <p className="text-xs text-red-600 font-medium mt-2">⚠️ Below minimum</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Flight Schedule */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 px-2">Synced Flights</h2>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {flightData.map((flight, index) => (
            <div 
              key={index} 
              className={`p-4 ${index !== flightData.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{flight.id}</p>
                  <p className="text-xs text-gray-500">{flight.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  flight.status === 'Synced' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {flight.status}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-1">{flight.route}</p>
              <p className="text-xs text-gray-500">{flight.hours}h duty time</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alert */}
      <div className="px-4">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-200">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-orange-900 mb-1">Limitation Alert</h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                You have <strong>57.5 hours remaining</strong> this month. Rest period is below minimum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
