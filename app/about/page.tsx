import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MapPin, Zap, Globe, ArrowLeft, Github, ExternalLink } from "lucide-react"

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
              <p className="text-gray-700 leading-relaxed">
                Airport Search Agent is an intelligent web application that helps travelers find the closest airports to any city worldwide. 
                Using advanced AI technology powered by OpenAI's GPT-4, our agent provides conversational search capabilities, making it 
                easy to discover airport options for your travel planning needs.
              </p>
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
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Coverage</h4>
                      <p className="text-sm text-gray-600">Search for airports in major cities around the world</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Plane className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Detailed Information</h4>
                      <p className="text-sm text-gray-600">Get airport codes, distances, and location details</p>
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
                    <p className="text-gray-600">Our AI agent understands your request and searches our airport database</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Get Results</h4>
                    <p className="text-gray-600">Receive detailed airport information including codes, distances, and locations</p>
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
                  <p className="text-sm text-gray-600">Modern React framework for web applications</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">OpenAI GPT-4</h4>
                  <p className="text-sm text-gray-600">Advanced AI for natural language processing</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Tailwind CSS</h4>
                  <p className="text-sm text-gray-600">Utility-first CSS framework for styling</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Find Your Next Airport?</h3>
                <p className="text-gray-600 mb-4">Start searching for airports near any city worldwide</p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plane className="h-4 w-4 mr-2" />
                    Start Searching
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
