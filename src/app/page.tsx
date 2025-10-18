import Link from "next/link";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Airline Sync",
      description: "Track flight duty limits",
      href: "/api-sync",
      icon: "🔄",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 7,
      title: "Compliance",
      description: "Safety reports",
      href: "/compliance-report",
      icon: "📋",
      gradient: "from-green-500 to-green-600",
    },
    {
      id: 9,
      title: "Languages",
      description: "Multi-language support",
      href: "/settings",
      icon: "🌐",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 10,
      title: "Dashboard",
      description: "Health overview",
      href: "/dashboard",
      icon: "📊",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      id: 11,
      title: "Device Sync",
      description: "Multi-device support",
      href: "/device-sync",
      icon: "📱",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      id: 12,
      title: "AI Prediction",
      description: "Fatigue forecasting",
      href: "/fatigue-prediction",
      icon: "🤖",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="px-6 pt-8 pb-6">
        <div className="text-center mb-2">
          <div className="text-5xl mb-3">✈️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to PilotCare
          </h1>
          <p className="text-sm text-gray-600">
            Your complete flight health companion
          </p>
        </div>
      </div>

      {/* Quick Stats Card */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-xs uppercase tracking-wide mb-1">Today's Status</p>
              <p className="text-2xl font-bold">All Systems Ready</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-500">
            <div>
              <p className="text-blue-200 text-xs">Sleep Score</p>
              <p className="text-xl font-bold">78/100</p>
            </div>
            <div>
              <p className="text-blue-200 text-xs">Flights</p>
              <p className="text-xl font-bold">2 Today</p>
            </div>
            <div>
              <p className="text-blue-200 text-xs">Rest</p>
              <p className="text-xl font-bold">11h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 px-2">Features</h2>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all active:scale-95 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-3 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-2 text-xs text-gray-400">
                Story #{feature.id}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 px-2">Quick Actions</h2>
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-98 border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-xl shadow-sm">
                📊
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">View Dashboard</p>
                <p className="text-xs text-gray-500">Check your health status</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/api-sync"
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-98 border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xl shadow-sm">
                🔄
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Sync Flight Data</p>
                <p className="text-xs text-gray-500">Update from airline system</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/fatigue-prediction"
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-98 border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xl shadow-sm">
                🤖
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">AI Fatigue Check</p>
                <p className="text-xs text-gray-500">Get personalized insights</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
