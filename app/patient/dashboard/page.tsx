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
      <div className="bg-gradient-to-r from-[#ba98c4] to-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">রোগীর ড্যাশবোর্ড</h1>
          <p className="text-white opacity-90">
          আবার স্বাগতম, ফাতিমা! এখানে আপনার স্বাস্থ্যের মেট্রিক্স এবং আসন্ন অ্যাপয়েন্টমেন্টগুলির একটি সারসংক্ষেপ দেওয়া হল।
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>দ্রুত অ্যাকশন</CardTitle>
              <CardDescription>সাধারণ কাজ এবং শর্টকাট</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/patient/daily-input">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4 text-[#9059a1]" />
                    দৈনিক ইনপুট
                  </Button>
                </Link>
                <Link href="/patient/consultation">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4 text-[#9059a1]" />
                    পরামর্শ করুন
                  </Button>
                </Link>
                <Link href="/patient/symptom-checker">
                  <Button variant="outline" className="w-full justify-start">
                    <Thermometer className="mr-2 h-4 w-4 text-[#9059a1]" />
                    উপসর্গ পরীক্ষা করুন
                  </Button>
                </Link>
                <Link href="/patient/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <LineChart className="mr-2 h-4 w-4 text-[#9059a1]" />
                    রিপোর্ট দেখুন
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Health Summary */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>স্বাস্থ্য সারাংশ</CardTitle>
              <CardDescription>শেষ আপডেট: আজ, সকাল ৯:৩০ টা</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-4 w-4 text-[#9059a1]" />
                    <span className="text-sm text-gray-600">পিরিয়ড সাইকেল</span>
                  </div>
                  <span className="font-medium">২৮ দিনের মধ্যে ১৮তম দিন</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Moon className="mr-2 h-4 w-4 text-[#9059a1]" />
                    <span className="text-sm text-gray-600">মেজাজ</span>
                  </div>
                  <span className="font-medium">শান্ত</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-4 w-4 text-[#9059a1]" />
                    <span className="text-sm text-gray-600">জল গ্রহণ</span>
                  </div>
                  <span className="font-medium">১.২ লিটার / ২.৫ লিটার</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Pill className="mr-2 h-4 w-4 text-[#9059a1]" />
                    <span className="text-sm text-gray-600">ঔষধ</span>
                  </div>
                  <span className="font-medium">আজ pending 2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>আসন্ন অ্যাপয়েন্টমেন্ট</CardTitle>
              <CardDescription>আপনার নির্ধারিত পরামর্শ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">আয়েশা রহমান ড</h4>
                      <p className="text-sm text-gray-600">স্ত্রীরোগ বিশেষজ্ঞ</p>
                    </div>
                    <span className="text-xs bg-[#9059a1] text-white px-2 py-1 rounded-full">ভিডিও</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>কাল</span>
                    <Clock className="ml-3 mr-2 h-4 w-4" />
                    <span>সকাল ১০:৩০</span>
                  </div>
                </div>

                <Link href="/patient/consultation" className="block">
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> নতুন অ্যাপয়েন্টমেন্ট বুক করুন
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
              <CardTitle>স্বাস্থ্য অন্তর্দৃষ্টি</CardTitle>
              <CardDescription>আপনার স্বাস্থ্য তথ্যের AI-চালিত বিশ্লেষণ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#9059a1] mb-2 flex items-center">
                    <LineChart className="mr-2 h-5 w-5" /> সময়ের পূর্বাভাস
                  </h3>
                  <p className="text-gray-700">
                  আপনার মাসিক চক্রের ইতিহাসের উপর ভিত্তি করে, আপনার পরবর্তী মাসিক ১০ দিনের মধ্যে শুরু হবে বলে আশা করা হচ্ছে। গত ৩ মাস ধরে আপনার মাসিক চক্র নিয়মিত।
                  </p>
                </div>

                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#9059a1] mb-2 flex items-center">
                    <Moon className="mr-2 h-5 w-5" /> মেজাজ প্যাটার্নস
                  </h3>
                  <p className="text-gray-700">
                  আমরা লক্ষ্য করেছি যে আপনার মাসিকের ৩-৪ দিন আগে থেকে আপনার মেজাজ ওঠানামা করে। এই সময়কালে আরামদায়ক কার্যকলাপের সময়সূচী নির্ধারণ করার কথা বিবেচনা করুন।
                  </p>
                </div>

                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#9059a1] mb-2 flex items-center">
                    <Droplets className="mr-2 h-5 w-5" /> হাইড্রেশন সুপারিশ
                  </h3>
                  <p className="text-gray-700">
                  তুমি তোমার দৈনিক জল খাওয়ার লক্ষ্যমাত্রার চেয়ে ধারাবাহিকভাবে কম আছো। তোমার জলীয়তা বৃদ্ধি করলে গত সপ্তাহে তুমি যে মাথাব্যথার কথা বলেছিলে, তা কমাতে সাহায্য করতে পারে।
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/patient/reports">
                  <Button className="w-full bg-[#9059a1] hover:bg-[#f8BBD0]">সম্পূর্ণ স্বাস্থ্য রিপোর্ট দেখুন</Button>
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
                  <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Thermometer className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">লক্ষণ পরীক্ষক</h3>
                  <p className="text-sm text-gray-600">
                  আপনার লক্ষণগুলি পরীক্ষা করুন এবং সম্ভাব্য স্বাস্থ্যগত উদ্বেগের জন্য সুপারিশ পান।
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/patient/mental-health" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Moon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">মানসিক স্বাস্থ্য সহায়তা</h3>
                  <p className="text-sm text-gray-600">
                  মানসিক সহায়তা এবং মানসিক স্বাস্থ্যের জন্য আমাদের AI সহকারীর সাথে চ্যাট করুন।
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/patient/partner-mode" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">অংশীদার মোড</h3>
                  <p className="text-sm text-gray-600">
                  আপনার সঙ্গীর সাথে নিয়ন্ত্রিত পদ্ধতিতে নির্বাচিত স্বাস্থ্য তথ্য শেয়ার করুন।
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/community" className="block">
            <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">কমিউনিটি ফোরাম</h3>
                  <p className="text-sm text-gray-600">
                  অন্যদের সাথে সংযোগ স্থাপন করুন, অভিজ্ঞতা ভাগ করে নিন এবং সম্প্রদায়ের কাছ থেকে পরামর্শ নিন।
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
