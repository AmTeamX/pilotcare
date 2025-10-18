'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: '🏠', label: 'Home' },
        { href: '/dashboard', icon: '📊', label: 'Dashboard' },
        { href: '/api-sync', icon: '🔄', label: 'Sync' },
        { href: '/fatigue-prediction', icon: '🤖', label: 'AI' },
        { href: '/settings', icon: '⚙️', label: 'Settings' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg safe-area-top">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-between px-6 py-3">
                        <Link href="/" className="flex items-center space-x-2 py-1">
                            <span className="text-2xl">✈️</span>
                            <span className="text-lg font-bold tracking-tight">PilotCare</span>
                        </Link>
                        <div className="flex items-center gap-1">
                            <Link
                                href="/compliance-report"
                                className="p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                title="Compliance"
                            >
                                <span className="text-xl">📋</span>
                            </Link>
                            <Link
                                href="/device-sync"
                                className="p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                title="Device Sync"
                            >
                                <span className="text-xl">📱</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bottom Navigation Bar - Mobile Style */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-bottom">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center justify-around px-2 py-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative flex flex-col items-center justify-center py-2 px-3 min-w-[60px] transition-all rounded-lg ${isActive(item.href)
                                        ? 'text-blue-600'
                                        : 'text-gray-500 active:bg-gray-100'
                                    }`}
                            >
                                <span className={`text-2xl mb-0.5 transition-transform ${isActive(item.href) ? 'scale-110' : ''
                                    }`}>
                                    {item.icon}
                                </span>
                                <span className={`text-[10px] font-medium ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500'
                                    }`}>
                                    {item.label}
                                </span>
                                {isActive(item.href) && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}