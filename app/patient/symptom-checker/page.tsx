"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertTriangle, ArrowRight, Check, FileText, Loader2, Search, Stethoscope, Thermometer } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function SymptomCheckerPage() {
  const [step, setStep] = useState(1)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Start analysis
      setIsAnalyzing(true)
      let progressValue = 0
      const interval = setInterval(() => {
        progressValue += 5
        setProgress(progressValue)
        if (progressValue >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setShowResults(true)
        }
      }, 150)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const resetChecker = () => {
    setStep(1)
    setIsAnalyzing(false)
    setShowResults(false)
    setProgress(0)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Symptom Checker</h1>
          <p className="text-white opacity-90">
            Identify potential health concerns and get recommendations for next steps
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>
              {showResults
                ? "Symptom Analysis Results"
                : isAnalyzing
                  ? "Analyzing Your Symptoms"
                  : "Check Your Symptoms"}
            </CardTitle>
            <CardDescription>
              {showResults
                ? "Based on the information you provided"
                : isAnalyzing
                  ? "Please wait while our AI analyzes your symptoms"
                  : "Answer a few questions to help us understand your symptoms"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isAnalyzing ? (
              <div className="text-center py-8 space-y-6">
                <Loader2 className="h-12 w-12 text-[#F48FB1] animate-spin mx-auto" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Analyzing your symptoms...</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI is processing your symptoms and comparing them with medical data.
                  </p>
                  <Progress value={progress} className="w-full max-w-md mx-auto" />
                  <p className="text-sm text-gray-500 mt-2">{progress}% complete</p>
                </div>
              </div>
            ) : showResults ? (
              <div className="space-y-6">
                {/* Results Summary */}
                <div className="p-4 bg-[#f8BBD0]/10 rounded-lg border border-[#f8BBD0]">
                  <h3 className="font-medium text-[#F48FB1] mb-3 flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> Symptom Analysis Summary
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Based on the symptoms you've described, here's what our analysis suggests:
                  </p>

                  <div className="space-y-4">
                    <div className="p-3 bg-white rounded border">
                      <div className="flex items-start">
                        <div className="bg-yellow-100 p-1 rounded-full mr-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Possible PCOS Indicators</h4>
                          <p className="text-sm text-gray-600">
                            Your symptoms of irregular periods, weight gain, and mood changes are common indicators of
                            Polycystic Ovary Syndrome (PCOS).
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
                          <h4 className="font-medium text-gray-800">Hormonal Imbalance</h4>
                          <p className="text-sm text-gray-600">
                            The combination of symptoms may indicate a hormonal imbalance that should be evaluated by a
                            healthcare provider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Actions */}
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#F48FB1]" /> Recommended Next Steps
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-[#f8BBD0] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-white font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Consult with a Gynecologist</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Schedule an appointment with a gynecologist for proper evaluation and diagnosis.
                        </p>
                        <Link href="/patient/consultation">
                          <Button size="sm" className="bg-[#F48FB1] hover:bg-[#f8BBD0]">
                            Find a Gynecologist
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#f8BBD0] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-white font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Track Your Symptoms</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Continue tracking your symptoms daily to provide your doctor with detailed information.
                        </p>
                        <Link href="/patient/daily-input">
                          <Button size="sm" variant="outline">
                            Go to Daily Tracking
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#f8BBD0] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-white font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Consider Hormone Testing</h4>
                        <p className="text-sm text-gray-600">
                          Your doctor may recommend hormone tests to check for imbalances related to PCOS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Recommendations */}
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-[#F48FB1]" /> Recommended Specialists
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded border flex items-start">
                      <div className="bg-[#f8BBD0] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Stethoscope className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">Dr. Ayesha Rahman</h4>
                            <p className="text-sm text-gray-600">Gynecologist, PCOS Specialist</p>
                          </div>
                          <Link href="/patient/consultation">
                            <Button size="sm" className="bg-[#F48FB1] hover:bg-[#f8BBD0]">
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded border flex items-start">
                      <div className="bg-[#f8BBD0] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Stethoscope className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">Dr. Nasreen Ahmed</h4>
                            <p className="text-sm text-gray-600">Endocrinologist, Hormone Specialist</p>
                          </div>
                          <Link href="/patient/consultation">
                            <Button size="sm" className="bg-[#F48FB1] hover:bg-[#f8BBD0]">
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-sm text-gray-500 italic">
                  <p>
                    Disclaimer: This symptom checker provides general information only and should not be used for
                    diagnosis or treatment. Always consult with a qualified healthcare provider for medical advice.
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
                        {stepNumber === 1
                          ? "Basic Info"
                          : stepNumber === 2
                            ? "Symptoms"
                            : stepNumber === 3
                              ? "Duration"
                              : "Additional"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter your age" className="mt-1" />
                    </div>

                    <div>
                      <Label>Biological Sex</Label>
                      <RadioGroup defaultValue="female" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="pregnant">Are you pregnant or possibly pregnant?</Label>
                      <RadioGroup defaultValue="no" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="pregnant-yes" />
                          <Label htmlFor="pregnant-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="pregnant-no" />
                          <Label htmlFor="pregnant-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="pregnant-unsure" />
                          <Label htmlFor="pregnant-unsure">Unsure</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="conditions">Do you have any existing medical conditions?</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diabetes" />
                          <label
                            htmlFor="diabetes"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Diabetes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hypertension" />
                          <label
                            htmlFor="hypertension"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hypertension
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="thyroid" />
                          <label
                            htmlFor="thyroid"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Thyroid Disorder
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pcos" />
                          <label
                            htmlFor="pcos"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            PCOS
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="other-condition" />
                          <label
                            htmlFor="other-condition"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Symptoms */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="primary-symptom">What is your primary concern?</Label>
                      <div className="relative mt-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="primary-symptom"
                          placeholder="Search symptoms..."
                          className="pl-10"
                          defaultValue="Irregular periods"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Select all symptoms you are experiencing:</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="irregular-periods" defaultChecked />
                          <label
                            htmlFor="irregular-periods"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Irregular periods
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="weight-gain" defaultChecked />
                          <label
                            htmlFor="weight-gain"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Weight gain
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="acne" />
                          <label
                            htmlFor="acne"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Acne
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hair-growth" />
                          <label
                            htmlFor="hair-growth"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Excess hair growth
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mood-changes" defaultChecked />
                          <label
                            htmlFor="mood-changes"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Mood changes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fatigue" />
                          <label
                            htmlFor="fatigue"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Fatigue
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="headaches" />
                          <label
                            htmlFor="headaches"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Headaches
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="symptom-description">Describe your symptoms in detail:</Label>
                      <Textarea
                        id="symptom-description"
                        placeholder="Provide any additional details about your symptoms..."
                        className="mt-1"
                        defaultValue="My periods have been irregular for the past 3 months. I've also gained weight despite no changes in diet or exercise. I've been experiencing mood swings more frequently."
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Duration and Severity */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="duration">How long have you been experiencing these symptoms?</Label>
                      <Select defaultValue="3-months">
                        <SelectTrigger id="duration" className="mt-1">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="days">A few days</SelectItem>
                          <SelectItem value="1-week">About a week</SelectItem>
                          <SelectItem value="2-weeks">2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="3-months">3 months</SelectItem>
                          <SelectItem value="6-months">6 months or more</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="severity">How would you rate the severity of your symptoms?</Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="severity" className="mt-1">
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild - Noticeable but not disruptive</SelectItem>
                          <SelectItem value="moderate">Moderate - Somewhat disruptive to daily life</SelectItem>
                          <SelectItem value="severe">Severe - Significantly impacts daily activities</SelectItem>
                          <SelectItem value="very-severe">Very Severe - Unable to perform normal activities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="progression">How have your symptoms changed over time?</Label>
                      <Select defaultValue="worsening">
                        <SelectTrigger id="progression" className="mt-1">
                          <SelectValue placeholder="Select progression" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="improving">Improving</SelectItem>
                          <SelectItem value="stable">Stable - No significant change</SelectItem>
                          <SelectItem value="fluctuating">Fluctuating - Better some days, worse others</SelectItem>
                          <SelectItem value="worsening">Worsening</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="triggers">
                        Have you noticed anything that triggers or worsens your symptoms?
                      </Label>
                      <Textarea
                        id="triggers"
                        placeholder="Describe any triggers you've noticed..."
                        className="mt-1"
                        defaultValue="Stress seems to make my symptoms worse. I've also noticed that my mood changes are more severe before my period would normally start."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="medications">Are you currently taking any medications?</Label>
                      <Textarea
                        id="medications"
                        placeholder="List any medications you're currently taking..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="allergies">Do you have any allergies?</Label>
                      <Textarea id="allergies" placeholder="List any allergies you have..." className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="family-history">
                        Is there a family history of similar symptoms or related conditions?
                      </Label>
                      <RadioGroup defaultValue="yes" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="family-yes" />
                          <Label htmlFor="family-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="family-no" />
                          <Label htmlFor="family-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="family-unsure" />
                          <Label htmlFor="family-unsure">Unsure</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="family-details">If yes, please provide details:</Label>
                      <Textarea
                        id="family-details"
                        placeholder="Describe any relevant family medical history..."
                        className="mt-1"
                        defaultValue="My mother was diagnosed with PCOS in her 30s. My sister also has irregular periods."
                      />
                    </div>

                    <div>
                      <Label htmlFor="additional-info">Any other information you'd like to share?</Label>
                      <Textarea
                        id="additional-info"
                        placeholder="Add any other relevant information..."
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className={`flex ${showResults ? "justify-between" : "justify-end"} border-t pt-6`}>
            {showResults ? (
              <>
                <Button variant="outline" onClick={resetChecker}>
                  Start New Check
                </Button>
                <Link href="/patient/consultation">
                  <Button className="bg-[#F48FB1] hover:bg-[#f8BBD0]">Consult a Doctor</Button>
                </Link>
              </>
            ) : (
              <>
                {step > 1 && !isAnalyzing && (
                  <Button variant="outline" onClick={handleBack} className="mr-auto">
                    Back
                  </Button>
                )}
                {!isAnalyzing && (
                  <Button onClick={handleNext} className="bg-[#F48FB1] hover:bg-[#f8BBD0]">
                    {step < 4 ? (
                      <>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Analyze Symptoms"
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
              Disclaimer: This symptom checker provides general information only and should not be used for diagnosis or
              treatment. Always consult with a qualified healthcare provider for medical advice.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
