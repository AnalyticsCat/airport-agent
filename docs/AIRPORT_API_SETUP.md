# 🛩️ Real Airport API Integration Guide

This guide explains how to integrate real airport APIs into your Airport Search Agent application.

## 🎯 Current Implementation

The application now supports both **mock data** (for development) and **real airport APIs** (for production). It automatically falls back to mock data if no API key is provided.

## 🔧 Supported APIs

### 1. Aviation Edge API (Recommended)

**Why recommended:**
- Comprehensive airport database
- Good free tier (1,000 requests/month)
- Reliable service
- Easy integration

**Setup Steps:**

1. **Sign up**: Visit [https://aviation-edge.com/](https://aviation-edge.com/)
2. **Get API Key**: Register and get your free API key
3. **Add to Environment**: Add to your `.env.local` file:
   ```env
   AVIATION_EDGE_API_KEY=your_api_key_here
   ```

**Features:**
- Global airport database
- Airport coordinates for distance calculation
- IATA codes and airport names
- Country and city information

### 2. AviationStack API (Alternative)

**Setup Steps:**

1. **Sign up**: Visit [https://aviationstack.com/](https://aviationstack.com/)
2. **Get API Key**: Free tier available
3. **Modify Code**: Update the API integration in `app/api/chat/route.ts`

**Example Integration:**
```typescript
// AviationStack API example
const response = await fetch(
  `http://api.aviationstack.com/v1/airports?access_key=${API_KEY}&search=${city}`
)
```

### 3. OpenSky Network (Free)

**Setup Steps:**

1. **No registration required** for basic use
2. **API Endpoint**: `https://opensky-network.org/api/`
3. **Rate Limits**: Reasonable for personal projects

## 🔄 How the Fallback System Works

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   User Query    │───▶│  Check API Key   │───▶│   Real API      │
│                 │    │                  │    │                 │
│ "Find airports  │    │ AVIATION_EDGE_   │    │ • Live Data     │
│  near Berlin"   │    │ API_KEY exists?  │    │ • Coordinates   │
│                 │    │                  │    │ • Distance Calc │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                         │
                                │ No API Key              │ API Success
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │                  │    │                 │
                       │   Mock Data      │    │   Return Real   │
                       │                  │    │   Airport Data  │
                       │ • Predefined     │    │                 │
                       │ • Limited Cities │    │ • Accurate Info │
                       │ • Fallback       │    │ • Global Cities │
                       │                  │    │                 │
                       └──────────────────┘    └─────────────────┘
                                │                         │
                                │ City Not Found          │ API Error
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │                  │    │                 │
                       │  Generic Result  │    │  Fallback to    │
                       │                  │    │  Mock/Generic   │
                       │ • XXX/YYY Codes  │    │                 │
                       │ • Estimated Dist │    │ • Error Logged  │
                       │ • User-friendly  │    │ • Graceful Fail │
                       │                  │    │                 │
                       └──────────────────┘    └─────────────────┘
```

## 🚀 Quick Setup Guide

### Step 1: Get API Key
```bash
# Visit https://aviation-edge.com/
# Sign up for free account
# Copy your API key
```

### Step 2: Update Environment
```bash
# Add to .env.local
echo "AVIATION_EDGE_API_KEY=your_actual_api_key" >> .env.local
```

### Step 3: Test the Integration
```bash
# Restart your development server
pnpm dev

# Test with a city not in mock data
# Try: "Find airports near Berlin"
```

## 🔍 Testing the API Integration

### Test Cases:

1. **Known Cities** (in mock data):
   - "Find airports near New York" → Should work with both mock and real API

2. **Unknown Cities** (not in mock data):
   - "Find airports near Berlin" → Will use real API if key is provided
   - "Find airports near Sydney" → Will use real API if key is provided

3. **Invalid Cities**:
   - "Find airports near Atlantis" → Should gracefully fallback to generic response

### Debugging:

Check the server console for logs:
```
Searching for airports near Berlin using real API...
```
or
```
Using mock data for Berlin...
```

## 🛠️ Customizing the API Integration

### Adding More APIs

To add support for additional APIs, modify the `searchAirportsNearCity` function:

```typescript
async function searchAirportsNearCity(city: string): Promise<Airport[]> {
  // Try Aviation Edge first
  if (AVIATION_EDGE_API_KEY) {
    try {
      return await searchWithAviationEdge(city)
    } catch (error) {
      console.log('Aviation Edge failed, trying backup...')
    }
  }
  
  // Try backup API
  if (BACKUP_API_KEY) {
    return await searchWithBackupAPI(city)
  }
  
  throw new Error('No API available')
}
```

### Improving Distance Calculation

The current implementation uses the Haversine formula for accurate distance calculation:

```typescript
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Earth's radius in miles
  // ... Haversine formula implementation
}
```

### Caching API Responses

For production, consider adding caching:

```typescript
// Simple in-memory cache
const airportCache = new Map<string, Airport[]>()

async function searchAirportsNearCity(city: string): Promise<Airport[]> {
  const cacheKey = city.toLowerCase()
  
  if (airportCache.has(cacheKey)) {
    return airportCache.get(cacheKey)!
  }
  
  const airports = await fetchFromAPI(city)
  airportCache.set(cacheKey, airports)
  
  return airports
}
```

## 📊 API Comparison

| API | Free Tier | Requests/Month | Features | Reliability |
|-----|-----------|----------------|----------|-------------|
| Aviation Edge | ✅ | 1,000 | Comprehensive | High |
| AviationStack | ✅ | 1,000 | Good coverage | High |
| FlightAPI | ✅ | 100 | Basic | Medium |
| OpenSky | ✅ | Unlimited* | Real-time focus | Medium |

*Rate limited but generous for personal use

## 🔒 Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for all sensitive data
3. **Implement rate limiting** in production
4. **Add error handling** for API failures
5. **Monitor API usage** to avoid exceeding limits

## 🚀 Production Deployment

When deploying to production platforms:

### Vercel
```bash
# Set environment variables in Vercel dashboard
vercel env add AVIATION_EDGE_API_KEY
```

### Netlify
```bash
# Set in Netlify dashboard under Site Settings > Environment Variables
```

### Railway/Render
```bash
# Add environment variables in platform dashboard
```

## 📈 Monitoring and Analytics

Consider adding:
- API response time monitoring
- Error rate tracking
- Usage analytics
- Fallback frequency metrics

This will help you optimize the API integration and ensure reliable service for your users.
