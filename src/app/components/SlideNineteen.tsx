import { motion } from "motion/react";
import { Header } from "./Header";
import { Clock, Target, CheckCircle, HeartHandshake, Lightbulb } from "lucide-react";

export function SlideNineteen() {
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

  const impacts = [
    { icon: <Clock className="w-8 h-8" />, value: "Faster", label: "Hiring cycles & time-to-fill" },
    { icon: <Target className="w-8 h-8" />, value: "Higher", label: "Overall candidate quality" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "Improved", label: "Offer-to-join ratios" },
    { icon: <HeartHandshake className="w-8 h-8" />, value: "Stronger", label: "Candidate experience" },
    { icon: <Lightbulb className="w-8 h-8" />, value: "Deeper", label: "Hiring intelligence insights" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-transparent text-white"
    >
      <Header title="EXPECTED ENTERPRISE IMPACT" theme="dark" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-4">
            <p className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase">
              The Bottom Line
            </p>
            <h2 className="leading-[1.1] font-serif text-white tracking-tight pb-2 text-[40px]">
              Organizations deploying IIIP typically experience <span className="text-[#a78bfa] italic tracking-normal font-normal">transformational results.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {impacts.map((impact, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="w-[calc(33.333%-16px)] bg-gradient-to-br from-[#1e153b]/60 to-[#120b29]/60 border border-[#4c3b7a]/40 p-8 rounded-3xl backdrop-blur-sm hover:border-[#a78bfa]/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all group"
              >
                <div className="text-[#a78bfa] mb-6 group-hover:scale-110 transition-transform origin-left">
                  {impact.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 tracking-tight">{impact.value}</div>
                <div className="text-gray-400 font-medium leading-snug">{impact.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-[#4c3b7a]/30 text-center">
            <p className="text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              IIIP transforms hiring from a manual workflow into <strong className="text-white font-semibold">intelligent infrastructure.</strong>
            </p>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
