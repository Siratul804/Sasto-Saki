import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Brain,
  Users,
  UserPlus,
  Stethoscope,
  Globe,
  BarChart3,
  FileText,
  Video,
  ArrowRight,
  ClipboardList,
  Cpu,
  UserCheck,
  CheckCircle,
  Star,
  Activity,
  Lock,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white antialiased">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f3f0f7 1px, transparent 1px), linear-gradient(to bottom, #f3f0f7 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial fade over grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />
        {/* Purple glow orb */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#9059a1]/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left copy */}
            <div className="lg:w-[52%]">
              <div className="inline-flex items-center gap-2 border border-[#9059a1]/20 bg-[#9059a1]/5 text-[#9059a1] text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide">
                <Activity size={13} />
                বাংলাদেশের প্রথম এআই মহিলা স্বাস্থ্য প্ল্যাটফর্ম
              </div>

              <h1 className="text-[2.85rem] lg:text-[3.4rem] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                নারীদের জন্য{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#9059a1]">পূর্ণাঙ্গ</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q50 0 100 5 Q150 10 200 4"
                      stroke="#9059a1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.35"
                    />
                  </svg>
                </span>{" "}
                স্বাস্থ্য সঙ্গী
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-[500px]">
                আপনার ভাষায় ব্যক্তিগত স্বাস্থ্য নিরীক্ষা, এআই বিশ্লেষণ এবং
                বিশেষজ্ঞ চিকিৎসকের সাথে সরাসরি পরামর্শ — সব এক জায়গায়।
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/patient/dashboard">
                  <Button className="bg-[#9059a1] hover:bg-[#7b4d8e] text-white h-12 px-7 rounded-xl text-[15px] font-semibold shadow-lg shadow-[#9059a1]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#9059a1]/30 hover:-translate-y-0.5">
                    রোগীর পোর্টাল শুরু করুন
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button
                    variant="outline"
                    className="h-12 px-7 rounded-xl text-[15px] font-semibold border-gray-200 text-gray-700 hover:border-[#9059a1]/40 hover:text-[#9059a1] hover:bg-[#9059a1]/5 transition-all duration-200"
                  >
                    <Stethoscope size={15} className="mr-2" />
                    ডাক্তার খুঁজুন
                  </Button>
                </Link>
              </div>

              {/* Trust strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-gray-100">
                {[
                  {
                    value: "১০,০০০+",
                    label: "সক্রিয় রোগী",
                    icon: Users,
                    trend: "+১২%",
                    iconBg: "bg-violet-50",
                    iconColor: "text-violet-500",
                  },
                  {
                    value: "৫০০+",
                    label: "নিবন্ধিত ডাক্তার",
                    icon: Stethoscope,
                    trend: "+৮%",
                    iconBg: "bg-blue-50",
                    iconColor: "text-blue-500",
                  },
                  {
                    value: "৯৮%",
                    label: "সন্তুষ্টি হার",
                    icon: Star,
                    trend: "↑ উচ্চ",
                    iconBg: "bg-amber-50",
                    iconColor: "text-amber-500",
                  },
                  {
                    value: "২৪/৭",
                    label: "এআই সহায়তা",
                    icon: Zap,
                    trend: "সর্বদা",
                    iconBg: "bg-emerald-50",
                    iconColor: "text-emerald-500",
                  },
                ].map(({ value, label, icon: Icon, trend, iconBg, iconColor }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 hover:border-[#9059a1]/20 hover:bg-white transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
                        <Icon size={15} className={iconColor} />
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full leading-none">
                        {trend}
                      </span>
                    </div>
                    <div>
                      <p className="text-[1.4rem] font-extrabold text-gray-900 leading-none tracking-tight">
                        {value}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1 leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image with floating cards */}
            <div className="lg:w-[48%] relative flex justify-center">
              {/* Main image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9059a1]/15 to-purple-50 transform rotate-3 scale-105 rounded-3xl" />
                <img
                  src="/hero.png"
                  alt="সাস্তো সাথী অ্যাপ"
                  className="relative rounded-3xl shadow-2xl w-full max-w-[480px] object-cover"
                />

                {/* Floating card — top left */}
                <div className="absolute -left-8 top-10 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[170px]">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">রিপোর্ট তৈরি</p>
                    <p className="text-[11px] text-gray-400">AI বিশ্লেষণ সম্পন্ন</p>
                  </div>
                </div>

                {/* Floating card — bottom right */}
                <div className="absolute -right-8 bottom-14 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[175px]">
                  <div className="w-10 h-10 rounded-xl bg-[#9059a1]/10 flex items-center justify-center flex-shrink-0">
                    <Star size={18} className="text-[#9059a1]" fill="#9059a1" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">ডাক্তার রেটিং</p>
                    <p className="text-[11px] text-gray-400">৪.৯ / ৫.০ ★</p>
                  </div>
                </div>

                {/* Floating card — bottom left */}
                <div className="absolute -left-6 bottom-6 bg-[#9059a1] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 min-w-[155px]">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Lock size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">সম্পূর্ণ নিরাপদ</p>
                    <p className="text-[11px] text-white/70">গোপনীয়তা নিশ্চিত</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left — image */}
            <div className="lg:w-[48%] flex justify-center">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9059a1]/10 to-purple-50 rounded-3xl rotate-2 scale-105" />
                <img
                  src="/howitworks.png"
                  alt="কিভাবে কাজ করে"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>

            {/* Right — steps */}
            <div className="lg:w-[52%]">
              <Badge className="bg-[#9059a1]/10 text-[#9059a1] hover:bg-[#9059a1]/10 border-0 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
                কিভাবে কাজ করে
              </Badge>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                মাত্র ৪টি সহজ ধাপে শুরু করুন
              </h2>
              <p className="text-gray-500 text-[17px] leading-relaxed mb-10 max-w-[460px]">
                নিবন্ধন থেকে বিশেষজ্ঞ পরামর্শ পর্যন্ত পুরো প্রক্রিয়া সহজ ও দ্রুত।
              </p>

              <div className="flex flex-col gap-0">
                {[
                  {
                    step: 1,
                    icon: UserCheck,
                    color: "from-violet-500 to-[#9059a1]",
                    title: "নিবন্ধন করুন",
                    desc: "বিনামূল্যে অ্যাকাউন্ট তৈরি করুন। শুধু মৌলিক তথ্য দিয়েই শুরু করা যাবে।",
                  },
                  {
                    step: 2,
                    icon: ClipboardList,
                    color: "from-[#9059a1] to-pink-500",
                    title: "তথ্য ইনপুট করুন",
                    desc: "প্রতিদিন মাসিক চক্র, মেজাজ, ঘুম ও উপসর্গ ট্র্যাক করুন।",
                  },
                  {
                    step: 3,
                    icon: Cpu,
                    color: "from-pink-500 to-rose-400",
                    title: "এআই বিশ্লেষণ",
                    desc: "আমাদের এআই আপনার ডেটা বিশ্লেষণ করে ব্যক্তিগতকৃত রিপোর্ট তৈরি করে।",
                  },
                  {
                    step: 4,
                    icon: Video,
                    color: "from-rose-400 to-orange-400",
                    title: "ডাক্তার পরামর্শ",
                    desc: "প্রয়োজন হলে সরাসরি বিশেষজ্ঞের সাথে চ্যাট বা ভিডিও কলে পরামর্শ নিন।",
                  },
                ].map(({ step, icon: Icon, color, title, desc }, idx, arr) => (
                  <div key={step} className="flex gap-5 group">
                    {/* Step spine */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      {/* Connector line — skip on last item */}
                      {idx < arr.length - 1 && (
                        <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#9059a1]/25 to-transparent min-h-[28px]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={idx < arr.length - 1 ? "pb-7" : "pb-0"}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-[#9059a1]/60 uppercase tracking-widest">
                          ধাপ {step}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/patient/dashboard">
                  <Button className="bg-[#9059a1] hover:bg-[#7b4d8e] text-white h-12 px-8 rounded-xl text-[15px] font-semibold shadow-lg shadow-[#9059a1]/20 hover:-translate-y-0.5 transition-all duration-200">
                    এখনই শুরু করুন — বিনামূল্যে
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#9059a1]/10 text-[#9059a1] hover:bg-[#9059a1]/10 border-0 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
              বৈশিষ্ট্যসমূহ
            </Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              সব কিছু এক প্ল্যাটফর্মে
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-[17px]">
              মহিলাদের স্বাস্থ্যের প্রতিটি দিক কভার করতে বিশেষভাবে ডিজাইন করা হয়েছে।
            </p>
          </div>

          {/* Featured top row — 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Link href="/patient/daily-input" className="block group">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#9059a1] to-[#6d3d82] rounded-2xl p-8 h-full text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <Heart size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">এআই-ভিত্তিক স্বাস্থ্য পরামর্শ</h3>
                  <p className="text-white/75 leading-relaxed mb-6">
                    মাসিক চক্র, গর্ভধারণের সম্ভাবনা, মেজাজ ও জল গ্রহণ ট্র্যাক করে
                    পূর্বানুমানমূলক পরামর্শ ও ব্যক্তিগত ইনসাইট পান।
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-white/90 group-hover:text-white">
                    বিস্তারিত দেখুন <ChevronRight size={15} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/patient/consultation" className="block group">
              <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-[#9059a1]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#9059a1]/5 -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#9059a1]/10 flex items-center justify-center mb-5">
                    <Video size={22} className="text-[#9059a1]" />
                  </div>
                  <Badge className="bg-green-50 text-green-600 hover:bg-green-50 border-0 text-xs mb-4">
                    Live Available
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">চিকিৎসক পরামর্শ</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    অ্যাপের মধ্যে থেকেই চ্যাট বা ভিডিও কলের মাধ্যমে বিশেষজ্ঞ চিকিৎসকের
                    সাথে বুকিং ও পেমেন্টের সুবিধা।
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#9059a1]">
                    বিস্তারিত দেখুন <ChevronRight size={15} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom row — 4 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/multilingual",
                icon: Globe,
                title: "বহুভাষিক সমর্থন",
                desc: "প্রমিত বাংলা ও স্থানীয় উপভাষায় সম্পূর্ণ সেবা।",
              },
              {
                href: "/patient/reports",
                icon: BarChart3,
                title: "স্মার্ট রিপোর্ট",
                desc: "সাপ্তাহিক ও মাসিক স্বাস্থ্য সারাংশ প্রতিবেদন।",
              },
              {
                href: "/patient/symptom-checker",
                icon: FileText,
                title: "লক্ষণ যাচাইকারী",
                desc: "PCOS, PCOD ও অন্যান্য রোগের ঝুঁকি শনাক্তকরণ।",
              },
              {
                href: "/patient/mental-health",
                icon: Brain,
                title: "মানসিক স্বাস্থ্য",
                desc: "এআই চ্যাটবট ও তাৎক্ষণিক ডাক্তার রেফারেল।",
              },
            ].map(({ href, icon: Icon, title, desc }) => (
              <Link href={href} key={title} className="block group">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#9059a1]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#9059a1] group-hover:border-[#9059a1] transition-colors duration-300">
                    <Icon
                      size={19}
                      className="text-gray-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY / SOCIAL PROOF ─────────────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image side */}
            <div className="lg:w-[45%] relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#9059a1]/10 to-purple-50 rounded-3xl rotate-2" />
              <img
                src="/women.jpeg"
                alt="সহযোগী কমিউনিটি"
                className="relative rounded-2xl shadow-2xl w-full h-[460px] object-cover"
              />
              {/* Stat pill overlapping bottom */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-3 flex items-center gap-4 whitespace-nowrap">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9059a1]/50 to-purple-300 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">৫,০০০+ সদস্য</p>
                  <p className="text-xs text-gray-400">সক্রিয় কমিউনিটি</p>
                </div>
              </div>
            </div>

            {/* Copy side */}
            <div className="lg:w-[55%]">
              <Badge className="bg-[#9059a1]/10 text-[#9059a1] hover:bg-[#9059a1]/10 border-0 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
                কমিউনিটি
              </Badge>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
                একা নন — একটি শক্তিশালী
                <br />
                <span className="text-[#9059a1]">সমর্থনকারী নেটওয়ার্কে</span> আছেন
              </h2>
              <p className="text-gray-500 text-[17px] leading-relaxed mb-8 max-w-[500px]">
                আমাদের গোপন কমিউনিটি ফোরামে নির্দ্বিধায় মনের কথা বলুন, প্রশ্ন করুন এবং
                অভিজ্ঞ নারীদের কাছ থেকে সহায়তা নিন।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    icon: Shield,
                    title: "বেনামী ফোরাম",
                    desc: "নিরাপদ, গোপনীয় পরিবেশ।",
                    color: "bg-blue-50 text-blue-500",
                  },
                  {
                    icon: Users,
                    title: "সহযোগী নেটওয়ার্ক",
                    desc: "অভিজ্ঞদের সাথে যোগাযোগ।",
                    color: "bg-green-50 text-green-500",
                  },
                  {
                    icon: UserPlus,
                    title: "পার্টনার মোড",
                    desc: "নির্বাচিত আপডেট শেয়ার করুন।",
                    color: "bg-[#9059a1]/10 text-[#9059a1]",
                  },
                ].map(({ icon: Icon, title, desc, color }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#9059a1]/20 hover:bg-white transition-all duration-200">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/community">
                <Button className="bg-[#9059a1] hover:bg-[#7b4d8e] text-white h-12 px-7 rounded-xl text-[15px] font-semibold shadow-lg shadow-[#9059a1]/20 hover:-translate-y-0.5 transition-all duration-200">
                  কমিউনিটিতে যোগ দিন
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge className="bg-[#9059a1]/10 text-[#9059a1] hover:bg-[#9059a1]/10 border-0 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5">
              ব্যবহারকারীদের মতামত
            </Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              তারা কী বলছেন
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "রাহেলা বেগম",
                location: "ঢাকা",
                text: "সাস্তো সাথীর মাধ্যমে আমি প্রথমবারের মতো আমার স্বাস্থ্য সম্পর্কে সচেতন হতে পেরেছি। এআই পরামর্শ অসাধারণ সহায়ক।",
                rating: 5,
              },
              {
                name: "নাসরিন আক্তার",
                location: "চট্টগ্রাম",
                text: "ডাক্তারের সাথে ভিডিও কলে পরামর্শ নিতে পেরেছি ঘর থেকেই। এটি সত্যিই জীবন বদলে দিয়েছে।",
                rating: 5,
              },
              {
                name: "সুমাইয়া খানম",
                location: "রাজশাহী",
                text: "কমিউনিটি ফোরামে অনেক প্রশ্ন করতে পারি যা আগে কাউকে বলতে পারতাম না। ধন্যবাদ সাস্তো সাথী।",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-[#9059a1]/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9059a1]/40 to-purple-200 flex items-center justify-center text-[#9059a1] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#9059a1] via-[#7b4d8e] to-[#6d3d82] rounded-3xl px-8 py-16 text-center">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
                <Zap size={13} />
                বিনামূল্যে শুরু করুন
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                আপনার স্বাস্থ্য যাত্রা আজই শুরু করুন
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                হাজার হাজার নারী ইতিমধ্যে সাস্তো সাথীকে বিশ্বাস করছেন।
                আপনিও যোগ দিন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/patient/dashboard">
                  <Button className="bg-white text-[#9059a1] hover:bg-gray-50 h-12 px-8 rounded-xl text-[15px] font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                    রোগীর পোর্টাল শুরু করুন
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/doctor/register">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-xl text-[15px] font-semibold transition-all duration-200"
                  >
                    ডাক্তার হিসেবে যোগ দিন
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
