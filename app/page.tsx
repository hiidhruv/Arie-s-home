"use client"

import Link from "next/link"
import Image from "next/image"
import { Bot, Globe, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-geist p-4 sm:p-6 md:p-12">
      <main className="max-w-4xl mx-auto space-y-12 sm:space-y-24">
        {/* Hero */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-32 h-32 relative flex-shrink-0">
            <Image src="https://i.imgur.com/f0AlFep.jpg" alt="Arie" fill className="object-cover" priority />
          </div>
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold">Hey, I'm Arie</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              I help make Discord servers more lively and engaging
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <Link
                href="https://discord.com/oauth2/authorize?client_id=1105171623490896012"
                className="inline-flex items-center px-4 py-1.5 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xs"
              >
                <Bot className="w-3 h-3 mr-2" />
                Add to Discord
              </Link>
              <Link
                href="https://shapes.inc/arie/readme"
                className="inline-flex items-center px-4 py-1.5 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xs"
              >
                <Globe className="w-3 h-3 mr-2" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="border border-gray-300 dark:border-gray-800 p-4 sm:p-6 text-gray-600 dark:text-gray-400 text-xs space-y-4">
          <p>
            Hey, I'm Arie! I help make Discord servers more lively and engaging. If you're tired of a boring server, I'm
            here to spice things up and make your server the place to be!
          </p>
          <p>
            I'm all about creating a more engaging community. Need a conversation starter? I'm on it! Do you want help
            creating a fun community event? I'm full of ideas! I can even help with moderation and organization.
          </p>
          <p>
            I'm not just a bot; I learn and adapt. The more we interact, the better I understand your server's vibe. I'm
            always thinking of new ways to make things exciting. What are you waiting for? Add me to your Discord
            server!
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold">FEATURES</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Natural Chat",
                description: "I use advanced language processing to chat naturally with your community members",
                command: "/activate",
              },
              {
                title: "Image Generation",
                description: "Let's create beautiful artwork together with a simple command",
                command: "/imagine",
              },
              {
                title: "Memory System",
                description: "I remember our conversations and learn from interactions",
                command: "/sleep",
              },
              {
                title: "Server Management",
                description: "I help keep your server active and engaging",
                command: "/trigger-chat-revive",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border border-gray-300 dark:border-gray-800 p-4 hover:border-gray-400 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="font-bold mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{feature.description}</p>
                <code className="text-xs text-gray-500">{feature.command}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Commands */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold">COMMANDS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* AI Features */}
            <div className="border border-gray-300 dark:border-gray-800 p-4">
              <h3 className="font-bold mb-4 text-xs text-gray-500 dark:text-gray-400">AI FEATURES</h3>
              <div className="space-y-3">
                {[
                  ["/activate", "Make me respond to every message"],
                  ["/deactivate", "Disable auto-responses"],
                  ["/imagine", "Generate images"],
                  ["/sleep", "Generate new memories"],
                  ["/wack", "Clear recent memory buffer"],
                  ["/trigger-chat-revive", "Send a chat revive message"],
                  ["/reset", "Delete all memories"],
                ].map(([cmd, desc], i) => (
                  <div key={i} className="flex gap-2 items-baseline">
                    <code className="text-xs text-black dark:text-white">{cmd}</code>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">→</span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utility Commands */}
            <div className="border border-gray-300 dark:border-gray-800 p-4">
              <h3 className="font-bold mb-4 text-xs text-gray-500 dark:text-gray-400">UTILITY</h3>
              <div className="space-y-3">
                {[
                  ["/config", "Setup your shape"],
                  ["/dashboard", "Access dashboard"],
                  ["/debug", "Debug your shape"],
                  ["/link", "Get invite link"],
                  ["/recommend", "Share with others"],
                  ["/search", "Find new shapes"],
                  ["/userinfo", "View user details"],
                  ["/avatar", "View user avatars"],
                  ["/serverinfo", "Server information"],
                  ["/say", "Send messages as bot"],
                ].map(([cmd, desc], i) => (
                  <div key={i} className="flex gap-2 items-baseline">
                    <code className="text-xs text-black dark:text-white">{cmd}</code>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">→</span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moderation Commands */}
            <div className="border border-gray-300 dark:border-gray-800 p-4">
              <h3 className="font-bold mb-4 text-xs text-gray-500 dark:text-gray-400">MODERATION</h3>
              <div className="space-y-3">
                {[
                  ["/kick", "Kick users"],
                  ["/ban", "Ban users"],
                  ["/mute", "Mute users"],
                  ["/unmute", "Unmute users"],
                  ["/warn", "Warn users"],
                  ["/purge", "Delete messages"],
                  ["/addrole", "Add roles"],
                  ["/removerole", "Remove roles"],
                ].map(([cmd, desc], i) => (
                  <div key={i} className="flex gap-2 items-baseline">
                    <code className="text-xs text-black dark:text-white">{cmd}</code>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">→</span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Management */}
            <div className="border border-gray-300 dark:border-gray-800 p-4">
              <h3 className="font-bold mb-4 text-xs text-gray-500 dark:text-gray-400">SERVER MANAGEMENT</h3>
              <div className="space-y-3">
                {[
                  ["/slowmode", "Set channel slowmode"],
                  ["/lock", "Lock channels"],
                  ["/unlock", "Unlock channels"],
                  ["/setnsfw", "Mark as NSFW"],
                  ["/unsetnsfw", "Remove NSFW flag"],
                ].map(([cmd, desc], i) => (
                  <div key={i} className="flex gap-2 items-baseline">
                    <code className="text-xs text-black dark:text-white">{cmd}</code>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">→</span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Try Me Button */}
        <div className="text-center">
          <Link
            href="https://discord.gg/8qV2h7Sct2"
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xs"
          >
            <Bot className="w-3 h-3 mr-2" />
            Try me in my support server
          </Link>
        </div>

        {/* Footer */}
        <footer className="pt-8 pb-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs">All rights reserved • {new Date().getFullYear()}</p>
        </footer>
      </main>
      <ThemeToggle />
    </div>
  )
}

