import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Users, Database, Zap, Target, TrendingUp } from "lucide-react";

const ALL_CANDIDATES = [
  { id: 1, name: "Michael Chang", exp: "8 yrs exp", img: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NzM3MzA4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 2, name: "Sarah Jenkins", exp: "5 yrs exp", img: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc3MzcwMjAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 3, name: "David Miller", exp: "4 yrs exp", img: "https://images.unsplash.com/photo-1590735627513-59a186ed0984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3MDY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 4, name: "Elena Rodriguez", exp: "6 yrs exp", img: "https://images.unsplash.com/photo-1757347398206-7425300ef990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzczMDg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 5, name: "James Wilson", exp: "7 yrs exp", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
  { id: 6, name: "Emily Chen", exp: "3 yrs exp", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" },
  { id: 7, name: "Marcus Johnson", exp: "5 yrs exp", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" },
  { id: 8, name: "Sophie Taylor", exp: "9 yrs exp", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" },
  { id: 9, name: "Daniel Martinez", exp: "4 yrs exp", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" },
  { id: 10, name: "Olivia Brown", exp: "6 yrs exp", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
  { id: 11, name: "William Davis", exp: "8 yrs exp", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
  { id: 12, name: "Ava Garcia", exp: "5 yrs exp", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { id: 13, name: "Lucas Smith", exp: "7 yrs exp", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
  { id: 14, name: "Isabella Martinez", exp: "4 yrs exp", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  { id: 15, name: "Ethan Johnson", exp: "6 yrs exp", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80" },
  { id: 16, name: "Mia Williams", exp: "3 yrs exp", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" },
  { id: 17, name: "Alexander Lee", exp: "8 yrs exp", img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80" },
  { id: 18, name: "Charlotte Kim", exp: "5 yrs exp", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
  { id: 19, name: "Benjamin Moore", exp: "7 yrs exp", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
];

export function SlideTwelve() {
  const [candidates, setCandidates] = useState(ALL_CANDIDATES);

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates(prev => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

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
      <Header title="PRE-VETTED CANDIDATE POOL" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-6xl leading-[1.1] font-serif text-gray-900 tracking-tight pb-2">
                Every interview generates valuable <span className="text-purple-600 italic tracking-normal font-normal">hiring intelligence.</span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed pt-2">
                IIIP automatically builds a <strong>pre-vetted candidate database</strong>, allowing organizations to reuse this pool for future hiring.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">Includes</p>
              <div className="space-y-3">
                {[
                  "Previously interviewed candidates",
                  "AI-screened candidates",
                  "Candidates from mock interview programs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-purple-50/50 border border-purple-100 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-md pt-4 pb-4 flex flex-col gap-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {candidates.slice(0, 4).map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    layout="position"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    className="bg-white p-4 rounded-2xl shadow-md border border-purple-100 flex items-center gap-4 w-full shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <img src={candidate.img} alt={candidate.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">{candidate.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{["Customer Support Executive", "Customer Support Specialist", "Customer Support Associate", "Senior Support Analyst", "Support Operations Lead", "Customer Success Associate", "Technical Support Specialist", "Customer Experience Agent", "Support Team Lead", "Customer Relations Officer", "Help Desk Analyst", "Client Support Coordinator", "Customer Care Specialist", "Support Quality Analyst", "Customer Engagement Lead", "Service Desk Associate", "Customer Onboarding Specialist", "Support Escalation Manager", "Customer Retention Specialist"][candidate.id - 1] || "Customer Support Executive"} • {candidate.exp}</p>
                    </div>
                    <div className="shrink-0 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200 shadow-sm">
                      Most fit
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}