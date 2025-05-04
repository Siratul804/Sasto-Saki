"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Copy,
  Heart,
  Mail,
  Moon,
  Shield,
  ThumbsUp,
  User,
  UserPlus,
  Eye,
  FileText,
  Pill,
  Clock,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PartnerModePage() {
  const [linkCopied, setLinkCopied] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);
  const [activeTab, setActiveTab] = useState("settings");

  const copyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  };

  const sendInvite = () => {
    setInviteSent(true);
    setTimeout(() => setInviteSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">পার্টনার মোড</h1>
          <p className="text-white opacity-90">
            আপনার স্বাস্থ্যের নির্দিষ্ট তথ্য নিয়ন্ত্রিতভাবে ভাগ করুন
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Tabs
          defaultValue="settings"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger
              value="settings"
              className="flex items-center justify-center gap-2"
            >
              <User className="h-4 w-4 text-[#9059a1]" />
              সেটিংস
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="flex items-center justify-center gap-2"
            >
              <Eye className="h-4 w-4 text-[#9059a1]" />
              প্রিভিউ
            </TabsTrigger>
            <TabsTrigger
              value="partners"
              className="flex items-center justify-center gap-2"
            >
              <UserPlus className="h-4 w-4 text-[#9059a1]" />
              পার্টনার
            </TabsTrigger>
          </TabsList>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>পার্টনার মোড সেটিংস</CardTitle>
                <CardDescription>
                  আপনার তথ্য কী দেখাবে সেটি নিয়ন্ত্রণ করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                {linkCopied && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">
                      লিঙ্ক কপি হয়েছে!
                    </AlertTitle>
                    <AlertDescription className="text-green-700">
                      এখন আপনি এই লিঙ্কটি ভাগ করতে পারেন।
                    </AlertDescription>
                  </Alert>
                )}
                {inviteSent && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">
                      আহ্বান পাঠানো হয়েছে!
                    </AlertTitle>
                    <AlertDescription className="text-green-700">
                      পার্টনারকে ইমেইল যাচাই লিঙ্ক পাঠানো হয়েছে।
                    </AlertDescription>
                  </Alert>
                )}
                <div className="space-y-6">
                  {/* Share Info */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">
                      শেয়ার স্বাস্থ্য তথ্য
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: Heart, label: "মাসিক চক্র", id: "period" },
                        { icon: Moon, label: "মেজাজ ট্র্যাকিং", id: "mood" },
                        {
                          icon: Calendar,
                          label: "নিয়মিত অ্যাপয়েন্টমেন্ট",
                          id: "appointment",
                        },
                        {
                          icon: FileText,
                          label: "স্বাস্থ্য প্রতিবেদন",
                          id: "report",
                        },
                        { icon: Pill, label: "ওষুধ", id: "medication" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="h-5 w-5 text-[#9059a1]" />
                            <Label htmlFor={item.id}>{item.label}</Label>
                          </div>
                          <Switch
                            id={item.id}
                            defaultChecked={
                              item.id !== "report" && item.id !== "medication"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Access Settings */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">
                      অ্যাক্সেস সেটিংস
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-[#9059a1]" />
                          <Label htmlFor="duration">অ্যাক্সেস সময়কাল</Label>
                        </div>
                        <Select defaultValue="unlimited">
                          <SelectTrigger id="duration" className="w-[180px]">
                            <SelectValue placeholder="সময়কাল নির্বাচন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">১ মাস</SelectItem>
                            <SelectItem value="3-months">৩ মাস</SelectItem>
                            <SelectItem value="6-months">৬ মাস</SelectItem>
                            <SelectItem value="1-year">১ বছর</SelectItem>
                            <SelectItem value="unlimited">অসীম</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-[#9059a1]" />
                          <Label htmlFor="revoke">যেকোনো সময় প্রত্যাহার</Label>
                        </div>
                        <Switch id="revoke" defaultChecked />
                      </div>
                    </div>
                  </div>
                  {/* Invite Partner */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">
                      পার্টনার আহ্বান
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="email">পার্টনার ইমেইল</Label>
                        <div className="flex mt-1">
                          <Input
                            id="email"
                            type="email"
                            placeholder="ইমেইল লিখুন"
                            className="rounded-r-none"
                          />
                          <Button
                            onClick={sendInvite}
                            className="rounded-l-none bg-[#9059a1] hover:bg-[#683f75]"
                          >
                            <Mail className="h-4 w-4 mr-2" /> আহ্বান
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="share-link">
                          অথবা লিঙ্ক শেয়ার করুন
                        </Label>
                        <div className="flex mt-1">
                          <Input
                            id="share-link"
                            readOnly
                            value="https://womenshealth.app/partner/share/abc123"
                            className="rounded-r-none bg-gray-50"
                          />
                          <Button
                            onClick={copyLink}
                            className="rounded-l-none bg-[#9059a1] hover:bg-[#683f75]"
                          >
                            <Copy className="h-4 w-4 mr-2" /> কপি
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
                </Link>
                <Button
                  className="bg-[#9059a1] hover:bg-[#683f75]"
                  onClick={() => setActiveTab("preview")}
                >
                  প্রিভিউ দেখুন
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>পার্টনার প্রিভিউ</CardTitle>
                <CardDescription>
                  এভাবে আপনার পার্টনার দেখতে পাবে
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      icon: Heart,
                      title: "মাসিক চক্র",
                      items: [
                        ["চলতি দিন", "দিন ১৮/২৮"],
                        ["পরবর্তী মাসিক", "১২ মে, ২০২৫"],
                        ["উর্বর উইন্ডো", "২২-২৬ মে, ২০২৫"],
                      ],
                    },
                    {
                      icon: Moon,
                      title: "মেজাজ ট্র্যাকিং",
                      items: [
                        ["আজকের মেজাজ", "শান্ত"],
                        ["সাপ্তাহিক গড়", "ভালো"],
                      ],
                    },
                    {
                      icon: Calendar,
                      title: "নতুন অ্যাপয়েন্টমেন্ট",
                      component: (
                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">ডাঃ আইসা রহমান</h4>
                              <p className="text-sm text-gray-600">
                                গাইনেকোলজিস্ট
                              </p>
                            </div>
                            <span className="text-xs bg-[#9059a1] text-white px-2 py-1 rounded-full">
                              ভিডিও
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="mr-2 h-4 w-4" /> কাল
                            <Clock className="ml-3 mr-2 h-4 w-4" /> 10:30 AM
                          </div>
                        </div>
                      ),
                    },
                  ].map((section, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]"
                    >
                      <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                        <section.icon className="mr-2 h-5 w-5" />{" "}
                        {section.title}
                      </h3>
                      {section.items ? (
                        <div className="space-y-2">
                          {section.items.map(([label, val], i) => (
                            <div key={i} className="flex justify-between">
                              <span className="text-gray-600">{label}:</span>
                              <span className="font-medium">{val}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        section.component
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("settings")}
                >
                  সেটিংসে ফিরে যান
                </Button>
                <Button
                  className="bg-[#9059a1] hover:bg-[#683f75]"
                  onClick={() => setActiveTab("partners")}
                >
                  পার্টনার পরিচালনা
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>পার্টনার পরিচালনা</CardTitle>
                <CardDescription>
                  কার কাছে আপনার তথ্য শেয়ার করবেন সেটি নিয়ন্ত্রণ করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: "রাহুল খান",
                      email: "rahul.khan@example.com",
                      status: "Active",
                      date: "১০ এপ্রিল, ২০২৫",
                    },
                    {
                      name: "প্রিয়া শর্মা",
                      email: "priya.s@example.com",
                      status: "Pending",
                      date: "১ মে, ২০২৫",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-lg border flex justify-between items-start"
                    >
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>
                            {p.name.split(" ")[0][0]}
                            {p.name.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{p.name}</h4>
                          <p className="text-sm text-gray-600">{p.email}</p>
                          <div className="flex items-center mt-1">
                            <Badge
                              variant="outline"
                              className={`bg-${
                                p.status === "Active" ? "green" : "yellow"
                              }-50 text-${
                                p.status === "Active" ? "green" : "yellow"
                              }-700`}
                            >
                              {p.status}
                            </Badge>
                            <span className="text-xs text-gray-500 ml-2">
                              Since {p.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          {p.status === "Active" ? "Revoke" : "Cancel"}
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => setActiveTab("settings")}
                    >
                      <UserPlus className="h-4 w-4 text-[#9059a1]" />
                      নতুন পার্টনার আহ্বান
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">ড্যাশবোর্ডে ফিরে যান</Button>
                </Link>
                <Button
                  className="bg-[#9059a1] hover:bg-[#683f75]"
                  onClick={() => setActiveTab("settings")}
                >
                  সেটিংস আপডেট করুন
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
