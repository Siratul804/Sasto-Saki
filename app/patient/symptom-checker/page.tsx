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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  FileText,
  Loader2,
  Stethoscope,
  Thermometer,
  Heart,
  Clock,
  User,
  ArrowLeft,
  Shield,
  Calendar,
  Phone,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function SymptomCheckerPage() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsAnalyzing(true);
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 10;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
        }
      }, 200);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetChecker = () => {
    setStep(1);
    setIsAnalyzing(false);
    setShowResults(false);
    setProgress(0);
    setSelectedSymptoms([]);
  };

  const handleSymptomChange = (symptom: any, checked: any) => {
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    }
  };

  const commonSymptoms = [
    {
      id: "irregular-periods",
      label: "অনিয়মিত মাসিক",
      icon: Heart,
      color: "pink",
    },
    { id: "weight-gain", label: "ওজন বৃদ্ধি", icon: User, color: "blue" },
    {
      id: "mood-changes",
      label: "মেজাজ পরিবর্তন",
      icon: Heart,
      color: "purple",
    },
    { id: "fatigue", label: "ক্লান্তি", icon: Clock, color: "orange" },
    { id: "headaches", label: "মাথাব্যথা", icon: Thermometer, color: "red" },
    { id: "acne", label: "ব্রণ", icon: User, color: "green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50  ">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-[#9059a1] to-[#ba98c4] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {showResults
                ? "আপনার স্বাস্থ্য রিপোর্ট"
                : "স্মার্ট লক্ষণ পরীক্ষক"}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              {showResults
                ? "আপনার লক্ষণের ভিত্তিতে প্রাথমিক মূল্যায়ন এবং পরামর্শ"
                : "কয়েকটি সহজ প্রশ্নের উত্তর দিন এবং AI-চালিত স্বাস্থ্য পরামর্শ পান"}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm max-w-4xl mx-auto">
          {!showResults && !isAnalyzing && (
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-6">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mx-2 transition-all ${
                        stepNumber < step
                          ? "bg-[#9059a1] text-white shadow-lg"
                          : stepNumber === step
                          ? "bg-[#9059a1] text-white shadow-lg scale-110"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {stepNumber < step ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    {stepNumber < 3 && (
                      <div
                        className={`w-16 h-1 ${
                          stepNumber < step ? "bg-[#9059a1]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <CardTitle className="text-xl">
                {step === 1
                  ? "আপনার মূল তথ্য"
                  : step === 2
                  ? "আপনার লক্ষণ নির্বাচন করুন"
                  : "অতিরিক্ত তথ্য"}
              </CardTitle>
              <CardDescription>
                {step === 1
                  ? "প্রাথমিক তথ্য দিয়ে শুরু করুন"
                  : step === 2
                  ? "যে লক্ষণগুলো আপনার আছে সেগুলো বেছে নিন"
                  : "আরও নির্ভুল পরামর্শের জন্য"}
              </CardDescription>
            </CardHeader>
          )}

          <CardContent className="px-8">
            {isAnalyzing ? (
              <div className="text-center py-12 space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                  <Loader2 className="h-12 w-12 text-[#9059a1] animate-spin" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    আপনার স্বাস্থ্য বিশ্লেষণ করা হচ্ছে...
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    আমাদের AI সিস্টেম আপনার লক্ষণগুলো বিশ্লেষণ করে সম্ভাব্য কারণ
                    এবং পরামর্শ প্রস্তুত করছে।
                  </p>
                  <div className="max-w-sm mx-auto">
                    <Progress value={progress} className="h-3" />
                    <p className="text-sm text-gray-500 mt-2">
                      {progress}% সম্পন্ন
                    </p>
                  </div>
                </div>
              </div>
            ) : showResults ? (
              <div className="space-y-8 py-6">
                {/* Results Summary */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-[#9059a1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    আপনার স্বাস্থ্য মূল্যায়ন সম্পন্ন
                  </h3>
                  <p className="text-gray-600">
                    আপনার দেওয়া তথ্যের ভিত্তিতে আমাদের প্রাথমিক বিশ্লেষণ
                  </p>
                </div>

                {/* Key Findings */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-500 p-2 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          সম্ভাব্য PCOS সূচক
                        </h4>
                        <p className="text-sm text-gray-600">
                          আপনার লক্ষণগুলো PCOS (পলিসিস্টিক ওভারি সিনড্রোম) এর
                          সাথে মিলে যাচ্ছে। এটি খুবই সাধারণ এবং চিকিৎসাযোগ্য।
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          হরমোনাল ভারসাম্যহীনতা
                        </h4>
                        <p className="text-sm text-gray-600">
                          আপনার লক্ষণগুলো হরমোনের ভারসাম্যহীনতার ইঙ্গিত দিচ্ছে।
                          সঠিক চিকিৎসায় এটি নিয়ন্ত্রণ করা সম্ভব।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Immediate Actions */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-[#9059a1]" />
                    আপনার জন্য পরামর্শ
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Calendar className="h-8 w-8 text-[#9059a1] mx-auto mb-2" />
                      <h4 className="font-medium mb-1">জরুরি নয়</h4>
                      <p className="text-sm text-gray-600">
                        ১-২ সপ্তাহের মধ্যে ডাক্তার দেখান
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Stethoscope className="h-8 w-8 text-[#9059a1] mx-auto mb-2" />
                      <h4 className="font-medium mb-1">স্ত্রীরোগ বিশেষজ্ঞ</h4>
                      <p className="text-sm text-gray-600">
                        গাইনেকোলজিস্টের পরামর্শ নিন
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Heart className="h-8 w-8 text-[#9059a1] mx-auto mb-2" />
                      <h4 className="font-medium mb-1">জীবনযাত্রা</h4>
                      <p className="text-sm text-gray-600">
                        স্বাস্থ্যকর খাবার ও ব্যায়াম
                      </p>
                    </div>
                  </div>
                </div>

                {/* Doctor Recommendations */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-800 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-[#9059a1]" />
                    সুপারিশকৃত বিশেষজ্ঞ
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "ডাঃ আয়েশা রহমান",
                        spec: "গাইনেকোলজিস্ট ও PCOS বিশেষজ্ঞ",
                        rating: "৪.৮",
                        experience: "১৫+ বছর অভিজ্ঞতা",
                      },
                      {
                        name: "ডাঃ নাসরীন আহমেদ",
                        spec: "এন্ডোক্রিনোলজিস্ট",
                        rating: "৪.৭",
                        experience: "১২+ বছর অভিজ্ঞতা",
                      },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {doc.name}
                            </h4>
                            <p className="text-sm text-gray-600">{doc.spec}</p>
                            <p className="text-xs text-gray-500">
                              {doc.experience}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-yellow-500 text-sm">
                              ⭐ {doc.rating}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Link href="/patient/consultation" className="flex-1">
                            <Button
                              size="sm"
                              className="w-full bg-[#9059a1] hover:bg-[#683f75]"
                            >
                              <Calendar className="mr-1 h-3 w-3" />
                              বুক করুন
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <Phone className="mr-1 h-3 w-3" />
                            কল করুন
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Note */}
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 mb-1">
                        গুরুত্বপূর্ণ নোট
                      </h4>
                      <p className="text-sm text-amber-700">
                        এই পরীক্ষা শুধুমাত্র প্রাথমিক ধারণা দেয়। চূড়ান্ত
                        নির্ণয় এবং চিকিৎসার জন্য অবশ্যই একজন যোগ্য চিকিৎসকের
                        পরামর্শ নিন। জরুরি অবস্থায় ১৯৯ নম্বরে কল করুন।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8 py-2">
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="age" className="text-base font-medium">
                          বয়স *
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="উদাহরণ: ২৫"
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label className="text-base font-medium">
                          আপনি কি গর্ভবতী? *
                        </Label>
                        <RadioGroup defaultValue="no" className="mt-3">
                          <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                            <RadioGroupItem value="no" id="pregnant-no" />
                            <Label
                              htmlFor="pregnant-no"
                              className="cursor-pointer"
                            >
                              না
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                            <RadioGroupItem value="yes" id="pregnant-yes" />
                            <Label
                              htmlFor="pregnant-yes"
                              className="cursor-pointer"
                            >
                              হ্যাঁ
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                            <RadioGroupItem
                              value="unsure"
                              id="pregnant-unsure"
                            />
                            <Label
                              htmlFor="pregnant-unsure"
                              className="cursor-pointer"
                            >
                              নিশ্চিত নই
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        আপনার কোনো দীর্ঘমেয়াদী রোগ আছে কি?
                      </Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { id: "diabetes", label: "ডায়াবেটিস" },
                          { id: "hypertension", label: "উচ্চ রক্তচাপ" },
                          { id: "thyroid", label: "থাইরয়েড সমস্যা" },
                          { id: "pcos", label: "PCOS/PCOD" },
                        ].map((condition) => (
                          <div
                            key={condition.id}
                            className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                          >
                            <Checkbox id={condition.id} />
                            <Label
                              htmlFor={condition.id}
                              className="cursor-pointer"
                            >
                              {condition.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Symptoms Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        যে লক্ষণগুলো আপনার মধ্যে দেখা যাচ্ছে সেগুলো নির্বাচন
                        করুন
                      </h3>
                      <p className="text-gray-600">
                        একাধিক লক্ষণ নির্বাচন করতে পারেন
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {commonSymptoms.map((symptom) => {
                        const Icon = symptom.icon;
                        const isSelected = selectedSymptoms.includes(
                          symptom.id
                        );
                        return (
                          <div
                            key={symptom.id}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                              isSelected
                                ? "border-[#9059a1] bg-purple-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() =>
                              handleSymptomChange(symptom.id, !isSelected)
                            }
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  isSelected ? "bg-[#9059a1]" : "bg-gray-100"
                                }`}
                              >
                                <Icon
                                  className={`h-5 w-5 ${
                                    isSelected ? "text-white" : "text-gray-600"
                                  }`}
                                />
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    isSelected
                                      ? "text-[#9059a1]"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {symptom.label}
                                </h4>
                              </div>
                              {isSelected && (
                                <Check className="h-5 w-5 text-[#9059a1] ml-auto" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <Label
                        htmlFor="other-symptoms"
                        className="text-base font-medium"
                      >
                        অন্য কোনো লক্ষণ আছে কি?
                      </Label>
                      <Textarea
                        id="other-symptoms"
                        placeholder="আপনার অন্যান্য লক্ষণ বিস্তারিত লিখুন..."
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Duration and Severity */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="duration"
                          className="text-base font-medium"
                        >
                          কতদিন ধরে এই লক্ষণগুলো আছে? *
                        </Label>
                        <Select defaultValue="">
                          <SelectTrigger id="duration" className="mt-2 h-12">
                            <SelectValue placeholder="সময়কাল নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="few-days">কয়েক দিন</SelectItem>
                            <SelectItem value="1-week">১ সপ্তাহ</SelectItem>
                            <SelectItem value="2-weeks">২-৩ সপ্তাহ</SelectItem>
                            <SelectItem value="1-month">১ মাস</SelectItem>
                            <SelectItem value="3-months">৩ মাস</SelectItem>
                            <SelectItem value="6-months">
                              ৬ মাস বা বেশি
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="severity"
                          className="text-base font-medium"
                        >
                          লক্ষণের তীব্রতা কেমন? *
                        </Label>
                        <Select defaultValue="">
                          <SelectTrigger id="severity" className="mt-2 h-12">
                            <SelectValue placeholder="তীব্রতা নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">মৃদু - সহনীয়</SelectItem>
                            <SelectItem value="moderate">
                              মাঝারি - কিছুটা অসুবিধা
                            </SelectItem>
                            <SelectItem value="severe">
                              তীব্র - দৈনন্দিন কাজে বাধা
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="additional-info"
                        className="text-base font-medium"
                      >
                        অন্য কোনো গুরুত্বপূর্ণ তথ্য যা আমাদের জানা উচিত?
                      </Label>
                      <Textarea
                        id="additional-info"
                        placeholder="যেমন: পারিবারিক ইতিহাস, বর্তমানে কোনো ওষুধ সেবন, কোনো অ্যালার্জি ইত্যাদি..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>

          <CardFooter
            className={`flex ${
              showResults ? "justify-between" : "justify-between"
            } border-t pt-6 px-8`}
          >
            {showResults ? (
              <>
                <Button
                  variant="outline"
                  onClick={resetChecker}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  নতুন পরীক্ষা
                </Button>
                <Link href="/patient/consultation">
                  <Button className="bg-[#9059a1] hover:bg-[#683f75] flex items-center">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    ডাক্তারের পরামর্শ নিন
                  </Button>
                </Link>
              </>
            ) : !isAnalyzing ? (
              <>
                <div>
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      পিছনে
                    </Button>
                  )}
                </div>
                <Button
                  onClick={handleNext}
                  className="bg-[#9059a1] hover:bg-[#683f75] flex items-center px-8"
                >
                  {step < 3 ? (
                    <>
                      পরবর্তী <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <Stethoscope className="mr-2 h-4 w-4" />
                      বিশ্লেষণ করুন
                    </>
                  )}
                </Button>
              </>
            ) : null}
          </CardFooter>
        </Card>

        {/* Help Section */}
        {!showResults && !isAnalyzing && (
          <div className="mt-8 max-w-4xl mx-auto py-4 ">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">
                    নিরাপত্তা ও গোপনীয়তা
                  </h3>
                  <p className="text-blue-700 text-sm">
                    আপনার সব তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয়। আমরা আপনার
                    ব্যক্তিগত তথ্য কারো সাথে শেয়ার করি না। এই পরীক্ষা শুধুমাত্র
                    প্রাথমিক ধারণা দেয় - চূড়ান্ত নির্ণয়ের জন্য অবশ্যই
                    ডাক্তারের পরামর্শ নিন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
