import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  FileText,
  Users,
  Stethoscope,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#9059a1] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Link href="/">
                <h3 className="text-2xl font-bold">স্বাস্থ্য সঙ্গী</h3>
              </Link>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              আপনার ভাষায় ব্যক্তিগতকৃত স্বাস্থ্য ট্র্যাকিং, অন্তর্দৃষ্টি এবং
              সহায়তা। ডাক্তার এবং একটি সহায়ক সম্প্রদায়ের সাথে সংযোগ স্থাপন
              করুন।
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/patient/dashboard"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <Stethoscope size={16} className="mr-2" />
                  রোগীর ড্যাশবোর্ড
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor/register"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <Users size={16} className="mr-2" />
                  ডাক্তার পোর্টাল
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/consultation"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <MessageCircle size={16} className="mr-2" />
                  পরামর্শ
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/mental-health"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <Heart size={16} className="mr-2" />
                  মানসিক স্বাস্থ্য
                </Link>
              </li>
              <li>
                <Link
                  href="/multilingual"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <Globe size={16} className="mr-2" />
                  ভাষা সেটিংস
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">সেবাসমূহ</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/patient/daily-input"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  স্বাস্থ্য ট্র্যাকিং
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/symptom-checker"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  লক্ষণ পরীক্ষক
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/reports"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  স্বাস্থ্য রিপোর্ট
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/partner-mode"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Partner মোড
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  কমিউনিটি ফোরাম
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin
                  size={18}
                  className="text-white/90 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white/90">
                    ১২৩ স্বাস্থ্য ভবন
                    <br />
                    ঢাকা ১০০০, বাংলাদেশ
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone size={18} className="text-white/90 mr-3 flex-shrink-0" />
                <p className="text-white/90">+৮৮০ ১৭১২ ৩৪৫৬৭৮</p>
              </div>

              <div className="flex items-center">
                <Mail size={18} className="text-white/90 mr-3 flex-shrink-0" />
                <p className="text-white/90">support@womenhealth.bd</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-semibold text-white mb-2">জরুরি যোগাযোগ</h5>
              <p className="text-white/90 text-sm">২৪/৭ হটলাইন: ৯৯৯</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-white/90 text-sm">
                © ২০২৫ নারী স্বাস্থ্য প্ল্যাটফর্ম। সকল অধিকার সংরক্ষিত।
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/90 hover:text-white transition-colors flex items-center"
              >
                <Shield size={14} className="mr-1" />
                গোপনীয়তা নীতি
              </Link>

              <div className="p-5"></div>

              <Link
                href="/terms"
                className="text-white/90 hover:text-white transition-colors flex items-center "
              >
                <FileText size={14} className="mr-1" />
                শর্তাবলী
              </Link>
              <Link
                href="/help"
                className="text-white/90 hover:text-white transition-colors"
              >
                সাহায্য
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-black/20 py-3">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-xs text-center">
            <strong>চিকিৎসা দাবিত্যাগ:</strong> এই অ্যাপটি পেশাদার চিকিৎসা
            পরামর্শ, নির্ণয় বা চিকিৎসার বিকল্প নয়। সর্বদা আপনার চিকিৎসক বা
            অন্যান্য যোগ্য স্বাস্থ্যসেবা প্রদানকারীর পরামর্শ নিন।
          </p>
        </div>
      </div>
    </footer>
  );
}
