import { motion } from "motion/react";
import { Header } from "./Header";
import { Calendar, Clock, RotateCcw, AlertCircle, RefreshCw, CalendarCheck, Users, MailCheck } from "lucide-react";

export function SlideTen() {
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

  const challenges = [
    { text: "Interviewer conflicts", icon: <AlertCircle className="w-5 h-5 text-amber-500" /> },
    { text: "Candidate rescheduling", icon: <RotateCcw className="w-5 h-5 text-red-500" /> },
    { text: "Manual coordination", icon: <Clock className="w-5 h-5 text-gray-500" /> },
  ];

  const automations = [
    { text: "Analyzing interviewer calendars", icon: <Calendar className="w-6 h-6 text-[#6D42D0]" /> },
    { text: "Offering optimal slots", icon: <CalendarCheck className="w-6 h-6 text-[#6D42D0]" /> },
    { text: "Coordinating multi-round", icon: <Users className="w-6 h-6 text-[#6D42D0]" /> },
    { text: "Managing reschedules", icon: <RefreshCw className="w-6 h-6 text-[#6D42D0]" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="AI SCHEDULING ENGINE" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-10 pr-4 pl-4 border-l border-purple-100">
            {/* Main Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-5xl font-serif font-thin text-[#0B051A] tracking-tight">
                Removing <span className="font-bold text-[#6D42D0]">Coordination</span> Overhead
              </h2>
              <p className="text-xl text-gray-600 font-light leading-snug pt-2">
                Interview scheduling is a major operational bottleneck. IIIP fully automates the process from end to end.
              </p>
            </motion.div>

            {/* Challenges */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                Common Challenges
              </p>
              <div className="flex flex-col gap-3 max-w-lg">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                    {item.icon}
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Note */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100">
              <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-3">
                <MailCheck className="w-6 h-6 text-purple-600" />
                <p className="text-sm font-medium text-purple-900">
                  Zero manual emails required. The system handles all communication seamlessly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visualization */}
          <motion.div variants={itemVariants} className="w-full h-full relative flex flex-col items-center justify-center p-8">
            <div className="w-full bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-8">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6D42D0] to-[#5531A7] flex items-center justify-center shadow-md">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">IIIP Scheduling</h3>
                    <p className="text-sm text-gray-500 font-medium">Automated Coordination</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {automations.map((auto, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                    className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-start gap-4 hover:border-purple-200 hover:shadow-md transition-all group cursor-default"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-purple-50 transition-colors">
                      {auto.icon}
                    </div>
                    <span className="font-semibold text-gray-800 leading-tight">
                      {auto.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Calendar Timeline UI */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start justify-between relative pt-2">
                  <div className="absolute top-6 left-[16.66%] right-[16.66%] h-[2px] bg-gray-200 z-0" />
                  
                  {[1, 2, 3].map((step, idx) => (
                    <div key={idx} className="flex-1 relative z-10 flex flex-col items-center gap-3">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + (idx * 0.2), type: "spring" }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ring-4 ring-white ${
                          idx === 0 ? "bg-emerald-500 text-white" : 
                          idx === 1 ? "bg-[#6D42D0] text-white" : 
                          "bg-gray-100 text-gray-400 border border-gray-200"
                        }`}
                      >
                        {idx === 0 ? <CheckIcon /> : idx === 1 ? "2" : "3"}
                      </motion.div>
                      <span className={`text-xs font-semibold whitespace-nowrap tracking-wide ${
                        idx === 2 ? "text-gray-400" : "text-gray-700"
                      }`}>
                        {idx === 0 ? "Analyzed" : idx === 1 ? "Sent Slots" : "Confirmed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
