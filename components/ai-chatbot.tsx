"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your BraveEd AI assistant. How can I help you today? I can provide information about scholarships, training programs, support resources, or answer any questions you might have.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare the conversation history for the AI
      const conversationHistory = messages
        .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
        .join("\n")

      const prompt = `
        You are an AI assistant for BraveEd, a platform that helps survivors of domestic violence access education, career training, and support resources.
        
        Previous conversation:
        ${conversationHistory}
        
        User: ${input}
        
        Provide a helpful, empathetic, and informative response. If the user asks about resources, scholarships, or training programs, provide specific information from BraveEd's offerings. If the user appears to be in crisis, gently suggest emergency resources and the crisis hotline (1-800-799-7233).
        
        Assistant:
      `

      // Generate AI response
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
        maxTokens: 500,
      })

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: text }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our support team for immediate assistance.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="h-[300px] overflow-y-auto rounded-md border p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex max-w-[80%] items-start gap-2 rounded-lg p-3 ${
                message.role === "user" ? "bg-primary/10 text-foreground" : "bg-muted text-foreground"
              }`}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/logo.png" alt="AI" />
                  <AvatarFallback className="bg-primary/10 text-primary">AI</AvatarFallback>
                </Avatar>
              )}
              <div className="text-sm">{message.content}</div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-primary/10 text-primary">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%] items-start gap-2 rounded-lg bg-muted p-3 text-foreground">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/images/logo.png" alt="AI" />
                <AvatarFallback className="bg-primary/10 text-primary">AI</AvatarFallback>
              </Avatar>
              <div className="flex space-x-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40"></div>
                <div
                  className="h-2 w-2 animate-bounce rounded-full bg-primary/40"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 animate-bounce rounded-full bg-primary/40"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSendMessage()
            }
          }}
          disabled={isLoading}
          className="border-primary/20 focus-visible:ring-primary/30"
        />
        <Button size="icon" onClick={handleSendMessage} disabled={isLoading} className="bg-primary hover:bg-primary/90">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
