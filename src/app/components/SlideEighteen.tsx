import { motion } from "motion/react";
import { Header } from "./Header";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoGreenhouse from "figma:asset/3af4d66829b81f2e76794aba53884549e65346cc.png";
import logoWorkday from "figma:asset/72737892a1e83fd684f4f3903bcd51d252fa0117.png";

export function SlideEighteen() {
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="WHY IIIP WINS VS TRADITIONAL ATS" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-[1fr_auto_1fr] gap-8 items-stretch h-[500px]"
        >
          {/* Traditional ATS */}
          <motion.div variants={itemVariants} className="flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-3xl p-8 relative overflow-hidden group hover:border-gray-300 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-300 to-gray-200" />
            
            <div className="flex-1 space-y-8 flex flex-col">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <XCircle className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-gray-900 font-medium tracking-tight">Traditional ATS</h3>
                  <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Status Quo</p>
                </div>
              </div>
              
              <p className="text-2xl font-light text-gray-500 leading-snug">
                Focuses purely on <strong className="font-semibold text-gray-800">workflow tracking</strong> instead of talent discovery.
              </p>

              <div className="space-y-4 pt-4 mt-auto">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industry Standard Tools</p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: "Greenhouse", logo: logoGreenhouse },
                    { name: "Lever", logo: null },
                    { name: "Workday", logo: logoWorkday },
                    { name: "Ashby", logo: null },
                  ].map((tool) => (
                    <span key={tool.name} className="px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 flex items-center gap-2.5 transition-colors hover:bg-gray-100 shadow-sm">
                      {tool.logo && (
                        <ImageWithFallback src={tool.logo} alt={tool.name} className="w-4 h-4 rounded-sm object-contain grayscale opacity-70" />
                      )}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-center justify-between group-hover:bg-red-50/50 group-hover:border-red-100 transition-colors">
                <p className="text-gray-500 font-medium group-hover:text-red-800 transition-colors">Primary Function</p>
                <div className="bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-200 group-hover:border-red-200 transition-colors">
                  <p className="font-bold text-gray-600 group-hover:text-red-600 transition-colors text-sm">Track Candidates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent absolute" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="bg-white p-4 rounded-full border border-purple-200 relative z-10 shadow-lg"
            >
              <span className="font-serif italic text-purple-600 font-bold">VS</span>
            </motion.div>
          </div>

          {/* IIIP */}
          <motion.div variants={itemVariants} className="flex flex-col h-full bg-purple-50/50 border border-purple-200 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(124,58,237,0.05)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 text-purple-600 mb-2">
                <CheckCircle2 className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-serif text-purple-900">Intervue IIIP</h3>
              </div>
              
              <p className="text-2xl font-light text-gray-800 leading-tight">
                Transforms hiring into <strong className="font-semibold text-purple-700">intelligent infrastructure.</strong>
              </p>

              <div className="pt-4 border-t border-purple-100">
                <p className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">Enables</p>
                <div className="space-y-3">
                  {[
                    "AI Sourcing & Discovery", 
                    "Intelligent Screening", 
                    "Rubric-based Evaluation", 
                    "Interview Infrastructure",
                    "Deep Hiring Intelligence"
                  ].map((capability, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-800 font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Conclusion Banner */}
        <motion.div variants={itemVariants} className="mt-8 max-w-4xl mx-auto w-full bg-gray-900 rounded-2xl p-6 flex flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent pointer-events-none" />
          <div className="text-left relative z-10 w-full flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">Traditional ATS</p>
              <p className="text-xl font-serif">Workflow System</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-600 mx-8" />
            <div className="text-right">
              <p className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-1">Intervue IIIP</p>
              <p className="text-2xl font-serif text-white">Hiring Operating System</p>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}