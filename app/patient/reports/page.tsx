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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            স্মার্ট রিপোর্ট ও পরামর্শ
          </h1>
          <p className="text-white opacity-90">
            আপনার স্বাস্থ্য তথ্যের AI-চালিত বিশ্লেষণ ও ব্যক্তিগত পরামর্শ
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>স্বাস্থ্য প্রতিবেদন</CardTitle>
                <CardDescription>মে ২০২৫</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Download className="h-4 w-4" />
                  <span>এক্সপোর্ট</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  <span>শেয়ার</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="monthly">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="weekly">সাপ্তাহিক</TabsTrigger>
                <TabsTrigger value="monthly">মাসিক</TabsTrigger>
                <TabsTrigger value="insights">AI অন্তর্দৃষ্টি</TabsTrigger>
              </TabsList>

              {/* Weekly */}
              <TabsContent value="weekly" className="space-y-6">
                <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                  <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> ২৬ এপ্রিল - ২ মে
                    ওভারভিউ
                  </h3>
                  <div className="space-y-4">
                    {/* Cycle */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        মাসিক চক্র
                      </h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#9059a1] h-2.5 rounded-full"
                            style={{ width: "65%" }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          দিন ১৮ / ২৮
                        </span>
                      </div>
                    </div>
                    {/* Mood */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        মেজাজ প্রবণতা
                      </h4>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {["পে", "মা", "বু", "বি", "শু", "শি", "রি"].map(
                          (d, i) => (
                            <div key={i} className="text-xs text-gray-500">
                              {d}
                            </div>
                          )
                        )}
                        {[3, 4, 3, 2, 3, 4, 4].map((lvl, i) => (
                          <div
                            key={i}
                            className={`h-6 rounded-sm ${
                              lvl === 4
                                ? "bg-green-200"
                                : lvl === 3
                                ? "bg-blue-100"
                                : lvl === 2
                                ? "bg-yellow-100"
                                : "bg-red-100"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Water */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        পানি পান (গড়)
                      </h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-400 h-2.5 rounded-full"
                            style={{ width: "48%" }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          1.2L / 2.5L
                        </span>
                      </div>
                    </div>
                    {/* Med */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        ওষুধ আনুগত্য
                      </h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-green-400 h-2.5 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Symptoms */}
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Thermometer className="mr-2 h-5 w-5 text-[#9059a1]" />{" "}
                    লক্ষণ সারসংক্ষেপ
                  </h3>
                  <div className="space-y-2">
                    {[
                      ["মাথাব্যথা", "2 দিন"],
                      ["ক্লান্তি", "3 দিন"],
                      ["ফোলাভাব", "1 দিন"],
                      ["ক্র্যাম্পস", "কোনও নেই"],
                    ].map(([s, d], i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-1 border-b"
                      >
                        <span className="text-gray-700">{s}</span>
                        <span className="text-sm text-gray-500">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Monthly */}
              <TabsContent value="monthly" className="space-y-6">
                <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                  <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                    <LineChart className="mr-2 h-5 w-5" /> মাসিক প্রবণতা
                  </h3>
                  <div className="space-y-4">
                    {/* Cycle Reg */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        চক্র নিয়মিততা
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        গত ৩ মাসে ২৮-৩০ দিনে ছিল।
                      </p>
                      <div className="h-24 bg-gray-100 rounded-md flex items-end justify-between p-2">
                        {[28, 29, 28].map((d, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div
                              className="w-12 bg-[#9059a1] rounded-t-sm"
                              style={{ height: `${(d / 30) * 100}%` }}
                            />
                            <span className="text-xs text-gray-500 mt-1">
                              মাস {i + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Mood stable */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        মেজাজ স্থিতিশীলতা
                      </h4>
                      <p className="text-sm text-gray-600">
                        এই মাসে বেশি স্থিতিশীল ছিল।
                      </p>
                    </div>
                    {/* Symptom freq */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        লক্ষণ পরিবর্তন
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {[
                          ["মাথাব্যথা", "-15%"],
                          ["ক্লান্তি", "+5%"],
                          ["ফোলাভাব", "-8%"],
                          ["ক্র্যাম্পস", "-20%"],
                        ].map(([l, c], i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center p-2 bg-white rounded border"
                          >
                            <span className="text-sm">{l}</span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                c.startsWith("+")
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Metrics */}
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-[#9059a1]" />{" "}
                    স্বাস্থ্য পরিমাপ
                  </h3>
                  <div className="space-y-3">
                    {[
                      ["পানি পান", "48% লক্ষ্য অনুযায়ী", "48%"],
                      ["ওষুধ গ্রহণ", "85%", "85%"],
                      ["ব্যায়াম", "32%", "32%"],
                      ["ঘুমের গুণগত মান", "70%", "70%"],
                    ].map(([l, d, p], i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {l}
                          </span>
                          <span className="text-sm text-gray-500">{d}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              l === "পানি পান"
                                ? "bg-blue-400"
                                : l === "ওষুধ গ্রহণ"
                                ? "bg-green-400"
                                : l === "ব্যায়াম"
                                ? "bg-orange-400"
                                : "bg-purple-400"
                            }`}
                            style={{ width: p }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Insights */}
              <TabsContent value="insights" className="space-y-6">
                <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                  <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                    <Heart className="mr-2 h-5 w-5" /> ব্যক্তিগত অন্তর্দৃষ্টি
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      গত ৩ মাসের তথ্যের ভিত্তিতে পরামর্শ:
                    </p>
                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">
                        চক্র পূর্বাভাস
                      </h4>
                      <p className="text-sm text-gray-600">
                        পরবর্তী মাসিক হতে পারে ১২ মে।
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">
                        পানি বৃদ্ধি
                      </h4>
                      <p className="text-sm text-gray-600">দিনে 2L পান করুন।</p>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <h4 className="font-medium text-gray-800 mb-1">
                        মেজাজ মনিটর
                      </h4>
                      <p className="text-sm text-gray-600">
                        মাসিক ৩-৪ দিন আগে শান্তি করুন।
                      </p>
                    </div>
                  </div>
                </div>
                {/* Doctor Rec */}
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-[#9059a1]" />{" "}
                    ডাক্তারের পরামর্শ
                  </h3>
                  <div className="space-y-3">
                    {[
                      [
                        "ডাঃ আইসা রহমান",
                        "গাইনেকোলজিস্ট",
                        "মাথাব্যথার জন্য পরীক্ষা করুন।",
                      ],
                      [
                        "ডাঃ ফারিদা খান",
                        "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
                        "প্রিমেনস্ট্রুয়াল মেজাজের জন্য মানসিক ব্যায়াম করুন।",
                      ],
                    ].map(([n, s, adv], i) => (
                      <div
                        key={i}
                        className="p-3 bg-gray-50 rounded border flex"
                      >
                        <div className="bg-[#9059a1] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <Stethoscope className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{n}</h4>
                          <p className="text-sm text-gray-600 mb-1">{s}</p>
                          <p className="text-sm text-gray-700 mb-1">{adv}</p>
                          <Button
                            variant="link"
                            className="text-[#9059a1] p-0 h-auto text-sm"
                          >
                            আপয়েন্টমেন্ট বুক
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle */}
                <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059#a1]">
                  <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                    <Droplets className="mr-2 h-5 w-5 text-[#9059a1]" />{" "}
                    জীবনধারা পরামর্শ
                  </h3>
                  <div className="space-y-2">
                    {[
                      ["পানি পান বৃদ্ধি", "দিনে 2L পান করুন"],
                      ["মানসিক প্রশান্তি", "10 মিনিট মেডিটেশন"],
                      ["লোহাযুক্ত খাবার", "পালং শাক, ডাল খেতে পারেন"],
                    ].map(([title, desc], i) => (
                      <div key={i} className="flex items-start">
                        <Droplets className="h-5 w-5 text-[#9059a1] mr-2 mt-0.5" />
                        <p className="text-gray-700">
                          <span className="font-medium">{title}:</span> {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Link href="/patient/dashboard">
              <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
            </Link>
            <Link href="/patient/consultation">
              <Button className="bg-[#9059a1] hover:bg-[#683f75]">
                পরামর্শ নিন
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
