"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, ChevronRight, FileText, Upload } from "lucide-react"

export default function DoctorRegisterPage() {
  const [step, setStep] = useState(1)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit registration
      setRegistrationComplete(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Doctor Registration</h1>
          <p className="text-white opacity-90">
            Join our platform to connect with patients and provide remote consultations
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>{registrationComplete ? "Registration Successful" : "Doctor Registration"}</CardTitle>
            <CardDescription>
              {registrationComplete
                ? "Your account has been created and is pending verification"
                : "Complete the following steps to create your doctor account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrationComplete ? (
              <div className="text-center py-8 space-y-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Thank You for Registering!</h3>
                  <p className="text-gray-600 mb-4 max-w-md mx-auto">
                    Your registration has been submitted successfully. Our team will verify your credentials and
                    activate your account within 24-48 hours.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border max-w-md mx-auto text-left">
                  <h4 className="font-medium mb-2">Next Steps:</h4>
                  <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                    <li>We'll review your medical credentials and registration ID</li>
                    <li>You'll receive a verification email once approved</li>
                    <li>Complete your profile and set your availability</li>
                    <li>Start accepting patient consultations</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Progress Steps */}
                <div className="flex justify-between mb-6">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`flex flex-col items-center ${
                        stepNumber < step ? "text-[#F48FB1]" : stepNumber === step ? "text-[#F48FB1]" : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                          stepNumber < step
                            ? "bg-[#F48FB1] text-white"
                            : stepNumber === step
                              ? "border-2 border-[#F48FB1] text-[#F48FB1]"
                              : "border-2 border-gray-200 text-gray-400"
                        }`}
                      >
                        {stepNumber < step ? <Check className="h-4 w-4" /> : stepNumber}
                      </div>
                      <span className="text-xs">
                        {stepNumber === 1 ? "Personal Info" : stepNumber === 2 ? "Professional Info" : "Verification"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="Enter your address" className="mt-1" />
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Information */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="specialization">Specialization</Label>
                      <Select>
                        <SelectTrigger id="specialization" className="mt-1">
                          <SelectValue placeholder="Select your specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gynecologist">Gynecologist</SelectItem>
                          <SelectItem value="obstetrician">Obstetrician</SelectItem>
                          <SelectItem value="endocrinologist">Endocrinologist</SelectItem>
                          <SelectItem value="fertility-specialist">Fertility Specialist</SelectItem>
                          <SelectItem value="mental-health">Mental Health Specialist</SelectItem>
                          <SelectItem value="nutritionist">Nutritionist</SelectItem>
                          <SelectItem value="general-physician">General Physician</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select>
                        <SelectTrigger id="experience" className="mt-1">
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="11-15">11-15 years</SelectItem>
                          <SelectItem value="16+">16+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="registration-id">Medical Registration ID</Label>
                      <Input id="registration-id" placeholder="Enter your medical registration ID" className="mt-1" />
                      <p className="text-xs text-gray-500 mt-1">
                        This is your official doctor registration number issued by the medical council.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="hospital">Hospital/Clinic Affiliation</Label>
                      <Input id="hospital" placeholder="Enter your hospital or clinic name" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea id="bio" placeholder="Write a short professional bio..." className="mt-1" rows={4} />
                    </div>

                    <div>
                      <Label htmlFor="languages">Languages Spoken</Label>
                      <Select>
                        <SelectTrigger id="languages" className="mt-1">
                          <SelectValue placeholder="Select languages" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="bengali">Bengali</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="urdu">Urdu</SelectItem>
                          <SelectItem value="multiple">Multiple Languages</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Verification Documents */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                      <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                        <FileText className="mr-2 h-5 w-5" /> Required Documents
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Please upload the following documents to verify your identity and medical credentials. All
                        documents must be clear, legible, and in PDF or image format.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-[#F48FB1] mr-2 mt-0.5" />
                          <span>Medical degree certificate</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-[#F48FB1] mr-2 mt-0.5" />
                          <span>Medical registration certificate</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-[#F48FB1] mr-2 mt-0.5" />
                          <span>Government-issued ID (National ID, Passport, or Driver's License)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-[#F48FB1] mr-2 mt-0.5" />
                          <span>Recent professional photo</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="medical-degree">Medical Degree Certificate</Label>
                        <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">
                              Drag and drop your certificate here, or click to browse
                            </p>
                            <p className="text-xs text-gray-500">PDF, JPG, or PNG (max 5MB)</p>
                            <Button variant="outline" size="sm" className="mt-4">
                              Upload File
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="registration-cert">Medical Registration Certificate</Label>
                        <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">
                              Drag and drop your certificate here, or click to browse
                            </p>
                            <p className="text-xs text-gray-500">PDF, JPG, or PNG (max 5MB)</p>
                            <Button variant="outline" size="sm" className="mt-4">
                              Upload File
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="id-proof">Government-issued ID</Label>
                        <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">Drag and drop your ID here, or click to browse</p>
                            <p className="text-xs text-gray-500">PDF, JPG, or PNG (max 5MB)</p>
                            <Button variant="outline" size="sm" className="mt-4">
                              Upload File
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="profile-photo">Professional Photo</Label>
                        <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">
                              Drag and drop your photo here, or click to browse
                            </p>
                            <p className="text-xs text-gray-500">JPG or PNG (max 2MB)</p>
                            <Button variant="outline" size="sm" className="mt-4">
                              Upload File
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        By submitting this registration, you confirm that all information provided is accurate and that
                        you are a licensed medical professional. False information may result in account termination.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            {registrationComplete ? (
              <div className="w-full flex justify-center">
                <Link href="/doctor/profile">
                  <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]">Go to Doctor Dashboard</Button>
                </Link>
              </div>
            ) : (
              <>
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <Link href="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                )}
                <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]" onClick={handleNext}>
                  {step < 3 ? (
                    <>
                      Next <ChevronRight className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
