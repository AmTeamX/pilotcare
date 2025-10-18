# PilotCare - Pilot Health & Compliance Management System

A comprehensive Next.js prototype application for pilot fatigue management, flight duty tracking, and health monitoring.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation & Running

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Implemented User Stories

This prototype implements 6 key user stories:

### 1. **User Story #1: Airline System Sync**

**Route:** `/api-sync`

**Description:** Sync with airline systems and track flight duty limitations

**Features:**

- Real-time sync with airline API
- Flight duty period tracking with visual indicators
- Daily flight time limits monitoring
- Rest period requirements tracking
- Consecutive days counter
- Alert system for approaching limitations
- Synced flight schedule display

**Acceptance Criteria:** ✅ App syncs to API before functioning

---

### 2. **User Story #7: Compliance Report**

**Route:** `/compliance-report`

**Description:** Generate compliance and safety reports proving adequate rest

**Features:**

- Date range selection (current and past days only)
- Quick date presets (Today, Yesterday, Last 7/30 days)
- Compliance status overview
- Detailed activity logs with duty hours and rest periods
- Regulatory compliance checklist
- PDF report generation (prototype)
- Visual status indicators

**Acceptance Criteria:** ✅ User can only select current and past days. Cannot generate future reports.

---

### 3. **User Story #9: Multi-Language Settings**

**Route:** `/settings`

**Description:** Support multiple languages for pilot preferences

**Features:**

- 12 language options (English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, Arabic, Russian, Thai)
- Visual language selection with flags
- Regional settings (time format, date format, timezone)
- Notification preferences
- Live preview of translations
- Language-specific alerts toggle
- Save settings functionality

**Acceptance Criteria:** ✅ Pilot can select language in settings and use app in their preferred language

---

### 4. **User Story #10: Dashboard Overview**

**Route:** `/dashboard`

**Description:** Simple dashboard showing sleep score, duty schedule, and fatigue risk

**Features:**

- Fatigue risk alert (High/Medium/Low)
- Health metrics cards (Sleep Score, Total Sleep, Heart Rate, Recovery)
- Visual sleep score progress bar
- Duty schedule table with flight information
- Status indicators (Completed, Scheduled, Rest)
- Overall condition summary
- Color-coded risk levels

**Acceptance Criteria:** ✅ Dashboard displays overview of pilot health when accessing the application

---

### 5. **User Story #11: Device Sync**

**Route:** `/device-sync`

**Description:** Sync data across iOS, Android, and Smart Watch devices

**Features:**

- Multi-device management (iPhone, Android, Apple Watch, iPad)
- Real-time sync status for each device
- Connected device overview with last sync time
- Synced data categories (Sleep Data, Flight Schedule, Health Metrics, Duty Logs, Compliance Reports)
- Platform support indicators (iOS, Android, Smart Watch)
- Sync settings (Auto sync, WiFi only, Background sync, Conflict resolution)
- Data size tracking
- Individual and bulk sync options

**Acceptance Criteria:** ✅ Support for iOS, Android, and Smart Watch

---

### 6. **User Story #12: AI Fatigue Prediction**

**Route:** `/fatigue-prediction`

**Description:** AI-powered fatigue risk prediction based on schedule and sleep patterns

**Features:**

- Overall fatigue risk assessment with score (0-100)
- Risk factors analysis (Sleep Quality, Flight Schedule, Recovery Time, Circadian Rhythm, Rest Periods)
- Upcoming flight predictions with confidence levels
- AI-powered recommendations (Sleep optimization, Exercise, Nutrition, Caffeine strategy)
- Priority-based suggestions
- AI model information and accuracy metrics
- Real-time re-analysis capability
- Visual risk indicators

**Acceptance Criteria:** ✅ AI predicts fatigue when pilot has data from devices. Pilot receives results and suggestions.

---

## 🎨 Technology Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** React 19.1.0
- **Icons:** Emoji-based visual system

## 📂 Project Structure

```
pilotcare/
├── src/
│   ├── app/
│   │   ├── api-sync/          # User Story #1
│   │   ├── compliance-report/ # User Story #7
│   │   ├── settings/          # User Story #9
│   │   ├── dashboard/         # User Story #10
│   │   ├── device-sync/       # User Story #11
│   │   ├── fatigue-prediction/# User Story #12
│   │   ├── layout.tsx         # Root layout with navigation
│   │   ├── page.tsx           # Home page with prototype links
│   │   └── globals.css        # Global styles
│   └── components/
│       └── Navigation.tsx     # Main navigation component
├── public/                    # Static assets
└── package.json
```

## 🎯 Key Features Across All Prototypes

### Visual Design

- Clean, modern interface with consistent color scheme
- Responsive design (mobile, tablet, desktop)
- Color-coded status indicators (green=good, yellow=warning, red=danger)
- Intuitive navigation between all prototypes

### User Experience

- Real-time feedback on actions
- Loading states for async operations
- Clear error handling and validation
- Accessibility considerations

### Data Visualization

- Progress bars for metrics tracking
- Status badges and indicators
- Interactive tables with hover effects
- Color-coded risk levels

## 🔄 Navigation

All prototypes are accessible via:

1. **Top Navigation Bar** - Quick access to all 6 prototypes
2. **Home Page** - Card-based overview with descriptions and story numbers

## 📱 Responsive Design

All prototypes are fully responsive:

- **Mobile:** Single column layout, touch-optimized
- **Tablet:** 2-column grid where applicable
- **Desktop:** Full multi-column layouts with optimal spacing

## 🎨 Color Scheme

- **Primary:** Blue (#2563eb)
- **Success:** Green (#10b981)
- **Warning:** Yellow/Orange (#f59e0b)
- **Danger:** Red (#ef4444)
- **Purple:** Used for device/watch features
- **Background:** Light gray (#f9fafb)

## 🚧 Prototype Notes

This is a **prototype/mockup** application with simulated data. In a production environment:

- API endpoints would connect to real airline systems
- Database would store actual user data
- Authentication and authorization would be implemented
- AI model would use real machine learning algorithms
- Device sync would integrate with actual iOS/Android/WearOS SDKs
- PDF generation would use proper document libraries

## 📄 License

This is a prototype project for demonstration purposes.

## 👥 Contact

For questions or feedback about this prototype, please contact the development team.

---

**Built with ❤️ for Pilot Safety and Health**
