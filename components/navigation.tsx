"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plane, Info, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            <Plane className="h-6 w-6 text-blue-600" />
            Airport Search Agent
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button 
                variant={pathname === "/" ? "default" : "ghost"} 
                size="sm"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/" && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </Link>
            
            <Link href="/about">
              <Button 
                variant={pathname === "/about" ? "default" : "ghost"} 
                size="sm"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/about" && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                <Info className="h-4 w-4" />
                About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
