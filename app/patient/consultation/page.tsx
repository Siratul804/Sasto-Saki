"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MessageCircle, Mic, MicOff, PhoneOff, Search, Video, VideoOff } from "lucide-react"

export default function ConsultationPage() {
  const [isInCall, setIsInCall] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  const toggleCall = () => {
    setIsInCall(!isInCall)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Consultation System</h1>
          <p className="text-white opacity-90">
            Connect with healthcare professionals through video or chat consultations
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Tabs defaultValue="video" className="space-y-6">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger value="video" className="flex items-center justify-center gap-2">
              <Video className="h-4 w-4" />
              <span>Video Consultation</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Find Doctors</span>
            </TabsTrigger>
          </TabsList>

          {/* Video Consultation Tab */}
          <TabsContent value="video">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Video Consultation</CardTitle>
                <CardDescription>
                  {isInCall
                    ? "Currently in consultation with Dr. Ayesha Rahman"
                    : "Connect face-to-face with your healthcare provider"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isInCall ? (
                  <div className="space-y-4">
                    {/* Video Call Interface */}
                    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                      {/* Doctor's Video */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Doctor video feed"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                          Dr. Ayesha Rahman
                        </div>
                      </div>

                      {/* Patient's Video (Small PIP) */}
                      <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg overflow-hidden border-2 border-white">
                        {isVideoOff ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-700">
                            <VideoOff className="h-8 w-8 text-white opacity-50" />
                          </div>
                        ) : (
                          <img
                            src="/placeholder.svg?height=100&width=150"
                            alt="Your video feed"
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
                        className={`rounded-full h-12 w-12 ${isMuted ? "bg-red-100 text-red-600" : ""}`}
                        onClick={toggleMute}
                      >
                        {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-12 w-12 ${isVideoOff ? "bg-red-100 text-red-600" : ""}`}
                        onClick={toggleVideo}
                      >
                        {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                      </Button>
                      <Button variant="destructive" size="icon" className="rounded-full h-12 w-12" onClick={toggleCall}>
                        <PhoneOff className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Call Information */}
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-medium mb-2">Consultation Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Doctor:</span>
                          <span className="font-medium">Dr. Ayesha Rahman</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Specialty:</span>
                          <span className="font-medium">Gynecologist</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">00:12:34</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Upcoming Appointment */}
                    <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                      <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5" /> Your Upcoming Appointment
                      </h3>
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Dr. Ayesha Rahman" />
                          <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Dr. Ayesha Rahman</h4>
                          <p className="text-sm text-gray-600">Gynecologist</p>
                          <div className="flex items-center mt-2 text-sm text-gray-600">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span className="mr-3">Tomorrow</span>
                            <Clock className="mr-1 h-4 w-4" />
                            <span>10:30 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={toggleCall}>
                          Join Now
                        </Button>
                      </div>
                    </div>

                    {/* How It Works */}
                    <div>
                      <h3 className="font-medium mb-3">How Video Consultation Works</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">Book</h4>
                          <p className="text-sm text-gray-600">Schedule an appointment with a specialist</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Video className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">Connect</h4>
                          <p className="text-sm text-gray-600">Join the video call at your appointment time</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border text-center">
                          <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-medium mb-1">Consult</h4>
                          <p className="text-sm text-gray-600">Discuss your health concerns and get advice</p>
                        </div>
                      </div>
                    </div>

                    {/* Test Your Setup */}
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-medium mb-3">Test Your Setup</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Ensure your camera and microphone are working properly before your consultation.
                      </p>
                      <Button variant="outline" className="w-full">
                        Test Audio & Video
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">Back to Dashboard</Button>
                </Link>
                {!isInCall && (
                  <Link href="/patient/consultation-history">
                    <Button variant="link" className="text-[#F48FB1]">
                      View Past Consultations
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
                <CardTitle>Find a Doctor</CardTitle>
                <CardDescription>Browse and connect with healthcare professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search by name, specialty, or condition..." className="pl-10" />
                  </div>

                  {/* Doctor List */}
                  <div className="space-y-4">
                    {/* Doctor 1 */}
                    <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Dr. Ayesha Rahman" />
                          <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Dr. Ayesha Rahman</h4>
                              <p className="text-sm text-gray-600">Gynecologist</p>
                              <div className="flex items-center mt-1">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      className="h-4 w-4 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">(126 reviews)</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium text-[#F48FB1]">৳800</span>
                              <p className="text-xs text-gray-500">per consultation</p>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">PCOS</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Pregnancy</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Menstrual Health</span>
                          </div>
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span className="mr-3">Available Today</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>Chat</span>
                              </Button>
                              <Button size="sm" className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]">
                                <Video className="h-4 w-4" />
                                <span>Video</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Doctor 2 */}
                    <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Dr. Farida Khan" />
                          <AvatarFallback>FK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Dr. Farida Khan</h4>
                              <p className="text-sm text-gray-600">Mental Health Specialist</p>
                              <div className="flex items-center mt-1">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      className="h-4 w-4 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">(98 reviews)</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium text-[#F48FB1]">৳750</span>
                              <p className="text-xs text-gray-500">per consultation</p>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Anxiety</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Depression</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Stress Management</span>
                          </div>
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span className="mr-3">Available Tomorrow</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>Chat</span>
                              </Button>
                              <Button size="sm" className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]">
                                <Video className="h-4 w-4" />
                                <span>Video</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Doctor 3 */}
                    <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Dr. Nasreen Ahmed" />
                          <AvatarFallback>NA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Dr. Nasreen Ahmed</h4>
                              <p className="text-sm text-gray-600">Nutritionist</p>
                              <div className="flex items-center mt-1">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star, i) => (
                                    <svg
                                      key={star}
                                      className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">(74 reviews)</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium text-[#F48FB1]">৳650</span>
                              <p className="text-xs text-gray-500">per consultation</p>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Diet Planning</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Weight Management</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Prenatal Nutrition</span>
                          </div>
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span className="mr-3">Available in 3 days</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>Chat</span>
                              </Button>
                              <Button size="sm" className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]">
                                <Video className="h-4 w-4" />
                                <span>Video</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Load More Button */}
                  <div className="text-center">
                    <Button variant="outline">Load More Doctors</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">Back to Dashboard</Button>
                </Link>
                <Link href="/patient/consultation-history">
                  <Button variant="link" className="text-[#F48FB1]">
                    View Past Consultations
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
