import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Droplets,
  Heart,
  MessageCircle,
  Moon,
  Pill,
  Plus,
  Thermometer,
  User,
  Activity,
  Bell,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Enhanced Header with Welcome Message */}
      <div className="bg-[#9059a1] py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                স্বাগতম 👋
              </h1>
              <p className="text-white/90 text-lg">
                আজ আপনার স্বাস্থ্য যাত্রা চালিয়ে যান
              </p>
              <div className="mt-4 flex items-center space-x-4 text-white/80 text-sm">
                <span className="flex items-center">
                  <Activity className="mr-1 h-4 w-4" />
                  চক্র দিন: ১৮/২৮
                </span>
                <span className="flex items-center">
                  <Heart className="mr-1 h-4 w-4" />
                  স্বাস্থ্য স্কোর: ৮৫%
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="bg-white/20 border-white/30 text-white "
              >
                <Bell className="mr-2 h-4 w-4" />
                বিজ্ঞপ্তি (২)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-6">
        {/* Priority Actions - Most Important Features */}
        <div className="mb-8">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#9059a1]" />
                আজকের প্রাথমিকতা
              </CardTitle>
              <CardDescription>
                সবচেয়ে গুরুত্বপূর্ণ কাজগুলি সম্পন্ন করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/patient/daily-input">
                  <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-200 hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-[#9059a1] p-2 rounded-lg">
                        <Plus className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#9059a1] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      দৈনিক তথ্য যোগ করুন
                    </h3>
                    <p className="text-sm text-gray-600">
                      আজকের স্বাস্থ্য ডেটা রেকর্ড করুন
                    </p>
                  </div>
                </Link>

                <Link href="/patient/symptom-checker">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Thermometer className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      লক্ষণ পরীক্ষা
                    </h3>
                    <p className="text-sm text-gray-600">
                      কোনো সমস্যা আছে কি না দেখুন
                    </p>
                  </div>
                </Link>

                <Link href="/patient/consultation">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200 hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      ডাক্তারের সাথে কথা বলুন
                    </h3>
                    <p className="text-sm text-gray-600">
                      তাৎক্ষণিক পরামর্শ নিন
                    </p>
                  </div>
                </Link>

                <Link href="/patient/mental-health">
                  <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-200 hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <Moon className="h-5 w-5 text-white" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      মানসিক সহায়তা
                    </h3>
                    <p className="text-sm text-gray-600">
                      AI সহকারীর সাথে কথা বলুন
                    </p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Health Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Health Overview */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-[#9059a1]" />
                আপনার স্বাস্থ্য এক নজরে
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Period Cycle Progress */}
                <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-pink-500" />
                      মাসিক চক্র
                    </span>
                    <span className="text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      ১৮/২৮ দিন
                    </span>
                  </div>
                  <div className="w-full bg-pink-200 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    পরবর্তী পিরিয়ড: প্রায় ১০ দিন বাকি
                  </p>
                </div>

                {/* Other Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <Droplets className="mx-auto h-6 w-6 text-blue-500 mb-1" />
                    <p className="text-sm text-gray-600">পানি</p>
                    <p className="font-semibold">১.২/২.৫ লি</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <Moon className="mx-auto h-6 w-6 text-green-500 mb-1" />
                    <p className="text-sm text-gray-600">মেজাজ</p>
                    <p className="font-semibold">শান্ত</p>
                  </div>
                </div>

                {/* Medication Reminder */}
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Pill className="mr-2 h-4 w-4 text-orange-500" />
                      <span className="font-medium">ওষুধের অনুস্মারক</span>
                    </div>
                    <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      ২টি বাকি
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointment */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-[#9059a1]" />
                আসন্ন অ্যাপয়েন্টমেন্ট
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Next Appointment */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        ডা. আয়েশা রহমান
                      </h4>
                      <p className="text-sm text-gray-600">
                        স্ত্রীরোগ বিশেষজ্ঞ
                      </p>
                    </div>
                    <span className="text-xs bg-[#9059a1] text-white px-3 py-1 rounded-full">
                      ভিডিও
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>আগামীকাল</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>সকাল ১০:৩০</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3 bg-[#9059a1] hover:bg-[#683f75]">
                    কলে যোগ দিন
                  </Button>
                </div>

                {/* Book New Appointment */}
                <Link href="/patient/consultation">
                  <Button
                    variant="outline"
                    className="w-full border-[#9059a1] text-[#9059a1] hover:bg-[#9059a1] hover:text-white"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    নতুন অ্যাপয়েন্টমেন্ট বুক করুন
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features - Simplified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 ">
          <Link href="/patient/partner-mode" className="block">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all group">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <User className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-[#9059a1] transition-colors">
                      পার্টনার মোড
                    </h3>
                    <p className="text-sm text-gray-600">
                      আপনার সঙ্গীর সাথে নিরাপদে তথ্য শেয়ার করুন
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#9059a1] transition-colors ml-auto" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/community" className="block">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all group">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-[#9059a1] transition-colors">
                      কমিউনিটি ফোরাম
                    </h3>
                    <p className="text-sm text-gray-600">
                      অন্যদের সাথে অভিজ্ঞতা শেয়ার করুন এবং পরামর্শ নিন
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#9059a1] transition-colors ml-auto" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
