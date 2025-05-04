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
  Search,
  Stethoscope,
  Thermometer,
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

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsAnalyzing(true);
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 5;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
        }
      }, 150);
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
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-[#9059a1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">লক্ষণ পরীক্ষক</h1>
          <p className="text-white opacity-90">
            সম্ভাব্য স্বাস্থ্য সমস্যা নির্ধারণ করুন এবং পরবর্তী পদক্ষেপের জন্য
            পরামর্শ পান
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>
              {showResults
                ? "লক্ষণ বিশ্লেষণ ফলাফল"
                : isAnalyzing
                ? "আপনার লক্ষণ বিশ্লেষণ করা হচ্ছে"
                : "আপনার লক্ষণ পরীক্ষা করুন"}
            </CardTitle>
            <CardDescription>
              {showResults
                ? "আপনার দেওয়া তথ্যের ভিত্তিতে"
                : isAnalyzing
                ? "দয়া করে অপেক্ষা করুন, আমাদের AI লক্ষণ বিশ্লেষণ করছে"
                : "কিছু প্রশ্নের উত্তর দিন যাতে আমরা আপনার লক্ষণ বুঝতে পারি"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {isAnalyzing ? (
              <div className="text-center py-8 space-y-6">
                <Loader2 className="h-12 w-12 text-[#9059a1] animate-spin mx-auto" />
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    আপনার লক্ষণ বিশ্লেষণ করা হচ্ছে...
                  </h3>
                  <p className="text-gray-600 mb-4">
                    আমাদের AI আপনার লক্ষণ চিকিৎসা তথ্যের সঙ্গে তুলনা করছে।
                  </p>
                  <Progress
                    value={progress}
                    className="w-full max-w-md mx-auto"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {progress}% সম্পন্ন
                  </p>
                </div>
              </div>
            ) : showResults ? (
              <div className="space-y-6">
                {/* Results Summary */}
                <div className="p-4 bg-[#9059a1]/10 rounded-lg border border-[#9059a1]">
                  <h3 className="font-medium text-[#9059a1] mb-3 flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> লক্ষণ বিশ্লেষণ
                    সারসংক্ষেপ
                  </h3>
                  <p className="text-gray-700 mb-4">
                    আপনার দেওয়া লক্ষণগুলির ভিত্তিতে আমাদের বিশ্লেষণ নির্দেশ করে:
                  </p>

                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded border">
                      <div className="flex items-start">
                        <div className="bg-yellow-100 p-1 rounded-full mr-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            সম্ভাব্য PCOS সূচক
                          </h4>
                          <p className="text-sm text-gray-600">
                            অনিয়মিত মাসিক, ওজন বৃদ্ধি, এবং মেজাজ পরিবর্তন PCOS
                            এর সাধারণ লক্ষণ।
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded border">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3">
                          <Thermometer className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            হরমোনিক ভারসাম্যহীনতা
                          </h4>
                          <p className="text-sm text-gray-600">
                            লক্ষণগুলো হরমোন ভারসাম্যহীনতার ইঙ্গিত দিতে পারে, যা
                            চিকিৎসকের কাছে যাচাই করা উচিত।
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Actions */}
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#9059a1]" /> পরবর্তী
                    পরামর্শকৃত পদক্ষেপ
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        id: 1,
                        title: "গাইনেকোলজিস্টের সঙ্গে পরামর্শ করুন",
                        desc: "উপযুক্ত মূল্যায়ন ও নির্ণয়ের জন্য গাইনেকোলজিস্টের অ্যাপয়েন্টমেন্ট নিন।",
                        link: "/patient/consultation",
                        btn: "গাইনেকোলজিস্ট খুঁজুন",
                      },
                      {
                        id: 2,
                        title: "আপনার লক্ষণ ট্র্যাক করুন",
                        desc: "বিস্তারিত তথ্যের জন্য প্রতিদিন লক্ষণ রেকর্ড চালিয়ে যান।",
                        link: "/patient/daily-input",
                        btn: "দৈনিক ট্র্যাকিং",
                      },
                      {
                        id: 3,
                        title: "হরমোন টেস্ট বিবেচনা করুন",
                        desc: "PCOS সম্পর্কিত ভারসাম্যহীনতা যাচাই করতে হরমোন টেস্ট করাতে হতে পারে。",
                      },
                    ].map((stepData) => (
                      <div key={stepData.id} className="flex items-start">
                        <div className="bg-[#9059a1] rounded-full w-6 h-6 flex items-center justify-center mr-3 text-white font-medium">
                          {stepData.id}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {stepData.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {stepData.desc}
                          </p>
                          {stepData.link && (
                            <Link href={stepData.link}>
                              <Button
                                size="sm"
                                className="bg-[#9059a1] hover:bg-[#683f75]"
                              >
                                {stepData.btn}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Recommendations */}
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-[#9059a1]" />{" "}
                    সুপারিশকৃত বিশেষজ্ঞ
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "ডাঃ আইসা রহমান",
                        spec: "গাইনেকোলজিস্ট, PCOS বিশেষজ্ঞ",
                      },
                      {
                        name: "ডাঃ নাসরীন আহমেদ",
                        spec: "এন্ডোক্রিনোলজিস্ট, হরমোন বিশেষজ্ঞ",
                      },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="p-3 bg-white rounded border flex items-start"
                      >
                        <div className="bg-[#9059a1] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <Stethoscope className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {doc.name}
                            </h4>
                            <p className="text-sm text-gray-600">{doc.spec}</p>
                          </div>
                          <Link href="/patient/consultation">
                            <Button
                              size="sm"
                              className="bg-[#9059a1] hover:bg-[#683f75]"
                            >
                              বুক করুন
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-sm text-gray-500 italic">
                  <p>
                    দাবিত্যাগ: এই লক্ষণ পরীক্ষক শুধুমাত্র সাধারণ তথ্য প্রদান করে
                    এবং রোগ নির্ণয় বা চিকিৎসার জন্য ব্যবহার করা উচিত নয়।
                    সর্বদা একজন যোগ্য স্বাস্থ্যসেবা প্রদানকারীর কাছ থেকে চিকিৎসা
                    পরামর্শ নিন।
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Progress Steps */}
                <div className="flex justify-between mb-6">
                  {[1, 2, 3, 4].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`flex flex-col items-center ${
                        stepNumber < step
                          ? "text-[#9059a1]"
                          : stepNumber === step
                          ? "text-[#9059a1]"
                          : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                          stepNumber < step
                            ? "bg-[#9059a1] text-white"
                            : stepNumber === step
                            ? "border-2 border-[#9059a1] text-[#9059a1]"
                            : "border-2 border-gray-200 text-gray-400"
                        }`}
                      >
                        {stepNumber < step ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          stepNumber
                        )}
                      </div>
                      <span className="text-xs">
                        {stepNumber === 1
                          ? "মৌলিক তথ্য"
                          : stepNumber === 2
                          ? "লক্ষণ"
                          : stepNumber === 3
                          ? "সময়কাল"
                          : "অতিরিক্ত"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="age">বয়স</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="আপনার বয়স লিখুন"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label>জৈবিক লিঙ্গ</Label>
                      <RadioGroup defaultValue="female" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">মহিলা</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">পুরুষ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">অন্যান্য</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="pregnant">
                        আপনি কি গর্ভবতী বা সম্ভাব্য গর্ভবতী?
                      </Label>
                      <RadioGroup defaultValue="no" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="pregnant-yes" />
                          <Label htmlFor="pregnant-yes">হ্যাঁ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="pregnant-no" />
                          <Label htmlFor="pregnant-no">না</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="pregnant-unsure" />
                          <Label htmlFor="pregnant-unsure">নিশ্চিত নন</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="conditions">
                        আপনার কোনো বিদ্যমান চিকিৎসা শর্ত আছে কি?
                      </Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diabetes" />
                          <Label htmlFor="diabetes">ডায়াবেটিস</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hypertension" />
                          <Label htmlFor="hypertension">উচ্চ রক্তচাপ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="thyroid" />
                          <Label htmlFor="thyroid">থাইরয়েড রোগ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pcos" />
                          <Label htmlFor="pcos">PCOS</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="other-condition" />
                          <Label htmlFor="other-condition">অন্যান্য</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Symptoms */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="primary-symptom">
                        আপনার প্রাথমিক উদ্বেগ কী?
                      </Label>
                      <div className="relative mt-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="primary-symptom"
                          placeholder="লক্ষণ অনুসন্ধান করুন..."
                          className="pl-10"
                          defaultValue="অনিয়মিত মাসিক"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>
                        আপনার যে সমস্ত লক্ষণ দেখা যাচ্ছে তা নির্বাচন করুন:
                      </Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="irregular-periods" defaultChecked />
                          <Label htmlFor="irregular-periods">
                            অনিয়মিত মাসিক
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weight-gain" defaultChecked />
                          <Label htmlFor="weight-gain">ওজন বৃদ্ধি</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="acne" />
                          <Label htmlFor="acne">ব্রণ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hair-growth" />
                          <Label htmlFor="hair-growth">
                            অতিরিক্ত চুল গজানো
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mood-changes" defaultChecked />
                          <Label htmlFor="mood-changes">মেজাজ পরিবর্তন</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fatigue" />
                          <Label htmlFor="fatigue">ক্লান্তি</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="headaches" />
                          <Label htmlFor="headaches">মাথাব্যথা</Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="symptom-description">
                        আপনার লক্ষণগুলির বিস্তারিত বর্ণনা দিন:
                      </Label>
                      <Textarea
                        id="symptom-description"
                        placeholder="আপনার লক্ষণ সম্পর্কিত অতিরিক্ত বিবরণ প্রদান করুন..."
                        className="mt-1"
                        defaultValue="গত ৩ মাস ধরে আমার মাসিক অনিয়মিত। খাদ্যাভ্যাস বা ব্যায়ামে কোনো পরিবর্তন না থাকলেও ওজন বেড়েছে। মেজাজ পরিবর্তন ঘন ঘন হচ্ছে।"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Duration and Severity */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="duration">
                        আপনি কতদিন ধরে এই লক্ষণগুলি অনুভব করছেন?
                      </Label>
                      <Select defaultValue="3-months">
                        <SelectTrigger id="duration" className="mt-1">
                          <SelectValue placeholder="সময়কাল নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="days">কয়েক দিন</SelectItem>
                          <SelectItem value="1-week">
                            প্রায় এক সপ্তাহ
                          </SelectItem>
                          <SelectItem value="2-weeks">২ সপ্তাহ</SelectItem>
                          <SelectItem value="1-month">১ মাস</SelectItem>
                          <SelectItem value="3-months">৩ মাস</SelectItem>
                          <SelectItem value="6-months">
                            ৬ মাস বা বেশি
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="severity">
                        আপনার লক্ষণগুলির তীব্রতা কেমন?
                      </Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="severity" className="mt-1">
                          <SelectValue placeholder="তীব্রতা নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">
                            মৃদু - লক্ষণীয় কিন্তু ব্যাঘাতকারী নয়
                          </SelectItem>
                          <SelectItem value="moderate">
                            মাঝারি - দৈনন্দিন জীবনে কিছুটা ব্যাঘাত
                          </SelectItem>
                          <SelectItem value="severe">
                            গুরুতর - দৈনন্দিন কাজকর্মে উল্লেখযোগ্য প্রভাব
                          </SelectItem>
                          <SelectItem value="very-severe">
                            অত্যন্ত গুরুতর - স্বাভাবিক কাজ করা অসম্ভব
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="progression">
                        সময়ের সাথে লক্ষণগুলির কী পরিবর্তন হয়েছে?
                      </Label>
                      <Select defaultValue="worsening">
                        <SelectTrigger id="progression" className="mt-1">
                          <SelectValue placeholder="অবস্থার পরিবর্তন নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="improving">
                            উন্নতি হচ্ছে
                          </SelectItem>
                          <SelectItem value="stable">
                            স্থিতিশীল - কোনো উল্লেখযোগ্য পরিবর্তন নেই
                          </SelectItem>
                          <SelectItem value="fluctuating">
                            ওঠানামা করছে - কিছু দিন ভালো, কিছু দিন খারাপ
                          </SelectItem>
                          <SelectItem value="worsening">খারাপ হচ্ছে</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="triggers">
                        লক্ষণগুলি বাড়ানোর মতো কোনো ট্রিগার লক্ষ্য করেছেন কি?
                      </Label>
                      <Textarea
                        id="triggers"
                        placeholder="আপনার লক্ষণ বাড়ানোর মতো কোনো কারণ বর্ণনা করুন..."
                        className="mt-1"
                        defaultValue="চাপের সময় লক্ষণগুলো বেড়ে যায়। মাসিক শুরুর আগে মেজাজ পরিবর্তন বেশি হয়।"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="medications">
                        আপনি বর্তমানে কোন ওষুধ গ্রহণ করছেন?
                      </Label>
                      <Textarea
                        id="medications"
                        placeholder="বর্তমানে সেবনকৃত ওষুধের তালিকা করুন..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="allergies">
                        আপনার কোনো অ্যালার্জি আছে কি?
                      </Label>
                      <Textarea
                        id="allergies"
                        placeholder="আপনার অ্যালার্জির তালিকা করুন..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="family-history">
                        পরিবারে একই ধরনের লক্ষণ বা সম্পর্কিত রোগের ইতিহাস আছে
                        কি?
                      </Label>
                      <RadioGroup defaultValue="yes" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="family-yes" />
                          <Label htmlFor="family-yes">হ্যাঁ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="family-no" />
                          <Label htmlFor="family-no">না</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="family-unsure" />
                          <Label htmlFor="family-unsure">নিশ্চিত নন</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="family-details">
                        যদি হ্যাঁ, দয়া করে বিবরণ দিন:
                      </Label>
                      <Textarea
                        id="family-details"
                        placeholder="প্রাসঙ্গিক পারিবারিক চিকিৎসা ইতিহাস বর্ণনা করুন..."
                        className="mt-1"
                        defaultValue="আমার মায়ের ৩০ এর দশকে PCOS ধরা পড়েছিল। আমার বোনেরও অনিয়মিত মাসিক হয়।"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additional-info">
                        অন্য কোনো তথ্য শেয়ার করতে চান?
                      </Label>
                      <Textarea
                        id="additional-info"
                        placeholder="অন্যান্য প্রাসঙ্গিক তথ্য যোগ করুন..."
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>

          <CardFooter
            className={`flex ${
              showResults ? "justify-between" : "justify-end"
            } border-t pt-6`}
          >
            {showResults ? (
              <>
                <Button variant="outline" onClick={resetChecker}>
                  নতুন পরীক্ষা শুরু করুন
                </Button>
                <Link href="/patient/consultation">
                  <Button className="bg-[#9059a1] hover:bg-[#683f75]">
                    ডাক্তারের সাথে পরামর্শ করুন
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {step > 1 && !isAnalyzing && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="mr-auto"
                  >
                    পিছনে
                  </Button>
                )}
                {!isAnalyzing && (
                  <Button
                    onClick={handleNext}
                    className="bg-[#9059a1] hover:bg-[#683f75]"
                  >
                    {step < 4 ? (
                      <>
                        পরবর্তী <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "লক্ষণ বিশ্লেষণ করুন"
                    )}
                  </Button>
                )}
              </>
            )}
          </CardFooter>
        </Card>

        {/* Disclaimer */}
        {!showResults && !isAnalyzing && (
          <div className="mt-6 text-sm text-gray-500 italic">
            <p>
              দাবিত্যাগ: এই লক্ষণ পরীক্ষক শুধুমাত্র সাধারণ তথ্য প্রদান করে এবং
              রোগ নির্ণয় বা চিকিৎসার জন্য ব্যবহার করা উচিত নয়। সর্বদা একজন
              যোগ্য স্বাস্থ্যসেবা প্রদানকারীর কাছ থেকে চিকিৎসা পরামর্শ নিন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
