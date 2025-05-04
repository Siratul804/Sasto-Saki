"use client";

import type React from "react";
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check, Droplets, Heart, Moon, Pill, ThumbsUp } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DailyInput() {
  const [activeTab, setActiveTab] = useState("period");
  const [submitted, setSubmitted] = useState(false);
  const [waterIntake, setWaterIntake] = useState(1.2);
  const [moodLevel, setMoodLevel] = useState(3);
  const [periodFlow, setPeriodFlow] = useState("none");
  const [symptoms, setSymptoms] = useState("");

  const moodLabels = ["খুব খারাপ", "খারাপ", "নিরপেক্ষ", "ভালো", "চমৎকার"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* শিরোনাম */}
      <div className="bg-gradient-to-r from-[#9059a1] to-[#683f75] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            দৈনিক স্বাস্থ্য ইনপুট
          </h1>
          <p className="text-white opacity-90">
            আপনার দৈনিক স্বাস্থ্য পরিমাপ ট্র্যাক করুন এবং ব্যক্তিগতকৃত পরামর্শ
            পান।
          </p>
        </div>
      </div>

      {/* কনটেন্ট */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>আজকের স্বাস্থ্য ট্র্যাকিং</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("bn-BD", {
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
                <AlertTitle className="text-purple-800">সফল!</AlertTitle>
                <AlertDescription className="text-purple-700">
                  আপনার স্বাস্থ্য তথ্য রেকর্ড হয়েছে। আমরা তথ্য অনুযায়ী ইনসাইট
                  আপডেট করব।
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Tabs
                  defaultValue="period"
                  value={activeTab}
                  onValueChange={setActiveTab}
                >
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
                      <span className="hidden sm:inline">পানি</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="medication"
                      className="flex items-center"
                    >
                      <Pill className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">ঔষধ</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* মাসিক ট্যাব */}
                  <TabsContent value="period" className="space-y-4">
                    <div>
                      <Label htmlFor="period-flow">পিরিয়ড প্রবাহ</Label>
                      <Select value={periodFlow} onValueChange={setPeriodFlow}>
                        <SelectTrigger id="period-flow">
                          <SelectValue placeholder="প্রবাহ নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">কোনো নয়</SelectItem>
                          <SelectItem value="light">হালকা</SelectItem>
                          <SelectItem value="medium">মধ্যম</SelectItem>
                          <SelectItem value="heavy">ভারী</SelectItem>
                          <SelectItem value="spotting">স্পটিং</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="symptoms">লক্ষণসমূহ</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="আপনি যে কোনও লক্ষণ অনুভব করছেন তা বর্ণনা করুন..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveTab("mood")}
                      >
                        এড়িয়ে যান
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setActiveTab("mood")}
                      >
                        পরবর্তী
                      </Button>
                    </div>
                  </TabsContent>

                  {/* মেজাজ ট্যাব */}
                  <TabsContent value="mood" className="space-y-4">
                    <div>
                      <Label>আজ কেমন অনুভব করছেন?</Label>
                      <div className="mt-6 mb-2">
                        <Slider
                          value={[moodLevel]}
                          min={0}
                          max={4}
                          step={1}
                          onValueChange={(val) => setMoodLevel(val[0])}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        {moodLabels.map((label, idx) => (
                          <span
                            key={idx}
                            className={`${
                              idx === moodLevel
                                ? "text-[#9059a1] font-medium"
                                : ""
                            }`}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mood-notes">নোট (ঐচ্ছিক)</Label>
                      <Textarea
                        id="mood-notes"
                        placeholder="বিশেষ কোনো মতামত..."
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveTab("water")}
                      >
                        এড়িয়ে যান
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setActiveTab("water")}
                      >
                        পরবর্তী
                      </Button>
                    </div>
                  </TabsContent>

                  {/* পানি ট্যাব */}
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
                          onValueChange={(val) => setWaterIntake(val[0])}
                        />
                        <div className="w-16 text-center font-medium text-lg">
                          {waterIntake}L
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        প্রস্তাবিত দৈনিক গ্রহণ: ২.৫ লিটার
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setActiveTab("medication")}
                      >
                        এড়িয়ে যান
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setActiveTab("medication")}
                      >
                        পরবর্তী
                      </Button>
                    </div>
                  </TabsContent>

                  {/* ঔষধ ট্যাব */}
                  <TabsContent value="medication" className="space-y-4">
                    <div className="space-y-4">
                      {[
                        {
                          name: "Prenatal Vitamin",
                          info: "১ ট্যাবলেট, সকাল",
                        },
                        {
                          name: "Iron Supplement",
                          info: "১ ট্যাবলেট, সন্ধ্যায় খাবারের সাথে",
                        },
                      ].map((med, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <div className="flex items-center">
                            <Pill className="h-5 w-5 text-[#9059a1] mr-3" />
                            <div>
                              <p className="font-medium">{med.name}</p>
                              <p className="text-sm text-gray-500">
                                {med.info}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 gap-1"
                          >
                            <Check className="h-4 w-4" /> নেওয়া হয়েছে
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Label htmlFor="medication-notes">অতিরিক্ত ঔষধ</Label>
                      <Textarea
                        id="medication-notes"
                        placeholder="অন্য ঔষধসমূহ লিখুন..."
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit">সকল তথ্য জমা</Button>
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

        {/* এআই ইনসাইটস */}
        <Card className="shadow-md mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-[#9059a1]" /> এআই ইনসাইটস
            </CardTitle>
            <CardDescription>সাম্প্রতিক তথ্য অনুযায়ী পরামর্শ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
              <h3 className="font-medium text-[#9059a1] mb-2">দৈনিক পরামর্শ</h3>
              <p className="text-gray-700">
                আপনার মেজাজ ও পানির পরিমাণ অনুযায়ী পরিমিত জল গ্রহণ বাড়ান এবং
                ১৫ মিনিট হাঁটুন।
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/patient/reports" className="w-full">
              <Button className="w-full bg-[#9059a1] hover:bg-[#683f75]">
                সম্পূর্ণ বিশ্লেষণ দেখুন
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
