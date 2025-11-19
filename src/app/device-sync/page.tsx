'use client';

import { useState } from 'react';

export default function DeviceSync() {
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSync, setLastSync] = useState('2025-10-18 18:45:00');

    const devices = [
        {
            id: 1,
            name: 'iPhone 15 Pro',
            type: 'iOS',
            icon: '📱',
            status: 'Connected',
            lastSync: '2 minutes ago',
            dataSize: '45.2 MB',
            color: 'bg-blue-500',
        },
        {
            id: 2,
            name: 'Samsung Galaxy S24',
            type: 'Android',
            icon: '📱',
            status: 'Connected',
            lastSync: '5 minutes ago',
            dataSize: '42.8 MB',
            color: 'bg-green-500',
        },
        {
            id: 3,
            name: 'Apple Watch Series 9',
            type: 'Smart Watch',
            icon: '⌚',
            status: 'Connected',
            lastSync: '1 minute ago',
            dataSize: '12.5 MB',
            color: 'bg-purple-500',
        },
        {
            id: 4,
            name: 'iPad Air',
            type: 'iOS',
            icon: '📲',
            status: 'Offline',
            lastSync: '2 hours ago',
            dataSize: '38.1 MB',
            color: 'bg-gray-400',
        },
    ];

    const syncedData = [
        { category: 'Sleep Data', records: 1245, lastUpdate: '2 min ago', synced: true },
        { category: 'Flight Schedule', records: 87, lastUpdate: '5 min ago', synced: true },
        { category: 'Health Metrics', records: 3421, lastUpdate: '1 min ago', synced: true },
        { category: 'Duty Logs', records: 156, lastUpdate: '3 min ago', synced: true },
        { category: 'Compliance Reports', records: 24, lastUpdate: '10 min ago', synced: true },
    ];

    const handleSyncAll = () => {
        setIsSyncing(true);
        setTimeout(() => {
            setIsSyncing(false);
            setLastSync(new Date().toLocaleString());
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Device Sync</h1>
                <p className="text-gray-600">User Story #11: Sync data across iOS, Android, and Smart Watch devices</p>
            </div>

            {/* Sync Status Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Multi-Device Synchronization</h2>
                        <p className="text-blue-100">
                            All your health and flight data synced across all devices
                        </p>
                        <p className="text-sm text-blue-100 mt-2">Last sync: {lastSync}</p>
                    </div>
                    <button
                        onClick={handleSyncAll}
                        disabled={isSyncing}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${isSyncing
                            ? 'bg-white/30 cursor-not-allowed'
                            : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                    >
                        {isSyncing ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Syncing...
                            </span>
                        ) : (
                            '🔄 Sync All Devices'
                        )}
                    </button>
                </div>
            </div>

            {/* Connected Devices */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connected Devices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {devices.map((device) => (
                        <div
                            key={device.id}
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className={`${device.color} text-white text-3xl p-3 rounded-lg`}>
                                        {device.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{device.name}</h3>
                                        <p className="text-sm text-gray-600">{device.type}</p>
                                    </div>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${device.status === 'Connected'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {device.status}
                                </span>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Last Sync:</span>
                                    <span className="font-medium text-gray-900">{device.lastSync}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Data Size:</span>
                                    <span className="font-medium text-gray-900">{device.dataSize}</span>
                                </div>
                            </div>

                            <div className="mt-4 flex space-x-2">
                                <button
                                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${device.status === 'Connected'
                                        ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={device.status !== 'Connected'}
                                >
                                    Sync Now
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                                    Settings
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Synced Data Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Synced Data Overview</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Data Category</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Records</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last Update</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {syncedData.map((data, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm font-medium text-gray-900">{data.category}</td>
                                    <td className="py-3 px-4 text-sm text-gray-900">{data.records.toLocaleString()}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{data.lastUpdate}</td>
                                    <td className="py-3 px-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            ✓ Synced
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Platform Support */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                    <div className="text-5xl mb-3">📱</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">iOS Support</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Full support for iPhone and iPad devices with real-time sync
                    </p>
                    <div className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        ✓ Supported
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                    <div className="text-5xl mb-3">🤖</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Android Support</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Compatible with all Android devices running version 8.0+
                    </p>
                    <div className="inline-flex px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        ✓ Supported
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                    <div className="text-5xl mb-3">⌚</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Watch</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Track health metrics directly from Apple Watch and Wear OS
                    </p>
                    <div className="inline-flex px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                        ✓ Supported
                    </div>
                </div>
            </div>

            {/* Sync Settings */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Sync Settings</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">Automatic Sync</p>
                            <p className="text-sm text-gray-600">Sync data automatically when online</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">Sync on WiFi Only</p>
                            <p className="text-sm text-gray-600">Save mobile data by syncing on WiFi</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">Background Sync</p>
                            <p className="text-sm text-gray-600">Keep data synced in background</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">Conflict Resolution</p>
                            <p className="text-sm text-gray-600">Automatically resolve data conflicts</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

