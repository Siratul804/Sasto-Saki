"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Brain, Mic, MicOff, Send, Info, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MentalHealthChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      content: "Hello! I'm your mental health companion. How are you feeling today?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      role: "user",
      content: "I've been feeling a bit anxious lately",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      role: "bot",
      content:
        "I'm sorry to hear you're feeling anxious. That's actually quite common. Would you like to tell me more about what's been making you feel this way?",
      timestamp: "10:31 AM",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef(null)
  const [isSending, setIsSending] = useState(false)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsSending(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I understand how that might feel. Could you share more about when these feelings started?",
        "Thank you for sharing that with me. Have you tried any relaxation techniques that have helped in the past?",
        "That sounds challenging. Remember that it's okay to have these feelings, and it's brave of you to talk about them.",
        "I'm here to listen. Would it help to talk about what triggers these feelings for you?",
        "Many people experience similar feelings. Would you like me to suggest some coping strategies that might help?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage = {
        id: messages.length + 2,
        role: "bot",
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsSending(false)
    }, 1500)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    // If starting recording, simulate voice input after a delay
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setInputValue("I've been feeling overwhelmed with work lately")
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Mental Health Support</h1>
          <p className="text-white opacity-90">
            Chat with our AI assistant for emotional support and mental health resources
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-[#F48FB1]" />
                  Mental Health AI
                </CardTitle>
                <CardDescription>Your personal support companion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Assistant" />
                      <AvatarFallback className="bg-[#f8BBD0] text-white">AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Mia</p>
                      <p className="text-xs text-gray-500">Mental Health Assistant</p>
                    </div>
                    <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">Online</Badge>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p className="mb-2">I'm here to:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2"></span>
                        <span>Listen without judgment</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2"></span>
                        <span>Provide emotional support</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2"></span>
                        <span>Suggest coping strategies</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2"></span>
                        <span>Connect you with resources</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        In case of emergency or crisis, please contact emergency services or call the Mental Health
                        Helpline at 16000.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md mt-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Suggested Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                    How to manage anxiety
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                    Coping with stress
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                    Improving sleep quality
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                    Mindfulness techniques
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-md h-full flex flex-col">
              <CardHeader className="pb-2 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                      <AvatarFallback className="bg-[#f8BBD0] text-white">AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Mia</CardTitle>
                      <CardDescription className="text-xs">Mental Health Assistant</CardDescription>
                    </div>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <HelpCircle className="h-5 w-5 text-gray-500" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          This is a confidential conversation. You can speak freely about your feelings and concerns.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 h-[400px]">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-[#F48FB1] text-white"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.role === "user" ? "text-pink-100" : "text-gray-500"}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
                {isSending && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800 border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full ${isRecording ? "bg-red-100 text-red-600 border-red-300" : ""}`}
                    onClick={toggleRecording}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-grow"
                  />
                  <Button onClick={handleSendMessage} className="bg-[#F48FB1] hover:bg-[#f8BBD0]">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {isRecording && (
                  <div className="mt-2 text-center w-full">
                    <Badge className="bg-red-100 text-red-600 border-red-300 animate-pulse">
                      Listening... Speak now
                    </Badge>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Mental Health Resources</CardTitle>
              <CardDescription>Additional support and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-medium mb-2 text-[#F48FB1]">Emergency Contacts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>National Mental Health Helpline:</strong> 16000
                    </li>
                    <li>
                      <strong>Crisis Text Line:</strong> Text HOME to 741741
                    </li>
                    <li>
                      <strong>Women's Crisis Helpline:</strong> 10921
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-medium mb-2 text-[#F48FB1]">Self-Help Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Guided Meditation Exercises
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Stress Management Techniques
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Sleep Improvement Guide
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-medium mb-2 text-[#F48FB1]">Professional Help</h3>
                  <p className="text-sm mb-2">
                    Sometimes talking to a professional is the best option. Our platform connects you with licensed
                    therapists and counselors.
                  </p>
                  <Link href="/patient/consultation">
                    <Button className="w-full bg-[#F48FB1] hover:bg-[#f8BBD0]">Find a Therapist</Button>
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
