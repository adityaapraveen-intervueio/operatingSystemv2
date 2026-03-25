import { motion } from "motion/react";
import { Header } from "./Header";
import { Mic, CheckSquare, BrainCircuit, ArrowRight } from "lucide-react";

export function SlideOne() {
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

  const flowSteps = [
    "Sourcing",
    "Screening",
    "Interviews",
    "Offers",
    "Hiring Intelligence",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full"
    >
      <Header title="IIIP — PRODUCT BRIEF" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full space-y-8"
        >
          {/* Header Section */}
          <div className="space-y-2">
            <motion.p variants={itemVariants} className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase">
              Interview Infrastructure & Intelligence Platform (IIIP)
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="leading-[1.1] font-serif text-white tracking-tight pb-2 mx-[1px] my-[0px] text-[48px]"
            >
              Your Talent Acquisition &amp; Employer Branding{" "}
              <span className="text-[#a78bfa] italic tracking-normal font-normal">twin</span> with{" "}
              <span className="text-[#a78bfa] italic tracking-normal font-normal">"domain knowledge"</span>
            </motion.h1>
          </div>

          {/* Pillars */}
          <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 pt-2">
            <motion.div variants={itemVariants} className="bg-[#1e153b]/50 border border-[#4c3b7a]/50 p-5 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
              <div className="bg-[#7c3aed]/20 p-3 rounded-xl">
                <Mic className="text-[#a78bfa] w-5 h-5" />
              </div>
              <span className="text-xl font-medium text-white">Voice-first</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#1e153b]/50 border border-[#4c3b7a]/50 p-5 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
              <div className="bg-[#7c3aed]/20 p-3 rounded-xl">
                <CheckSquare className="text-[#a78bfa] w-5 h-5" />
              </div>
              <span className="text-xl font-medium text-white">Rubric-driven</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#1e153b]/50 border border-[#4c3b7a]/50 p-5 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
              <div className="bg-[#7c3aed]/20 p-3 rounded-xl">
                <BrainCircuit className="text-[#a78bfa] w-5 h-5" />
              </div>
              <span className="text-xl font-medium text-white">Intelligence-powered</span>
            </motion.div>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div variants={itemVariants} className="space-y-4 pt-10">
            <p className="text-gray-400 font-medium tracking-wide text-xs uppercase">FROM REQ TO OFFER — ONE DECISION ENGINE</p>
            <div className="flex items-center justify-between w-full relative">
              {/* Connecting Line */}
              <div className="absolute top-[8px] left-0 w-full h-[2px] bg-[#4c3b7a]/40 z-0" />
              
              {flowSteps.map((step, index) => (
                <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-[#7c3aed] shadow-[0_0_15px_rgba(124,58,237,0.8)] border-2 border-[#0B051A]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                      index === flowSteps.length - 1
                        ? "bg-[#7c3aed]/20 text-[#a78bfa] border border-[#7c3aed]/40 shadow-inner"
                        : "bg-[#1e153b] text-gray-300 border border-[#4c3b7a]/50"
                    }`}
                  >
                    {step}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </main>
    </motion.div>
  );
}