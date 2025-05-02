import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  Droplets,
  Heart,
  LineChart,
  MessageCircle,
  Moon,
  Pill,
  Plus,
  Thermometer,
  User,
} from "lucide-react"

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Patient Dashboard</h1>
          <p className="text-white opacity-90">
            Welcome back, Fatima! Here's an overview of your health metrics and upcoming appointments.
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/patient/daily-input">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    Daily Input
                  </Button>
                </Link>
                <Link href="/patient/consultation">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    Consult
                  </Button>
                </Link>
                <Link href="/patient/symptom-checker">
                  <Button variant="outline" className="w-full justify-start">
                    <Thermometer className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    Check Symptoms
                  </Button>
                </Link>
                <Link href="/patient/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <LineChart className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    View Reports
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Health Summary */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Health Summary</CardTitle>
              <CardDescription>Last updated: Today, 9:30 AM</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    <span className="text-sm text-gray-600">Period Cycle</span>
                  </div>
                  <span className="font-medium">Day 18 of 28</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Moon className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    <span className="text-sm text-gray-600">Mood</span>
                  </div>
                  <span className="font-medium">Calm</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    <span className="text-sm text-gray-600">Water Intake</span>
                  </div>
                  <span className="font-medium">1.2L / 2.5L</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Pill className="mr-2 h-4 w-4 text-[#F48FB1]" />
                    <span className="text-sm text-gray-600">Medication</span>
                  </div>
                  <span className="font-medium">2 pending today</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">Dr. Ayesha Rahman</h4>
                      <p className="text-sm text-gray-600">Gynecologist</p>
                    </div>
                    <span className="text-xs bg-[#f8BBD0] text-[#F48FB1] px-2 py-1 rounded-full">Video</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Tomorrow</span>
                    <Clock className="ml-3 mr-2 h-4 w-4" />
                    <span>10:30 AM</span>
                  </div>
                </div>

                <Link href="/patient/consultation" className="block">
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Book New Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Insights */}
        <div className="mt-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Health Insights</CardTitle>
              <CardDescription>AI-powered analysis of your health data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-2 flex items-center">
                    <LineChart className="mr-2 h-5 w-5" /> Period Prediction
                  </h3>
                  <p className="text-gray-700">
                    Based on your cycle history, your next period is expected to start in 10 days. Your cycle has been
                    regular for the past 3 months.
                  </p>
                </div>

                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-2 flex items-center">
                    <Moon className="mr-2 h-5 w-5" /> Mood Patterns
                  </h3>
                  <p className="text-gray-700">
                    We've noticed your mood tends to fluctuate 3-4 days before your period. Consider scheduling relaxing
                    activities during this time.
                  </p>
                </div>

                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-2 flex items-center">
                    <Droplets className="mr-2 h-5 w-5" /> Hydration Recommendation
                  </h3>
                  <p className="text-gray-700">
                    You're consistently below your daily water intake goal. Increasing your hydration may help with the
                    headaches you reported last week.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/patient/reports">
                  <Button className="w-full bg-[#F48FB1] hover:bg-[#f8BBD0]">View Full Health Report</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Shortcuts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Link href="/patient/symptom-checker" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Thermometer className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Symptom Checker</h3>
                  <p className="text-sm text-gray-600">
                    Check your symptoms and get recommendations for potential health concerns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/patient/mental-health" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Moon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Mental Health Support</h3>
                  <p className="text-sm text-gray-600">
                    Chat with our AI assistant for emotional support and mental health resources.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/patient/partner-mode" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Partner Mode</h3>
                  <p className="text-sm text-gray-600">
                    Share selected health information with your partner in a controlled manner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/community" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Community Forum</h3>
                  <p className="text-sm text-gray-600">
                    Connect with others, share experiences, and get advice from the community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
