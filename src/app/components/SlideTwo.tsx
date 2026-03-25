import { motion } from "motion/react";
import { Header } from "./Header";
import { Database, FileSpreadsheet, Calendar, Mail, FileVideo, Layers, Brain, ArrowRight } from "lucide-react";

export function SlideTwo() {
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full"
    >
      <Header title="THE PROBLEM — FRAGMENTATION" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: The Problem Stack */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-[4rem] leading-[1.1] font-serif text-white tracking-tight">
                Enterprise hiring today runs across{" "}
                <span className="text-[#a78bfa] italic tracking-normal font-normal">fragmented systems.</span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                Typical Stack
              </p>
              
              <div className="relative h-56 border border-[#4c3b7a]/30 rounded-3xl bg-[#1e153b]/30 backdrop-blur-sm p-6 overflow-hidden flex flex-wrap gap-3 items-center justify-center">
                {stackTools.map((tool, index) => {
                  const Icon = tool.icon;
                  // Randomize initial positions for a scattered effect
                  const randomX = (Math.random() - 0.5) * 40;
                  const randomY = (Math.random() - 0.5) * 40;
                  const randomRotate = (Math.random() - 0.5) * 20;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: randomX, y: randomY, rotate: randomRotate, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                      className="bg-[#2a1d4a] border border-[#4c3b7a]/50 text-white text-sm px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    >
                      <Icon className="w-4 h-4 text-[#a78bfa]" />
                      <span>{tool.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Results & Conclusion */}
          <div className="space-y-8 h-full flex flex-col justify-center border-l border-[#4c3b7a]/30 pl-12">
            <motion.div variants={containerVariants} className="space-y-4">
              <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                This Creates
              </p>
              
              <ul className="space-y-3">
                {results.map((result, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-lg text-gray-300 font-medium"
                  >
                    <div className="mt-1.5 bg-[#4c3b7a]/40 p-1.5 rounded-lg flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                    </div>
                    {result}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="bg-[#1e153b]/50 border border-[#7c3aed]/40 p-8 rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/10 blur-[50px] rounded-full mix-blend-screen pointer-events-none" />
                <p className="text-2xl text-white font-medium mb-3">
                  Hiring today is{" "}
                  <span className="text-gray-400">workflow software.</span>
                </p>
                <div className="h-px w-full bg-gradient-to-r from-[#4c3b7a] to-transparent my-4" />
                <p className="text-4xl text-white font-serif tracking-tight pt-1">
                  But hiring should be{" "}
                  <span className="text-[#a78bfa] italic tracking-normal font-normal">an intelligence system.</span>
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </main>
    </motion.div>
  );
}
