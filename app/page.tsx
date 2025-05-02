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
      <section className="bg-gradient-to-r from-[#ba98c4] to-[#9059a1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">সম্পূর্ণ নারী স্বাস্থ্য সঙ্গী</h1>
              <p className="text-white text-lg mb-8">
              আপনার ভাষায় ব্যক্তিগতকৃত স্বাস্থ্য ট্র্যাকিং, অন্তর্দৃষ্টি এবং সহায়তা। ডাক্তার এবং একটি সহায়ক সম্প্রদায়ের সাথে সংযোগ স্থাপন করুন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/patient/dashboard">
                  <Button className="bg-white text-[#9059a1] hover:bg-gray-100 hover:text-[#F48FB1]">
                  রোগীর পোর্টাল
                  </Button>
                </Link>
                <Link href="/doctor/register">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  ডাক্তার পোর্টাল
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/hero.png"
                
                alt="Women's health app interface"
                className="rounded-lg shadow-xl w-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#9059a1]">ব্যাপক স্বাস্থ্য বৈশিষ্ট্য</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          আমাদের প্ল্যাটফর্মটি মহিলাদের স্বাস্থ্যের চাহিদার জন্য বিশেষভাবে ডিজাইন করা সরঞ্জামগুলির একটি সম্পূর্ণ স্যুট অফার করে
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link href="/multilingual" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">বহুভাষিক ইন্টারফেস</h3>
                <p className="text-gray-600">
                গ্রামীণ এবং শহুরে উভয় ব্যবহারকারীর জন্য প্রমিত বাংলা এবং স্থানীয় উপভাষা সমর্থন করে, যা সকলের জন্য স্বাস্থ্যসেবা
                সুলভ করে তোলে।
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/patient/daily-input" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">এআই-চালিত স্বাস্থ্য অন্তর্দৃষ্টি</h3>
                <p className="text-gray-600">
                ঋতুস্রাব এবং গর্ভাবস্থার ভবিষ্যদ্বাণীমূলক অন্তর্দৃষ্টি প্রদানের জন্য মেজাজ, মাসিক, জল গ্রহণ এবং আরও অনেক কিছু ট্র্যাক করে।
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/patient/reports" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart রিপোর্ট এবং সুপারিশ</h3>
                <p className="text-gray-600">
                ব্যক্তিগতকৃত প্রতিক্রিয়া এবং কিউরেটেড ডাক্তারের পরামর্শ সহ সাপ্তাহিক এবং মাসিক স্বাস্থ্য সারাংশ।
                </p>
              </div>
            </Link>

            {/* Feature 4 */}
            <Link href="/patient/consultation" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Video className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">পরামর্শ ব্যবস্থা</h3>
                <p className="text-gray-600">
                চ্যাট বা ভিডিও কলের মাধ্যমে অ্যাপ-মধ্যস্থ বুকিং এবং ডাক্তারের পরামর্শের জন্য অর্থপ্রদান।
                </p>
              </div>
            </Link>

            {/* Feature 5 */}
            <Link href="/patient/symptom-checker" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">লক্ষণ পরীক্ষক</h3>
                <p className="text-gray-600">
                স্বয়ংক্রিয়ভাবে তৈরি প্রতিবেদন সহ PCOS, PCOD এবং অন্যান্য অবস্থার ঝুঁকি সনাক্তকরণের জন্য নির্দেশিত টুল।
                </p>
              </div>
            </Link>

            {/* Feature 6 */}
            <Link href="/patient/mental-health" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mental স্বাস্থ্য চ্যাটবট</h3>
                <p className="text-gray-600">
                AI চ্যাটবট রিয়েল-টাইম ডাক্তার রেফারেলের মাধ্যমে মানসিক সহায়তা এবং মানসিক স্বাস্থ্য নির্দেশিকা প্রদান করে।
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
              <h2 className="text-3xl font-bold mb-6 text-[#9059a1]">একটি সহায়ক সম্প্রদায়ের সাথে সংযোগ স্থাপন করুন</h2>
              <p className="text-gray-600 mb-6">
              আমাদের বেনামী কমিউনিটি ফোরামে যোগদান করুন যেখানে আপনি অভিজ্ঞতা ভাগ করে নিতে পারেন, প্রশ্ন জিজ্ঞাসা করতে পারেন এবং আপনার সমস্যা বুঝতে পারে এমন অন্যদের কাছ থেকে পরামর্শ নিতে পারেন।
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="text-[#9059a1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Anonymous ফোরাম</h4>
                    <p className="text-gray-600">নিরাপদ, বেনামী পরিবেশে পরামর্শ শেয়ার করুন এবং গ্রহণ করুন</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-[#9059a1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">সহায়ক নেটওয়ার্ক</h4>
                    <p className="text-gray-600">আপনার অভিজ্ঞতা বোঝেন এমন অন্যদের সাথে সংযোগ স্থাপন করুন</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserPlus className="text-[#9059a1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Partner মোড</h4>
                    <p className="text-gray-600">আপনার দ্বারা নিয়ন্ত্রিত, অংশীদারদের জন্য শুধুমাত্র দেখার জন্য স্বাস্থ্য আপডেট অ্যাক্সেস</p>
                  </div>
                </div>
              </div>
              <Link href="/patient/partner-mode" className="mt-6 inline-block">
                <Button className="bg-[#9059a1] hover:bg-[#f8BBD0]">Partner মোড</Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/women.jpeg"
                alt="Community support illustration"
                className="rounded-lg shadow-lg h-[600px]"
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
