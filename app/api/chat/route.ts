import { openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, tool, type UIMessage } from "ai"
import { z } from "zod"

export const maxDuration = 30

// Mock airport data - in a real app, you'd use a real airport API
const mockAirportData = {
  "new york": [
    { name: "John F. Kennedy International Airport", code: "JFK", distance: "15 miles", location: "Queens, NY" },
    { name: "LaGuardia Airport", code: "LGA", distance: "8 miles", location: "Queens, NY" },
    { name: "Newark Liberty International Airport", code: "EWR", distance: "12 miles", location: "Newark, NJ" },
  ],
  "los angeles": [
    { name: "Los Angeles International Airport", code: "LAX", distance: "18 miles", location: "Los Angeles, CA" },
    { name: "Hollywood Burbank Airport", code: "BUR", distance: "12 miles", location: "Burbank, CA" },
    { name: "Long Beach Airport", code: "LGB", distance: "22 miles", location: "Long Beach, CA" },
  ],
  london: [
    { name: "Heathrow Airport", code: "LHR", distance: "15 miles", location: "London, UK" },
    { name: "Gatwick Airport", code: "LGW", distance: "28 miles", location: "West Sussex, UK" },
    { name: "Stansted Airport", code: "STN", distance: "35 miles", location: "Essex, UK" },
  ],
  tokyo: [
    { name: "Haneda Airport", code: "HND", distance: "14 miles", location: "Tokyo, Japan" },
    { name: "Narita International Airport", code: "NRT", distance: "43 miles", location: "Chiba, Japan" },
  ],
  paris: [
    { name: "Charles de Gaulle Airport", code: "CDG", distance: "23 miles", location: "Roissy-en-France" },
    { name: "Orly Airport", code: "ORY", distance: "13 miles", location: "Orly, France" },
  ],
  chicago: [
    { name: "O'Hare International Airport", code: "ORD", distance: "17 miles", location: "Chicago, IL" },
    { name: "Midway International Airport", code: "MDW", distance: "10 miles", location: "Chicago, IL" },
  ],
}

const searchAirportsTool = tool({
  description: "Search for airports closest to a given city",
  inputSchema: z.object({
    city: z.string().describe("The city name to search airports near"),
  }),
  async execute({ city }) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const cityKey = city.toLowerCase()
    const airports = mockAirportData[cityKey as keyof typeof mockAirportData]

    if (!airports) {
      // Return some generic airports for unknown cities
      return {
        airports: [
          {
            name: `${city} International Airport`,
            code: "XXX",
            distance: "10 miles",
            location: `${city}`,
          },
          {
            name: `${city} Regional Airport`,
            code: "YYY",
            distance: "25 miles",
            location: `Near ${city}`,
          },
        ],
      }
    }

    return { airports }
  },
})

const tools = {
  searchAirports: searchAirportsTool,
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: convertToModelMessages(messages),
    tools,
    system: `You are a helpful airport search agent. Your job is to help users find airports closest to cities they specify.

When a user asks about airports near a city, use the searchAirports tool to find relevant airports. Always be friendly and provide helpful context about the airports you find.

If the user asks a general question about airports or travel, you can answer without using tools, but if they want to find specific airports near a city, always use the searchAirports tool.`,
  })

  return result.toUIMessageStreamResponse()
}
