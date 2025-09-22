import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MapPin, Zap, Globe, Database, Shield, Clock, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">About Airport Search Agent</h1>
          <p className="text-gray-600 text-lg">Your AI-powered companion for finding airports worldwide</p>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* What is this app */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                What is Airport Search Agent?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Airport Search Agent is an intelligent web application that helps travelers find the closest airports to any city worldwide.
                Using advanced AI technology powered by OpenAI's GPT-4o-mini, our agent provides conversational search capabilities with
                real-time airport data integration.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🚀 Now with Real Airport Data!</h4>
                <p className="text-blue-700 text-sm">
                  Our application now supports live airport data through Aviation Edge API, providing accurate distances,
                  real airport codes, and global coverage for any city worldwide.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Smart Airport Search</h4>
                      <p className="text-sm text-gray-600">Find airports near any city with natural language queries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AI-Powered Responses</h4>
                      <p className="text-sm text-gray-600">Get intelligent, contextual answers about airports and travel</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Database className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Real-Time Data</h4>
                      <p className="text-sm text-gray-600">Live airport data with accurate distances and coordinates</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Coverage</h4>
                      <p className="text-sm text-gray-600">Search airports worldwide, not just major cities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Reliable Fallback</h4>
                      <p className="text-sm text-gray-600">Intelligent fallback system ensures service availability</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Fast & Accurate</h4>
                      <p className="text-sm text-gray-600">Precise distance calculations using Haversine formula</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How it works */}
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Ask Your Question</h4>
                    <p className="text-gray-600">Type your query in natural language, like "Find airports near Tokyo"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">AI Processing</h4>
                    <p className="text-gray-600">Our AI agent understands your request and searches live airport databases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Get Results</h4>
                    <p className="text-gray-600">Receive real-time airport data with accurate distances and comprehensive details</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                Data Sources & APIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🌐 Live Airport Data</h4>
                    <p className="text-sm text-green-700 mb-2">Aviation Edge API</p>
                    <ul className="text-xs text-green-600 space-y-1">
                      <li>• Global airport database</li>
                      <li>• Real-time coordinates</li>
                      <li>• Accurate IATA codes</li>
                      <li>• Distance calculations</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">🗺️ Geocoding Service</h4>
                    <p className="text-sm text-blue-700 mb-2">OpenStreetMap Nominatim</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• City coordinate lookup</li>
                      <li>• Free and reliable</li>
                      <li>• Global coverage</li>
                      <li>• No API key required</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔄 Intelligent Fallback System</h4>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Our system ensures reliability through multiple data layers:</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">1. Live API</span>
                      <span>→</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">2. Mock Data</span>
                      <span>→</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">3. Generic Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology */}
          <Card>
            <CardHeader>
              <CardTitle>Built With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Next.js 15</h4>
                  <p className="text-sm text-gray-600">Modern React framework with App Router</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">OpenAI GPT-4o-mini</h4>
                  <p className="text-sm text-gray-600">Advanced AI with function calling capabilities</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">TypeScript</h4>
                  <p className="text-sm text-gray-600">Type-safe development with modern tooling</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supported Cities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Supported Cities & Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">🏙️ Featured Cities (Enhanced Data)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded text-center">New York</div>
                    <div className="bg-blue-50 p-2 rounded text-center">Los Angeles</div>
                    <div className="bg-blue-50 p-2 rounded text-center">London</div>
                    <div className="bg-blue-50 p-2 rounded text-center">Tokyo</div>
                    <div className="bg-blue-50 p-2 rounded text-center">Paris</div>
                    <div className="bg-blue-50 p-2 rounded text-center">Chicago</div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">🌍 Global Coverage</h4>
                  <p className="text-green-700 text-sm">
                    With our Aviation Edge API integration, you can now search for airports near
                    <strong> any city worldwide</strong>! Try searching for Berlin, Sydney, Mumbai,
                    São Paulo, or any other city you're planning to visit.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Example searches to try:</strong>
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-gray-100 px-2 py-1 rounded">"Find airports near Berlin"</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">"Airports close to Sydney"</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">"Show me Mumbai airports"</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Explore Global Airports?</h3>
                <p className="text-gray-600 mb-4">
                  Search for airports near any city worldwide with our AI-powered agent
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plane className="h-4 w-4 mr-2" />
                      Start Searching
                    </Button>
                  </Link>
                  <Link href="/docs/AIRPORT_API_SETUP.md" target="_blank">
                    <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
