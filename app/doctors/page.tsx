import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, FileText, Users, CheckCircle } from "lucide-react"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f8BBD0] to-[#F48FB1] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">For Healthcare Professionals</h1>
          <p className="text-white text-lg max-w-3xl mx-auto mb-8">
            Join our platform to expand your practice, connect with patients remotely, and provide better care through
            our innovative tools.
          </p>
          <Button className="bg-white text-[#F48FB1] hover:bg-gray-100 hover:text-[#F48FB1] px-8 py-6 text-lg">
            Register as a Doctor
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#F48FB1]">Benefits for Healthcare Providers</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="bg-[#f8BBD0] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Expand Your Practice</h3>
              <p className="text-gray-600">
                Connect with patients beyond your geographical location and grow your practice through our platform.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="bg-[#f8BBD0] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Manage your availability and appointments efficiently with our intuitive scheduling system.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="bg-[#f8BBD0] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Comprehensive Patient Data</h3>
              <p className="text-gray-600">
                Access detailed patient health data and insights to provide more informed care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#F48FB1]">How It Works</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#f8BBD0] transform md:translate-x-px"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Register Your Account</h3>
                  <p className="text-gray-600">
                    Create your profile with your medical credentials, specialties, and professional information.
                  </p>
                </div>
                <div className="md:mx-4 z-10 order-1 md:order-2">
                  <div className="w-10 h-10 bg-[#F48FB1] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block order-1"></div>
                <div className="md:mx-4 z-10 order-1 md:order-2">
                  <div className="w-10 h-10 bg-[#F48FB1] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-2 md:order-3">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Verification Process</h3>
                  <p className="text-gray-600">
                    Submit your doctor registration ID and certificate for verification by our team.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Set Your Availability</h3>
                  <p className="text-gray-600">
                    Define your consultation hours and the types of appointments you offer (video, chat, etc.).
                  </p>
                </div>
                <div className="md:mx-4 z-10 order-1 md:order-2">
                  <div className="w-10 h-10 bg-[#F48FB1] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block order-1"></div>
                <div className="md:mx-4 z-10 order-1 md:order-2">
                  <div className="w-10 h-10 bg-[#F48FB1] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-2 md:order-3">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Start Consulting</h3>
                  <p className="text-gray-600">
                    Begin receiving appointment requests and providing consultations to patients through our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Doctors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#F48FB1]">Platform Features for Doctors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Communication</h3>
                <p className="text-gray-600">
                  Communicate with patients through our HIPAA-compliant messaging and video consultation system.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Appointment Management</h3>
                <p className="text-gray-600">
                  Easily manage your schedule, view upcoming appointments, and send reminders to patients.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FileText className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Patient Records</h3>
                <p className="text-gray-600">
                  Access comprehensive patient health records, including health tracking data and previous
                  consultations.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f8BBD0] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Prescription Management</h3>
                <p className="text-gray-600">
                  Issue digital prescriptions and recommendations that patients can access directly through the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f8BBD0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Network of Healthcare Professionals</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Expand your practice and provide care to women who need your expertise, regardless of geographical barriers.
          </p>
          <Button className="bg-white text-[#F48FB1] hover:bg-gray-100 hover:text-[#F48FB1] px-8 py-6 text-lg">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  )
}
