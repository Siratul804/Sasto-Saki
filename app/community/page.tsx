"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Plus, Search, Shield, ThumbsUp, Users, Filter, AlertCircle, Tag } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Dummy posts data
  const posts = [
    {
      id: 1,
      title: "Dealing with PCOS symptoms",
      content:
        "I was recently diagnosed with PCOS and I'm struggling with the symptoms. Has anyone found effective ways to manage the hormonal imbalances and mood swings?",
      author: "Anonymous",
      authorId: "A1",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      category: "PCOS",
      tags: ["hormones", "mood", "treatment"],
    },
    {
      id: 2,
      title: "Pregnancy anxiety during first trimester",
      content:
        "I'm 8 weeks pregnant and constantly worried about miscarriage. This is my first pregnancy after a loss last year. How do you manage the anxiety during early pregnancy?",
      author: "Anonymous",
      authorId: "A2",
      timestamp: "5 hours ago",
      likes: 32,
      comments: 15,
      category: "Pregnancy",
      tags: ["anxiety", "first trimester", "support"],
    },
    {
      id: 3,
      title: "Irregular periods after stopping birth control",
      content:
        "It's been 3 months since I stopped taking birth control pills, and my periods are still very irregular. Is this normal? How long did it take for your cycle to regulate?",
      author: "Anonymous",
      authorId: "A3",
      timestamp: "Yesterday",
      likes: 18,
      comments: 12,
      category: "Menstrual Health",
      tags: ["birth control", "periods", "hormones"],
    },
    {
      id: 4,
      title: "Postpartum depression resources",
      content:
        "I think I might be experiencing postpartum depression. I feel disconnected from my baby and constantly exhausted beyond just normal new parent tiredness. What resources helped you?",
      author: "Anonymous",
      authorId: "A4",
      timestamp: "2 days ago",
      likes: 45,
      comments: 23,
      category: "Mental Health",
      tags: ["postpartum", "depression", "resources"],
    },
    {
      id: 5,
      title: "Endometriosis pain management",
      content:
        "The pain from my endometriosis has been getting worse lately. Pain medication isn't helping much anymore. Has anyone found alternative treatments or management techniques that actually work?",
      author: "Anonymous",
      authorId: "A5",
      timestamp: "3 days ago",
      likes: 36,
      comments: 19,
      category: "Endometriosis",
      tags: ["pain", "treatment", "chronic illness"],
    },
  ]

  // Filter posts based on active tab and search query
  const filteredPosts = posts.filter((post) => {
    const matchesTab = activeTab === "all" || post.category.toLowerCase() === activeTab.toLowerCase()
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesTab && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Community Forum</h1>
          <p className="text-white opacity-90">
            Connect with others, share experiences, and get support in a safe, anonymous environment
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
                  <Shield className="mr-2 h-5 w-5 text-[#F48FB1]" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>Our community is a safe space for everyone. Please remember to:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>Be respectful and supportive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>Protect your privacy and others'</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>Avoid medical advice; share experiences only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#f8BBD0] rounded-full w-1.5 h-1.5 mr-2 mt-1.5"></span>
                      <span>Report inappropriate content</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Popular Topics</CardTitle>
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
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">24</Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("Pregnancy")}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                    Pregnancy
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">18</Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("Menstrual Health")}
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                    Menstrual Health
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">15</Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("Mental Health")}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    Mental Health
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">12</Badge>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => setActiveTab("Endometriosis")}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                    Endometriosis
                    <Badge className="ml-auto bg-gray-100 text-gray-600 hover:bg-gray-100">9</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-[#F48FB1] mr-2" />
                      <span className="text-sm">Members</span>
                    </div>
                    <span className="font-medium">5,280</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 text-[#F48FB1] mr-2" />
                      <span className="text-sm">Posts</span>
                    </div>
                    <span className="font-medium">1,342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-[#F48FB1] mr-2" />
                      <span className="text-sm">Supportive Reactions</span>
                    </div>
                    <span className="font-medium">8,976</span>
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
                  placeholder="Search discussions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0] flex items-center gap-1">
                      <Plus className="h-4 w-4" />
                      <span>New Post</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Create New Post</DialogTitle>
                      <DialogDescription>
                        Share your experience or ask a question. Your post will be anonymous.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="post-title">Title</Label>
                        <Input id="post-title" placeholder="Enter a clear, specific title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-category">Category</Label>
                        <Select>
                          <SelectTrigger id="post-category">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PCOS">PCOS</SelectItem>
                            <SelectItem value="Pregnancy">Pregnancy</SelectItem>
                            <SelectItem value="Menstrual Health">Menstrual Health</SelectItem>
                            <SelectItem value="Mental Health">Mental Health</SelectItem>
                            <SelectItem value="Endometriosis">Endometriosis</SelectItem>
                            <SelectItem value="General">General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-content">Your Post</Label>
                        <Textarea
                          id="post-content"
                          placeholder="Share your experience or question..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-tags">Tags (comma separated)</Label>
                        <Input id="post-tags" placeholder="e.g., symptoms, treatment, support" />
                      </div>
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                        <p className="text-xs text-gray-500">
                          Remember that while your username will be anonymous, you should still be mindful of sharing
                          personal details that might identify you.
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={() => setIsDialogOpen(false)}>
                        Post Anonymously
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="PCOS">PCOS</TabsTrigger>
                <TabsTrigger value="Pregnancy">Pregnancy</TabsTrigger>
                <TabsTrigger value="Menstrual Health">Menstrual</TabsTrigger>
                <TabsTrigger value="Mental Health">Mental</TabsTrigger>
                <TabsTrigger value="Endometriosis">Endometriosis</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
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
                            ${post.category === "PCOS" ? "bg-purple-100 text-purple-800 hover:bg-purple-100" : ""}
                            ${post.category === "Pregnancy" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}
                            ${post.category === "Menstrual Health" ? "bg-pink-100 text-pink-800 hover:bg-pink-100" : ""}
                            ${post.category === "Mental Health" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                            ${post.category === "Endometriosis" ? "bg-red-100 text-red-800 hover:bg-red-100" : ""}
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
                          <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2 border-t">
                      <div className="flex space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-600 flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <Button variant="link" className="text-[#F48FB1]">
                        View Discussion
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No posts found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveTab("all")
                      setSearchQuery("")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-[#f8BBD0] text-[#F48FB1]">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
