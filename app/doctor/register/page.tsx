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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, ChevronRight, FileText, Upload } from "lucide-react";

export default function DoctorRegisterPage() {
  const [step, setStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      setRegistrationComplete(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            ডাক্তারের নিবন্ধন
          </h1>
          <p className="text-white opacity-90">
            রোগীদের সাথে সংযোগ করতে এবং দূর থেকে পরামর্শ দিতে আমাদের
            প্ল্যাটফর্মে যোগ দিন
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>
              {registrationComplete ? "নিবন্ধন সফল" : "ডাক্তারের নিবন্ধন"}
            </CardTitle>
            <CardDescription>
              {registrationComplete
                ? "আপনার অ্যাকাউন্ট তৈরি হয়েছে এবং যাচাইকরণের অপেক্ষায়"
                : "ডাক্তার অ্যাকাউন্ট তৈরি করতে নিম্নলিখিত ধাপগুলো পূরণ করুন"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {registrationComplete ? (
              <div className="text-center py-8 space-y-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  নিবন্ধনের জন্য ধন্যবাদ!
                </h3>
                <p className="text-gray-600 mb-4 max-w-md mx-auto">
                  আপনার নিবন্ধন সফলভাবে জমা হয়েছে। ২৪-৪৮ ঘণ্টার মধ্যে যাচাই
                  সম্পন্ন করা হবে।
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border max-w-md mx-auto text-left">
                  <h4 className="font-medium mb-2">পরবর্তী ধাপ:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>
                      মেডিকেল ক্রেডেনশিয়াল এবং রেজিস্ট্রেশন আইডি পর্যালোচনা করা
                      হবে
                    </li>
                    <li>অনুমোদিত হলে যাচাই ইমেইল পাঠানো হবে</li>
                    <li>আপনার প্রোফাইল সম্পূর্ণ করুন এবং উপলভ্যতা সেট করুন</li>
                    <li>রোগী পরামর্শ গ্রহণ শুরু করুন</li>
                  </ol>
                </div>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex justify-between mb-6">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`flex flex-col items-center ${
                        num <= step ? "text-[#9059a1]" : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 mb-1 flex items-center justify-center rounded-full ${
                          num < step
                            ? "bg-[#9059a1] text-white"
                            : num === step
                            ? "border-2 border-[#9059a1] text-[#9059a1]"
                            : "border-2 border-gray-200"
                        }`}
                      >
                        {num < step ? <Check className="h-4 w-4" /> : num}
                      </div>
                      <span className="text-xs">
                        {num === 1
                          ? "ব্যক্তিগত তথ্য"
                          : num === 2
                          ? "পেশাদার তথ্য"
                          : "যাচাইকরণ"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first">নামের প্রথম অংশ</Label>
                        <Input
                          id="first"
                          placeholder="নামের প্রথম অংশ লিখুন"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="last">নামের শেষাংশ</Label>
                        <Input
                          id="last"
                          placeholder="নামের শেষাংশ লিখুন"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">ইমেইল</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ইমেইল লিখুন"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">ফোন নম্বর</Label>
                      <Input
                        id="phone"
                        placeholder="ফোন নম্বর লিখুন"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">পাসওয়ার্ড</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="পাসওয়ার্ড তৈরি করুন"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirm">পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input
                          id="confirm"
                          type="password"
                          placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">ঠিকানা</Label>
                      <Textarea
                        id="address"
                        placeholder="ঠিকানা লিখুন"
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="specialty">বিশেষজ্ঞতা</Label>
                      <Select>
                        <SelectTrigger id="specialty" className="mt-1">
                          <SelectValue placeholder="বিশেষজ্ঞতা নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gynecologist">
                            গাইনেকোলজিস্ট
                          </SelectItem>
                          <SelectItem value="obstetrician">
                            অবসটেট্রিশিয়ান
                          </SelectItem>
                          <SelectItem value="endocrinologist">
                            এন্ডোক্রিনোলজিস্ট
                          </SelectItem>
                          <SelectItem value="fertility">
                            উর্বরতা বিশেষজ্ঞ
                          </SelectItem>
                          <SelectItem value="mental">
                            মানসিক স্বাস্থ্য বিশেষজ্ঞ
                          </SelectItem>
                          <SelectItem value="nutritionist">
                            পুষ্টিবিদ
                          </SelectItem>
                          <SelectItem value="general">
                            সাধারণ চিকিৎসক
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">অভিজ্ঞতার বছর</Label>
                      <Select>
                        <SelectTrigger id="experience" className="mt-1">
                          <SelectValue placeholder="অভিজ্ঞতার বছর নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 বছর</SelectItem>
                          <SelectItem value="3-5">3-5 বছর</SelectItem>
                          <SelectItem value="6-10">6-10 বছর</SelectItem>
                          <SelectItem value="11-15">11-15 বছর</SelectItem>
                          <SelectItem value="16+">16+ বছর</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="regid">মেডিকেল রেজিস্ট্রেশন আইডি</Label>
                      <Input
                        id="regid"
                        placeholder="রেজিস্ট্রেশন আইডি লিখুন"
                        className="mt-1"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        এটি আপনার মেডিকেল কাউন্সিল দ্বারা প্রদত্ত অফিসিয়াল
                        নম্বর।
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="hospital">হাসপাতাল/클িনিক</Label>
                      <Input
                        id="hospital"
                        placeholder="হাসপাতাল বা 클িনিকের নাম"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">পেশাগত বায়ো</Label>
                      <Textarea
                        id="bio"
                        placeholder="সংক্ষিপ্ত বায়ো লিখুন"
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="languages">ভাষা</Label>
                      <Select>
                        <SelectTrigger id="languages" className="mt-1">
                          <SelectValue placeholder="ভাষা নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">ইংরেজি</SelectItem>
                          <SelectItem value="bengali">বাংলা</SelectItem>
                          <SelectItem value="hindi">হিন্দি</SelectItem>
                          <SelectItem value="urdu">উর্দু</SelectItem>
                          <SelectItem value="multiple">একাধিক</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                      <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                        <FileText className="mr-2 h-5 w-5" /> প্রয়োজনীয় নথি
                      </h3>
                      <p className="text-gray-600 mb-4">
                        পরিচয় ও ক্রেডেনশিয়াল যাচাই করতে নথি আপলোড করুন। PDF বা
                        ছবি ফরম্যাটে হতে হবে।
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>মেডিকেল ডিগ্রী সার্টিফিকেট</li>
                        <li>রেজিস্ট্রেশান সার্টিফিকেট</li>
                        <li>সরকারি চিহ্নিত আইডি</li>
                        <li>পেশাগত ছবি</li>
                      </ul>
                    </div>

                    {[
                      { id: "degree", label: "ডিগ্রী সার্টিফিকেট" },
                      {
                        id: "registrationCert",
                        label: "রেজিস্ট্রেশান সার্টিফিকেট",
                      },
                      { id: "idProof", label: "সরকারি আইডি" },
                      { id: "photo", label: "পেশাগত ছবি" },
                    ].map((field) => (
                      <div key={field.id}>
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">
                              এখানে ফাইল টেনে আনুন বা ক্লিক করুন
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, JPG, PNG
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4"
                            >
                              আপলোড করুন
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        তথ্য সত্য হওয়ার নিশ্চয়তা দিন। মিথ্যা তথ্য অ্যাকাউন্ট
                        বাতিল করতে পারে।
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            {registrationComplete ? (
              <div className="w-full flex justify-center">
                <Link href="/doctor/profile">
                  <Button className="bg-[#9059a1] hover:bg-[#683f75]">
                    ড্যাশবোর্ডে যান
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    পেছনে
                  </Button>
                ) : (
                  <Link href="/">
                    <Button variant="outline">বাতিল</Button>
                  </Link>
                )}
                <Button
                  className="bg-[#9059a1] hover:bg-[#683f75]"
                  onClick={handleNext}
                >
                  {step < 3 ? (
                    <>
                      পরবর্তী <ChevronRight className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    "নিবন্ধন জমা"
                  )}
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
