"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PartnerModePage() {
  const [linkCopied, setLinkCopied] = useState(false)
  const [inviteSent, setInviteSent] = useState(false)
  const [activeTab, setActiveTab] = useState("settings")

  const copyLink = () => {
    // In a real app, this would copy a unique link to the clipboard
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
  }

  const sendInvite = () => {
    // In a real app, this would send an email invitation
    setInviteSent(true)
    setTimeout(() => setInviteSent(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Partner Mode</h1>
          <p className="text-white opacity-90">
            Share selected health information with your partner in a controlled manner
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Tabs defaultValue="settings" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="settings" className="flex items-center justify-center gap-2">
              <User className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center justify-center gap-2">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center justify-center gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Partners</span>
            </TabsTrigger>
          </TabsList>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Partner Mode Settings</CardTitle>
                <CardDescription>Control what information your partner can access</CardDescription>
              </CardHeader>
              <CardContent>
                {linkCopied && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Link copied!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      You can now share this link with your partner.
                    </AlertDescription>
                  </Alert>
                )}

                {inviteSent && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <ThumbsUp className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Invitation sent!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your partner will receive an email with instructions to connect.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Share Health Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="period-cycle">Period Cycle</Label>
                        </div>
                        <Switch id="period-cycle" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Moon className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="mood">Mood Tracking</Label>
                        </div>
                        <Switch id="mood" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="appointments">Upcoming Appointments</Label>
                        </div>
                        <Switch id="appointments" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="reports">Health Reports</Label>
                        </div>
                        <Switch id="reports" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Pill className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="medications">Medications</Label>
                        </div>
                        <Switch id="medications" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Access Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="access-duration">Access Duration</Label>
                        </div>
                        <Select defaultValue="unlimited">
                          <SelectTrigger id="access-duration" className="w-[180px]">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="6-months">6 Months</SelectItem>
                            <SelectItem value="1-year">1 Year</SelectItem>
                            <SelectItem value="unlimited">Unlimited</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-[#F48FB1]" />
                          <Label htmlFor="revoke-anytime">Revoke Access Anytime</Label>
                        </div>
                        <Switch id="revoke-anytime" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Invite Partner</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="partner-email">Partner's Email</Label>
                        <div className="flex mt-1">
                          <Input
                            id="partner-email"
                            type="email"
                            placeholder="Enter your partner's email"
                            className="rounded-r-none"
                          />
                          <Button onClick={sendInvite} className="rounded-l-none bg-[#F48FB1] hover:bg-[#f8BBD0]">
                            <Mail className="h-4 w-4 mr-2" /> Invite
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="share-link">Or Share Link</Label>
                        <div className="flex mt-1">
                          <Input
                            id="share-link"
                            readOnly
                            value="https://womenshealth.app/partner/share/abc123"
                            className="rounded-r-none bg-gray-50"
                          />
                          <Button onClick={copyLink} className="rounded-l-none bg-[#F48FB1] hover:bg-[#f8BBD0]">
                            <Copy className="h-4 w-4 mr-2" /> Copy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">Back to Dashboard</Button>
                </Link>
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={() => setActiveTab("preview")}>
                  Preview Partner View
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Partner View Preview</CardTitle>
                <CardDescription>This is what your partner will see</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                    <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                      <Heart className="mr-2 h-5 w-5" /> Period Cycle
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Cycle Day:</span>
                        <span className="font-medium">Day 18 of 28</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Period Expected:</span>
                        <span className="font-medium">May 12, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fertile Window:</span>
                        <span className="font-medium">May 22-26, 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                    <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                      <Moon className="mr-2 h-5 w-5" /> Mood Tracking
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Today's Mood:</span>
                        <span className="font-medium">Calm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weekly Average:</span>
                        <span className="font-medium">Good</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                    <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" /> Upcoming Appointments
                    </h3>
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">Dr. Ayesha Rahman</h4>
                          <p className="text-sm text-gray-600">Gynecologist</p>
                        </div>
                        <span className="text-xs bg-[#f8BBD0] text-[#F48FB1] px-2 py-1 rounded-full">Video</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Tomorrow</span>
                        <Clock className="ml-3 mr-2 h-4 w-4" />
                        <span>10:30 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" onClick={() => setActiveTab("settings")}>
                  Back to Settings
                </Button>
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={() => setActiveTab("partners")}>
                  Manage Partners
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Manage Partners</CardTitle>
                <CardDescription>Control who has access to your health information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rahul Khan" />
                          <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Rahul Khan</h4>
                          <p className="text-sm text-gray-600">rahul.khan@example.com</p>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Active
                            </Badge>
                            <span className="text-xs text-gray-500 ml-2">Since April 10, 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm" className="h-8">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Priya Sharma" />
                          <AvatarFallback>PS</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Priya Sharma</h4>
                          <p className="text-sm text-gray-600">priya.s@example.com</p>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              Pending
                            </Badge>
                            <span className="text-xs text-gray-500 ml-2">Invited on May 1, 2025</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8">
                          Resend
                        </Button>
                        <Button variant="destructive" size="sm" className="h-8">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => setActiveTab("settings")}
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>Invite New Partner</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Link href="/patient/dashboard">
                  <Button variant="outline">Back to Dashboard</Button>
                </Link>
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={() => setActiveTab("settings")}>
                  Update Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
