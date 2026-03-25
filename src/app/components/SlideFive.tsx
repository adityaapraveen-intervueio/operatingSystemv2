import { motion } from "motion/react";
import { Header } from "./Header";
import { Mic, Zap, FileSearch, CalendarCheck, FileOutput, ShieldCheck } from "lucide-react";

export function SlideFive() {
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

  const actions = [
    { text: "Generates the job description", icon: FileOutput },
    { text: "Creates evaluation rubrics", icon: ShieldCheck },
    { text: "Activates sourcing", icon: FileSearch },
    { text: "Begins screening candidates", icon: Zap },
    { text: "Schedules interview slots", icon: CalendarCheck },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full"
    >
      <Header title="VOICE-FIRST HIRING OS" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full space-y-8"
        >
          {/* Top statement */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-2xl text-gray-400">
              Traditional hiring systems rely on dashboards.
            </p>
            <h2 className="text-[4rem] leading-tight font-serif text-white tracking-tight">
              IIIP introduces a <span className="text-[#a78bfa] italic font-normal">voice-first</span> hiring interface.
            </h2>
          </motion.div>

          {/* Interaction Visual */}
          <div className="grid grid-cols-2 gap-8 items-center pt-4">
            {/* Left: The Command */}
            <motion.div variants={itemVariants} className="bg-[#1e153b]/40 border border-[#7c3aed]/30 p-8 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.05)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/10 blur-[40px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#7c3aed]/20 p-4 rounded-full">
                  <Mic className="w-8 h-8 text-[#a78bfa]" />
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: ["12px", "24px", "12px"] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                      className="w-1.5 bg-[#a78bfa] rounded-full"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-2xl text-white font-medium leading-relaxed mb-6">"Open a Customer Support role in Bengaluru with strong Communications skill"</p>
              
              <div className="inline-block bg-[#7c3aed]/10 border border-[#7c3aed]/30 px-6 py-3 rounded-full">
                <p className="text-lg text-white">
                  This significantly <span className="text-[#a78bfa] font-bold">reduces recruiter operational workload.</span>
                </p>
              </div>
            </motion.div>

            {/* Right: The Engine Response */}
            <motion.div variants={containerVariants} className="space-y-4 pl-8 border-l border-[#4c3b7a]/30">
              <p className="text-sm font-bold tracking-[0.2em] text-[#a78bfa] uppercase">
                IIIP Automatically
              </p>
              
              <div className="space-y-3">
                {actions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 bg-[#2a1d4a]/50 p-4 rounded-2xl border border-[#4c3b7a]/50"
                    >
                      <div className="bg-black/20 p-2 rounded-xl">
                        <Icon className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="text-lg text-gray-200 font-medium">{action.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer statement */}
          <motion.div variants={itemVariants} className="pt-4 text-center">
          </motion.div>

        </motion.div>
      </main>
    </motion.div>
  );
}