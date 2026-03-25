import { motion } from "motion/react";
import { Header } from "./Header";
import { Check, Globe, Layout, Lock, Smartphone, Zap, Link, FileJson, Layers } from "lucide-react";

export function SlideSix() {
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

  // For the UI animation sequence
  const uiContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delayChildren: 0.8, staggerChildren: 0.15 } 
    }
  };

  const expandVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      marginTop: "1rem",
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="RUBRIC OPERATING SYSTEM" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-12 pr-4 pl-4 border-l border-purple-100">
            {/* Main Header */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h2 className="text-5xl font-serif font-thin text-[#0B051A] tracking-tight"><span className="font-thin text-[#6D42D0]">Rubric Operating System</span></h2>
              <p className="text-2xl text-gray-600 font-light leading-snug max-w-xl">
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
            <motion.div variants={itemVariants} className="space-y-5 border-t border-gray-100 p-[0px]">
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
                animate={{ borderColor: "#a855f7", scale: [1, 0.92, 1] }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 bg-white shadow-sm z-10"
              >
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-gray-800 text-lg">HTML / CSS</span>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-1 border-2 border-white z-20 shadow-sm"
              >
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Expanded Box */}
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 2.2 }}
              className="bg-[#f9fafb] border border-gray-200 rounded-2xl relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: appearDelay }}
                        className="relative"
                      >
                        <motion.div 
                          initial={{
                            borderColor: pill.dashed ? "#d1d5db" : "#e5e7eb",
                            color: pill.dashed ? "#6b7280" : "#4b5563",
                            scale: 1
                          }}
                          animate={shouldSelect ? {
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
                            animate={{ scale: 1, opacity: 1 }}
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
              animate={{ opacity: 1 }}
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
                  animate={{ opacity: 1, y: 0 }}
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
      </main>
    </motion.div>
  );
}