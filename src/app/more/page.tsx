'use client';

import Link from 'next/link';

export default function MorePage() {
    const menuItems = [
        {
            href: '/meditation',
            icon: '🧘',
            label: 'Meditation & Mindfulness',
            description: 'Reduce stress with guided sessions',
            color: 'from-purple-500 to-indigo-600',
            category: 'Wellness'
        },
        {
            href: '/sleep-tracking',
            icon: '💤',
            label: 'Sleep Tracking',
            description: 'Monitor sleep quality with wearables',
            color: 'from-indigo-500 to-blue-600',
            category: 'Wellness'
        },
        {
            href: '/fatigue-prediction',
            icon: '🤖',
            label: 'AI Fatigue Prediction',
            description: 'Get AI-powered fatigue insights',
            color: 'from-blue-500 to-cyan-600',
            category: 'AI & Analytics'
        },
        {
            href: '/compliance-report',
            icon: '📋',
            label: 'Compliance Report',
            description: 'View flight duty and rest compliance',
            color: 'from-cyan-500 to-teal-600',
            category: 'Reports'
        },
        {
            href: '/api-sync',
            icon: '🔄',
            label: 'API Sync',
            description: 'Sync with external systems',
            color: 'from-green-500 to-emerald-600',
            category: 'Data'
        },
        {
            href: '/device-sync',
            icon: '📱',
            label: 'Device Sync',
            description: 'Connect wearable devices',
            color: 'from-emerald-500 to-teal-600',
            category: 'Data'
        },
        {
            href: '/settings',
            icon: '⚙️',
            label: 'Settings',
            description: 'App preferences and configuration',
            color: 'from-gray-500 to-gray-600',
            category: 'System'
        },
    ];

    // Group items by category
    const groupedItems = menuItems.reduce((acc, item) => {
        const category = item.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
    }, {} as Record<string, typeof menuItems>);

    const infoItems = [
        { icon: '📚', label: 'Help & Support', color: 'from-orange-500 to-orange-600' },
        { icon: '📄', label: 'Privacy Policy', color: 'from-indigo-500 to-indigo-600' },
        { icon: 'ℹ️', label: 'About PilotCare', color: 'from-teal-500 to-teal-600' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">More</h1>
                <p className="text-blue-100">Additional features and settings</p>
            </div>

            {/* Main Menu Items - Grouped by Category */}
            <div className="px-4 mb-6">
                {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">{category}</h2>
                        <div className="space-y-3">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all active:scale-98 hover:shadow-lg"
                                >
                                    <div className="flex items-center p-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-md mr-4`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                        <div className="text-gray-400 text-xl">
                                            →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* App Info Section */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">Information</h2>
                <div className="space-y-3">
                    {infoItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all active:scale-98"
                        >
                            <div className="flex items-center p-4">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-md mr-4`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                                </div>
                                <div className="text-gray-400 text-xl">
                                    →
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* App Version */}
            <div className="px-4 mb-4">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <span className="text-4xl">✈️</span>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">PilotCare</h3>
                                <p className="text-sm text-gray-600">Health & Wellness</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Version</span>
                            <span className="font-semibold text-gray-900">1.0.0</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Build</span>
                            <span className="font-semibold text-gray-900">2025.11.06</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-5">
                    <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center transition-all active:scale-95">
                            <div className="text-2xl mb-1">🔔</div>
                            <div className="text-xs font-semibold text-gray-700">Notifications</div>
                        </button>
                        <button className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center transition-all active:scale-95">
                            <div className="text-2xl mb-1">📤</div>
                            <div className="text-xs font-semibold text-gray-700">Export Data</div>
                        </button>
                        <button className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center transition-all active:scale-95">
                            <div className="text-2xl mb-1">🔒</div>
                            <div className="text-xs font-semibold text-gray-700">Security</div>
                        </button>
                        <button className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center transition-all active:scale-95">
                            <div className="text-2xl mb-1">💬</div>
                            <div className="text-xs font-semibold text-gray-700">Feedback</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
