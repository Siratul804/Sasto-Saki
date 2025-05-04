"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  MessageCircle,
  Plus,
  Search,
  Shield,
  ThumbsUp,
  Users,
  Filter,
  AlertCircle,
  Tag,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy posts data
  const posts = [
    {
      id: 1,
      title: "PCOS লক্ষণ নিয়ে কীভাবে মোকাবিলা করবেন",
      content:
        "আমাকে সম্প্রতি PCOS ধরা পড়েছে এবং লক্ষণগুলির সাথে লড়াই করছি। হরমোনের ভারসাম্যহীনতা এবং মেজাজ পরিবর্তন নিয়ন্ত্রণে কার্যকরী উপায় খুঁজে পেয়েছেন কি?",
      author: "অনামিকা",
      authorId: "A1",
      timestamp: "২ ঘন্টা আগে",
      likes: 24,
      comments: 8,
      category: "PCOS",
      tags: ["হরমোন", "মেজাজ", "চিকিৎসা"],
    },
    {
      id: 2,
      title: "প্রথম ট্রাইমেস্টারে গর্ভাবস্থার উদ্বেগ",
      content:
        "আমি ৮ সপ্তাহের গর্ভবতী এবং গর্ভপাত নিয়ে অবিরাম চিন্তিত। গত বছরের একটি ক্ষতির পর এটা আমার প্রথম গর্ভাবস্থা। প্রারম্ভিক গর্ভাবস্থায় উদ্বেগ কীভাবে নিয়ন্ত্রণ করবেন?",
      author: "অনামিকা",
      authorId: "A2",
      timestamp: "৫ ঘন্টা আগে",
      likes: 32,
      comments: 15,
      category: "গর্ভাবস্থা",
      tags: ["উদ্বেগ", "প্রথম ট্রাইমেস্টার", "সহায়তা"],
    },
    {
      id: 3,
      title: "জন্মনিরোধক বন্ধ করার পর অনিয়মিত পিরিয়ড",
      content:
        "জন্মনিরোধক বড়ি বন্ধ করার ৩ মাস পরেও আমার পিরিয়ড অনিয়মিত। এটা কি স্বাভাবিক? আপনার চক্র স্বাভাবিক হতে কত সময় লেগেছিল?",
      author: "অনামিকা",
      authorId: "A3",
      timestamp: "গতকাল",
      likes: 18,
      comments: 12,
      category: "মাসিক স্বাস্থ্য",
      tags: ["জন্মনিরোধক", "পিরিয়ড", "হরমোন"],
    },
    {
      id: 4,
      title: "প্রসবোত্তর বিষণ্নতা সম্পদ",
      content:
        "আমার মনে হয় আমি প্রসবোত্তর বিষণ্নতা অনুভব করছি। আমার শিশুর থেকে বিচ্ছিন্ন বোধ করি এবং সাধারণ নতুন পিতামাতার ক্লান্তির বাইরেও অবিরাম ক্লান্ত। কোন সম্পদগুলো সাহায্য করেছে?",
      author: "অনামিকা",
      authorId: "A4",
      timestamp: "২ দিন আগে",
      likes: 45,
      comments: 23,
      category: "মানসিক স্বাস্থ্য",
      tags: ["প্রসবোত্তর", "বিষণ্নতা", "সম্পদ"],
    },
    {
      id: 5,
      title: "এন্ডোমেট্রিওসিস ব্যথা ব্যবস্থাপনা",
      content:
        "এন্ডোমেট্রিওসিসের ব্যথা সম্প্রতি খারাপ হচ্ছে। ব্যথার ওষুধ আর তেমন সাহায্য করছে না। বিকল্প চিকিৎসা বা ব্যবস্থাপনা কৌশল খুঁজে পেয়েছেন কি?",
      author: "অনামিকা",
      authorId: "A5",
      timestamp: "৩ দিন আগে",
      likes: 36,
      comments: 19,
      category: "এন্ডোমেট্রিওসিস",
      tags: ["ব্যথা", "চিকিৎসা", "দীর্ঘস্থায়ী রোগ"],
    },
  ];

  // Filter posts based on active tab and search query
  const filteredPosts = posts.filter((post) => {
    const matchesTab =
      activeTab === "all" ||
      post.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9059a1] to-[#683f75] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">কমিউনিটি ফোরাম</h1>
          <p className="text-white opacity-90">
            নিরাপদ, অনামিক পরিবেশে অন্যদের সাথে সংযুক্ত হন, অভিজ্ঞতা শেয়ার করুন
            এবং সহায়তা পান
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-[#9059a1]" />
                  কমিউনিটি নির্দেশিকা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>
                    আমাদের কমিউনিটি সবার জন্য নিরাপদ স্থান। অনুগ্রহ করে মনে
                    রাখবেন:
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="bg-[#9059a1] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>সবাইকে সম্মান ও সহায়তা করুন</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#9059a1] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>আপনার এবং অন্যদের গোপনীয়তা রক্ষা করুন</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#9059a1] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>
                        চিকিৎসা পরামর্শ এড়িয়ে চলুন; শুধু অভিজ্ঞতা শেয়ার করুন
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#9059a1] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>অনুপযুক্ত কন্টেন্ট রিপোর্ট করুন</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">জনপ্রিয় বিষয়</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("PCOS")}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                    PCOS
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">
                      24
                    </Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("গর্ভাবস্থা")}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                    গর্ভাবস্থা
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">
                      18
                    </Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("মাসিক স্বাস্থ্য")}
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                    মাসিক স্বাস্থ্য
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">
                      15
                    </Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("মানসিক স্বাস্থ্য")}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    মানসিক স্বাস্থ্য
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">
                      12
                    </Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("এন্ডোমেট্রিওসিস")}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                    এন্ডোমেট্রিওসিস
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">
                      9
                    </Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">কমিউনিটি পরিসংখ্যান</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-[#9059a1] mr-2" />
                      <span className="text-sm">সদস্য</span>
                    </div>
                    <span className="font-medium">৫,২৮০</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 text-[#9059a1] mr-2" />
                      <span className="text-sm">পোস্ট</span>
                    </div>
                    <span className="font-medium">১,৩৪২</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-[#9059a1] mr-2" />
                      <span className="text-sm">সহায়ক প্রতিক্রিয়া</span>
                    </div>
                    <span className="font-medium">৮,৯৭৬</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="আলোচনা অনুসন্ধান করুন..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>ফিল্টার</span>
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#9059a1] hover:bg-[#683f75] flex items-center gap-1">
                      <Plus className="h-4 w-4" />
                      <span>নতুন পোস্ট</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>নতুন পোস্ট তৈরি করুন</DialogTitle>
                      <DialogDescription>
                        আপনার অভিজ্ঞতা শেয়ার করুন বা প্রশ্ন করুন। পোস্টটি
                        অনামিকভাবে প্রকাশিত হবে।
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="post-title">শিরোনাম</Label>
                        <Input
                          id="post-title"
                          placeholder="একটি স্পষ্ট, নির্দিষ্ট শিরোনাম লিখুন"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-category">বিষয়শ্রেণী</Label>
                        <Select>
                          <SelectTrigger id="post-category">
                            <SelectValue placeholder="একটি বিষয়শ্রেণী নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PCOS">PCOS</SelectItem>
                            <SelectItem value="গর্ভাবস্থা">
                              গর্ভাবস্থা
                            </SelectItem>
                            <SelectItem value="মাসিক স্বাস্থ্য">
                              মাসিক স্বাস্থ্য
                            </SelectItem>
                            <SelectItem value="মানসিক স্বাস্থ্য">
                              মানসিক স্বাস্থ্য
                            </SelectItem>
                            <SelectItem value="এন্ডোমেট্রিওসিস">
                              এন্ডোমেট্রিওসিস
                            </SelectItem>
                            <SelectItem value="সাধারণ">সাধারণ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-content">আপনার পোস্ট</Label>
                        <Textarea
                          id="post-content"
                          placeholder="আপনার অভিজ্ঞতা বা প্রশ্ন শেয়ার করুন..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-tags">
                          ট্যাগ (কমা দ্বারা পৃথক করুন)
                        </Label>
                        <Input
                          id="post-tags"
                          placeholder="যেমন: লক্ষণ, চিকিৎসা, সহায়তা"
                        />
                      </div>
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                        <p className="text-xs text-gray-500">
                          মনে রাখবেন যদিও আপনার ব্যবহারকারীনাম অনামিক থাকবে,
                          তবুও আপনার ব্যক্তিগত বিবরণ শেয়ার করার সময় সতর্ক
                          থাকুন।
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        বাতিল করুন
                      </Button>
                      <Button
                        className="bg-[#9059a1] hover:bg-[#683f75]"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        অনামিকভাবে পোস্ট করুন
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Tabs */}
            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-6">
                <TabsTrigger value="all">সব</TabsTrigger>
                <TabsTrigger value="PCOS">PCOS</TabsTrigger>
                <TabsTrigger value="গর্ভাবস্থা">গর্ভাবস্থা</TabsTrigger>
                <TabsTrigger value="মাসিক স্বাস্থ্য">মাসিক</TabsTrigger>
                <TabsTrigger value="মানসিক স্বাস্থ্য">মানসিক</TabsTrigger>
                <TabsTrigger value="এন্ডোমেট্রিওসিস">
                  এন্ডোমেট্রিওসিস
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Avatar className="h-5 w-5 mr-2">
                              <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                                {post.authorId}
                              </AvatarFallback>
                            </Avatar>
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.timestamp}</span>
                          </CardDescription>
                        </div>
                        <Badge
                          className={`
                            ${
                              post.category === "PCOS"
                                ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                : ""
                            }
                            ${
                              post.category === "গর্ভাবস্থা"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : ""
                            }
                            ${
                              post.category === "মাসিক স্বাস্থ্য"
                                ? "bg-pink-100 text-pink-800 hover:bg-pink-100"
                                : ""
                            }
                            ${
                              post.category === "মানসিক স্বাস্থ্য"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : ""
                            }
                            ${
                              post.category === "এন্ডোমেট্রিওসিস"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : ""
                            }
                          `}
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{post.content}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-50 text-gray-700"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2 border-t">
                      <div className="flex space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 flex items-center gap-1"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 flex items-center gap-1"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <Button variant="link" className="text-[#9059a1]">
                        আলোচনা দেখুন
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    কোনো পোস্ট পাওয়া যায়নি
                  </h3>
                  <p className="text-gray-500 mb-4">
                    আপনার অনুসন্ধান বা ফিল্টার সামঞ্জস্য করুন
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveTab("all");
                      setSearchQuery("");
                    }}
                  >
                    ফিল্টার সাফ করুন
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <Button variant="outline" size="sm" disabled>
                  পূর্ববর্তী
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#9059a1]/20 text-[#9059a1]"
                >
                  ১
                </Button>
                <Button variant="outline" size="sm">
                  ২
                </Button>
                <Button variant="outline" size="sm">
                  ৩
                </Button>
                <Button variant="outline" size="sm">
                  পরবর্তী
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
