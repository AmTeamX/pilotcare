'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const mainNavItems = [
        { href: '/dashboard', icon: '📊', label: 'Dashboard', color: 'text-blue-600' },
        { href: '/sleep-schedule', icon: '😴', label: 'Sleep', color: 'text-purple-600' },
        { href: '/circadian-rhythm', icon: '🌙', label: 'Rhythm', color: 'text-indigo-600' },
        { href: '/weather-health', icon: '🌍', label: 'Weather', color: 'text-cyan-600' },
        { href: '/more', icon: '⋯', label: 'More', color: 'text-gray-600' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg safe-area-top">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-between px-6 py-4">
                        <Link href="/" className="flex items-center space-x-2 py-1">
                            <span className="text-3xl">✈️</span>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight">PilotCare</span>
                                <span className="text-xs text-blue-100 -mt-1">Health & Wellness</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Bottom Navigation Bar - Enhanced Mobile Design */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-100 shadow-2xl safe-area-bottom">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-around px-1 py-2">
                        {mainNavItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative flex flex-col items-center justify-center py-1.5 px-3 min-w-[68px] transition-all duration-200 ${active
                                            ? 'scale-105'
                                            : 'hover:scale-105 active:scale-95'
                                        }`}
                                >
                                    {/* Active background glow */}
                                    {active && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent rounded-2xl"></div>
                                    )}

                                    {/* Icon container */}
                                    <div className={`relative mb-1 transition-all duration-200 ${active ? 'scale-110' : ''
                                        }`}>
                                        <span className={`text-2xl block ${active ? item.color : 'grayscale opacity-60'
                                            }`}>
                                            {item.icon}
                                        </span>

                                        {/* Active indicator dot */}
                                        {active && (
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                        )}
                                    </div>

                                    {/* Label */}
                                    <span className={`text-[10px] font-bold transition-all duration-200 ${active
                                            ? 'text-blue-600 scale-105'
                                            : 'text-gray-500'
                                        }`}>
                                        {item.label}
                                    </span>

                                    {/* Active bar indicator */}
                                    {active && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full shadow-lg"></div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
}