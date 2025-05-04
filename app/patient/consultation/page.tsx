"use client";

import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MessageCircle,
  Mic,
  MicOff,
  PhoneOff,
  Search,
  Video,
  VideoOff,
} from "lucide-react";

export default function ConsultationPage() {
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const toggleCall = () => setIsInCall(!isInCall);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            পরামর্শ ব্যবস্থা
          </h1>
          <p className="text-white opacity-90">
            ভিডিও বা চ্যাটের মাধ্যমে স্বাস্থ্যসেবা পেশাজীবীদের সঙ্গে সংযুক্ত হন
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Tabs defaultValue="video" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger
              value="video"
              className="flex items-center justify-center gap-2"
            >
              <Video className="h-4 w-4 text-[#9059a1]" />
              <span>ভিডিও পরামর্শ</span>
            </TabsTrigger>
            <TabsTrigger
              value="doctors"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4 text-[#9059a1]" />
              <span>ডাক্তার খোঁজুন</span>
            </TabsTrigger>
          </TabsList>

          {/* Video Consultation Tab */}
          <TabsContent value="video">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>ভিডিও পরামর্শ</CardTitle>
                <CardDescription>
                  {isInCall
                    ? "ডাঃ আইসা রহমানের সঙ্গে পরামর্শ চলছে"
                    : "আপনার স্বাস্থ্যসেবা প্রদানকারীর সঙ্গে ফেস-টু-ফেস সংযুক্ত হোন"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isInCall ? (
                  <div className="space-y-4">
                    {/* Video Call Interface */}
                    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="ডাক্তারের ভিডিও"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                          ডাঃ আইসা রহমান
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg overflow-hidden border-2 border-white">
                        {isVideoOff ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-700">
                            <VideoOff className="h-8 w-8 text-white opacity-50" />
                          </div>
                        ) : (
                          <img
                            src="/placeholder.svg?height=100&width=150"
                            alt="আপনার ভিডিও"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* Call Controls */}
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-12 w-12 ${
                          isMuted ? "bg-red-100 text-red-600" : ""
                        }`}
                        onClick={toggleMute}
                      >
                        {isMuted ? (
                          <MicOff className="h-5 w-5" />
                        ) : (
                          <Mic className="h-5 w-5" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-12 w-12 ${
                          isVideoOff ? "bg-red-100 text-red-600" : ""
                        }`}
                        onClick={toggleVideo}
                      >
                        {isVideoOff ? (
                          <VideoOff className="h-5 w-5" />
                        ) : (
                          <Video className="h-5 w-5" />
                        )}
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="rounded-full h-12 w-12"
                        onClick={toggleCall}
                      >
                        <PhoneOff className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Call Information */}
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-medium mb-2">পরামর্শ বিবরণ</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">ডাক্তার:</span>
                          <span className="font-medium">ডাঃ আইসা রহমান</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">বিশেষত্ব:</span>
                          <span className="font-medium">গাইনেকোলজিস্ট</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">সময়কাল:</span>
                          <span className="font-medium">00:12:34</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Upcoming Appointment */}
                    <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                      <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5" /> আপনার আসন্ন
                        অ্যাপয়েন্টমেন্ট
                      </h3>
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage
                            src="/placeholder.svg?height=50&width=50"
                            alt="ডাঃ আইসা রহমান"
                          />
                          <AvatarFallback>আইআর</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">ডাঃ আইসা রহমান</h4>
                          <p className="text-sm text-gray-600">গাইনেকোলজিস্ট</p>
                          <div className="flex items-center mt-2 text-sm text-gray-600">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span className="mr-3">আগামীকাল</span>
                            <Clock className="mr-1 h-4 w-4" />
                            <span>10:30 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button
                          className="bg-[#9059a1] hover:bg-[#683f75]"
                          onClick={toggleCall}
                        >
                          এখন যোগদান করুন
                        </Button>
                      </div>
                    </div>

                    {/* How It Works */}
                    <div>
                      <h3 className="font-medium mb-3">
                        ভিডিও পরামর্শ কীভাবে কাজ করে
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#9059a1] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">বুক</h4>
                          <p className="text-sm text-gray-600">
                            বিশেষজ্ঞের সাথে সময় নির্ধারণ করুন
                          </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#9059a1] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Video className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">সংযুক্ত হন</h4>
                          <p className="text-sm text-gray-600">
                            আপনার অ্যাপয়েন্টমেন্ট সময়ে ভিডিও কল যোগদান করুন
                          </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#9059a1] w-10 h-10 rounded-full flex	items-center justify-center mx-auto mb-3">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">পরামর্শ</h4>
                          <p className="text-sm text-gray-600">
                            আপনার স্বাস্থ্য সমস্যা আলোচনা করুন এবং পরামর্শ পান
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Test Your Setup */}
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-medium mb-3">সেটআপ পরীক্ষা করুন</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        আপনার পরামর্শের আগে ক্যামেরা এবং মাইক্রোফোন সঠিকভাবে কাজ
                        করছে কিনা নিশ্চিত করুন।
                      </p>
                      <Button variant="outline" className="w-full">
                        অডিও ও ভিডিও পরীক্ষা করুন
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
                </Link>
                {!isInCall && (
                  <Link href="/patient/consultation-history">
                    <Button variant="link" className="text-[#9059a1]">
                      পূর্বের পরামর্শ দেখুন
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Find Doctors Tab */}
          <TabsContent value="doctors">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>ডাক্তার খুঁজুন</CardTitle>
                <CardDescription>
                  স্বাস্থ্যসেবা পেশাজীবীদের ব্রাউজ এবং সংযুক্ত হন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="নামে, বিশেষত্বে বা অবস্থায় খোঁজ করুন..."
                      className="pl-10"
                    />
                  </div>

                  {/* Doctor List */}
                  <div className="space-y-4">
                    {/* Doctor cards with similar bg-[#9059a1] and hover:bg-[#683f75] for video buttons and translated texts */}
                    {/* … repeat for each doctor entry … */}
                  </div>

                  {/* Load More Button */}
                  <div className="text-center">
                    <Button variant="outline">আরো ডাক্তার দেখুন</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
                </Link>
                <Link href="/patient/consultation-history">
                  <Button variant="link" className="text-[#9059a1]">
                    পূর্বের পরামর্শ দেখুন
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
