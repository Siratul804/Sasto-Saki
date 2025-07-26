import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#9059a1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                নারীদের জন্য পূর্ণাঙ্গ স্বাস্থ্য সঙ্গী
              </h1>
              <p className="text-white text-lg mb-8">
                আপনার ভাষায় ব্যক্তিগত স্বাস্থ্য নিরীক্ষা, গভীর অন্তর্দৃষ্টি এবং
                প্রয়োজনীয় সহায়তা। চিকিৎসক ও একটি সমর্থনকারী সম্প্রদায়ের সাথে
                যুক্ত হন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/patient/dashboard">
                  <Button className="bg-white text-[#9059a1] hover:bg-white ">
                    রোগীর পোর্টাল
                  </Button>
                </Link>
                <Link href="/doctor/register">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-[#9059a1] hover:text-white  "
                  >
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
          <h2 className="text-3xl font-bold text-center mb-4 text-[#9059a1]">
            আমাদের বিশেষ বৈশিষ্ট্য
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            আমাদের প্ল্যাটফর্মটি মহিলাদের স্বাস্থ্য সংক্রান্ত সকল চাহিদা পূরণের
            জন্য বিশেষভাবে ডিজাইন করা হয়েছে।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/multilingual" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  বহুভাষিক ব্যবহারযোগ্যতা
                </h3>
                <p className="text-gray-600">
                  বাংলাদেশের গ্রামীণ ও শহুরে উভয় এলাকার ব্যবহারকারীদের জন্য
                  প্রমিত বাংলা ও স্থানীয় উপভাষা সমর্থন করে, যেন সবার কাছে
                  স্বাস্থ্যসেবা পৌঁছাতে পারে।
                </p>
              </div>
            </Link>

            <Link href="/patient/daily-input" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  এআই-ভিত্তিক স্বাস্থ্য পরামর্শ
                </h3>
                <p className="text-gray-600">
                  আপনার মাসিক চক্র, গর্ভধারণের সম্ভাবনা, মেজাজ, জল গ্রহণের
                  পরিমাণ এবং অন্যান্য বিষয় ট্র্যাক করে আপনাকে পূর্বানুমানমূলক
                  তথ্য ও পরামর্শ দেয়।
                </p>
              </div>
            </Link>

            <Link href="/patient/reports" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  স্মার্ট রিপোর্ট ও বিশেষজ্ঞের পরামর্শ
                </h3>
                <p className="text-gray-600">
                  সাপ্তাহিক ও মাসিক স্বাস্থ্য সারাংশ প্রতিবেদন পান, যেখানে
                  ব্যক্তিগত প্রতিক্রিয়া এবং বিশেষজ্ঞ ডাক্তারের পরামর্শও
                  অন্তর্ভুক্ত।
                </p>
              </div>
            </Link>

            <Link href="/patient/consultation" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Video className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  চিকিৎসক পরামর্শ
                </h3>
                <p className="text-gray-600">
                  অ্যাপের মধ্যে থেকেই চ্যাট বা ভিডিও কলের মাধ্যমে বুকিং এবং
                  চিকিৎসকের পরামর্শের জন্য পেমেন্টের সুবিধা।
                </p>
              </div>
            </Link>

            <Link href="/patient/symptom-checker" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  লক্ষণ যাচাইকারী
                </h3>
                <p className="text-gray-600">
                  অটো-জেনারেটেড রিপোর্টের সাহায্যে PCOS, PCOD এবং অন্যান্য রোগের
                  ঝুঁকি শনাক্ত করার জন্য একটি নির্দেশিত টুল।
                </p>
              </div>
            </Link>

            <Link href="/patient/mental-health" className="block">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow h-full">
                <div className="bg-[#ba98c4] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  মানসিক স্বাস্থ্য চ্যাটবট
                </h3>
                <p className="text-gray-600">
                  এআই চ্যাটবট তাৎক্ষণিক ডাক্তার রেফারেলের মাধ্যমে মানসিক সহায়তা
                  এবং স্বাস্থ্য বিষয়ক নির্দেশনা প্রদান করে।
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
              <h2 className="text-3xl font-bold mb-6 text-[#9059a1]">
                একটি সহযোগী কমিউনিটি তে যুক্ত হন
              </h2>
              <p className="text-gray-600 mb-6">
                আমাদের গোপন কমিউনিটি ফোরামে আসুন! এখানে আপনি নির্দ্বিধায় মনের
                কথা খুলে বলতে পারবেন, প্রশ্ন করতে পারবেন, আর আপনার ব্যথা-বেদনা
                বোঝেন এমন অন্যদের কাছ থেকে সহায়তা ও পরামর্শ নিতে পারবেন।
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="text-[#9059a1] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      বেনামী ফোরাম
                    </h4>
                    <p className="text-gray-600">
                      নিরাপদ, গোপনীয় পরিবেশে পরামর্শ আদান-প্রদান করুন।
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-[#9059a1] mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      সহযোগী নেটওয়ার্ক
                    </h4>
                    <p className="text-gray-600">
                      আপনার অভিজ্ঞতা বোঝে এমন অন্যদের সাথে সংযুক্ত হন।
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserPlus className="text-[#9059a1] mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      পার্টনার মোড
                    </h4>
                    <p className="text-gray-600">
                      আপনার নিয়ন্ত্রণে থাকা নির্বাচিত স্বাস্থ্য আপডেটগুলো
                      পার্টনারদের শুধুমাত্র দেখার জন্য অ্যাক্সেস দিন।
                    </p>
                  </div>
                </div>
              </div>
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

      {/* CTA Section */}
    </div>
  );
}
