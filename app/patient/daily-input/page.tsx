"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Check, Droplets, Heart, Moon, Pill, ThumbsUp } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DailyInput() {
  const [activeTab, setActiveTab] = useState("period")
  const [submitted, setSubmitted] = useState(false)
  const [waterIntake, setWaterIntake] = useState(1.2)
  const [moodLevel, setMoodLevel] = useState(3)
  const [periodFlow, setPeriodFlow] = useState("none")
  const [symptoms, setSymptoms] = useState("")

  const moodLabels = ["খুব খারাপ", "খারাপ", "নিরপেক্ষ", "ভালো", "চমৎকার"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real app, this would send data to the backend
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ba98c4] to-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Daily Health Input</h1>
          <p className="text-white opacity-90">
            Track your daily health metrics to get personalized insights and recommendations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Today's Health Tracking</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <Alert className="bg-green-50 border-green-200">
                <ThumbsUp className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-purple-800">Success!</AlertTitle>
                <AlertDescription className="text-purple-700">
                  Your health data has been recorded. We'll update your insights based on this information.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Tabs defaultValue="period" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="period" className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">মাসিক</span>
                    </TabsTrigger>
                    <TabsTrigger value="mood" className="flex items-center">
                      <Moon className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">মেজাজ</span>
                    </TabsTrigger>
                    <TabsTrigger value="water" className="flex items-center">
                      <Droplets className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">জল</span>
                    </TabsTrigger>
                    <TabsTrigger value="medication" className="flex items-center">
                      <Pill className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">ঔষধ</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Period Tab */}
                  <TabsContent value="period" className="space-y-4">
                    <div>
                      <Label htmlFor="period-flow">পিরিয়ড ফ্লো</Label>
                      <Select value={periodFlow} onValueChange={setPeriodFlow}>
                        <SelectTrigger id="period-flow">
                          <SelectValue placeholder="Select flow intensity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="heavy">Heavy</SelectItem>
                          <SelectItem value="spotting">Spotting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="symptoms">Symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Describe any symptoms you're experiencing..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setActiveTab("mood")}>
                        Skip
                      </Button>
                      <Button type="button" onClick={() => setActiveTab("mood")}>
                        Next
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Mood Tab */}
                  <TabsContent value="mood" className="space-y-4">
                    <div>
                      <Label>আজ কেমন লাগছে?</Label>
                      <div className="mt-6 mb-2">
                        <Slider
                          value={[moodLevel]}
                          min={0}
                          max={4}
                          step={1}
                          onValueChange={(value) => setMoodLevel(value[0])}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        {moodLabels.map((label, index) => (
                          <span key={index} className={`${index === moodLevel ? "text-[#9059a1] font-medium" : ""}`}>
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mood-notes">নোট (ঐচ্ছিক)</Label>
                      <Textarea id="mood-notes" placeholder="Any specific thoughts or feelings..." />
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setActiveTab("water")}>
                      এড়িয়ে যান
                      </Button>
                      <Button type="button" onClick={() => setActiveTab("water")}>
                      পরবর্তী
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Water Tab */}
                  <TabsContent value="water" className="space-y-4">
                    <div>
                      <Label>পানি গ্রহণ (লিটার)</Label>
                      <div className="flex items-center mt-4">
                        <Slider
                          value={[waterIntake]}
                          min={0}
                          max={4}
                          step={0.1}
                          className="flex-1 mr-4"
                          onValueChange={(value) => setWaterIntake(value[0])}
                        />
                        <div className="w-16 text-center font-medium text-lg">{waterIntake}L</div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>প্রস্তাবিত দৈনিক গ্রহণ: ২.৫ লিটার</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setActiveTab("medication")}>
                        Skip
                      </Button>
                      <Button type="button" onClick={() => setActiveTab("medication")}>
                        Next
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Medication Tab */}
                  <TabsContent value="medication" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                        <div className="flex items-center">
                          <Pill className="h-5 w-5 text-[#9059a1] mr-3" />
                          <div>
                            <p className="font-medium">Prenatal Vitamin</p>
                            <p className="text-sm text-gray-500">1 tablet, morning</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Check className="h-4 w-4" /> Taken
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                        <div className="flex items-center">
                          <Pill className="h-5 w-5 text-[#9059a1] mr-3" />
                          <div>
                            <p className="font-medium">Iron Supplement</p>
                            <p className="text-sm text-gray-500">1 tablet, evening with food</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Check className="h-4 w-4" /> Taken
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="medication-notes">Additional Medications</Label>
                      <Textarea id="medication-notes" placeholder="List any other medications you took today..." />
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit">Submit All Data</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Link href="/patient/dashboard">
              <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
            </Link>
            <Link href="/patient/reports">
              <Button variant="link" className="text-[#9059a1]">
              স্বাস্থ্য রিপোর্ট দেখুন
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* AI Insights Preview */}
        <Card className="shadow-md mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-[#9059a1]" />
              এআই হেলথ ইনসাইটস
            </CardTitle>
            <CardDescription>আপনার সাম্প্রতিক স্বাস্থ্য তথ্যের উপর ভিত্তি করে</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#9059a1]">
              <h3 className="font-medium text-[#9059a1] mb-2">দৈনিক সুপারিশ</h3>
              <p className="text-gray-700">
                Based on your recent mood patterns and water intake, we recommend increasing your hydration today and
                taking a 15-minute walk outside. This may help improve your energy levels.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/patient/reports" className="w-full">
              <Button className="w-full bg-[#9059a1] hover:bg-[#ba98c4]">View Full Health Analysis</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
