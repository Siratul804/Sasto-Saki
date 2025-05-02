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
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Doctor Portal</h1>
          <p className="text-white opacity-90">
            Manage your profile, appointments, and patient consultations
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
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Dr. Ayesha Rahman</h2>
                <p className="text-gray-600">Gynecologist</p>
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
                    (126 reviews)
                  </span>
                </div>
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                  Verified
                </Badge>
                <div className="w-full space-y-2 mt-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Edit className="h-4 w-4" /> Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Settings className="h-4 w-4" /> Account Settings
                  </Button>
                </div>
              </div>

              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-3">Professional Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Specialization:</span>
                    <span className="font-medium">Gynecologist</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">8 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration ID:</span>
                    <span className="font-medium">BMDC-A12345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">English, Bengali</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Consultation Fee:</span>
                    <span className="font-medium">৳800</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-6">
                <h3 className="font-medium mb-3">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">dr.ayesha@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">+880 1712 345678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hospital:</span>
                    <span className="font-medium">City Medical Center</span>
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
                    <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Today's Appointments
                      </p>
                      <h3 className="text-2xl font-bold">5</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Patients</p>
                      <h3 className="text-2xl font-bold">128</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="bg-[#f8BBD0] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Star className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <h3 className="text-2xl font-bold">4.9/5</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle>Doctor Dashboard</CardTitle>
                <CardDescription>
                  Manage your appointments and patient consultations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="appointments">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="appointments">Appointments</TabsTrigger>
                    <TabsTrigger value="patients">Patients</TabsTrigger>
                    <TabsTrigger value="availability">Availability</TabsTrigger>
                  </TabsList>

                  {/* Appointments Tab */}
                  <TabsContent value="appointments" className="space-y-4">
                    <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                      <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5" /> Today's Schedule
                      </h3>

                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>FA</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Fatima Ahmed</h4>
                                <p className="text-sm text-gray-600">
                                  28 years, Female
                                </p>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>10:30 AM - 11:00 AM</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                Video
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Confirmed
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
                              <span>View Details</span>
                            </Button>
                            <Button
                              size="sm"
                              className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]"
                            >
                              <Video className="h-4 w-4" />
                              <span>Start Consultation</span>
                            </Button>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>NI</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Nadia Islam</h4>
                                <p className="text-sm text-gray-600">
                                  32 years, Female
                                </p>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>11:30 AM - 12:00 PM</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-50 text-purple-700 border-purple-200"
                              >
                                Chat
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Confirmed
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
                              <span>View Details</span>
                            </Button>
                            <Button
                              size="sm"
                              className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>Start Chat</span>
                            </Button>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>SR</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Sadia Rahman</h4>
                                <p className="text-sm text-gray-600">
                                  25 years, Female
                                </p>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>2:00 PM - 2:30 PM</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                Video
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Confirmed
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
                              <span>View Details</span>
                            </Button>
                            <Button
                              size="sm"
                              className="flex items-center gap-1 bg-[#F48FB1] hover:bg-[#f8BBD0]"
                            >
                              <Video className="h-4 w-4" />
                              <span>Start Consultation</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      View All Appointments
                    </Button>
                  </TabsContent>

                  {/* Patients Tab */}
                  <TabsContent value="patients" className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search patients..."
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
                            <AvatarFallback>FA</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">Fatima Ahmed</h4>
                                <p className="text-sm text-gray-600">
                                  28 years, Female
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                View Profile
                              </Button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                Pregnancy
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-purple-50 text-purple-700 border-purple-200"
                              >
                                Regular Check-up
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <span className="font-medium">Last Visit:</span>{" "}
                              May 1, 2025
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>NI</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">Nadia Islam</h4>
                                <p className="text-sm text-gray-600">
                                  32 years, Female
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                View Profile
                              </Button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-700 border-red-200"
                              >
                                PCOS
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-orange-50 text-orange-700 border-orange-200"
                              >
                                Hormonal Issues
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <span className="font-medium">Last Visit:</span>{" "}
                              April 28, 2025
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>SR</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">Sadia Rahman</h4>
                                <p className="text-sm text-gray-600">
                                  25 years, Female
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                View Profile
                              </Button>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Family Planning
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-yellow-50 text-yellow-700 border-yellow-200"
                              >
                                Consultation
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <span className="font-medium">Last Visit:</span>{" "}
                              April 25, 2025
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      View All Patients
                    </Button>
                  </TabsContent>

                  {/* Availability Tab */}
                  <TabsContent value="availability" className="space-y-4">
                    <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                      <h3 className="font-medium text-[#F48FB1] mb-3">
                        Your Schedule
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Set your availability for consultations. Patients will
                        only be able to book appointments during these times.
                      </p>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                          <div>
                            <h4 className="font-medium">Monday</h4>
                            <p className="text-sm text-gray-600">
                              10:00 AM - 4:00 PM
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                          <div>
                            <h4 className="font-medium">Tuesday</h4>
                            <p className="text-sm text-gray-600">
                              10:00 AM - 4:00 PM
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                          <div>
                            <h4 className="font-medium">Wednesday</h4>
                            <p className="text-sm text-gray-600">
                              1:00 PM - 6:00 PM
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                          <div>
                            <h4 className="font-medium">Thursday</h4>
                            <p className="text-sm text-gray-600">
                              10:00 AM - 4:00 PM
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                          <div>
                            <h4 className="font-medium">Friday</h4>
                            <p className="text-sm text-gray-600">
                              10:00 AM - 2:00 PM
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border bg-gray-50">
                          <div>
                            <h4 className="font-medium text-gray-500">
                              Saturday
                            </h4>
                            <p className="text-sm text-gray-500">
                              Not Available
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Add Hours
                          </Button>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border bg-gray-50">
                          <div>
                            <h4 className="font-medium text-gray-500">
                              Sunday
                            </h4>
                            <p className="text-sm text-gray-500">
                              Not Available
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Add Hours
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg border">
                      <h3 className="font-medium mb-3">Time Off / Vacation</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border">
                          <div>
                            <h4 className="font-medium">Medical Conference</h4>
                            <p className="text-sm text-gray-600">
                              May 15 - May 18, 2025
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Schedule Time Off
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
