'use client';

import { useState } from 'react';

export default function FatiguePrediction() {
    const [analyzing, setAnalyzing] = useState(false);

    const fatigueAnalysis = {
        overallRisk: 'Medium',
        riskScore: 65,
        factors: [
            { name: 'Sleep Quality', value: 72, status: 'warning', impact: 'Medium' },
            { name: 'Flight Schedule Density', value: 68, status: 'warning', impact: 'Medium' },
            { name: 'Recovery Time', value: 58, status: 'danger', impact: 'High' },
            { name: 'Circadian Rhythm Alignment', value: 75, status: 'good', impact: 'Low' },
            { name: 'Recent Rest Periods', value: 62, status: 'warning', impact: 'Medium' },
        ],
    };

    const predictions = [
        {
            date: '2025-10-19',
            flight: 'BA124 JFK-LHR',
            predictedFatigue: 68,
            riskLevel: 'Medium',
            confidence: 87,
            recommendation: 'Schedule adequate rest before flight',
        },
        {
            date: '2025-10-21',
            flight: 'BA456 LHR-DXB',
            predictedFatigue: 72,
            riskLevel: 'Medium-High',
            confidence: 82,
            recommendation: 'Consider extended rest period',
        },
        {
            date: '2025-10-23',
            flight: 'BA789 DXB-SYD',
            predictedFatigue: 78,
            riskLevel: 'High',
            confidence: 79,
            recommendation: 'Strongly recommend additional rest',
        },
    ];

    const recommendations = [
        {
            icon: '😴',
            title: 'Optimize Sleep Schedule',
            description: 'Get 8-9 hours of quality sleep before your next flight. Consider going to bed at 22:00.',
            priority: 'High',
        },
        {
            icon: '🏃',
            title: 'Light Exercise',
            description: 'Engage in 20-30 minutes of light exercise to improve recovery and reduce fatigue.',
            priority: 'Medium',
        },
        {
            icon: '🥗',
            title: 'Nutrition & Hydration',
            description: 'Maintain proper hydration and avoid heavy meals 3 hours before duty.',
            priority: 'Medium',
        },
        {
            icon: '☕',
            title: 'Strategic Caffeine Use',
            description: 'Limit caffeine intake to morning hours. Avoid 6 hours before planned sleep.',
            priority: 'Low',
        },
    ];

    const handleAnalyze = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Fatigue Prediction</h1>
                <p className="text-gray-600">
                    User Story #12: AI-powered fatigue risk prediction based on schedule and sleep patterns
                </p>
            </div>

            {/* Overall Risk Assessment */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg shadow-lg mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Overall Fatigue Risk</h2>
                        <p className="text-orange-100">Based on AI analysis of your data</p>
                    </div>
                    <button
                        onClick={handleAnalyze}
                        disabled={analyzing}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${analyzing
                                ? 'bg-white/30 cursor-not-allowed'
                                : 'bg-white text-orange-600 hover:bg-orange-50'
                            }`}
                    >
                        {analyzing ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Analyzing...
                            </span>
                        ) : (
                            '🤖 Re-analyze'
                        )}
                    </button>
                </div>

                <div className="flex items-end space-x-6">
                    <div className="flex-1">
                        <div className="bg-white/20 rounded-full h-8 mb-2">
                            <div
                                className="bg-white h-8 rounded-full transition-all duration-500"
                                style={{ width: `${fatigueAnalysis.riskScore}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-orange-100">Risk Score: {fatigueAnalysis.riskScore}/100</p>
                    </div>
                    <div className="text-right">
                        <div className="text-5xl font-bold">{fatigueAnalysis.overallRisk}</div>
                        <div className="text-sm text-orange-100">Risk Level</div>
                    </div>
                </div>
            </div>

            {/* Risk Factors Analysis */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">🔍 Risk Factors Analysis</h2>
                <div className="space-y-4">
                    {fatigueAnalysis.factors.map((factor, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3 flex-1">
                                    <span className="font-medium text-gray-900">{factor.name}</span>
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${factor.status === 'good'
                                                ? 'bg-green-100 text-green-800'
                                                : factor.status === 'warning'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {factor.impact} Impact
                                    </span>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{factor.value}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${factor.status === 'good'
                                            ? 'bg-green-500'
                                            : factor.status === 'warning'
                                                ? 'bg-yellow-500'
                                                : 'bg-red-500'
                                        }`}
                                    style={{ width: `${factor.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Flight Predictions */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">📅 Upcoming Flight Predictions</h2>
                <div className="space-y-4">
                    {predictions.map((prediction, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border-l-4 ${prediction.riskLevel === 'High'
                                    ? 'bg-red-50 border-red-500'
                                    : prediction.riskLevel.includes('Medium')
                                        ? 'bg-yellow-50 border-yellow-500'
                                        : 'bg-green-50 border-green-500'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h3 className="font-semibold text-gray-900">{prediction.flight}</h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${prediction.riskLevel === 'High'
                                                    ? 'bg-red-200 text-red-900'
                                                    : prediction.riskLevel.includes('Medium')
                                                        ? 'bg-yellow-200 text-yellow-900'
                                                        : 'bg-green-200 text-green-900'
                                                }`}
                                        >
                                            {prediction.riskLevel} Risk
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{prediction.date}</p>
                                    <p className="text-sm font-medium text-gray-700">
                                        💡 {prediction.recommendation}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-gray-900">{prediction.predictedFatigue}</div>
                                    <div className="text-xs text-gray-600">Fatigue Score</div>
                                    <div className="text-xs text-gray-500 mt-1">{prediction.confidence}% confidence</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">💡 AI-Powered Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendations.map((rec, index) => (
                        <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="text-3xl">{rec.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${rec.priority === 'High'
                                                    ? 'bg-red-100 text-red-800'
                                                    : rec.priority === 'Medium'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-blue-100 text-blue-800'
                                                }`}
                                        >
                                            {rec.priority}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{rec.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Model Information */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🤖</span>
                    AI Model Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                    <div>
                        <p className="font-medium mb-1">Model Version</p>
                        <p>FatiguePredict v2.1.0</p>
                    </div>
                    <div>
                        <p className="font-medium mb-1">Training Data</p>
                        <p>10,000+ pilot records</p>
                    </div>
                    <div>
                        <p className="font-medium mb-1">Accuracy Rate</p>
                        <p>89.3% prediction accuracy</p>
                    </div>
                </div>
                <p className="text-sm text-blue-700 mt-4">
                    Our AI analyzes your sleep patterns, duty schedule, recovery time, and circadian rhythm to provide
                    personalized fatigue predictions. The model continuously learns and improves with more data.
                </p>
            </div>
        </div>
    );
}
