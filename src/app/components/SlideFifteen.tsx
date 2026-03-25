import { motion } from "motion/react";
import { Header } from "./Header";
import { FileText, Search, Settings, UserPlus, Trophy, BrainCircuit, RefreshCw } from "lucide-react";

export function SlideFifteen() {
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

  const steps = [
    { num: 1, text: "Interviews generate structured rubric data", icon: <FileText className="w-5 h-5" /> },
    { num: 2, text: "System learns why candidates fail", icon: <Search className="w-5 h-5" /> },
    { num: 3, text: "Screening logic adapts", icon: <Settings className="w-5 h-5" /> },
    { num: 4, text: "Better candidates enter funnel", icon: <UserPlus className="w-5 h-5" /> },
    { num: 5, text: "Hiring outcomes improve", icon: <Trophy className="w-5 h-5" /> },
    { num: 6, text: "System becomes smarter", icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-transparent text-white"
    >
      <Header title="HIRING INTELLIGENCE FLYWHEEL" theme="dark" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="max-w-4xl text-center space-y-4 mb-4">
            <h2 className="md:leading-[1.1] font-serif text-white tracking-tight pb-2 text-[48px]">
              IIIP creates a <span className="text-[#a78bfa] italic tracking-normal font-normal">self-improving</span> hiring system.
            </h2>
          </motion.div>

          {/* S-Shape visualization */}
          <motion.div variants={itemVariants} className="relative w-full max-w-4xl aspect-[5/3]">
            {/* Background S-Path SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none"><path></path><path className="animate-[dash_6s_linear_infinite]"></path>{/* Static Dotted Path */}<style> @keyframes dash {"{"} 0% {"{"} stroke-dashoffset: 2528; {"}"} 100% {"{"} stroke-dashoffset: 0; {"}"} {"}"} </style><path
                d="M 250 100 L 750 100 A 100 100 0 0 1 750 300 L 250 300 A 100 100 0 0 0 250 500 L 750 500"
                stroke="#4c3b7a"
                strokeWidth="3"
                strokeDasharray="8 8"
                fill="none"
                opacity="0.6"
              />{/* Animated Flow Line */}<path
                d="M 250 100 L 750 100 A 100 100 0 0 1 750 300 L 250 300 A 100 100 0 0 0 250 500 L 750 500"
                stroke="#a78bfa"
                strokeWidth="4"
                fill="none"
                strokeDasharray="300 2228"
                strokeLinecap="round"
                className="animate-[dash_6s_linear_infinite]"
              /><style>{`
                @keyframes dash {
                  0% { stroke-dashoffset: 2528; }
                  100% { stroke-dashoffset: 0; }
                }
              `}</style></svg>

            {/* Nodes */}
            {steps.map((step, i) => {
              const sPathNodes = [
                { x: 25, y: 16.66 },
                { x: 75, y: 16.66 },
                { x: 75, y: 50 },
                { x: 25, y: 50 },
                { x: 25, y: 83.33 },
                { x: 75, y: 83.33 }
              ];

              return (
                <motion.div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-56"
                  style={{ left: `${sPathNodes[i].x}%`, top: `${sPathNodes[i].y}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0B051A] text-[#a78bfa] mb-3 border-2 border-[#6D42D0] relative z-10 shadow-[0_0_15px_rgba(109,66,208,0.4)]">
                    {step.icon}
                  </div>
                  <div className="text-[#a78bfa] font-bold text-[11px] tracking-widest uppercase mb-1">
                    Step {step.num}
                  </div>
                  <p className="text-gray-200 font-medium text-[14px] leading-snug">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Simple Loop Indicator */}
          <motion.div variants={itemVariants} className="mt-2 flex items-center gap-3 px-6 py-3 rounded-full bg-[#1e153b] border border-[#4c3b7a]/80 shadow-md">
            <RefreshCw className="w-5 h-5 text-[#a78bfa]" />
            <span className="text-gray-200 text-sm font-semibold tracking-wide uppercase">Continuous Optimization Loop</span>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
