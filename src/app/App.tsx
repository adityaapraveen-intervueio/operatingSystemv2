// v2.0
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig, motion, useInView } from "motion/react";
import {
  Mic, CheckSquare, BrainCircuit, ArrowRight, Database, FileSpreadsheet,
  Calendar, Mail, FileVideo, Layers, Brain, Bot, UserSearch, FileText,
  Settings, LayoutDashboard, CalendarSync, Handshake, Zap, FileSearch,
  CalendarCheck, FileOutput, ShieldCheck, Globe, UserCheck, BarChart, Menu, X,
  ChevronLeft, ChevronRight, Presentation, Globe2, Check, Link, Lock, Smartphone,
  Users, History, Target, GripVertical, Trash2, Plus, Sparkles, PhoneCall, Workflow, Activity,
  Clock, RotateCcw, AlertCircle, RefreshCw, MailCheck, TrendingUp, CheckCircle2, MessageSquare,
  Briefcase, Network, PieChart, BarChart3, Award
} from "lucide-react";
import intervueLogo from "figma:asset/b2c9e0cc6e570a4eef3f72abb44e3b9aa3b91360.png";

// Import slide components
import { SlideOne } from "./components/SlideOne";
import { SlideTwo } from "./components/SlideTwo";
import { SlideThree } from "./components/SlideThree";
import { SlideFour } from "./components/SlideFour";
import { SlideFive } from "./components/SlideFive";
import { SlideSix } from "./components/SlideSix";
import { SlideSeven } from "./components/SlideSeven";
import { SlideEight } from "./components/SlideEight";
import { SlideNine, ScreeningCallAnimation } from "./components/SlideNine";
import { SlideTen } from "./components/SlideTen";
import { SlideEleven } from "./components/SlideEleven";
import { SlideTwelve } from "./components/SlideTwelve";
import { SlideThirteen } from "./components/SlideThirteen";
import { SlideFourteen } from "./components/SlideFourteen";
import { SlideFifteen } from "./components/SlideFifteen";
import { SlideSixteen } from "./components/SlideSixteen";
import { SlideSeventeen } from "./components/SlideSeventeen";
import { SlideEighteen } from "./components/SlideEighteen";
import { SlideNineteen } from "./components/SlideNineteen";
import { SlideTwenty } from "./components/SlideTwenty";
import Frame3 from "../imports/Frame3";

type ViewMode = "slides" | "landing";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-auto">
      <LandingPageView />
    </div>
  );
}

function ViewModeSwitcher({ viewMode, setViewMode }: { viewMode: ViewMode; setViewMode: (mode: ViewMode) => void }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[100] bg-[#0B051A]/80 backdrop-blur-2xl border border-white/20 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="flex gap-1">
        <button
          onClick={() => setViewMode("slides")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all ${viewMode === "slides"
            ? "bg-[#7c3aed] text-white shadow-lg"
            : "text-gray-400 hover:text-white"
            }`}
        >
          <Presentation className="w-4 h-4" />
          Slides View
        </button>
        <button
          onClick={() => setViewMode("landing")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all ${viewMode === "landing"
            ? "bg-[#7c3aed] text-white shadow-lg"
            : "text-gray-400 hover:text-white"
            }`}
        >
          <Globe2 className="w-4 h-4" />
          Landing Page
        </button>
      </div>
    </motion.div>
  );
}

// ==================== SLIDES VIEW ====================
function SlidesView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalSlides = 20;

  const minSwipeDistance = 50;
  const whiteSlides = [3, 5, 6, 7, 9, 11, 13, 15, 17];
  const isWhiteTheme = whiteSlides.includes(currentSlide);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth < 768 && windowHeight > windowWidth) {
        setIsPortrait(true);
        setScale(windowWidth / 1440);
      } else {
        setIsPortrait(false);
        const scaleX = windowWidth / 1440;
        const scaleY = windowHeight / 810;
        setScale(Math.min(scaleX, scaleY));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    if (isPortrait) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isPortrait) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (isPortrait) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isNextSwipe = distance > minSwipeDistance;
    const isPrevSwipe = distance < -minSwipeDistance;

    if (isNextSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }

    if (isPrevSwipe && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slidesList = [
    <SlideOne key="slide1" />,
    <SlideTwo key="slide2" />,
    <SlideThree key="slide3" />,
    <SlideFour key="slide4" />,
    <SlideFive key="slide5" />,
    <SlideSix key="slide6" />,
    <SlideSeven key="slide7" />,
    <SlideEight key="slide8" />,
    <SlideNine key="slide9" />,
    <SlideTen key="slide10" />,
    <SlideEleven key="slide11" />,
    <SlideTwelve key="slide12" />,
    <SlideThirteen key="slide13" />,
    <SlideFourteen key="slide14" />,
    <SlideFifteen key="slide15" />,
    <SlideSixteen key="slide16" />,
    <SlideSeventeen key="slide17" />,
    <SlideEighteen key="slide18" />,
    <SlideNineteen key="slide19" />,
    <SlideTwenty key="slide20" />
  ];

  if (isPortrait) {
    const gap = 40;
    const totalHeight = (810 * totalSlides) + (gap * (totalSlides - 1));

    return (
      <div className="fixed inset-0 bg-black overflow-y-auto overflow-x-hidden font-sans pb-10 pt-24">
        <div style={{ width: '100%', height: `${totalHeight * scale}px` }}>
          <MotionConfig transition={{ duration: 0, delay: 0 }}>
            <div
              className="flex flex-col origin-top-left"
              style={{ transform: `scale(${scale})`, width: '1440px', gap: `${gap}px` }}
            >
              {slidesList.map((SlideComponent, index) => {
                const isWhite = whiteSlides.includes(index);
                return (
                  <div
                    key={index}
                    className={`w-[1440px] h-[810px] relative overflow-hidden shrink-0 ${isWhite ? 'bg-white text-gray-900' : 'bg-[#0B051A] text-white'}`}
                  >
                    {!isWhite && (
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen bg-gradient-to-br from-[#0B051A] to-[#170E32]">
                        <div className="absolute w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] top-[-300px] right-[-200px]" />
                        <div className="absolute w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] bottom-[-200px] left-[-200px]" />
                      </div>
                    )}
                    <div className="relative z-10 w-full h-full">
                      {SlideComponent}
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionConfig>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 ${isWhiteTheme ? 'bg-white text-gray-900' : 'bg-[#0B051A] text-white'} overflow-hidden flex items-center justify-center font-sans transition-colors duration-700 pt-24`}>
      {/* Background elements */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen transition-opacity duration-700 ${isWhiteTheme ? 'opacity-0' : 'opacity-40 bg-gradient-to-br from-[#0B051A] to-[#170E32]'}`}>
        <div className="absolute w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] top-[-300px] right-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] bottom-[-200px] left-[-200px]" />
      </div>

      {/* 16:9 Fixed-Size Scaled Container */}
      <div
        className={`relative z-10 w-[1440px] h-[810px] shrink-0 flex flex-col shadow-2xl origin-center overflow-hidden transition-colors duration-700 ${isWhiteTheme ? 'bg-white' : 'bg-transparent'}`}
        style={{ transform: `scale(${scale})` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex-1 relative w-full h-full">
          <AnimatePresence mode="wait">
            {slidesList[currentSlide]}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
        disabled={currentSlide === 0}
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full transition-all backdrop-blur-md border hidden sm:flex ${currentSlide === 0
          ? 'opacity-0 pointer-events-none'
          : 'opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer'
          } ${isWhiteTheme
            ? 'bg-black/5 hover:bg-black/10 border-black/10 text-gray-900'
            : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
          }`}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>

      <button
        onClick={() => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))}
        disabled={currentSlide === totalSlides - 1}
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full transition-all backdrop-blur-md border hidden sm:flex ${currentSlide === totalSlides - 1
          ? 'opacity-0 pointer-events-none'
          : 'opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer'
          } ${isWhiteTheme
            ? 'bg-black/5 hover:bg-black/10 border-black/10 text-gray-900'
            : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
          }`}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

    </div>
  );
}

// ==================== LANDING PAGE VIEW ====================
function LandingPageView() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formHighlight, setFormHighlight] = React.useState(false);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Trigger highlight animation
      setFormHighlight(true);
      setTimeout(() => setFormHighlight(false), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#0B051A] text-white font-sans px-[0px] pt-[95px] pb-[0px]" style={{ zoom: 0.8 }}>
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} scrollToForm={scrollToForm} />

      {/* Hero Section */}
      <HeroSection formRef={formRef} formHighlight={formHighlight} />

      {/* Solution Section */}
      <SolutionSection />

      {/* Voice-First Section */}
      <VoiceFirstSection />

      {/* Rubric Operating System Section */}
      <RubricOperatingSystemSection />

      {/* Features Grid */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection scrollToForm={scrollToForm} />


    </div>
  );
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen, scrollToForm }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void; scrollToForm: () => void }) {
  const [isLightSection, setIsLightSection] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'solution', isLight: true },
        { id: 'features', isLight: true },
        { id: 'voice-first', isLight: false }
      ];

      const scrollPosition = window.scrollY + 150;
      let currentIsLight = false;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentIsLight = section.isLight;
          }
        }
      });

      setIsLightSection(currentIsLight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-4 mt-4 lg:inset-x-[157px] lg:mt-[24px] z-40 backdrop-blur-xl shadow-xl rounded-[32px] lg:rounded-[71px] transition-all duration-300 ${isLightSection
        ? 'bg-white/90 border border-gray-200'
        : 'bg-[#0B051A]/90 border border-white/10'
        }`}
    >
      <div className="w-full px-6 md:px-8 lg:px-12 py-3 lg:py-4 flex items-center justify-between">
        <img
          src={intervueLogo}
          alt="IIIP"
          className={`h-7 w-auto object-contain transition-all duration-300 ${isLightSection ? 'brightness-0' : ''}`}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <motion.button
            onClick={(e) => { e.preventDefault(); scrollToForm(); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full font-medium transition-colors cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 outline-none focus:outline-none ${isLightSection ? 'text-gray-900' : 'text-white'
            }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden transition-colors duration-300 border-t ${isLightSection
              ? 'border-gray-200'
              : 'border-white/10'
              }`}
          >
            <div className="px-6 py-6 pb-8 space-y-6 flex flex-col items-center">
              <a href="#solution" onClick={() => setMobileMenuOpen(false)} className={`block text-lg font-medium transition-colors ${isLightSection ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>Solution</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className={`block text-lg font-medium transition-colors ${isLightSection ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>Features</a>
              <button onClick={() => { setMobileMenuOpen(false); scrollToForm(); }} className="inline-block px-8 py-3 bg-[#7c3aed] shadow-md text-white rounded-full font-medium text-center cursor-pointer">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// HubSpot Embedded Form Component
function HubSpotForm() {
  const hubspotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadForm = () => {
      if ((window as any).hbspt && hubspotContainerRef.current) {
        hubspotContainerRef.current.innerHTML = '';
        (window as any).hbspt.forms.create({
          portalId: "20086546",
          formId: "b2ebc245-2f6a-460a-980d-9be74a111d9a",
          region: "na2",
          target: `#hubspot-form-container`,
        });
      }
    };

    // Check if script already loaded
    if ((window as any).hbspt) {
      loadForm();
      return;
    }

    // Load HubSpot script
    const script = document.createElement('script');
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      loadForm();
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup: don't remove script as it may be reused
    };
  }, []);

  return (
    <>
      <style>{`
        #hubspot-form-container .hs-form {
          font-family: 'Inter', sans-serif !important;
        }
        #hubspot-form-container .hs-form * {
          color: #ffffff !important;
        }
        #hubspot-form-container .hs-form fieldset {
          max-width: 100% !important;
        }
        #hubspot-form-container .hs-form .hs-input {
          width: 100% !important;
          padding: 12px 16px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 12px !important;
          color: #ffffff !important;
          font-size: 14px !important;
          transition: all 0.2s !important;
          box-sizing: border-box !important;
        }
        #hubspot-form-container .hs-form .hs-input:focus {
          outline: none !important;
          border-color: #7c3aed !important;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.4) !important;
        }
        #hubspot-form-container .hs-form .hs-input::placeholder {
          color: rgba(255, 255, 255, 0.35) !important;
        }
        #hubspot-form-container .hs-form label,
        #hubspot-form-container .hs-form label span,
        #hubspot-form-container .hs-form legend,
        #hubspot-form-container .hs-form legend span,
        #hubspot-form-container .hs-form .hs-form-field > label,
        #hubspot-form-container .hs-form .hs-field-desc,
        #hubspot-form-container .hs-form .hs-form-required {
          color: #ffffff !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          margin-bottom: 6px !important;
          display: block !important;
        }
        #hubspot-form-container .hs-form .hs-error-msgs label {
          color: #f87171 !important;
          font-size: 12px !important;
        }
        #hubspot-form-container .hs-form .field {
          margin-bottom: 16px !important;
        }
        #hubspot-form-container .hs-form .hs-button {
          width: 100% !important;
          padding: 16px 24px !important;
          background: #7c3aed !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 12px !important;
          font-size: 18px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.4) !important;
          margin-top: 8px !important;
        }
        #hubspot-form-container .hs-form .hs-button:hover {
          background: #6d28d9 !important;
          transform: scale(1.02) !important;
        }
        #hubspot-form-container .hs-form .hs-richtext {
          color: rgba(156, 163, 175, 1) !important;
          font-size: 12px !important;
        }
        #hubspot-form-container .hs-form .hs-richtext a {
          color: #a78bfa !important;
        }
        #hubspot-form-container .hs-form select.hs-input {
          appearance: auto !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }
        #hubspot-form-container .hs-form select.hs-input option {
          background: #1a1030 !important;
          color: #ffffff !important;
        }
        #hubspot-form-container .submitted-message {
          color: #ffffff !important;
          font-size: 16px !important;
          text-align: center !important;
          padding: 20px 0 !important;
        }
      `}</style>
      <div id="hubspot-form-container" ref={hubspotContainerRef} />
    </>
  );
}

function HeroSection({ formRef, formHighlight }: { formRef: React.RefObject<HTMLDivElement | null>; formHighlight: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const flowSteps = ["Sourcing", "Screening", "Interviews", "Offers", "Hiring Intelligence"];

  const capabilities = [
    { name: "AI sourcing", icon: UserSearch },
    { name: "AI resume screening", icon: FileText },
    { name: "AI HR screening", icon: Bot },
    { name: "Interview infrastructure", icon: Settings },
    { name: "Rubric-based evaluation", icon: Brain },
    { name: "Automated scheduling", icon: CalendarSync },
    { name: "Hiring analytics", icon: LayoutDashboard },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[120px]">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] top-[-200px] right-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] bottom-[-100px] left-[-200px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 grid lg:grid-cols-2 gap-12 items-center flex-grow flex-shrink-0"
      >
        {/* Left Column - Content */}
        <div className="text-left">
          <motion.p variants={itemVariants} className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase mb-4">
            Interview Infrastructure & Intelligence Platform (IIIP)
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif tracking-tight text-white mb-6 leading-[1.1] text-[64px]"
          >The          <span className="italic">AI Operating System</span> for Hiring</motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 mb-8 text-[20px]">
            Transform your hiring process with an AI-native operating system that unifies sourcing, screening, interviews, and intelligence.
          </motion.p>

          {/* Compressed Capabilities Pills */}
          <motion.div variants={containerVariants} className="flex flex-wrap justify-start gap-3 sm:gap-4 max-w-4xl mx-[0px] mt-[-7px] mb-[57px]">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#1e153b]/40 border border-[#4c3b7a]/40 py-2.5 px-5 rounded-full flex flex-row items-center gap-3 backdrop-blur-sm transition-all hover:border-[#7c3aed]/60 hover:bg-[#2a1b54]/40 shadow-sm"
                >
                  <div className="bg-[#7c3aed]/20 p-1.5 rounded-full flex-shrink-0">
                    <Icon className="text-[#a78bfa] w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-200 whitespace-nowrap">{cap.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Right Column - Glass Lead Form */}
        <motion.div
          ref={formRef}
          variants={itemVariants}
          className={`relative bg-white/15 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-[border-color] duration-700 ease-in-out ${formHighlight ? 'border-[#7c3aed]/70' : 'border-white/10'
            }`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-serif text-white mb-2">Get Early Access</h3>
            <p className="text-gray-400 mb-6 text-sm">Join the waitlist and transform your hiring process.</p>

            {/* HubSpot Form Embed */}
            <HubSpotForm />
          </div>
        </motion.div>
      </motion.div>

      {/* Customer Logos Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 flex-shrink-0"
      >
        <motion.div variants={itemVariants} className="w-full overflow-hidden flex justify-center">
          <Frame3 />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stackTools = [
    { name: "ATS", icon: Database },
    { name: "HRMS", icon: Layers },
    { name: "Job Boards", icon: FileSpreadsheet },
    { name: "Assessment Tools", icon: Brain },
    { name: "Calendar Tools", icon: Calendar },
    { name: "Video Platforms", icon: FileVideo },
    { name: "Emails & Manual", icon: Mail },
  ];

  const results = [
    "Fragmented candidate data",
    "Inconsistent candidate evaluation",
    "Heavy recruiter workload",
    "Slow hiring cycles",
    "Poor candidate experience",
    "Limited hiring intelligence",
  ];

  return (
    <section id="problem" ref={ref} className="relative py-24 md:py-32 bg-white text-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-[#7c3aed] font-bold tracking-[0.1em] text-sm uppercase mb-4">THE PROBLEM</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-[1.1]">
            Enterprise hiring today runs across{" "}
            <span className="text-[#7c3aed] italic font-normal">fragmented systems.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side: The Problem Stack */}
          <motion.div variants={containerVariants} className="space-y-6">
            <p className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
              Typical Stack
            </p>

            <div className="relative min-h-[300px] border-2 border-gray-200 rounded-3xl bg-gray-50 p-8 overflow-hidden flex flex-wrap gap-3 items-center justify-center">
              {stackTools.map((tool, index) => {
                const Icon = tool.icon;
                const randomX = (Math.random() - 0.5) * 40;
                const randomY = (Math.random() - 0.5) * 40;
                const randomRotate = (Math.random() - 0.5) * 20;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: randomX, y: randomY, rotate: randomRotate, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                    className="bg-white border-2 border-gray-300 text-gray-900 text-sm px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg"
                  >
                    <Icon className="w-4 h-4 text-[#7c3aed]" />
                    <span className="font-medium">{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Results */}
          <motion.div variants={containerVariants} className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
                This Creates
              </p>

              <ul className="space-y-4">
                {results.map((result, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 text-lg text-gray-700 font-medium"
                  >
                    <div className="mt-1.5 bg-[#7c3aed]/20 p-2 rounded-lg flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                    </div>
                    {result}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-12">
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 border-2 border-[#7c3aed]/20 p-8 rounded-3xl shadow-lg text-center">
            <p className="text-2xl text-gray-900 font-medium mb-4">
              Hiring today is{" "}
              <span className="text-gray-500">workflow software.</span>
            </p>
            <div className="h-px w-full bg-gradient-to-r from-[#7c3aed]/30 to-transparent my-4" />
            <p className="text-3xl md:text-4xl text-gray-900 font-serif tracking-tight">
              But hiring should be{" "}
              <span className="text-[#7c3aed] italic font-normal">an intelligence system.</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const capabilities = [
    { name: "AI sourcing", icon: UserSearch },
    { name: "AI resume screening", icon: FileText },
    { name: "AI HR screening", icon: Bot },
    { name: "Interview infrastructure", icon: Settings },
    { name: "Rubric-based evaluation", icon: Brain },
    { name: "Automated scheduling", icon: CalendarSync },
    { name: "Hiring analytics", icon: LayoutDashboard },
  ];

  return (
    <section id="solution" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-white text-gray-900">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[120px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-[#7c3aed] font-bold tracking-[0.1em] text-sm uppercase mb-4">INTRODUCING IIIP</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-gray-900 mb-6 leading-[1.1]">
            IIIP is the AI-native{" "}
            <span className="text-[#7c3aed] italic font-normal">operating system</span>{" "}
            for hiring.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Instead of stitching together multiple tools, IIIP unifies the entire hiring lifecycle into one platform.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 py-2.5 px-5 rounded-full flex flex-row items-center gap-3 backdrop-blur-sm transition-all hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 shadow-sm"
              >
                <div className="bg-[#7c3aed]/10 p-1.5 rounded-full flex-shrink-0">
                  <Icon className="text-[#7c3aed] w-4 h-4" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-800 whitespace-nowrap">{cap.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transformation */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="bg-[#7c3aed]/5 border border-[#7c3aed]/20 px-8 py-8 sm:py-6 rounded-[2.5rem] sm:rounded-full shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7c3aed]/5 to-transparent pointer-events-none" />
            <div className="text-gray-600 font-medium text-lg text-center relative z-10">
              Manual hiring
            </div>
            <div className="bg-[#7c3aed]/10 p-3 rounded-full relative z-10">
              <ArrowRight className="text-[#7c3aed] w-6 h-6" />
            </div>
            <div className="text-gray-900 font-serif italic text-2xl tracking-tight text-center relative z-10">
              Intelligent hiring
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function VoiceFirstSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const actions = [
    { text: "Generates the job description", icon: FileOutput },
    { text: "Creates evaluation rubrics", icon: ShieldCheck },
    { text: "Activates sourcing", icon: FileSearch },
    { text: "Begins screening candidates", icon: Zap },
    { text: "Schedules interview slots", icon: CalendarCheck },
  ];

  return (
    <section id="voice-first" ref={ref} className="relative py-24 md:py-32 bg-[#0B051A] text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase mb-4">VOICE-FIRST HIRING OS</p>
          <p className="text-2xl md:text-3xl text-gray-400 mb-4">
            Traditional hiring systems rely on dashboards.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1]">
            IIIP introduces a <span className="text-[#a78bfa] italic font-normal">voice-first</span> hiring interface.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: The Command */}
          <motion.div variants={itemVariants} className="bg-[#1e153b]/40 border-2 border-[#4c3b7a]/40 backdrop-blur-sm rounded-3xl relative overflow-hidden shadow-xl mx-[0px] my-[1px] px-[40px] py-[56px]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7c3aed]/20 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#7c3aed]/20 p-4 rounded-full">
                <Mic className="w-8 h-8 text-[#a78bfa]" />
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={isInView ? { height: ["12px", "24px", "12px"] } : {}}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                    className="w-1.5 bg-[#a78bfa] rounded-full"
                  />
                ))}
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-gray-100 font-medium leading-relaxed mb-6">
              "Open a Customer Support role in Bengaluru with strong Communications skill"
            </p>

            <div className="inline-block bg-[#2a1b54]/50 border border-[#4c3b7a]/50 px-6 py-3 rounded-full">
              <p className="text-lg text-gray-200">
                This significantly <span className="text-[#a78bfa] font-bold">reduces recruiter operational workload.</span>
              </p>
            </div>
          </motion.div>

          {/* Right: The Engine Response */}
          <motion.div variants={containerVariants} className="space-y-6">
            <p className="text-sm font-bold tracking-[0.2em] text-[#a78bfa] uppercase">
              IIIP Automatically
            </p>

            <div className="space-y-4">
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 bg-[#1e153b]/60 p-5 rounded-2xl border-2 border-[#4c3b7a]/40 shadow-sm"
                  >
                    <div className="bg-[#2a1b54] p-3 rounded-xl shadow-sm border border-[#4c3b7a]">
                      <Icon className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <span className="text-lg text-gray-200 font-medium">{action.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function RubricOperatingSystemSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const uiContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const dimensions = [
    "coding ability",
    "system design",
    "communication",
    "ownership",
    "domain expertise",
    "leadership"
  ];

  const adaptations = [
    "screening questions adapt",
    "resume ranking adapts",
    "interview focus adapts"
  ];

  // AI Sourcing Engine data
  const capabilities = [
    { text: "Rubric-based candidate discovery", icon: <Target className="w-5 h-5 text-purple-500" /> },
    { text: "Sourcing from job boards", icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { text: "Sourcing from internal talent pools", icon: <Users className="w-5 h-5 text-emerald-500" /> },
    { text: "Sourcing from previously interviewed", icon: <History className="w-5 h-5 text-amber-500" /> },
  ];

  const criteria = [
    "3+ years of experience in Business Analysis",
    "Proficiency in SQL, Python, or R",
    "Strong ability to gather and document requirements",
    "Experience with Agile methodologies and Jira",
    "Understanding of data visualization tools (Tableau/Power BI)",
    "Excellent stakeholder management and communication",
  ];

  const mustHaveSkills = [
    "Senior Business Analyst", "Data Analyst", "Product Analyst",
    "Lead Business Analyst", "Process Analyst", "Systems Analyst",
    "Requirements Analyst", "Agile Business Analyst",
    "Functional Analyst", "Technical Business Analyst",
  ];

  const goodToHaveSkills = [
    "Spotify", "Airbnb", "Google", "Meta",
    "Apple", "Figma", "Atlassian",
    "Shopify", "Stripe", "Notion",
  ];

  const geographyTags = ["San Francisco", "New York", "London", "Berlin"];

  const [visibleCriteria, setVisibleCriteria] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleMustHave, setVisibleMustHave] = useState(0);
  const [visibleGoodToHave, setVisibleGoodToHave] = useState(0);
  const [showHeadcount, setShowHeadcount] = useState(false);
  const [visibleGeography, setVisibleGeography] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // AI Sourcing animation logic
  useEffect(() => {
    if (!isInView || activeTab !== 1) return;

    const timer1 = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCriteria((prev) => {
          if (prev < criteria.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 700);

      return () => clearInterval(interval);
    }, 500);

    const timer2 = setTimeout(() => setShowFilters(true), criteria.length * 700 + 1500);

    const timer3 = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleMustHave((prev) => {
          if (prev < mustHaveSkills.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 120);

      return () => clearInterval(interval);
    }, criteria.length * 700 + 2000);

    const timer4 = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleGoodToHave((prev) => {
          if (prev < goodToHaveSkills.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 120);

      return () => clearInterval(interval);
    }, criteria.length * 700 + 3200);

    const timer5 = setTimeout(() => setShowHeadcount(true), criteria.length * 700 + 4500);

    const timer6 = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleGeography((prev) => {
          if (prev < geographyTags.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 150);

      return () => clearInterval(interval);
    }, criteria.length * 700 + 5000);

    const timer7 = setTimeout(() => setShowButtons(true), criteria.length * 700 + 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, [isInView, activeTab]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleCriteria, showFilters, visibleMustHave, visibleGoodToHave, visibleGeography, showHeadcount]);

  // AI Screening methods
  const methods = [
    { text: "AI voice conversations", icon: <Mic className="w-5 h-5 text-purple-400" /> },
    { text: "Built-in VOIP calling", icon: <PhoneCall className="w-5 h-5 text-blue-400" /> },
    { text: "Structured flows", icon: <Workflow className="w-5 h-5 text-emerald-400" /> },
    { text: "Post-call analysis", icon: <Activity className="w-5 h-5 text-amber-400" /> },
  ];

  // Hiring Intelligence metrics & nodes
  const nodes = [
    { label: "Candidates", icon: <UserCheck className="w-5 h-5 text-purple-600" />, x: "10%", y: "20%" },
    { label: "Recruiters", icon: <Briefcase className="w-5 h-5 text-blue-600" />, x: "50%", y: "10%" },
    { label: "Interviewers", icon: <Network className="w-5 h-5 text-emerald-600" />, x: "85%", y: "30%" },
    { label: "Hiring Managers", icon: <Activity className="w-5 h-5 text-orange-600" />, x: "15%", y: "70%" },
    { label: "Roles", icon: <PieChart className="w-5 h-5 text-pink-600" />, x: "80%", y: "75%" },
    { label: "Hiring Outcomes", icon: <BarChart3 className="w-5 h-5 text-indigo-600" />, x: "50%", y: "85%" },
  ];

  const metrics = [
    { label: "Recruiter productivity", icon: Briefcase },
    { label: "Funnel conversion rates", icon: TrendingUp },
    { label: "Source effectiveness", icon: Target },
    { label: "Interviewer performance", icon: Users },
    { label: "Offer-to-join ratios", icon: Award }
  ];

  const tabs = ["Rubric Operating System", "AI Sourcing Engine", "AI Resume Screening", "AI HR Screening", "Interview Scheduling", "Hiring Intelligence"];

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white text-gray-900">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#7c3aed] font-bold tracking-[0.1em] text-sm uppercase mb-4"
        >
          PLATFORM FEATURES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-[1.1]"
        >
          See IIIP in{" "}
          <span className="text-[#7c3aed] italic font-normal">action</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
        >
          Explore how each component of the platform transforms your hiring workflow from manual to intelligent.
        </motion.p>
      </div>

      {/* Tabs Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-12"
      >
        <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-semibold tracking-wide transition-all relative ${activeTab === index ? "text-[#6D42D0]" : "text-gray-500 hover:text-gray-700"} text-[16px]`}
            >
              {tab}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6D42D0]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === 0 ? (
          <motion.div
            key="rubric"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Content */}
              <div className="space-y-8 lg:space-y-12 px-0 lg:pr-4 lg:pl-4 border-l-0 lg:border-l border-purple-100">
                {/* Main Header */}
                <motion.div variants={itemVariants} className="space-y-5">
                  <h2 className="text-4xl lg:text-5xl font-serif font-thin text-[#0B051A] tracking-tight">
                    <span className="font-thin text-[#6D42D0]">Rubric Operating System</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-gray-600 font-light leading-snug max-w-xl">
                    Replacing subjective feedback with <span className="font-medium text-gray-900">structured data</span> to create a self-optimizing hiring funnel.
                  </p>
                </motion.div>

                {/* Dimensions Grid */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Structured Dimensions
                  </p>
                  <div className="flex flex-wrap gap-3 max-w-lg">
                    {dimensions.map((dim, i) => (
                      <span key={i} className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#F5F2FC] text-[#5531A7] border border-[#E9E1F8] capitalize">
                        {dim}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Adaptations List */}
                <motion.div variants={itemVariants} className="space-y-5 border-t border-gray-100 pt-8">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                    System Adaptations
                  </p>
                  <div className="flex flex-col gap-4">
                    {adaptations.map((adapt, i) => (
                      <div key={i} className="flex items-center gap-4 text-gray-800 text-xl font-medium capitalize">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#845EE0] to-[#5531A7] flex items-center justify-center shadow-md">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        {adapt}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: UI Recreation */}
              <motion.div variants={uiContainerVariants} className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-8 relative overflow-hidden">

                {/* Main Selection */}
                <motion.div className="inline-flex relative">
                  <motion.div
                    initial={{ borderColor: "#e5e7eb", scale: 1 }}
                    animate={isInView ? { borderColor: "#a855f7", scale: [1, 0.92, 1] } : {}}
                    transition={{ duration: 0.4, delay: 1.5 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 bg-white shadow-sm z-10"
                  >
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="font-bold text-gray-800 text-lg">HTML / CSS</span>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 1.7, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-1 border-2 border-white z-20 shadow-sm"
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </motion.div>
                </motion.div>

                {/* Expanded Box */}
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={isInView ? { opacity: 1, height: "auto", marginTop: "1.5rem" } : {}}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 2.2 }}
                  className="bg-[#f9fafb] border border-gray-200 rounded-2xl relative overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 2.7 }}
                    className="p-6"
                  >
                    <p className="text-gray-600 mb-4 font-medium">
                      Since you selected <strong className="text-gray-900">HTML / CSS</strong>, you might also want to evaluate:
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Semantic HTML" },
                        { name: "CSS Box Model" },
                        { name: "Flexbox & Grid" },
                        { name: "Responsive Design" },
                        { name: "Accessibility" },
                        { name: "CSS Animations" },
                        { name: "CSS Variables" },
                        { name: "Browser Compatibility" },
                        { name: "Performance" },
                        { name: "Show less", dashed: true },
                      ].map((pill, i) => {
                        const selectedPills = ["Semantic HTML", "CSS Box Model", "Flexbox & Grid", "Responsive Design", "Browser Compatibility", "Performance"];
                        const orderOfSelection = selectedPills.indexOf(pill.name) + 1;
                        const shouldSelect = orderOfSelection > 0;

                        const appearDelay = 2.8 + (i * 0.05);
                        const selectDelay = shouldSelect ? 3.4 + (orderOfSelection * 0.25) : 0;

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: appearDelay }}
                            className="relative"
                          >
                            <motion.div
                              initial={{
                                borderColor: pill.dashed ? "#d1d5db" : "#e5e7eb",
                                color: pill.dashed ? "#6b7280" : "#4b5563",
                                scale: 1
                              }}
                              animate={shouldSelect && isInView ? {
                                borderColor: "#a855f7",
                                color: "#1f2937",
                                scale: [1, 0.9, 1]
                              } : {}}
                              transition={shouldSelect ? {
                                duration: 0.3,
                                delay: selectDelay,
                              } : {}}
                              style={{
                                borderStyle: pill.dashed ? 'dashed' : 'solid',
                                borderWidth: '1px',
                                backgroundColor: pill.dashed ? 'transparent' : '#ffffff'
                              }}
                              className={`px-4 py-2 rounded-full text-sm font-medium ${pill.dashed ? 'shadow-none' : 'shadow-sm'}`}
                            >
                              {pill.name}
                            </motion.div>
                            {shouldSelect && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ type: "spring", delay: selectDelay + 0.15 }}
                                className="absolute -top-1.5 -right-1.5 bg-purple-500 rounded-full p-0.5 border-2 border-white shadow-sm z-10"
                              >
                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                              </motion.div>
                            )}
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Other Options */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.0 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  {[
                    { name: "Javascript", icon: <div className="bg-yellow-400 text-white text-[10px] font-black px-1 rounded-sm">JS</div> },
                    { name: "WebAssembly", icon: <Globe className="w-4 h-4 text-blue-400" /> },
                    { name: "TypeScript", icon: <div className="bg-blue-600 text-white text-[10px] font-black px-1 rounded-sm">TS</div> },
                    { name: "Web Performance", icon: <Zap className="w-4 h-4 text-amber-400" /> },
                    { name: "Browser APIs", icon: <Link className="w-4 h-4 text-gray-400" /> },
                    { name: "Web Security", icon: <Lock className="w-4 h-4 text-emerald-500" /> },
                    { name: "Progressive Web Apps", icon: <Smartphone className="w-4 h-4 text-gray-700" /> },
                    { name: "+4 more", dashed: true },
                  ].map((pill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.0 + (i * 0.05) }}
                      className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  ${pill.dashed
                          ? 'border border-dashed border-gray-300 text-gray-500 bg-transparent'
                          : 'border border-gray-200 text-gray-700 bg-white shadow-sm hover:border-gray-300 transition-colors cursor-pointer'
                        }
                `}
                    >
                      {pill.icon}
                      {pill.name}
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>
        ) : activeTab === 1 ? (
          <motion.div
            key="ai-sourcing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Left Column: Content */}
              <div className="space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l-2 border-[#6D42D0]/20">
                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-[#6D42D0] font-bold tracking-[0.2em] text-xs uppercase">
                    AI Sourcing Engine
                  </p>
                  <h2 className="text-4xl lg:text-[2.8rem] font-serif font-thin text-[#0B051A] tracking-tight leading-[1.15]">
                    Manual sourcing is{" "}
                    <span className="italic text-[#6D42D0]">slow, biased,</span> and inconsistent.
                  </h2>
                  <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed max-w-md">
                    IIIP replaces guesswork with{" "}
                    <span className="font-medium text-gray-800">rubric-aligned, AI-powered sourcing</span>{" "}
                    — pulling the best candidates from every channel automatically.
                  </p>
                </motion.div>

                {/* Capabilities */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Sourcing Channels
                  </p>
                  <div className="space-y-2">
                    {capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#6D42D0]/20 transition-colors"
                      >
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                          {cap.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{cap.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Animated Screening Criteria Panel */}
              <motion.div
                variants={itemVariants}
                className="w-full h-full relative flex items-center justify-center"
              >
                <div
                  className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
                  style={{ maxHeight: "560px" }}
                >
                  {/* AI auto-fill indicator */}
                  <div className="absolute top-3 right-3 z-20">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-1.5 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full"
                    >
                      <Sparkles className="w-3 h-3 text-purple-600" />
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">AI Auto-filling</span>
                    </motion.div>
                  </div>

                  {/* Sticky Header */}
                  <div className="px-5 pt-5 pb-3 border-b border-gray-100 bg-white z-10 shrink-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 text-[15px]">Auto sourcing - Business analyst</h3>
                      <span className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded-md border border-gray-200">
                        {visibleCriteria}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-500 mt-0.5">Add, edit and remove criteria</p>
                  </div>

                  {/* Scrollable content */}
                  <div
                    ref={scrollRef}
                    className="overflow-y-auto overflow-x-hidden flex-1 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {/* Criteria List */}
                    <div className="px-5 py-3 space-y-2">
                      <AnimatePresence>
                        {criteria.slice(0, visibleCriteria).map((criterion, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex items-center gap-3 group"
                          >
                            <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
                            <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                              <span className="text-[13px] text-gray-800 font-medium truncate">{criterion}</span>
                            </div>
                            <Trash2 className="w-4 h-4 text-gray-300 shrink-0" />
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Typing indicator */}
                      {visibleCriteria < criteria.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-3"
                        >
                          <GripVertical className="w-4 h-4 text-gray-200 shrink-0" />
                          <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 border-dashed rounded-lg px-3 py-2">
                            <motion.div className="flex gap-1">
                              {[0, 1, 2].map((dot) => (
                                <motion.div
                                  key={dot}
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                                  className="w-1.5 h-1.5 rounded-full bg-purple-400"
                                />
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}

                      {visibleCriteria >= criteria.length && !showFilters && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-2 text-gray-400 text-[12px] font-medium mt-1 cursor-default"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add criteria
                        </motion.div>
                      )}
                    </div>

                    {/* Advanced Filters Section */}
                    <AnimatePresence>
                      {showFilters && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="px-5 pb-5 mt-1"
                        >
                          <div className="border-t border-gray-100 pt-4 mb-3">
                            <h4 className="font-semibold text-gray-900 text-[14px]">Advance filters</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5">Configure advanced filtering options</p>
                          </div>

                          <div className="mb-3">
                            <p className="text-[11px] text-gray-500 font-medium mb-1">Key words</p>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm"
                            >
                              <span className="text-[12px] text-gray-700">"Agile" OR "Data Analytics" OR "SQL"</span>
                            </motion.div>
                          </div>

                          <div className="mb-3">
                            <p className="text-[11px] text-gray-500 font-medium mb-1.5">Job title</p>
                            <div className="flex flex-wrap gap-1.5">
                              <AnimatePresence>
                                {mustHaveSkills.slice(0, visibleMustHave).map((skill) => (
                                  <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                                  >
                                    {skill}
                                    <span className="text-gray-400 text-[10px]">&times;</span>
                                  </motion.span>
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-[11px] text-gray-500 font-medium mb-1.5">Current company</p>
                            <div className="flex flex-wrap gap-1.5">
                              <AnimatePresence>
                                {goodToHaveSkills.slice(0, visibleGoodToHave).map((skill) => (
                                  <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                                  >
                                    {skill}
                                    <span className="text-gray-400 text-[10px]">&times;</span>
                                  </motion.span>
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>

                          <AnimatePresence>
                            {showHeadcount && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-3"
                              >
                                <p className="text-[11px] text-gray-500 font-medium mb-1">Company headcount</p>
                                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                                  <span className="text-[13px] text-gray-800 font-medium">4</span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <AnimatePresence>
                            {visibleGeography > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-3"
                              >
                                <p className="text-[11px] text-gray-500 font-medium mb-1.5">Geography</p>
                                <div className="flex flex-wrap gap-1.5">
                                  <AnimatePresence>
                                    {geographyTags.slice(0, visibleGeography).map((tag) => (
                                      <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                                      >
                                        {tag}
                                        <span className="text-gray-400 text-[10px]">&times;</span>
                                      </motion.span>
                                    ))}
                                  </AnimatePresence>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {showButtons && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100"
                            >
                              <span className="px-4 py-1.5 text-[12px] font-medium text-gray-600 cursor-default">Cancel</span>
                              <span className="px-4 py-1.5 text-[12px] font-medium text-white bg-[#6D42D0] rounded-lg cursor-default shadow-sm inline-flex items-center gap-1.5"><Sparkles className="w-3 h-3" />Find candidates</span>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activeTab === 3 ? (
          <motion.div
            key="ai-screening"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-6xl mx-auto px-6 lg:px-12 w-full grid grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Content */}
              <div className="col-span-12 lg:col-span-5 space-y-8 lg:space-y-10 pr-0 lg:pr-4">
                <motion.div variants={itemVariants} className="space-y-4">
                  <p className="text-[#6D42D0] font-bold tracking-[0.1em] text-sm uppercase">
                    The Automation
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-serif text-[#0B051A] tracking-tight leading-tight">
                    Initial HR screening is repetitive.
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed pt-2">
                    IIIP automates screening using <span className="font-semibold text-gray-900">AI Voice</span> and VOIP to streamline high-volume talent acquisition.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-5 pt-4">
                  <p className="text-gray-500 font-bold tracking-[0.1em] text-xs uppercase">
                    Screening Methods
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {methods.map((method, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                          {method.icon}
                        </div>
                        <span className="text-gray-700 font-medium text-sm leading-tight">{method.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visualization */}
              <div className="col-span-12 lg:col-span-7 flex items-center justify-center mt-8 lg:mt-0">
                <motion.div variants={itemVariants} className="w-full">
                  <ScreeningCallAnimation />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : activeTab === 4 ? (
          <motion.div
            key="interview-scheduling"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Content */}
              <div className="space-y-8 lg:space-y-10 px-0 lg:px-4 border-l-0 lg:border-l border-purple-100">
                {/* Main Header */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-serif font-thin text-[#0B051A] tracking-tight">Removing <span className="text-[#6D42D0] italic">Coordination</span>&nbsp;&nbsp;Overhead</h2>
                  <p className="text-xl text-gray-600 font-light leading-snug pt-2">
                    Interview scheduling is a major operational bottleneck. IIIP fully automates the process from end to end.
                  </p>
                </motion.div>

                {/* Challenges */}
                <motion.div variants={itemVariants} className="space-y-4 pt-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Common Challenges
                  </p>
                  <div className="flex flex-col gap-3 max-w-lg">
                    {[
                      { text: "Interviewer conflicts", icon: <AlertCircle className="w-5 h-5 text-amber-500" /> },
                      { text: "Candidate rescheduling", icon: <RotateCcw className="w-5 h-5 text-red-500" /> },
                      { text: "Manual coordination", icon: <Clock className="w-5 h-5 text-gray-500" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                        {item.icon}
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Note */}
                <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100">
                  <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-3">
                    <MailCheck className="w-6 h-6 text-purple-600" />
                    <p className="text-sm font-medium text-purple-900">
                      Zero manual emails required. The system handles all communication seamlessly.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visualization */}
              <motion.div variants={itemVariants} className="w-full h-full relative flex flex-col items-center justify-center p-8">
                <div className="w-full bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-8">

                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6D42D0] to-[#5531A7] flex items-center justify-center shadow-md">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">IIIP Scheduling</h3>
                        <p className="text-sm text-gray-500 font-medium">Automated Coordination</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { text: "Analyzing interviewer calendars", icon: <Calendar className="w-6 h-6 text-[#6D42D0]" /> },
                      { text: "Offering optimal slots", icon: <CalendarCheck className="w-6 h-6 text-[#6D42D0]" /> },
                      { text: "Coordinating multi-round", icon: <Users className="w-6 h-6 text-[#6D42D0]" /> },
                      { text: "Managing reschedules", icon: <RefreshCw className="w-6 h-6 text-[#6D42D0]" /> },
                    ].map((auto, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                        className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-start gap-4 hover:border-purple-200 hover:shadow-md transition-all group cursor-default"
                      >
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-purple-50 transition-colors">
                          {auto.icon}
                        </div>
                        <span className="font-semibold text-gray-800 leading-tight">
                          {auto.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Calendar Timeline UI */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-start justify-between relative pt-2">
                      <div className="absolute top-6 left-[16.66%] right-[16.66%] h-[2px] bg-gray-200 z-0" />

                      {[1, 2, 3].map((step, idx) => (
                        <div key={idx} className="flex-1 relative z-10 flex flex-col items-center gap-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 + (idx * 0.2), type: "spring" }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ring-4 ring-white ${idx === 0 ? "bg-emerald-500 text-white" :
                              idx === 1 ? "bg-[#6D42D0] text-white" :
                                "bg-gray-100 text-gray-400 border border-gray-200"
                              }`}
                          >
                            {idx === 0 ? (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : idx === 1 ? "2" : "3"}
                          </motion.div>
                          <span className={`text-xs font-semibold whitespace-nowrap tracking-wide ${idx === 2 ? "text-gray-400" : "text-gray-700"
                            }`}>
                            {idx === 0 ? "Analyzed" : idx === 1 ? "Sent Slots" : "Confirmed"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activeTab === 2 ? (
          <motion.div
            key="ai-resume-screening"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Content */}
              <div className="space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l-2 border-[#6D42D0]/20">
                {/* Main Header */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-[#6D42D0] font-bold tracking-[0.2em] text-xs uppercase">AI RESUME SCREENING</p>
                  <h2 className="text-4xl lg:text-[2.8rem] font-serif font-thin text-[#0B051A] tracking-tight leading-[1.15]">
                    Beyond Keyword{" "}
                    <span className="italic text-[#6D42D0]">Filtering</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                    IIIP evaluates candidate's resume holistically — analyzing <span className="font-medium text-gray-800">skill depth, trajectory, and rubric fit</span> in seconds, not hours.
                  </p>
                </motion.div>

                {/* Evaluation + Outputs side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div variants={itemVariants} className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                      What the AI Evaluates
                    </p>
                    <div className="space-y-2">
                      {[
                        { text: "Skill Depth", icon: <Layers className="w-5 h-5 text-indigo-500" /> },
                        { text: "Experience Relevance", icon: <FileText className="w-5 h-5 text-emerald-500" /> },
                        { text: "Career Trajectory", icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
                        { text: "Rubric Alignment", icon: <CheckCircle2 className="w-5 h-5 text-purple-500" /> },
                        { text: "Intent Signals", icon: <MessageSquare className="w-5 h-5 text-amber-500" /> },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#6D42D0]/20 transition-colors"
                        >
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            {item.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Outputs Generated
                    </p>
                    <div className="space-y-2">
                      {[
                        { text: "Candidate Fit Score", value: "85+" },
                        { text: "Screening Summary", value: "Generated" },
                        { text: "Next Actions", value: "Recommended" },
                      ].map((out, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl text-white flex flex-col gap-1.5 bg-[#fbf9fd]"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            {out.text}
                          </span>
                          <span className="text-base font-bold text-[#5334b7]">{out.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Static Screening Report Preview */}
              <motion.div
                variants={itemVariants}
                className="w-full h-full relative flex items-center justify-center"
              >
                <div
                  className="w-full max-w-lg bg-white border border-[#e9eaeb] rounded-2xl shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)] overflow-hidden flex flex-col relative"
                  style={{ maxHeight: "520px" }}
                >
                  {/* Close button */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center justify-center size-[36px] rounded-lg">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13 1L1 13M1 1L13 13" stroke="#A4A7AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Fixed Header: Profile */}
                  <div className="px-6 pt-6 pb-4 border-b border-gray-100 bg-white z-10 shrink-0 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative rounded-full shrink-0 size-[50px] bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#6D42D0]">NC</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#181d27] text-[15px] leading-[22px]">Natalie Craig</p>
                        <p className="text-[#535862] text-[13px] leading-[18px]">natalie@email.com</p>
                      </div>
                      <div className="relative bg-white rounded-lg shrink-0 mr-8">
                        <div className="px-4 py-2 text-[#414651] text-[13px] font-semibold whitespace-nowrap">
                          View Candidate
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      </div>
                    </div>
                  </div>

                  {/* Scrollable content */}
                  <div className="overflow-y-auto overflow-x-hidden flex-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <div className="px-6 pt-4 pb-6 flex flex-col gap-4 overflow-hidden">
                      {/* Resume Upload Section */}
                      <div className="bg-[#f8f8f8] rounded-2xl px-5 py-4">
                        <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] mb-3">Resume Being Screened</p>
                        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#e5e7eb]">
                          <div className="shrink-0">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <rect width="32" height="32" rx="6" fill="#FEE4E2" />
                              <path d="M16 10V22M16 10L12 14M16 10L20 14" stroke="#B42318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] truncate">Software_develoer.pdf</p>
                            <p className="text-[#6B7280] text-[12px] leading-[16px] mt-0.5">124 KB • Uploaded 2 mins ago</p>
                          </div>
                          <button className="shrink-0 text-[#6B7280] hover:text-[#181d27] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 3V17M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Screening Report Title */}
                      <div>
                        <p className="font-semibold text-[#181d27] text-[15px] leading-[22px]">Screening report</p>
                      </div>

                      {/* Requirements Matched */}
                      <div className="bg-[#f8f8f8] rounded-2xl px-5 py-4">
                        <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] mb-3">Requirements Matched</p>
                        <div className="flex flex-col gap-3">
                          {[
                            "3+ years of Javascript, Typescript, or Python experience",
                            "Experience working in an agile environment",
                            "Bachelor's degree in computer science or related field",
                          ].map((req, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="bg-[#dcfae6] rounded-full shrink-0 size-[22px] flex items-center justify-center mt-0.5">
                                <svg width="11" height="10" viewBox="0 0 12 11" fill="none">
                                  <path d="M10 3L4.5 8.5L2 6" stroke="#079455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                              </div>
                              <p className="text-[#535862] text-[13px] leading-[20px] flex-1">{req}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements Not Matched */}
                      <div className="bg-[#f8f8f8] rounded-2xl px-5 py-4">
                        <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] mb-3">Requirements Not matched</p>
                        <div className="flex flex-col gap-3">
                          {[
                            { text: "Solid understanding of data structures and algorithms" },
                            { text: "Experience with cloud platforms such as AWS, Azure, or GCP" },
                          ].map((req, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="shrink-0 size-[22px] flex items-center justify-center mt-0.5">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <path d="M16 6L6 16M6 6L16 16" stroke="#B42318" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                              <p className="text-[#535862] text-[13px] leading-[20px] flex-1">{req.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activeTab === 5 ? (
          <motion.div
            key="hiring-intelligence"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-10">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h2 className="text-5xl leading-[1.1] font-serif font-thin text-[#0B051A] tracking-tight pb-2">
                    This creates a <span className="text-purple-600 italic tracking-normal font-normal">Hiring Intelligence Grid.</span>
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed pt-2">
                    IIIP connects data across the entire ecosystem, transforming hiring into a <strong>measurable and optimizable</strong> engine.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-5 pt-4">
                  <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">Leadership can analyze</p>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 transition-colors">
                          <Icon className="w-5 h-5 text-purple-500" />
                          <span className="font-medium text-gray-800 text-sm">{metric.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Grid Visualization */}
              <motion.div variants={itemVariants} className="h-[500px] border border-gray-200 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#a855f7 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

                {/* Connecting Lines (Simulated SVG) */}
                <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="gridGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
                    </radialGradient>
                  </defs>
                  <style>{`
                    @keyframes dataFlow {
                      from { stroke-dashoffset: 24; }
                      to { stroke-dashoffset: 0; }
                    }
                    .line-flow {
                      stroke-dasharray: 8 16;
                      animation: dataFlow 1.5s linear infinite;
                    }
                    .line-flow-reverse {
                      stroke-dasharray: 8 16;
                      animation: dataFlow 1.5s linear infinite reverse;
                    }
                  `}</style>

                  {/* Smooth glowing background connections matching node coordinates exactly */}
                  <g stroke="url(#gridGlow)" strokeWidth="3" opacity="0.6">
                    <line x1="10%" y1="20%" x2="50%" y2="50%" />
                    <line x1="50%" y1="10%" x2="50%" y2="50%" />
                    <line x1="85%" y1="30%" x2="50%" y2="50%" />
                    <line x1="15%" y1="70%" x2="50%" y2="50%" />
                    <line x1="80%" y1="75%" x2="50%" y2="50%" />
                    <line x1="50%" y1="85%" x2="50%" y2="50%" />
                  </g>

                  {/* Animated data packets matching node coordinates exactly */}
                  <g stroke="#c084fc" strokeWidth="2" opacity="0.8">
                    <line x1="10%" y1="20%" x2="50%" y2="50%" className="line-flow" />
                    <line x1="50%" y1="10%" x2="50%" y2="50%" className="line-flow-reverse" />
                    <line x1="85%" y1="30%" x2="50%" y2="50%" className="line-flow" />
                    <line x1="15%" y1="70%" x2="50%" y2="50%" className="line-flow-reverse" />
                    <line x1="80%" y1="75%" x2="50%" y2="50%" className="line-flow" />
                    <line x1="50%" y1="85%" x2="50%" y2="50%" className="line-flow-reverse" />
                  </g>
                </svg>

                {/* Central Node */}
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0 rgba(168,85,247,0.4)", "0 0 0 20px rgba(168,85,247,0)", "0 0 0 0 rgba(168,85,247,0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full border-2 border-purple-500"
                >
                  <Network className="w-10 h-10 text-purple-600" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-purple-700 whitespace-nowrap">IIIP Core</span>
                </motion.div>

                {/* Surrounding Nodes */}
                {nodes.map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                    className="absolute z-10"
                    style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="bg-white p-3 rounded-xl border border-gray-200 relative flex items-center justify-center">
                      {node.icon}
                      <span className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Leverage advanced AI to screen, evaluate, and match candidates with precision and speed.",
    },
    {
      icon: Mic,
      title: "Voice-First Interface",
      description: "Command your hiring process naturally with voice commands that automate complex workflows.",
    },
    {
      icon: CheckSquare,
      title: "Rubric-Driven Evaluation",
      description: "Ensure consistent, objective candidate assessment with customizable evaluation frameworks.",
    },
    {
      icon: CalendarSync,
      title: "Automated Scheduling",
      description: "Eliminate back-and-forth emails with intelligent calendar coordination and reminders.",
    },
    {
      icon: LayoutDashboard,
      title: "Real-Time Analytics",
      description: "Track hiring metrics, bottlenecks, and performance with comprehensive dashboards.",
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Scale your hiring operations worldwide with localized support and compliance.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px] bottom-0 right-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-6 leading-[1.1]">
            Everything you need to <span className="text-[#a78bfa] italic font-normal">transform hiring</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e153b]/40 border border-[#4c3b7a]/50 p-8 rounded-3xl backdrop-blur-sm transition-all group hover:border-[#7c3aed]/60"
              >
                <div className="bg-[#7c3aed]/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#7c3aed]/30 transition-colors">
                  <Icon className="text-[#a78bfa] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const benefits = [
    { text: "Unified hiring workflows", icon: Layers },
    { text: "Scalable global hiring infrastructure", icon: Globe },
    { text: "Improved recruiter productivity", icon: Zap },
    { text: "Stronger candidate experience", icon: UserCheck },
    { text: "Data-driven hiring decisions", icon: BarChart },
  ];

  return (
    <section id="benefits" ref={ref} className="relative py-24 md:py-32 bg-white text-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-[#7c3aed] font-bold tracking-[0.1em] text-sm uppercase mb-4">BENEFITS</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-[1.1]">
            IIIP brings hiring infrastructure, intelligence, and automation into{" "}
            <span className="text-[#7c3aed] italic font-normal">one platform</span>.
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-center text-gray-600 font-medium tracking-widest uppercase text-sm mb-8">
            Enterprises gain
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-gray-200 rounded-2xl p-6 transition-all hover:border-[#7c3aed]"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-medium text-gray-900 leading-snug">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center relative max-w-5xl mx-auto">

        </motion.div>
      </motion.div>
    </section>
  );
}

function CTASection({ scrollToForm }: { scrollToForm: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white mb-8 leading-[1.1]">
          Ready to transform your <span className="text-[#a78bfa] italic font-normal">hiring process</span>?
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join forward-thinking startups that are already using IIIP to build exceptional teams.
        </p>
        <div className="flex justify-center">
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full font-medium text-lg transition-colors shadow-[0_0_40px_rgba(124,58,237,0.4)] cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
