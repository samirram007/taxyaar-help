"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">IT</span>
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">Taxyaar Help Center</span>
        </a>

        <nav className="flex items-center gap-4">
          <a href="/file-tax-return" className="text-sm text-foreground hover:text-primary transition-colors">
            File your Tax Return
          </a>
          <a href="/submit-request" className="text-sm text-foreground hover:text-primary transition-colors">
            Submit a request
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="/sign-in">Sign In</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
