import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Globe,
  ScrollText,
  Users,
  HeartHandshake,
  Heart,
  BookOpen,
  Syringe,
  TrendingDown,
  Building,
  Phone,
  ArrowRight,
} from "lucide-react";

const DoctorProfileSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Carousel Data - Reordered: USA -> India -> Global
  const slides = [
    {
      id: 1,
      image: "/ii.webp",
      tag: "🇺🇸 Community Health Innovation",
      headline: "Transforming Community Healthcare in America",
      subtext:
        "Creator of the ER Can Wait initiative — a value-based care model reducing emergency admissions and improving access to proactive primary care.",
      cta: "View ER Can Wait Initiative",
      targetId: "usa-impact",
    },
    {
      id: 2,
      image: "/org.webp",
      tag: "🇮🇳 My Village My Dream Foundation",
      headline: "Building Health & Hope at the Grassroots",
      subtext:
        "Leading health, education, and rural development initiatives through the My Village My Dream Foundation, impacting thousands across India.",
      cta: "Explore Foundation Work",
      targetId: "india-impact",
    },
    {
      id: 3,
      image: "/doctor.webp",
      tag: "🌍 Medicine • Service • Impact",
      headline: "A Physician Driven by Global Impact",
      subtext:
        "Board-Certified Family Physician with 13+ years of experience, combining clinical excellence with deep community engagement across continents.",
      cta: "View Full Profile",
      targetId: "professional-foundations",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white font-sans text-gray-900" id="doctor-profile">
      {/* HERO SECTION: Full-width Carousel */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.headline}
                className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"}`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.style.backgroundColor =
                    "#1e293b";
                }}
              />
            </div>

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-3xl animate-fade-in">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6 tracking-wide shadow-lg">
                    {slide.tag}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                    {slide.headline}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-sm">
                    {slide.subtext}
                  </p>
                  <button
                    onClick={() => scrollToSection(slide.targetId)}
                    className="group bg-white text-slate-900 hover:bg-teal hover:text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    {slide.cta}
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-12 z-20 flex gap-2 sm:gap-4">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-12 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                idx === currentSlide
                  ? "w-8 sm:w-12 bg-teal"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION: INTRO STRIP */}
      <section className="bg-teal py-8 sm:py-12 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
            "From Massachusetts to rural India, Dr. Nikhil Gohokar bridges
            clinical excellence and community-driven impact."
          </h2>
        </div>
      </section>

      {/* SECTION: GLOBAL INITIATIVES */}
      <div className="bg-slate-50">
        {/* PART 1: USA IMPACT */}
        <section id="usa-impact" className="py-12 sm:py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-end mb-8 sm:mb-12 border-b border-gray-200 pb-6 sm:pb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Building className="w-4 h-4" /> USA Initiatives
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Innovation at Home
                </h2>
              </div>
              <p className="text-base sm:text-xl text-gray-500 max-w-xl pb-2">
                Pioneering value-based care models that reduce emergency room
                dependency and improve patient outcomes.
              </p>
            </div>

            {/* ER Can Wait Feature */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-teal font-bold mb-4 sm:mb-6">
                    <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">
                      High Impact Results
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    ER Can Wait Program
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    A groundbreaking value-based care program designed to reduce
                    emergency department visits through proactive patient
                    management. By shifting care to the clinic, we save patients
                    time, reduce costs, and provide better continuity of care.
                  </p>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl">
                      <span className="block text-2xl sm:text-4xl font-bold text-blue-600 mb-1">
                        78%
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        Reduction in ED Visits
                      </span>
                    </div>
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl">
                      <span className="block text-2xl sm:text-4xl font-bold text-teal mb-1">
                        Award
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        "Great Session" at MA League Conference
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.bnhc.org/want-to-stay-healthy-out-of-the-hospital-this-group-can-help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-lg self-start hover:text-teal-dark"
                  >
                    Learn More About ER Can Wait{" "}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <div className="relative h-[250px] sm:h-[350px] lg:h-auto bg-slate-200">
                  <img
                    src="/erteam.png"
                    alt="Medical team discussion"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.style.backgroundColor =
                        "#e2e8f0";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Local Outreach Row */}
            <div className="mt-6 sm:mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-coral mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Sharon Town Health
                </h4>
                <p className="text-sm sm:text-base text-gray-500">
                  Youth substance abuse education and community health awareness
                  programs.
                </p>
              </div>
              <div className="md:col-span-2 rounded-3xl overflow-hidden relative h-48 sm:h-64 md:h-auto group">
                <img
                  src="/group_photo.webp"
                  alt="Community outreach"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#f1f5f9";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: INDIA IMPACT */}
        <section id="india-impact" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6 items-end mb-12 border-b border-gray-200 pb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Globe className="w-4 h-4" /> India Initiatives
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  My Village My Dream
                </h2>
              </div>
              <p className="text-xl text-gray-500 max-w-xl pb-2">
                Bringing healthcare, education, and hope to underserved rural
                communities in Chandrapur, India.
              </p>
            </div>

            {/* Foundation Gallery - Main */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
                <img
                  src="/empoweringyouth.jpeg"
                  alt="Foundation work with children"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#dbeafe";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Empowering Youth</h3>
                  <p className="text-gray-200 opacity-90">
                    Education and tuition support for village children.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
                <img
                  src="/Community Development.jpeg"
                  alt="Village gathering"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#ffedd5";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Community Development
                  </h3>
                  <p className="text-gray-200 opacity-90">
                    Socioeconomic programs for sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Specific Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    src="/Village Mini Clinics.jpeg"
                    alt="Mini Clinic"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal">
                    Healthcare
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Village Mini Clinics
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Screening 9,500 people for BP, diabetes, and malnutrition
                  across 7 villages. Diagnosed 900+ new patients.
                </p>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    src="/Joint Injection Camps.jpeg"
                    alt="Injection Camp"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-600">
                    Pain Relief
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Joint Injection Camps
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Providing specialized long-term pain relief in underserved
                  areas like Pandharkawda through expert medical camps.
                </p>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    src="/Alcohol Cessation.jpeg"
                    alt="Alcohol Cessation"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-600">
                    Social Impact
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Alcohol Cessation
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Community support programs in Vihirgaon implemented with
                  Alcoholics Anonymous to help participants quit alcohol.
                </p>
              </div>
            </div>

            {/* Explicit Foundation CTA */}
            <div className="mt-16 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Learn More About My Village My Dream Foundation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DoctorProfileSection;
