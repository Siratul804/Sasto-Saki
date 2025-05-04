"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Brain, Mic, MicOff, Send, Info, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MentalHealthChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      content:
        "হ্যালো! আমি আপনার মানসিক স্বাস্থ্য সহকারী। কেমন অনুভব করছেন আজ?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      role: "user",
      content: "আমি সম্প্রতি একটু উদ্বিগ্ন বোধ করছি",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      role: "bot",
      content: "দুঃখিত শুনে। আপনি কবে থেকে এমন অনুভব করছেন, তা বললে ভালো হবে?",
      timestamp: "10:31 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMsg = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsSending(true);
    setTimeout(() => {
      const replies = [
        "বোঝাতে পারছি। দয়া করে আরও বলুন কখন শুরু হয়?",
        "আপনি আগে কোন প্রশান্তি পদ্ধতি চেষ্টা করেছেন?",
        "এটি সাহসিকতার বিষয়—আলাপ করার জন্য ধন্যবাদ।",
        "আপনি কি জানেন কী টেনে এনে এমন অনুভব হয়?",
        "কিছু কৌশল শেয়ার করতে পারি—আপনার ইচ্ছা আছে?",
      ];
      const botMsg = {
        id: messages.length + 2,
        role: "bot",
        content: replies[Math.floor(Math.random() * replies.length)],
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsSending(false);
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputValue("আমি কাজের চাপ নিয়ে চাপ অনুভব করছি");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">মানসিক সমর্থন</h1>
          <p className="text-white opacity-90">AI সহকারী দিয়ে চ্যাট করুন</p>
        </div>
      </div>

      {/* Layout */}
      <div className="container mx-auto px-4 -mt-6 grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-[#9059a1]" /> মানসিক সহকারী
              </CardTitle>
              <CardDescription>আপনার ব্যক্তিগত সহচর</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="AI"
                    />
                    <AvatarFallback className="bg-[#9059a1] text-white">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">মিয়া</p>
                    <p className="text-xs text-gray-500">মেন্টাল হেলথ সহকারী</p>
                  </div>
                  <Badge className="ml-auto bg-green-100 text-green-800">
                    অনলাইন
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">আমি করতে পারি:</p>
                  <ul className="space-y-1">
                    {[
                      "বিনা বিচার শোনা",
                      "আবেগগত সহায়তা প্রদান",
                      "কপিং কৌশল প্রস্তাব",
                      "সামগ্রী সংযোগ",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="bg-[#9059a1] rounded-full w-1.5 h-1.5 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                  <div className="flex items-start">
                    <Info className="h-4 w-4 mr-2 mt-0.5" />
                    <p>জরুরি পরিস্থিতিতে হেল্পলাইনে 16000 নম্বরে কল করুন।</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">প্রস্তাবিত বিষয়</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  "উদ্বেগ নিয়ন্ত্রণ",
                  "চাপ মোকাবিলা",
                  "ঘুম উন্নত",
                  "মনঃসহযোগিতা",
                ].map((topic, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full text-left py-2"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat */}
        <div className="lg:col-span-3 flex flex-col h-full">
          <Card className="shadow-md flex flex-col flex-grow">
            <CardHeader className="pb-2 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="AI"
                    />
                    <AvatarFallback className="bg-[#9059a1] text-white">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">মিয়া</CardTitle>
                    <CardDescription className="text-xs">
                      মেন্টাল হেলথ সহকারী
                    </CardDescription>
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
                        গোপন আলোচনা, আপনি স্বাচ্ছন্দ্যে কথা বলতে পারেন।
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 h-[400px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === "user"
                        ? "bg-[#9059a1] text-white"
                        : "bg-gray-100 text-gray-800 border-gray-200 border"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.role === "user" ? "text-[#f8bbd0]" : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800 border-gray-200 border">
                    <div className="flex space-x-1">
                      {[0, 200, 400].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className="border-t p-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className={`${
                    isRecording ? "bg-red-100 text-red-600 border-red-300" : ""
                  }`}
                  onClick={toggleRecording}
                >
                  {isRecording ? (
                    <MicOff className="h-4 w-4" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </Button>
                <Input
                  placeholder="বার্তা টাইপ করুন..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-grow h-10"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="bg-[#9059a1] hover:bg-[#683f75]"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {isRecording && (
                <Badge className="mt-2 w-full text-center bg-red-100 text-red-600 animate-pulse">
                  শুনছি… বলুন
                </Badge>
              )}
            </CardFooter>
          </Card>

          {/* Resources */}
          <div className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>মানসিক স্বাস্থ্য সম্পদ</CardTitle>
                <CardDescription>অতিরিক্ত সহায়তা ও তথ্য</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-2 text-[#9059a1]">
                      জরুরি নম্বর
                    </h3>
                    <ul className="text-sm space-y-2">
                      <li>
                        <strong>জাতীয় হেল্পলাইন:</strong> 16000
                      </li>
                      <li>
                        <strong>ক্রাইসিস টেক্সট:</strong> HOME পাঠান 741741
                      </li>
                      <li>
                        <strong>ওমেন্স ক্রাইসিস:</strong> 10921
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-2 text-[#9059a1]">
                      আত্ম-সহায়তা
                    </h3>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          গাইডেড মেডিটেশন
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          স্ট্রেস ম্যানেজমেন্ট
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          ঘুম উন্নতি গাইড
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h3 className="font-medium mb-2 text-[#9059a1]">
                      পেশাগত সহায়তা
                    </h3>
                    <p className="text-sm mb-2">
                      লাইসেন্সপ্রাপ্ত থেরাপিস্টের সঙ্গে সংযুক্ত হোন।
                    </p>
                    <Link href="/patient/consultation">
                      <Button className="w-full bg-[#9059a1] hover:bg-[#683f75]">
                        থেরাপিস্ট খুঁজুন
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
