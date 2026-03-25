import { motion } from "motion/react";
import { Header } from "./Header";
import { Clock, Users, Video, FileText, CheckCircle2 } from "lucide-react";

export function SlideThirteen() {
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

  const capabilities = [
    { icon: <Users className="w-5 h-5 text-[#a78bfa]" />, text: "Expert interviewers across roles" },
    { icon: <CheckCircle2 className="w-5 h-5 text-[#a78bfa]" />, text: "Standardized interviews — tech & non-tech" },
    { icon: <FileText className="w-5 h-5 text-[#a78bfa]" />, text: "Role-specific evaluation rubrics" },
    { icon: <Video className="w-5 h-5 text-[#a78bfa]" />, text: "Recorded interview sessions" },
    { icon: <FileText className="w-5 h-5 text-[#a78bfa]" />, text: "Detailed candidate scorecards" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-transparent text-white"
    >
      <Header title="ON-DEMAND INTERVIEWS" theme="dark" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="leading-[1.1] font-serif text-white tracking-tight pb-2 text-[48px]">
                Hiring managers spend large amounts of time <span className="text-[#a78bfa] italic tracking-normal font-normal">conducting interviews.</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed pt-2">
                Intervue provides <strong>On-Demand Interview Infrastructure</strong> for every role — from engineering to sales, operations, and beyond.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">Capabilities</p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1e153b]/50 p-4 rounded-xl border border-[#4c3b7a]/50 backdrop-blur-sm">
                    {item.icon}
                    <span className="text-gray-200 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-[#1e153b]/40 border border-[#4c3b7a]/50 rounded-3xl p-8 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#4c3b7a]/30 p-3 rounded-2xl border border-[#4c3b7a]/50">
                  <Clock className="w-8 h-8 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl font-serif text-white">Workflow & Results</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:mx-auto before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#4c3b7a] before:to-transparent">
                {[
                  { step: "1", title: "Candidate reaches interview stage" },
                  { step: "2", title: "IIIP schedules on-demand interview" },
                  { step: "3", title: "Domain expert conducts the interview" },
                  { step: "4", title: "Structured feedback flows into IIIP" }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-normal odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-[#0B051A] bg-[#a78bfa] text-[#0B051A] font-bold text-sm shrink-0 order-1 group-odd:-translate-x-1/2 group-even:translate-x-1/2 shadow-[0_0_15px_rgba(167,139,250,0.4)] z-10">
                      {step.step}
                    </div>
                    <div className="w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[#2a1b54]/50 border border-[#4c3b7a]/50 backdrop-blur-sm shadow-lg">
                      <p className="font-medium text-gray-200">{step.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="font-semibold text-emerald-400 mb-2 uppercase tracking-wider text-xs">The Result</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Faster interview cycles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Reduced internal interviewer workload
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Consistent evaluation standards
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}