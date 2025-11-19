'use client';

import { useState } from 'react';

export default function Settings() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [timeFormat, setTimeFormat] = useState('24h');
    const [notifications, setNotifications] = useState(true);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    ];

    const handleSaveSettings = () => {
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus('idle'), 2000);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-600">User Story #9: Multi-language support for pilot preferences</p>
            </div>

            <div className="max-w-3xl">
                {/* Language Selection */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="text-2xl mr-2">🌐</span>
                        Language Preferences
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Select your preferred language for the application interface
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setSelectedLanguage(lang.code)}
                                className={`p-4 rounded-lg border-2 transition-all ${selectedLanguage === lang.code
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-300 bg-white'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-3xl">{lang.flag}</span>
                                    <div className="text-left">
                                        <p className="font-medium text-gray-900">{lang.name}</p>
                                        <p className="text-xs text-gray-500">{lang.code.toUpperCase()}</p>
                                    </div>
                                    {selectedLanguage === lang.code && (
                                        <span className="ml-auto text-blue-500">✓</span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Currently selected:</strong> {languages.find(l => l.code === selectedLanguage)?.name}
                        </p>
                    </div>
                </div>

                {/* Regional Settings */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Regional Settings</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Time Format
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setTimeFormat('12h')}
                                    className={`flex-1 p-3 rounded-lg border-2 transition-all ${timeFormat === '12h'
                                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                                        : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <p className="font-medium">12-Hour</p>
                                    <p className="text-sm text-gray-600">2:30 PM</p>
                                </button>
                                <button
                                    onClick={() => setTimeFormat('24h')}
                                    className={`flex-1 p-3 rounded-lg border-2 transition-all ${timeFormat === '24h'
                                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                                        : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <p className="font-medium">24-Hour</p>
                                    <p className="text-sm text-gray-600">14:30</p>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date Format
                            </label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>DD/MM/YYYY (18/10/2025)</option>
                                <option>MM/DD/YYYY (10/18/2025)</option>
                                <option>YYYY-MM-DD (2025-10-18)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Timezone
                            </label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>UTC (Coordinated Universal Time)</option>
                                <option>GMT (Greenwich Mean Time)</option>
                                <option>EST (Eastern Standard Time)</option>
                                <option>PST (Pacific Standard Time)</option>
                                <option>CET (Central European Time)</option>
                                <option>JST (Japan Standard Time)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Settings</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-900">Enable Notifications</p>
                                <p className="text-sm text-gray-600">Receive alerts and reminders</p>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-900">Language-specific Alerts</p>
                                <p className="text-sm text-gray-600">Receive alerts in selected language</p>
                            </div>
                            <button
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
                            >
                                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Language Translation Demo */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
                    <p className="text-sm text-gray-600 mb-4">How the app would appear in your selected language:</p>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        {selectedLanguage === 'en' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">Welcome to PilotCare</p>
                                <p className="text-sm text-gray-600">Your flight duty hours: 45.2 hours</p>
                                <p className="text-sm text-gray-600">Sleep score: 78/100</p>
                            </div>
                        )}
                        {selectedLanguage === 'es' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">Bienvenido a PilotCare</p>
                                <p className="text-sm text-gray-600">Sus horas de vuelo: 45.2 horas</p>
                                <p className="text-sm text-gray-600">Puntuación de sueño: 78/100</p>
                            </div>
                        )}
                        {selectedLanguage === 'fr' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">Bienvenue sur PilotCare</p>
                                <p className="text-sm text-gray-600">Vos heures de vol: 45.2 heures</p>
                                <p className="text-sm text-gray-600">Score de sommeil: 78/100</p>
                            </div>
                        )}
                        {selectedLanguage === 'de' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">Willkommen bei PilotCare</p>
                                <p className="text-sm text-gray-600">Ihre Flugstunden: 45.2 Stunden</p>
                                <p className="text-sm text-gray-600">Schlafwert: 78/100</p>
                            </div>
                        )}
                        {selectedLanguage === 'ja' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">PilotCareへようこそ</p>
                                <p className="text-sm text-gray-600">フライト時間: 45.2時間</p>
                                <p className="text-sm text-gray-600">睡眠スコア: 78/100</p>
                            </div>
                        )}
                        {selectedLanguage === 'zh' && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">欢迎使用PilotCare</p>
                                <p className="text-sm text-gray-600">飞行时间: 45.2小时</p>
                                <p className="text-sm text-gray-600">睡眠评分: 78/100</p>
                            </div>
                        )}
                        {!['en', 'es', 'fr', 'de', 'ja', 'zh'].includes(selectedLanguage) && (
                            <div>
                                <p className="font-medium text-gray-900 mb-2">Language Preview Coming Soon</p>
                                <p className="text-sm text-gray-600">Translation for {languages.find(l => l.code === selectedLanguage)?.name} will be displayed here</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSaveSettings}
                        disabled={saveStatus === 'saving'}
                        className={`px-8 py-3 rounded-lg font-medium transition-colors ${saveStatus === 'saved'
                            ? 'bg-green-600 text-white'
                            : saveStatus === 'saving'
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        {saveStatus === 'saved' ? '✓ Settings Saved' :
                            saveStatus === 'saving' ? 'Saving...' :
                                'Save Settings'}
                    </button>
                </div>
            </div>
        </div>
    );
}
