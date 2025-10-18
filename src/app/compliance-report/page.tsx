'use client';

import { useState } from 'react';

export default function ComplianceReport() {
    const [selectedDateRange, setSelectedDateRange] = useState('last7days');
    const [startDate, setStartDate] = useState('2025-10-11');
    const [endDate, setEndDate] = useState('2025-10-18');
    const [isGenerating, setIsGenerating] = useState(false);

    const reportData = {
        totalFlightHours: 45.2,
        totalDutyDays: 6,
        restDays: 1,
        averageRestPeriod: 11.5,
        minimumRestPeriod: 10.2,
        complianceStatus: 'Compliant',
        violations: 0,
    };

    const detailedLogs = [
        { date: '2025-10-18', activity: 'Flight BA123', hours: 8.5, rest: 11.0, compliant: true },
        { date: '2025-10-17', activity: 'Flight BA456', hours: 7.2, rest: 12.5, compliant: true },
        { date: '2025-10-16', activity: 'Rest Day', hours: 0, rest: 24.0, compliant: true },
        { date: '2025-10-15', activity: 'Flight BA789', hours: 6.8, rest: 10.2, compliant: true },
        { date: '2025-10-14', activity: 'Flight BA321', hours: 8.0, rest: 11.8, compliant: true },
        { date: '2025-10-13', activity: 'Flight BA654', hours: 7.5, rest: 13.0, compliant: true },
        { date: '2025-10-12', activity: 'Flight BA987', hours: 7.2, rest: 12.0, compliant: true },
    ];

    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            alert('Report generated successfully! In a real app, this would download a PDF.');
        }, 1500);
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Compliance & Safety Report</h1>
                <p className="text-gray-600">User Story #7: Generate compliance reports (current and past days only)</p>
            </div>

            {/* Date Selection */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Period</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quick Select
                        </label>
                        <select
                            value={selectedDateRange}
                            onChange={(e) => setSelectedDateRange(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="last7days">Last 7 Days</option>
                            <option value="last30days">Last 30 Days</option>
                            <option value="custom">Custom Range</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            max={today}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800 flex items-center">
                        <span className="mr-2">⚠️</span>
                        Note: Only current and past dates can be selected. Future dates are not available.
                    </p>
                </div>
            </div>

            {/* Compliance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <p className="text-sm text-gray-600 mb-2">Compliance Status</p>
                    <p className="text-2xl font-bold text-green-600">{reportData.complianceStatus}</p>
                    <p className="text-xs text-gray-500 mt-2">All regulations met</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-2">Total Flight Hours</p>
                    <p className="text-2xl font-bold text-gray-900">{reportData.totalFlightHours}</p>
                    <p className="text-xs text-gray-500 mt-2">In selected period</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <p className="text-sm text-gray-600 mb-2">Duty Days</p>
                    <p className="text-2xl font-bold text-gray-900">{reportData.totalDutyDays}</p>
                    <p className="text-xs text-gray-500 mt-2">Active duty days</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <p className="text-sm text-gray-600 mb-2">Avg Rest Period</p>
                    <p className="text-2xl font-bold text-gray-900">{reportData.averageRestPeriod}h</p>
                    <p className="text-xs text-gray-500 mt-2">Between duties</p>
                </div>
            </div>

            {/* Detailed Activity Log */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Detailed Activity Log</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Activity</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Duty Hours</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rest Period</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailedLogs.map((log, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm text-gray-900">{log.date}</td>
                                    <td className="py-3 px-4 text-sm text-gray-900">{log.activity}</td>
                                    <td className="py-3 px-4 text-sm text-gray-900">{log.hours}h</td>
                                    <td className="py-3 px-4 text-sm text-gray-900">{log.rest}h</td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${log.compliant ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {log.compliant ? '✓ Compliant' : '✗ Violation'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Regulatory Compliance Details */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Flight Duty Period Limits</span>
                        <span className="text-sm font-semibold text-green-600">✓ Met</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Minimum Rest Requirements</span>
                        <span className="text-sm font-semibold text-green-600">✓ Met</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Maximum Consecutive Days</span>
                        <span className="text-sm font-semibold text-green-600">✓ Met</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Monthly Hour Limits</span>
                        <span className="text-sm font-semibold text-green-600">✓ Met</span>
                    </div>
                </div>
            </div>

            {/* Generate Report Button */}
            <div className="flex justify-end space-x-4">
                <button
                    onClick={handleGenerateReport}
                    disabled={isGenerating}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${isGenerating
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {isGenerating ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </span>
                    ) : (
                        '📄 Generate PDF Report'
                    )}
                </button>
            </div>
        </div>
    );
}
