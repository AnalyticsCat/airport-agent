# ✈️ Airport Search Agent

An AI-powered web application that helps travelers find the closest airports to any city worldwide. Built with Next.js 15, OpenAI GPT-4, and modern web technologies.

![Airport Search Agent](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green?style=for-the-badge&logo=openai)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **🤖 AI-Powered Search**: Natural language queries powered by OpenAI GPT-4o-mini
- **🌍 Global Coverage**: Find airports in major cities worldwide
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Real-time Results**: Fast, interactive search with streaming responses
- **🎯 Detailed Information**: Get airport codes, distances, and location details
- **🧭 Smart Navigation**: Easy-to-use interface with intuitive navigation

## 🚀 Live Demo

Visit the live application: [Airport Search Agent](https://your-deployment-url.vercel.app)

## 📸 Screenshots

### Home Page - Airport Search
The main interface where users can search for airports using natural language queries.

### About Page
Comprehensive information about the application, its features, and how it works.

## 🔄 Enhanced Data Flow Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   User Input    │───▶│   Next.js App    │───▶│   API Route     │
│                 │    │                  │    │                 │
│ "Find airports  │    │  • Input Form    │    │ /api/chat       │
│  near Tokyo"    │    │  • UI Components │    │ • Error Handle  │
│                 │    │  • State Mgmt    │    │ • Env Config    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│  Search Results │◀───│   AI Processing  │◀───│   OpenAI API    │
│                 │    │                  │    │                 │
│ • Live Data     │    │ • GPT-4o-mini    │    │ • Model: GPT-4o │
│ • Real Codes    │    │ • Tool Calling   │    │ • Streaming     │
│ • Calc Distance │    │ • Response Gen   │    │ • Function Call │
│                 │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                         │
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │                  │    │                 │
                       │ searchAirports   │    │ Intelligent     │
                       │     Tool         │    │ Data Sources    │
                       │                  │    │                 │
                       │ • City Parsing   │    │ 🔄 Multi-Layer  │
                       │ • API Selection  │    │    Fallback     │
                       │ • Distance Calc  │    │                 │
                       │ • Error Handling │    │                 │
                       └──────────────────┘    └─────────────────┘
                                │                         │
                                ▼                         ▼
                    ┌─────────────────────────────────────────────┐
                    │           🌐 REAL API LAYER                 │
                    ├─────────────────────────────────────────────┤
                    │                                             │
                    │  ┌─────────────────┐  ┌─────────────────┐   │
                    │  │                 │  │                 │   │
                    │  │ Aviation Edge   │  │ OpenStreetMap   │   │
                    │  │     API         │  │   Nominatim     │   │
                    │  │                 │  │                 │   │
                    │  │ • Airport DB    │  │ • Geocoding     │   │
                    │  │ • Coordinates   │  │ • City Coords   │   │
                    │  │ • IATA Codes    │  │ • Free Service  │   │
                    │  │ • Global Data   │  │ • No API Key    │   │
                    │  │                 │  │                 │   │
                    │  └─────────────────┘  └─────────────────┘   │
                    └─────────────────────────────────────────────┘
                                         │
                                         ▼
                    ┌─────────────────────────────────────────────┐
                    │          📊 FALLBACK LAYERS                 │
                    ├─────────────────────────────────────────────┤
                    │                                             │
                    │  Layer 1: Real API ────────────────────────▶│
                    │           ↓ (if API key available)         │
                    │                                             │
                    │  Layer 2: Mock Data ───────────────────────▶│
                    │           ↓ (for known cities)             │
                    │                                             │
                    │  Layer 3: Generic Response ────────────────▶│
                    │           (XXX/YYY codes)                   │
                    │                                             │
                    └─────────────────────────────────────────────┘
```

### Enhanced Flow Explanation:
1. **User Input**: Natural language query (e.g., "Find airports near Berlin")
2. **Next.js App**: Handles UI state, form validation, and API communication
3. **API Route**: Environment-aware processing with error handling and logging
4. **OpenAI API**: GPT-4o-mini analyzes query and calls searchAirports tool
5. **searchAirports Tool**: Intelligent data source selection and processing
6. **Real API Layer**:
   - **Aviation Edge API**: Live airport database with global coverage
   - **OpenStreetMap Nominatim**: Free geocoding for city coordinates
7. **Fallback System**: Three-layer reliability (Real API → Mock Data → Generic)
8. **Distance Calculation**: Haversine formula for accurate distance computation
9. **AI Processing**: Contextualizes and formats results with helpful information
10. **Search Results**: Real-time streaming with live data and accurate distances

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 with App Router
- **AI Integration**: OpenAI GPT-4o-mini via AI SDK
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnalyticsCat/airport-agent.git
   cd airport-agent
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OpenAI API key to `.env.local`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required: OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Optional: OpenAI Organization (if applicable)
OPENAI_ORGANIZATION=your_organization_id_here

# Optional: Custom OpenAI Base URL
OPENAI_BASE_URL=https://api.openai.com/v1

# Development Environment
NODE_ENV=development
```

### Getting API Keys

#### OpenAI API Key (Required)
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the key to your `.env.local` file

#### Aviation Edge API Key (Optional - for real airport data)
1. Visit [Aviation Edge](https://aviation-edge.com/)
2. Sign up for a free account (1,000 requests/month)
3. Get your API key from the dashboard
4. Add to `.env.local`: `AVIATION_EDGE_API_KEY=your_key_here`

**Note**: Without the Aviation Edge API key, the app will use mock data for predefined cities and generic responses for others.

## 📖 Usage

### Basic Search
1. Enter a natural language query like:
   - "Find airports near New York"
   - "What airports are closest to Tokyo?"
   - "Show me airports in London"

2. The AI agent will process your request and return relevant airport information including:
   - Airport names
   - IATA codes
   - Distance from city center
   - Location details

### Navigation
- **Search Page**: Main interface for finding airports
- **About Page**: Information about the application and its features

## 🤖 Enhanced AI Tool Integration

The application uses OpenAI's function calling with real-time API integration for intelligent airport search:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Enhanced AI Tool System                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  User Query: "Find airports near Berlin"                                │
│                                │                                        │
│                                ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                    GPT-4o-mini Analysis                         │    │
│  │  • Parse natural language with context awareness                │    │
│  │  • Identify intent (airport search)                             │    │
│  │  │  • Extract city name: "Berlin"                               │    │
│  │  • Decide to call searchAirports tool                           │    │
│  │  • Handle edge cases and variations                             │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                │                                        │
│                                ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                 searchAirports Tool (Enhanced)                  │    │
│  │                                                                 │    │
│  │  Input Schema:                                                  │    │
│  │  {                                                              │    │
│  │    city: string // "Berlin"                                     │    │
│  │  }                                                              │    │
│  │                                                                 │    │
│  │  🔄 Intelligent Processing Flow:                                │    │
│  │                                                                 │    │
│  │  1️⃣ Environment Check                                           │    │
│  │     ├─ API Key Available? ──────────────────┐                   │    │
│  │     │                                       │                   │    │
│  │  2️⃣ Real API Layer (if available)           │                   │    │
│  │     ├─ Get city coordinates (Nominatim)     │                   │    │
│  │     ├─ Fetch airports (Aviation Edge)       │                   │    │
│  │     ├─ Calculate distances (Haversine)      │                   │    │
│  │     └─ Return live data ────────────────────┼─────────────────┐ │    │
│  │                                             │                 │ │    │
│  │  3️⃣ Mock Data Fallback                      │                 │ │    │
│  │     ├─ Check predefined cities              │                 │ │    │
│  │     ├─ Return enhanced mock data ───────────┼─────────────────┤ │    │
│  │     │                                       │                 │ │    │
│  │  4️⃣ Generic Response Fallback               │                 │ │    │
│  │     └─ Generate XXX/YYY airports ───────────┘                 │ │    │
│  │                                                               │ │    │
│  │  📊 Output (Real Data Example):                               │ │    │
│  │  {                                                            │ │    │
│  │    airports: [                                                │ │    │
│  │      {                                                        │ │    │
│  │        name: "Berlin Brandenburg Airport",                    │ │    │
│  │        code: "BER",                                           │ │    │
│  │        distance: "18.2 miles", // ← Calculated!               │ │    │
│  │        location: "Schönefeld, Germany"                        │ │    │
│  │      },                                                       │ │    │
│  │      {                                                        │ │    │
│  │        name: "Berlin Tempelhof Airport",                      │ │    │
│  │        code: "THF",                                           │ │    │
│  │        distance: "4.1 miles", // ← Real distance!             │ │    │
│  │        location: "Berlin, Germany"                            │ │    │
│  │      }                                                        │ │    │
│  │    ]                                                          │ │    │
│  │  }                                                            │ │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                │                                        │
│                                ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                  Enhanced Response Generation                   │    │
│  │  • Format results with real-time data context                   │    │
│  │  • Add helpful travel recommendations                           │    │
│  │  • Include data source information                              │    │
│  │  • Handle errors gracefully with fallback info                  │    │
│  │  • Stream response with live updates                            │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Tool Features:
- **Intelligent Parsing**: Extracts city names from natural language
- **Real API Integration**: Uses Aviation Edge API for live airport data
- **Fallback Handling**: Gracefully falls back to mock data if API unavailable
- **Distance Calculation**: Accurate distance calculation using Haversine formula
- **Global Coverage**: Search airports worldwide with real coordinates
- **Error Resilience**: Multiple fallback layers for reliable service

## � API Integration Flow

```
                    🔍 City Search Request: "Berlin"
                                │
                                ▼
                    ┌─────────────────────────┐
                    │   Environment Check     │
                    │                         │
                    │ AVIATION_EDGE_API_KEY   │
                    │      available?         │
                    └─────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │   🌐 REAL API       │   │   📊 FALLBACK       │
        │     FLOW            │   │     SYSTEM          │
        └─────────────────────┘   └─────────────────────┘
                    │                       │
                    ▼                       ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │ 1️⃣ Geocoding        │   │ 1️⃣ Mock Data Check  │
        │                     │   │                     │
        │ OpenStreetMap       │   │ Known cities:       │
        │ Nominatim API       │   │ • New York          │
        │                     │   │ • Los Angeles       │
        │ Input: "Berlin"     │   │ • London            │
        │ Output: 52.5°N,     │   │ • Tokyo             │
        │         13.4°E      │   │ • Paris             │
        └─────────────────────┘   │ • Chicago           │
                    │             └─────────────────────┘
                    ▼                       │
        ┌─────────────────────┐             ▼
        │ 2️⃣ Airport Search   │   ┌─────────────────────┐
        │                     │   │ 2️⃣ Generic Response │
        │ Aviation Edge API   │   │                     │
        │                     │   │ If city unknown:    │
        │ • Global airport DB │   │ • XXX International │
        │ • Real coordinates  │   │ • YYY Regional      │
        │ • IATA codes        │   │ • Estimated dist.   │
        │ • Airport details   │   │ • User-friendly     │
        └─────────────────────┘   └─────────────────────┘
                    │                       │
                    ▼                       │
        ┌─────────────────────┐             │
        │ 3️⃣ Distance Calc    │             │
        │                     │             │
        │ Haversine Formula   │             │
        │                     │             │
        │ For each airport:   │             │
        │ • Get coordinates   │             │
        │ • Calculate miles   │             │
        │ • Sort by distance  │             │
        └─────────────────────┘             │
                    │                       │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │   📋 Unified Response   │
                    │                         │
                    │ • Airport names         │
                    │ • Real IATA codes       │
                    │ • Accurate distances    │
                    │ • Location details      │
                    │ • Data source info      │
                    └─────────────────────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │   🤖 AI Formatting      │
                    │                         │
                    │ • Natural language      │
                    │ • Context & tips        │
                    │ • Error handling        │
                    │ • Streaming response    │
                    └─────────────────────────┘
```

## �🏗️ Project Structure

```
airport-agent/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   │   └── page.tsx       # About page component
│   ├── api/               # API routes
│   │   └── chat/          # OpenAI chat endpoint
│   │       └── route.ts   # Chat API with tool integration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page with search interface
├── components/            # React components
│   ├── ui/               # shadcn/ui components (buttons, cards, etc.)
│   └── navigation.tsx    # Navigation component with routing
├── lib/                  # Utility functions
│   └── utils.ts          # Tailwind CSS utilities
├── public/               # Static assets
├── .env.local           # Environment variables (not tracked)
├── .env.local.example   # Environment template
└── README.md            # This file
```

## 🔧 Enhanced Component Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           RootLayout                                    │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                      Navigation                                 │    │
│  │  • Airport Search Agent Branding                                │    │
│  │  • Search/About Links with Active States                        │    │
│  │  • Responsive Design & Mobile Support                           │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                        Page Content                             │    │
│  │                                                                 │    │
│  │  Home Page (/)                    About Page (/about)           │    │
│  │  ┌─────────────────────────┐      ┌─────────────────────────┐   │    │
│  │  │    Search Interface     │      │    Enhanced About       │   │    │
│  │  │  ┌─────────────────┐    │      │  ┌─────────────────┐    │   │    │
│  │  │  │ Search Form     │    │      │  │ API Integration │    │   │    │
│  │  │  │ • Input Field   │    │      │  │ • Real Data     │    │   │    │
│  │  │  │ • Submit Button │    │      │  │ • Data Sources  │    │   │    │
│  │  │  │ • Loading State │    │      │  │ • Fallback Info │    │   │    │
│  │  │  └─────────────────┘    │      │  └─────────────────┘    │   │    │
│  │  │                         │      │                         │   │    │
│  │  │  ┌─────────────────┐    │      │  ┌───────────────-──┐   │   │    │
│  │  │  │ Chat Interface  │    │      │  │ Global Coverage  │   │   │    │
│  │  │  │ • Message List  │    │      │  │ • Featured Cities│   │   │    │
│  │  │  │ • User Messages │    │      │  │ • Example Queries│   │   │    │
│  │  │  │ • AI Responses  │    │      │  │ • API Setup Link │   │   │    │
│  │  │  │ • Live Results  │    │      │  └────────────────-─┘   │   │    │
│  │  │  │ • Error Handling│    │      │                         │   │    │
│  │  │  └─────────────────┘    │      │  ┌─────────────────┐    │   │    │
│  │  └─────────────────────────┘      │  │ Technology Stack│    │   │    │
│  │                                   │  │ • Next.js 15    │    │   │    │
│  │                                   │  │ • GPT-4o-mini   │    │   │    │
│  │                                   │  │ • TypeScript    │    │   │    │
│  │                                   │  │ • Real APIs     │    │   │    │
│  │                                   │  └─────────────────┘    │   │    │
│  │                                   └─────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                    Backend API Layer                            │    │
│  │                                                                 │    │
│  │  /api/chat Route                                                │    │
│  │  ┌─────────────────────────────────────────────────────────┐    │    │
│  │  │                 searchAirports Tool                     │    │    │
│  │  │                                                         │    │    │
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │    │    │
│  │  │  │ Real API    │  │ Mock Data   │  │ Generic     │      │    │    │
│  │  │  │ Integration │  │ Fallback    │  │ Response    │      │    │    │
│  │  │  │             │  │             │  │             │      │    │    │
│  │  │  │ • Aviation  │  │ • 6 Cities  │  │ • XXX/YYY   │      │    │    │
│  │  │  │   Edge API  │  │ • Enhanced  │  │ • Estimated │      │    │    │
│  │  │  │ • Geocoding │  │   Data      │  │   Distance  │      │    │    │
│  │  │  │ • Distance  │  │ • Known     │  │ • User      │      │    │    │
│  │  │  │   Calc      │  │   Airports  │  │   Friendly  │      │    │    │
│  │  │  └─────────────┘  └─────────────┘  └─────────────┘      │    │    │
│  │  └─────────────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set environment variables** in Vercel dashboard:
   - `OPENAI_API_KEY`

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Deploy to Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built as part of the HAI Bootcamp Week 1 assignment
- Inspired by modern AI-powered travel tools
- Uses OpenAI's powerful language models for natural language processing
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [About page](http://localhost:3000/about) for more information

---

Made with ❤️ for travelers worldwide
