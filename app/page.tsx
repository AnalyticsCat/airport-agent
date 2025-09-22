"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function AirportSearchAgent() {
  const [input, setInput] = useState("")

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage({ text: input })
      setInput("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Airport</h1>
          <p className="text-gray-600 text-lg">Search for the closest airports to any city worldwide</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Search for Airports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a city name (e.g., 'Find airports near New York')"
                disabled={status === "in_progress"}
                className="flex-1"
              />
              <Button type="submit" disabled={status === "in_progress" || !input.trim()}>
                {status === "in_progress" ? "Searching..." : "Search"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`${message.role === "user" ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200"}`}
            >
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      message.role === "user" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {message.role === "user" ? <MapPin className="h-4 w-4" /> : <Plane className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1 capitalize">
                      {message.role === "user" ? "You" : "Airport Agent"}
                    </div>
                    {message.parts.map((part, index) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <div key={index} className="prose prose-sm max-w-none">
                              {part.text}
                            </div>
                          )
                        case "tool-searchAirports":
                          switch (part.state) {
                            case "input-available":
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 text-blue-600 bg-blue-50 p-3 rounded-lg"
                                >
                                  <Clock className="h-4 w-4 animate-spin" />
                                  <span>Searching for airports near {part.input.city}...</span>
                                </div>
                              )
                            case "output-available":
                              return (
                                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-green-800 mb-2">
                                    Airports found near {part.input.city}:
                                  </h4>
                                  <div className="space-y-2">
                                    {part.output.airports.map((airport: any, idx: number) => (
                                      <div key={idx} className="bg-white p-3 rounded border">
                                        <div className="font-medium">{airport.name}</div>
                                        <div className="text-sm text-gray-600">
                                          Code: {airport.code} | Distance: {airport.distance}
                                        </div>
                                        <div className="text-sm text-gray-500">{airport.location}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )
                            case "output-error":
                              return (
                                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                                  <span className="text-red-600">Error: {part.errorText}</span>
                                </div>
                              )
                          }
                          break
                      }
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {messages.length === 0 && (
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <div className="text-center text-gray-500">
                <Plane className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg mb-2">Welcome to Airport Search Agent!</p>
                <p>Ask me to find airports near any city. For example:</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="bg-white p-2 rounded border">"Find airports near Los Angeles"</div>
                  <div className="bg-white p-2 rounded border">"What airports are closest to Tokyo?"</div>
                  <div className="bg-white p-2 rounded border">"Show me airports in London"</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
