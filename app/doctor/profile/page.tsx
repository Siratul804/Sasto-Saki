import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Edit,
  FileText,
  MessageCircle,
  Settings,
  Star,
  Users,
  Video,
} from "lucide-react";
export default function DoctorProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9059a1] to-[#683f75] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            ডাক্তার পোর্টাল
          </h1>
          <p className="text-white opacity-90">
            আপনার প্রোফাইল, অ্যাপয়েন্টমেন্ট এবং রোগী পরামর্শ পরিচালনা করুন
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="shadow-md lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback>আর</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">ডাঃ আইশা রহমান</h2>
                <p className="text-gray-600">স্ত্রীরোগ বিশেষজ্ঞ</p>
                <div className="flex items-center mt-1 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    (১২৬ রিভিউ)
                  </span>
                </div>
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                  যাচাইকৃত
                </Badge>
                <div className="w-full space-y-2 mt-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Edit className="h-4 w-4" /> প্রোফাইল সম্পাদনা
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Settings className="h-4 w-4" /> অ্যাকাউন্ট সেটিংস
                  </Button>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-3">পেশাদার তথ্য</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">বিশেষীকরণ:</span>
                    <span className="font-medium">স্ত্রীরোগ বিশেষজ্ঞ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">অভিজ্ঞতা:</span>
                    <span className="font-medium">৮ বছর</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">নিবন্ধন আইডি:</span>
                    <span className="font-medium">BMDC-A12345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ভাষা:</span>
                    <span className="font-medium">ইংরেজি, বাংলা</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">পরামর্শ ফি:</span>
                    <span className="font-medium">৳৮০০</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-3">যোগাযোগ তথ্য</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ইমেইল:</span>
                    <span className="font-medium">dr.ayesha@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ফোন:</span>
                    <span className="font-medium">+৮৮০ ১৭১২ ৩৪৫৬৭৮</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">হাসপাতাল:</span>
                    <span className="font-medium">সিটি মেডিকেল সেন্টার</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-[#9059a1] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        আজকের অ্যাপয়েন্টমেন্ট
                      </p>
                      <h3 className="text-2xl font-bold">৫</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-[#9059a1] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">মোট রোগী</p>
                      <h3 className="text-2xl font-bold">১২৮</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-[#9059a1] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Star className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">রেটিং</p>
                      <h3 className="text-2xl font-bold">৪.৯/৫</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Tabs */}
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle>ডাক্তার ড্যাশবোর্ড</CardTitle>
                <CardDescription>
                  আপনার অ্যাপয়েন্টমেন্ট এবং রোগী পরামর্শ পরিচালনা করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="appointments">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="appointments">
                      অ্যাপয়েন্টমেন্ট
                    </TabsTrigger>
                    <TabsTrigger value="patients">রোগী</TabsTrigger>
                    <TabsTrigger value="availability">সুযোগ</TabsTrigger>
                  </TabsList>
                  {/* Appointments Tab */}
                  <TabsContent value="appointments" className="space-y-4">
                    <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                      <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5" /> আজকের সময়সূচী
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>ফা</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">ফাতিমা আহমেদ</h4>
                                <p className="text-sm text-gray-600">
                                  ২৮ বছর, মহিলা
                                </p>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>সকাল ১০:৩০ - ১১:০০</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                ভিডিও
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                নিশ্চিত
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                            >
                              <FileText className="h-4 w-4" />
                              <span>বিস্তারিত দেখুন</span>
                            </Button>
                            <Button
                              size="sm"
                              className="flex items-center gap-1 bg-[#9059a1] hover:bg-[#683f75]"
                            >
                              <Video className="h-4 w-4" />
                              <span>পরামর্শ শুরু করুন</span>
                            </Button>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>নি</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">নাদিয়া ইসলাম</h4>
                                <p className="text-sm text-gray-600">
                                  ৩২ বছর, মহিলা
                                </p>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>সকাল ১১:৩০ - ১২:০০</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-50 text-purple-700 border-purple-200"
                              >
                                চ্যাট
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                নিশ্চিত
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                            >
                              <FileText className="h-4 w-4" />
                              <span>বিস্তারিত দেখুন</span>
                            </Button>
                            <Button
                              size="sm"
                              className="flex items-center gap-1 bg-[#9059a1] hover:bg-[#683f75]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>চ্যাট শুরু করুন</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      সব অ্যাপয়েন্টমেন্ট দেখুন
                    </Button>
                  </TabsContent>
                  {/* Patients Tab */}
                  <TabsContent value="patients" className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="রোগী অনুসন্ধান করুন..."
                        className="w-full p-2 pl-10 border rounded-md"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>ফা</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">ফাতিমা আহমেদ</h4>
                                <p className="text-sm text-gray-600">
                                  ২৮ বছর, মহিলা
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                প্রোফাইল দেখুন
                              </Button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                গর্ভাবস্থা
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-purple-50 text-purple-700 border-purple-200"
                              >
                                নিয়মিত চেক-আপ
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <span className="font-medium">
                                সর্বশেষ ভিজিট:
                              </span>{" "}
                              ১ মে, ২০২৫
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      সব রোগী দেখুন
                    </Button>
                  </TabsContent>
                  {/* Availability Tab */}
                  <TabsContent value="availability" className="space-y-4">
                    <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                      <h3 className="font-medium text-[#9059a1] mb-3">
                        আপনার সময়সূচী
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        পরামর্শের জন্য আপনার সুযোগ নির্ধারণ করুন। রোগীরা
                        শুধুমাত্র এই সময়ে অ্যাপয়েন্টমেন্ট বুক করতে পারবে।
                      </p>
                      <div className="space-y-3">
                        {[
                          "সোমবার",
                          "মঙ্গলবার",
                          "বুধবার",
                          "বৃহস্পতিবার",
                          "শুক্রবার",
                        ].map((day) => (
                          <div
                            key={day}
                            className="flex justify-between items-center p-3 bg-white rounded-lg border"
                          >
                            <div>
                              <h4 className="font-medium">{day}</h4>
                              <p className="text-sm text-gray-600">
                                ১০:০০ AM - ৪:০০ PM
                              </p>
                            </div>
                            <Button size="sm" variant="outline">
                              সম্পাদনা
                            </Button>
                          </div>
                        ))}
                        {["শনিবার", "রবিবার"].map((day) => (
                          <div
                            key={day}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border bg-gray-50"
                          >
                            <div>
                              <h4 className="font-medium text-gray-500">
                                {day}
                              </h4>
                              <p className="text-sm text-gray-500">অপ্রাপ্য</p>
                            </div>
                            <Button size="sm" variant="outline">
                              সময় যোগ করুন
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border">
                      <h3 className="font-medium mb-3">ছুটি / অবকাশ</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border">
                          <div>
                            <h4 className="font-medium">মেডিকেল কনফারেন্স</h4>
                            <p className="text-sm text-gray-600">
                              ১৫ - ১৮ মে, ২০২৫
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            বাতিল
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        ছুটি যোগ করুন
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
