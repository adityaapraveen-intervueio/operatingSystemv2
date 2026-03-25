import { motion } from "motion/react";
import { Header } from "./Header";
import { Layers, Globe, Zap, UserCheck, BarChart } from "lucide-react";

export function SlideTwenty() {
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
    { text: "Unified hiring workflows", icon: <Layers className="w-6 h-6" /> },
    { text: "Scalable global hiring infrastructure", icon: <Globe className="w-6 h-6" /> },
    { text: "Improved recruiter productivity", icon: <Zap className="w-6 h-6" /> },
    { text: "Stronger candidate experience", icon: <UserCheck className="w-6 h-6" /> },
    { text: "Data-driven hiring decisions", icon: <BarChart className="w-6 h-6" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-transparent text-white"
    >
      <Header title="CONCLUSION" theme="dark" />

      <main className="flex-1 px-12 pb-12 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full flex flex-col items-center"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="max-w-5xl text-center space-y-4 mb-8">
            <h2 className="md:leading-[1.1] font-serif text-white tracking-tight pb-2 text-[48px]">
              IIIP brings hiring infrastructure, intelligence, and automation into <span className="text-[#a78bfa] italic tracking-normal font-normal">one platform</span>.
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-center text-gray-400 font-medium tracking-widest uppercase text-sm mb-5">
              Enterprises gain
            </h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 bg-[#1e153b]/40 border border-[#4c3b7a]/50 rounded-2xl p-5 backdrop-blur-md w-[310px] hover:bg-[#2a1b54]/40 hover:border-[#6D42D0] transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B051A] to-[#1e153b] border border-[#6D42D0]/50 text-[#a78bfa] shadow-[0_0_15px_rgba(109,66,208,0.2)]">
                    {benefit.icon}
                  </div>
                  <span className="text-[16px] font-medium text-gray-200 leading-snug">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div variants={itemVariants} className="mt-12 text-center relative z-10 w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#6D42D0]/20 blur-[80px] rounded-full scale-150 -z-10" />
            <div className="p-8 border border-[#4c3b7a]/30 bg-[#0B051A]/40 rounded-3xl backdrop-blur-xl shadow-2xl">
              <h3 className="text-3xl font-bold text-white tracking-wide leading-relaxed">
                IIIP enables organizations to hire <span className="text-[#a78bfa]">faster</span>, <span className="text-[#a78bfa]">smarter</span>, and more <span className="text-[#a78bfa]">efficiently</span>.
              </h3>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </motion.div>
  );
}