import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { ShieldAlert, Fingerprint, BrainCircuit, BarChart, FileText, Activity, CheckSquare, EyeOff, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import imgStep1 from "figma:asset/f12a3bc793460ab509f0f68039d5ba4a7fc529c5.png";
import imgStep2 from "figma:asset/0ea01ea223148c42f959fb52d34a91cb8edd5e8d.png";
import imgStep3 from "figma:asset/29d606f0685a30e727bcc00c56ae2148779c5c0f.png";
import imgStep4 from "figma:asset/dbbad1188c6e72a1205f6268a012fe4977b81c44.png";

export function SlideEleven() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const intelligence = [
    { text: "Rubric-based feedback", icon: <CheckSquare className="w-5 h-5 text-emerald-400" /> },
    { text: "AI-generated summaries", icon: <FileText className="w-5 h-5 text-blue-400" /> },
    { text: "Interviewer analytics", icon: <BarChart className="w-5 h-5 text-purple-400" /> },
    { text: "Experience monitoring", icon: <Activity className="w-5 h-5 text-amber-400" /> },
  ];

  const integrity = [
    { text: "Cheating patterns", icon: <EyeOff className="w-5 h-5 text-red-400" /> },
    { text: "Impersonation attempts", icon: <Fingerprint className="w-5 h-5 text-orange-400" /> },
    { text: "Suspicious activity", icon: <ShieldAlert className="w-5 h-5 text-yellow-400" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full text-white"
    >
      <Header title="INTERVIEW INTELLIGENCE & INTEGRITY" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="col-span-5 space-y-10 pr-4">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase">
                The Outcome
              </p>
              <h2 className="text-6xl leading-[1.1] font-serif text-white tracking-tight pb-2">
                Interviews into <span className="text-[#a78bfa] italic tracking-normal font-normal">structured intelligence.</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed pt-2">
                IIIP enhances evaluation quality while safeguarding interview integrity from end to end.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 pt-4">
              <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">
                Intelligence Capabilities
              </p>
              <div className="grid grid-cols-2 gap-4">
                {intelligence.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1e153b]/40 border border-[#4c3b7a]/30 p-4 rounded-xl backdrop-blur-sm">
                    <div className="bg-[#0B051A]/50 p-2 rounded-lg border border-[#4c3b7a]/50">
                      {item.icon}
                    </div>
                    <span className="text-gray-200 font-medium text-sm leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visualization */}
          <div className="col-span-7 flex flex-col gap-6">
            <IntegrityFlow />
          </div>

        </motion.div>
      </main>
    </motion.div>
  );
}

const flowSteps = [
  { img: imgStep1, label: "Live Interview", caption: "Candidate coding session in progress" },
  { img: imgStep2, label: "Tab Switch Detected", caption: "HIGH RISK alert triggered" },
  { img: imgStep3, label: "Malpractice Panel", caption: "Suspicious activities logged" },
  { img: imgStep4, label: "AI Feedback", caption: "Rubric-based evaluation & Code Paste detected" },
];

function IntegrityFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length);
    }, activeStep === 0 ? 2500 : 2800);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="bg-[#1e153b]/60 border border-[#4c3b7a]/50 rounded-3xl backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[60px] pointer-events-none" />

        return (
    <div className="relative z-10 p-5">
      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-4">
        {flowSteps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex-1 flex flex-col gap-1.5 group cursor-pointer"
          >
            <div className="h-1 rounded-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: i < activeStep ? "100%" : i === activeStep ? "100%" : "0%",
                  backgroundColor: i <= activeStep ? "#a78bfa" : "rgba(255,255,255,0.1)",
                }}
                transition={{
                  width: i === activeStep ? { duration: activeStep === 0 ? 2.5 : 2.8, ease: "linear" } : { duration: 0.3 },
                  backgroundColor: { duration: 0.3 },
                }}
                key={`bar-${activeStep}-${i}`}
              />
            </div>
            <span className={`text-[10px] font-semibold tracking-wide uppercase transition-colors ${i === activeStep ? "text-[#a78bfa]" : "text-gray-500"}`}>
              {step.label}
            </span>
          </button>
        ))}
      </div>

      {/* Image container */}
      <div className="relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden bg-[#0B051A]/60 border border-[#4c3b7a]/30 flex items-center justify-center">
        {/* Render base images for first 3 steps */}
        {flowSteps.map((step, i) => (
          <motion.img
            key={i}
            src={step.img}
            alt={step.label}
            className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl"
            initial={false}
            animate={{
              opacity: i === activeStep ? 1 : 0,
              scale: i === activeStep ? 1 : 1.03,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}

        {/* Custom AI Feedback Animation for Step 4 */}
        <AnimatePresence>
          {activeStep === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* The clean background image for Step 4 */}
              <img src={imgStep4} alt="AI Feedback Background" className="absolute inset-0 w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.2 }}
                className="relative z-10 bg-white rounded-xl shadow-2xl border border-gray-100 w-[85%] max-w-[360px] overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-50 to-white px-4 py-3 border-b border-purple-100/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 p-1.5 rounded-md">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-gray-900 leading-tight">AI Feedback Generation</h4>
                      <p className="text-[10px] text-gray-500">Evaluating technical performance...</p>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 rounded-full border-2 border-purple-200 border-t-purple-600"
                  />
                </div>

                {/* Content */}
                <div className="p-4 bg-white space-y-3">
                  {/* Skill 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-medium text-gray-700">Problem Solving</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={`s1-${star}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (star * 0.1) }}
                          >
                            <Star className={`w-3 h-3 ${star <= 4 ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-amber-400 rounded-full" 
                      />
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-medium text-gray-700">Code Quality</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={`s2-${star}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + (star * 0.1) }}
                          >
                            <Star className={`w-3 h-3 ${star <= 3 ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                        className="h-full bg-amber-400 rounded-full" 
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="mt-3 bg-purple-50/50 border border-purple-100/50 rounded-lg p-2.5"
                  >
                    <p className="text-[10px] text-gray-600 leading-relaxed">
                      <span className="font-semibold text-purple-700">Summary:</span> Candidate demonstrated strong algorithmic thinking but struggled slightly with edge cases and code optimization.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B051A] via-[#0B051A]/80 to-transparent pt-10 pb-4 px-5 z-20">
          <motion.p
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-300 text-sm font-medium"
          >
            {flowSteps[activeStep].caption}
          </motion.p>
        </div>
      </div>
    </div>
  );
    </motion.div>
  );
}