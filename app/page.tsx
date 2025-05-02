import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Calendar,
  MessageCircle,
  Shield,
  Brain,
  Users,
  UserPlus,
  Stethoscope,
  Globe,
  BarChart3,
  FileText,
  Video,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Women's Health Companion</h1>
              <p className="text-white text-lg mb-8">
                Personalized health tracking, insights, and support in your language. Connect with doctors and a
                supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/patient/dashboard">
                  <Button className="bg-white text-[#F48FB1] hover:bg-gray-100 hover:text-[#F48FB1]">
                    Patient Portal
                  </Button>
                </Link>
                <Link href="/doctor/register">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    Doctor Portal
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Women's health app interface"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#F48FB1]">Comprehensive Health Features</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our platform offers a complete suite of tools designed specifically for women's health needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link href="/multilingual" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Multilingual Interface</h3>
                <p className="text-gray-600">
                  Supports standard Bengali and local dialects for both rural and urban users, making healthcare
                  accessible to all.
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/patient/daily-input" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">AI-powered Health Insights</h3>
                <p className="text-gray-600">
                  Tracks mood, period, water intake, and more to provide predictive insights for menstruation and
                  pregnancy.
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/patient/reports" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Reports & Recommendations</h3>
                <p className="text-gray-600">
                  Weekly and monthly health summaries with personalized feedback and curated doctor suggestions.
                </p>
              </div>
            </Link>

            {/* Feature 4 */}
            <Link href="/patient/consultation" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Video className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Consultation System</h3>
                <p className="text-gray-600">
                  In-app booking and payments for doctor consultations via chat or video calls.
                </p>
              </div>
            </Link>

            {/* Feature 5 */}
            <Link href="/patient/symptom-checker" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Symptom Checker</h3>
                <p className="text-gray-600">
                  Guided tool for detecting risks of PCOS, PCOD, and other conditions with auto-generated reports.
                </p>
              </div>
            </Link>

            {/* Feature 6 */}
            <Link href="/patient/mental-health" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mental Health Chatbot</h3>
                <p className="text-gray-600">
                  AI chatbot offering emotional support and mental health guidance with real-time doctor referrals.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-[#F48FB1]">Connect with a Supportive Community</h2>
              <p className="text-gray-600 mb-6">
                Join our anonymous community forums where you can share experiences, ask questions, and receive advice
                from others who understand what you're going through.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Anonymous Forums</h4>
                    <p className="text-gray-600">Share and receive advice in a safe, anonymous environment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Supportive Network</h4>
                    <p className="text-gray-600">Connect with others who understand your experiences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserPlus className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Partner Mode</h4>
                    <p className="text-gray-600">View-only health update access for partners, controlled by you</p>
                  </div>
                </div>
              </div>
              <Link href="/patient/partner-mode" className="mt-6 inline-block">
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]">Partner Mode</Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Community support illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Portal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold mb-6 text-[#F48FB1]">For Healthcare Professionals</h2>
              <p className="text-gray-600 mb-6">
                Our dedicated doctor portal allows healthcare professionals to register, manage appointments, and
                provide remote consultations to patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Stethoscope className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Easy Registration</h4>
                    <p className="text-gray-600">Register with your doctor registration ID and certificate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Appointment Management</h4>
                    <p className="text-gray-600">Manage your schedule and patient appointments efficiently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="text-[#F48FB1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Remote Consultations</h4>
                    <p className="text-gray-600">Provide consultations via chat or video calls</p>
                  </div>
                </div>
              </div>
              <Link href="/doctor/register" className="mt-6 inline-block">
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]">Join as a Doctor</Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Doctor using the platform"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f8BBD0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Take Control of Your Health Journey</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of women who are already benefiting from our comprehensive health platform.
          </p>
          <Link href="/patient/dashboard">
            <Button className="bg-white text-[#F48FB1] hover:bg-gray-100 hover:text-[#F48FB1] px-8 py-6 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
