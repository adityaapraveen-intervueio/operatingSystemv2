import { motion } from "motion/react";
import { Header } from "./Header";
import { Bot, UserSearch, FileText, Settings, LayoutDashboard, Brain, CalendarSync, Handshake, ArrowRight } from "lucide-react";

export function SlideThree() {
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

  const capabilities = [
    { name: "AI sourcing", icon: UserSearch },
    { name: "AI resume screening", icon: FileText },
    { name: "AI HR screening", icon: Bot },
    { name: "Interview infrastructure", icon: Settings },
    { name: "Rubric-based evaluation", icon: Brain },
    { name: "Automated scheduling", icon: CalendarSync },
    { name: "Offer workflows", icon: Handshake },
    { name: "Hiring analytics", icon: LayoutDashboard },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full"
    >
      <Header title="INTRODUCING IIIP" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full space-y-8"
        >
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-6xl leading-tight font-serif text-white tracking-tight pb-2"
            >
              IIIP is the AI-native{" "}
              <span className="text-[#a78bfa] italic tracking-normal font-normal">operating system</span>{" "}
              for hiring.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Instead of stitching together multiple tools, IIIP unifies the entire hiring lifecycle into one platform.
            </motion.p>
          </div>

          {/* Capabilities Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-4 gap-4 pt-2">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants} 
                  className="bg-[#1e153b]/50 border border-[#4c3b7a]/50 p-5 rounded-2xl flex flex-col items-center gap-3 text-center backdrop-blur-sm hover:bg-[#2a1d4a]/50 transition-colors"
                >
                  <div className="bg-[#7c3aed]/20 p-3 rounded-xl">
                    <Icon className="text-[#a78bfa] w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-white">{cap.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Transformation */}
          <motion.div variants={itemVariants} className="pt-2 flex justify-center">
            <div className="bg-[#1e153b]/80 border border-[#7c3aed]/40 p-6 rounded-full shadow-[0_0_30px_rgba(124,58,237,0.15)] flex items-center gap-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7c3aed]/10 to-transparent pointer-events-none" />
              <div className="text-gray-400 font-medium text-lg text-center">
                Manual hiring
              </div>
              <div className="bg-[#4c3b7a]/50 p-3 rounded-full relative z-10">
                <ArrowRight className="text-[#a78bfa] w-6 h-6" />
              </div>
              <div className="text-white font-serif italic text-2xl tracking-tight text-center relative z-10">
                Intelligent hiring
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </motion.div>
  );
}
