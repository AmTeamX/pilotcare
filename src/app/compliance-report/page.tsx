'use client';

import { useState } from 'react';

export default function ComplianceReport() {
    const [selectedDateRange, setSelectedDateRange] = useState('last30days');
    const [startDate, setStartDate] = useState('2025-10-07');
    const [endDate, setEndDate] = useState('2025-11-06');
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const reportData = {
        totalFlightHours: 156.8,
        totalDutyDays: 18,
        restDays: 12,
        averageRestPeriod: 12.3,
        minimumRestPeriod: 10.0,
        complianceStatus: 'Compliant',
        violations: 0,
        monthlyLimit: 100,
        yearlyLimit: 1000,
    };

    const detailedLogs = [
        { date: '2025-11-06', activity: 'Flight BA890', route: 'LHR → JFK', hours: 8.2, rest: 12.0, compliant: true, type: 'long-haul' },
        { date: '2025-11-05', activity: 'Rest Day', route: '-', hours: 0, rest: 24.0, compliant: true, type: 'rest' },
        { date: '2025-11-04', activity: 'Flight BA234', route: 'LHR → DXB', hours: 7.5, rest: 11.5, compliant: true, type: 'long-haul' },
        { date: '2025-11-03', activity: 'Flight BA567', route: 'LHR → CDG', hours: 3.2, rest: 10.0, compliant: true, type: 'short-haul' },
        { date: '2025-11-02', activity: 'Rest Day', route: '-', hours: 0, rest: 24.0, compliant: true, type: 'rest' },
        { date: '2025-11-01', activity: 'Flight BA123', route: 'LHR → SIN', hours: 9.5, rest: 14.0, compliant: true, type: 'long-haul' },
        { date: '2025-10-31', activity: 'Rest Day', route: '-', hours: 0, rest: 24.0, compliant: true, type: 'rest' },
        { date: '2025-10-30', activity: 'Flight BA456', route: 'LHR → LAX', hours: 8.8, rest: 13.0, compliant: true, type: 'long-haul' },
        { date: '2025-10-29', activity: 'Flight BA789', route: 'LHR → AMS', hours: 2.5, rest: 11.0, compliant: true, type: 'short-haul' },
        { date: '2025-10-28', activity: 'Rest Day', route: '-', hours: 0, rest: 24.0, compliant: true, type: 'rest' },
    ];

    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            alert('✈️ Compliance Report Generated!\n\nIn a production app, this would:\n• Generate a detailed PDF report\n• Include all regulatory compliance data\n• Export to aviation authority format\n• Email to flight operations');
        }, 1500);
    };

    const today = new Date().toISOString().split('T')[0];

    const filteredLogs = detailedLogs.filter(log => {
        if (selectedFilter === 'all') return true;
        return log.type === selectedFilter;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">📋 Compliance Report</h1>
                <p className="text-blue-100">Flight duty and rest compliance tracking</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="px-4 mb-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 shadow-lg text-white">
                        <div className="text-3xl mb-2">✅</div>
                        <div className="text-sm opacity-90 mb-1">Status</div>
                        <div className="text-2xl font-bold">{reportData.complianceStatus}</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg text-white">
                        <div className="text-3xl mb-2">⏰</div>
                        <div className="text-sm opacity-90 mb-1">Flight Hours</div>
                        <div className="text-2xl font-bold">{reportData.totalFlightHours}h</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-lg text-white">
                        <div className="text-3xl mb-2">📅</div>
                        <div className="text-sm opacity-90 mb-1">Duty Days</div>
                        <div className="text-2xl font-bold">{reportData.totalDutyDays}</div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 shadow-lg text-white">
                        <div className="text-3xl mb-2">😴</div>
                        <div className="text-sm opacity-90 mb-1">Rest Days</div>
                        <div className="text-2xl font-bold">{reportData.restDays}</div>
                    </div>
                </div>
            </div>

            {/* Date Range Selector */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">📆 Report Period</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quick Select
                        </label>
                        <select
                            value={selectedDateRange}
                            onChange={(e) => setSelectedDateRange(e.target.value)}
                            className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                        >
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="last7days">Last 7 Days</option>
                            <option value="last30days">Last 30 Days</option>
                            <option value="custom">Custom Range</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date
                            </label>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date
                            </label>
                            <input
                                type="date"
                                value={startDate}
                                max={today}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                End Date
                            </label>
                            <input
                                type="date"
                                value={endDate}
                                max={today}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Compliance Metrics */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">📊 Key Metrics</h2>

                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Average Rest Period</span>
                                <span className="text-xl font-bold text-blue-600">{reportData.averageRestPeriod}h</span>
                            </div>
                            <div className="w-full bg-blue-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Minimum Rest Period</span>
                                <span className="text-xl font-bold text-green-600">{reportData.minimumRestPeriod}h</span>
                            </div>
                            <div className="w-full bg-green-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <p className="text-xs text-green-700 mt-2">✓ Above regulatory minimum (9h)</p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Compliance Rate</span>
                                <span className="text-xl font-bold text-purple-600">100%</span>
                            </div>
                            <div className="w-full bg-purple-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Filter */}
            <div className="px-4 mb-4">
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {['all', 'long-haul', 'short-haul', 'rest'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedFilter === filter
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-200'
                                }`}
                        >
                            {filter === 'all' && '📋 All'}
                            {filter === 'long-haul' && '✈️ Long Haul'}
                            {filter === 'short-haul' && '🛫 Short Haul'}
                            {filter === 'rest' && '😴 Rest Days'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Activity Log */}
            <div className="px-4 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">Activity Log</h2>
                <div className="space-y-3">
                    {filteredLogs.map((log, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-gray-100 p-4"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">
                                            {log.type === 'rest' ? '😴' : log.type === 'long-haul' ? '✈️' : '🛫'}
                                        </span>
                                        <h3 className="font-bold text-gray-900">{log.activity}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{log.route}</p>
                                    <p className="text-xs text-gray-500 mt-1">{log.date}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${log.compliant ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {log.compliant ? '✓' : '✗'}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                                <div className="bg-blue-50 rounded-lg p-2">
                                    <p className="text-xs text-gray-600 mb-1">Duty Hours</p>
                                    <p className="text-lg font-bold text-gray-900">{log.hours}h</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-2">
                                    <p className="text-xs text-gray-600 mb-1">Rest Period</p>
                                    <p className="text-lg font-bold text-gray-900">{log.rest}h</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">⚖️ Regulatory Compliance</h2>
                    <div className="space-y-3">
                        {[
                            { rule: 'Flight Duty Period Limits', status: 'met' },
                            { rule: 'Minimum Rest Requirements', status: 'met' },
                            { rule: 'Maximum Consecutive Days', status: 'met' },
                            { rule: 'Monthly Hour Limits', status: 'met' },
                            { rule: 'Annual Hour Limits', status: 'met' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100"
                            >
                                <span className="text-sm font-medium text-gray-900">{item.rule}</span>
                                <span className="text-sm font-bold text-green-600">✓ {item.status.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Generate Report Button */}
            <div className="px-4 mb-4">
                <button
                    onClick={handleGenerateReport}
                    disabled={isGenerating}
                    className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 ${isGenerating
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                        }`}
                >
                    {isGenerating ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating Report...
                        </span>
                    ) : (
                        '📄 Generate PDF Report'
                    )}
                </button>
            </div>

            {/* Info Notice */}
            <div className="px-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">ℹ️</span>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">Important Notice</p>
                            <p className="text-xs text-gray-700">
                                This report is generated for compliance tracking purposes only.
                                Only current and past dates are available for selection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
