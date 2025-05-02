import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Calendar,
  Download,
  FileText,
  Heart,
  LineChart,
  Moon,
  Share2,
  Stethoscope,
  Thermometer,
  Droplets,
} from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Smart Reports & Recommendations</h1>
          <p className="text-white opacity-90">
            AI-powered analysis of your health data with personalized recommendations
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Health Reports</CardTitle>
                <CardDescription>May 2025</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
              </TabsList>

              {/* Weekly Report Tab */}
              <TabsContent value="weekly" className="space-y-6">
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Week Overview: April 26 - May 2
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Period Cycle</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-[#F48FB1] h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Day 18 of 28</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Mood Trends</h4>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                          <div key={i} className="text-xs text-gray-500">
                            {day}
                          </div>
                        ))}
                        {[3, 4, 3, 2, 3, 4, 4].map((level, i) => (
                          <div
                            key={i}
                            className={`h-6 rounded-sm ${
                              level === 4
                                ? "bg-green-200"
                                : level === 3
                                  ? "bg-blue-100"
                                  : level === 2
                                    ? "bg-yellow-100"
                                    : "bg-red-100"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Water Intake (Daily Average)</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: "48%" }}></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">1.2L / 2.5L</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Medication Adherence</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-400 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Thermometer className="mr-2 h-5 w-5 text-[#F48FB1]" /> Symptom Summary
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1 border-b">
                      <span className="text-gray-700">Headache</span>
                      <span className="text-sm text-gray-500">2 days</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b">
                      <span className="text-gray-700">Fatigue</span>
                      <span className="text-sm text-gray-500">3 days</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b">
                      <span className="text-gray-700">Bloating</span>
                      <span className="text-sm text-gray-500">1 day</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-700">Cramps</span>
                      <span className="text-sm text-gray-500">None</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Monthly Report Tab */}
              <TabsContent value="monthly" className="space-y-6">
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                    <LineChart className="mr-2 h-5 w-5" /> Monthly Health Trends
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Cycle Regularity</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Your cycle has been consistent at 28-30 days for the past 3 months.
                      </p>
                      <div className="h-24 bg-gray-100 rounded-md flex items-end justify-between p-2">
                        {[28, 29, 28].map((days, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div
                              className="w-12 bg-[#F48FB1] rounded-t-sm"
                              style={{ height: `${(days / 30) * 100}%` }}
                            ></div>
                            <span className="text-xs text-gray-500 mt-1">Month {i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Mood Stability</h4>
                      <p className="text-sm text-gray-600">
                        Your mood has been more stable this month compared to previous months.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Symptom Frequency</h4>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="flex justify-between items-center p-2 bg-white rounded border">
                          <span className="text-sm">Headaches</span>
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">-15%</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded border">
                          <span className="text-sm">Fatigue</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+5%</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded border">
                          <span className="text-sm">Bloating</span>
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">-8%</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded border">
                          <span className="text-sm">Cramps</span>
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">-20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-[#F48FB1]" /> Health Metrics
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Water Intake</span>
                        <span className="text-sm text-gray-500">48% of goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: "48%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Medication Adherence</span>
                        <span className="text-sm text-gray-500">85% of prescribed</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Exercise</span>
                        <span className="text-sm text-gray-500">32% of goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Sleep Quality</span>
                        <span className="text-sm text-gray-500">70% rating</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* AI Insights Tab */}
              <TabsContent value="insights" className="space-y-6">
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                    <Heart className="mr-2 h-5 w-5" /> Personalized Health Insights
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Based on your health data from the past 3 months, our AI has generated the following insights and
                      recommendations for you:
                    </p>

                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">Cycle Prediction</h4>
                      <p className="text-sm text-gray-600">
                        Your next period is expected to start on May 12th. Based on your symptom patterns, you may
                        experience mild headaches 2-3 days before.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">Hydration Alert</h4>
                      <p className="text-sm text-gray-600">
                        Your water intake has been consistently below recommended levels. This may be contributing to
                        your reported headaches and fatigue. Try increasing intake to at least 2L daily.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">Mood Pattern Recognition</h4>
                      <p className="text-sm text-gray-600">
                        We've detected a pattern of mood fluctuations 3-4 days before your period starts. Consider
                        scheduling relaxing activities during this time to help stabilize your mood.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-[#F48FB1]" /> Doctor Recommendations
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded border">
                      <div className="flex items-start">
                        <div className="bg-[#f8BBD0] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                          <Stethoscope className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Dr. Ayesha Rahman</h4>
                          <p className="text-sm text-gray-600 mb-2">Gynecologist</p>
                          <p className="text-sm text-gray-700">
                            Based on your symptoms, I recommend scheduling a check-up to discuss your headache patterns
                            and possible iron deficiency. Your fatigue symptoms may be related to your iron levels.
                          </p>
                          <Button variant="link" className="text-[#F48FB1] p-0 h-auto mt-1 text-sm">
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded border">
                      <div className="flex items-start">
                        <div className="bg-[#f8BBD0] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                          <Moon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Dr. Farida Khan</h4>
                          <p className="text-sm text-gray-600 mb-2">Mental Health Specialist</p>
                          <p className="text-sm text-gray-700">
                            Your mood patterns suggest mild premenstrual mood changes. I recommend trying mindfulness
                            exercises and considering a consultation if these symptoms affect your daily life.
                          </p>
                          <Button variant="link" className="text-[#F48FB1] p-0 h-auto mt-1 text-sm">
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> Lifestyle Recommendations
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Droplets className="h-5 w-5 text-[#F48FB1] mr-2 mt-0.5" />
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Increase water intake</span> to at least 2L daily, especially
                          during the week before your period.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Moon className="h-5 w-5 text-[#F48FB1] mr-2 mt-0.5" />
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Practice stress reduction</span> techniques like deep breathing
                          or meditation for 10 minutes daily.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="h-5 w-5 text-[#F48FB1] mr-2 mt-0.5" />
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Consider iron-rich foods</span> like spinach, lentils, and lean
                          meats to help with fatigue symptoms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Link href="/patient/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
            <Link href="/patient/consultation">
              <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]">Consult a Doctor</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
