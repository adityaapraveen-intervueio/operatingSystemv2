import { motion } from "motion/react";
import { Header } from "./Header";
import { AlertTriangle, CheckCircle2, TrendingUp, Clock, Target } from "lucide-react";

export function SlideSixteen() {
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
      <Header title="REAL HIRING FUNNEL (BEFORE VS AFTER IIIP)" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-8 items-stretch h-[600px]"
        >
          {/* Typical Funnel */}
          <motion.div variants={itemVariants} className="flex flex-col h-full bg-gray-50 border border-gray-200 rounded-3xl p-8 relative">
            <h3 className="text-xl font-serif text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gray-300 inline-block"></span>
              Typical Hiring Funnel
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center space-y-2">
              {/* Funnel Shapes */}
              <div className="w-full max-w-[280px] bg-gray-200 text-gray-700 py-3 rounded-t-xl text-center font-bold text-sm">1000 Resumes</div>
              <div className="w-full max-w-[220px] bg-gray-300 text-gray-800 py-3 text-center font-bold text-sm">180 Shortlisted</div>
              <div className="w-full max-w-[160px] bg-gray-400 text-gray-900 py-3 text-center font-bold text-sm">40 Interviews</div>
              <div className="w-full max-w-[100px] bg-gray-500 text-white py-3 text-center font-bold text-sm">6 Offers</div>
              <div className="w-full max-w-[60px] bg-gray-800 text-white py-3 rounded-b-xl text-center font-bold text-sm">2 Joins</div>
            </div>

            <div className="mt-8 bg-red-50 p-5 rounded-2xl border border-red-100">
              <h4 className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase tracking-wide mb-3">
                <AlertTriangle className="w-4 h-4" /> The Problems
              </h4>
              <ul className="space-y-2 text-sm text-red-900/80">
                <li className="flex items-start gap-2">• Weak resume screening</li>
                <li className="flex items-start gap-2">• Inconsistent interview evaluation</li>
                <li className="flex items-start gap-2">• Poor funnel visibility</li>
              </ul>
            </div>
          </motion.div>

          {/* IIIP Funnel */}
          <motion.div variants={itemVariants} className="flex flex-col h-full bg-purple-50/50 border border-purple-200 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(124,58,237,0.05)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 blur-[60px] rounded-full pointer-events-none" />
            
            <h3 className="text-xl font-serif text-purple-900 mb-6 flex items-center gap-2 relative z-10">
              <span className="w-8 h-px bg-purple-300 inline-block"></span>
              Hiring Funnel with IIIP
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center space-y-2 relative z-10">
              <div className="w-full max-w-[280px] bg-purple-100 text-purple-800 py-3 rounded-t-xl text-center font-bold text-sm">1000 Resumes</div>
              <div className="w-full max-w-[240px] bg-purple-200 text-purple-900 py-3 text-center font-bold text-sm">120 AI Shortlisted</div>
              <div className="w-full max-w-[200px] bg-purple-400 text-white py-3 text-center font-bold text-sm">35 Structured Interviews</div>
              <div className="w-full max-w-[160px] bg-purple-600 text-white py-3 text-center font-bold text-sm">12 Offers</div>
              <div className="w-full max-w-[120px] bg-purple-800 text-white py-3 rounded-b-xl text-center font-bold text-sm shadow-[0_4px_15px_rgba(107,33,168,0.4)] relative">
                9 Joins
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold shadow-sm">+350%</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm">
                <h4 className="text-purple-700 font-bold text-xs uppercase tracking-wide mb-2">Why the improvement</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Rubric-driven screening</li>
                  <li>• Structured evaluation</li>
                  <li>• Better interview quality</li>
                  <li>• Improved offer targeting</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-center">
                <h4 className="text-emerald-700 font-bold text-xs uppercase tracking-wide mb-3 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Result
                </h4>
                <div className="space-y-2 text-xs font-medium text-emerald-900">
                  <div className="flex items-center gap-2"><TrendingUp className="w-3 h-3 text-emerald-600" /> Higher conversions</div>
                  <div className="flex items-center gap-2"><Clock className="w-3 h-3 text-emerald-600" /> Faster hiring cycles</div>
                  <div className="flex items-center gap-2"><Target className="w-3 h-3 text-emerald-600" /> Better candidates</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
