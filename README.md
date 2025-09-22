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

## 🔄 Data Flow Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   User Input    │───▶│   Next.js App    │───▶│   API Route     │
│                 │    │                  │    │                 │
│ "Find airports  │    │  • Input Form    │    │ /api/chat       │
│  near Tokyo"    │    │  • UI Components │    │                 │
│                 │    │  • State Mgmt    │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│  Search Results │◀───│   AI Processing  │◀───│   OpenAI API    │
│                 │    │                  │    │                 │
│ • Airport List  │    │ • GPT-4o-mini    │    │ • Model: GPT-4o │
│ • Codes & Info  │    │ • Tool Calling   │    │ • Streaming     │
│ • Distances     │    │ • Response Gen   │    │ • Function Call │
│                 │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                         │
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │                  │    │                 │
                       │  Airport Tool    │    │  Mock Database  │
                       │                  │    │                 │
                       │ • City Parsing   │    │ • Airport Data  │
                       │ • Data Lookup    │    │ • Coordinates   │
                       │ • Result Format  │    │ • Distances     │
                       │                  │    │                 │
                       └──────────────────┘    └─────────────────┘
```

### Flow Explanation:
1. **User Input**: Natural language query entered in the search form
2. **Next.js App**: Handles UI state and sends request to API route
3. **API Route**: Processes request and communicates with OpenAI
4. **OpenAI API**: GPT-4o-mini analyzes query and determines if tool use is needed
5. **Airport Tool**: Custom function that searches airport database
6. **Mock Database**: Returns relevant airport information
7. **AI Processing**: Formats and contextualizes the results
8. **Search Results**: Streamed back to user interface in real-time

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

### Getting an OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the key to your `.env.local` file

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

## 🤖 AI Tool Integration

The application uses OpenAI's function calling feature to provide intelligent airport search:

```
┌─────────────────────────────────────────────────────────────┐
│                    AI Tool System                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  User Query: "Find airports near Tokyo"                     │
│                        │                                    │
│                        ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              GPT-4o-mini Analysis                   │    │
│  │  • Parse natural language                          │    │
│  │  • Identify intent (airport search)                │    │
│  │  • Extract city name: "Tokyo"                      │    │
│  │  • Decide to call searchAirports tool              │    │
│  └─────────────────────────────────────────────────────┘    │
│                        │                                    │
│                        ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            searchAirports Tool                      │    │
│  │                                                     │    │
│  │  Input Schema:                                      │    │
│  │  {                                                  │    │
│  │    city: string // "Tokyo"                          │    │
│  │  }                                                  │    │
│  │                                                     │    │
│  │  Processing:                                        │    │
│  │  • Normalize city name to lowercase                 │    │
│  │  • Lookup in airport database                      │    │
│  │  • Return airport objects with:                    │    │
│  │    - name, code, distance, location                │    │
│  │                                                     │    │
│  │  Output:                                            │    │
│  │  {                                                  │    │
│  │    airports: [                                      │    │
│  │      {                                              │    │
│  │        name: "Haneda Airport",                      │    │
│  │        code: "HND",                                 │    │
│  │        distance: "14 miles",                       │    │
│  │        location: "Tokyo, Japan"                     │    │
│  │      },                                             │    │
│  │      // ... more airports                          │    │
│  │    ]                                                │    │
│  │  }                                                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                        │                                    │
│                        ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Response Generation                    │    │
│  │  • Format results in natural language              │    │
│  │  • Add helpful context and recommendations         │    │
│  │  • Stream response back to user                    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Tool Features:
- **Intelligent Parsing**: Extracts city names from natural language
- **Fallback Handling**: Provides generic results for unknown cities
- **Structured Output**: Returns consistent airport data format
- **Real-time Processing**: Simulates API delay for realistic UX

## 🏗️ Project Structure

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

## 🔧 Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     RootLayout                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                Navigation                           │    │
│  │  • Logo & Branding                                  │    │
│  │  • Search/About Links                               │    │
│  │  • Active State Management                          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                Page Content                         │    │
│  │                                                     │    │
│  │  Home Page (/)           About Page (/about)        │    │
│  │  ┌─────────────────┐    ┌─────────────────────┐     │    │
│  │  │ Search Form     │    │ Feature Overview    │     │    │
│  │  │ • Input Field   │    │ • App Description   │     │    │
│  │  │ • Submit Button │    │ • How It Works      │     │    │
│  │  │ • Loading State │    │ • Technology Stack  │     │    │
│  │  └─────────────────┘    └─────────────────────┘     │    │
│  │                                                     │    │
│  │  ┌─────────────────┐                                │    │
│  │  │ Chat Interface  │                                │    │
│  │  │ • Message List  │                                │    │
│  │  │ • User Messages │                                │    │
│  │  │ • AI Responses  │                                │    │
│  │  │ • Tool Results  │                                │    │
│  │  └─────────────────┘                                │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
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
