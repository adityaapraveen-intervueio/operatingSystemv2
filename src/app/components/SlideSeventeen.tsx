import { motion } from "motion/react";
import { Header } from "./Header";
import { Shield, Lock, FileCheck, Search, Key, Database, Activity, EyeOff, CheckSquare } from "lucide-react";

export function SlideSeventeen() {
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

  const pillars = [
    {
      title: "DPDP (India)",
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      items: ["Personal data protection safeguards", "Consent-based candidate data processing", "Controlled access to personal data"]
    },
    {
      title: "ISO/IEC 27001",
      icon: <CheckSquare className="w-6 h-6 text-pink-400" />,
      items: ["Information security management", "Risk assessment frameworks", "Continuous security improvement"]
    },
    {
      title: "GDPR (Europe)",
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      items: ["Data protection by design", "Candidate data rights management", "Secure storage and processing"]
    },
    {
      title: "SOC 2 Type II",
      icon: <FileCheck className="w-6 h-6 text-emerald-400" />,
      items: ["Audited security controls", "Infrastructure access monitoring", "Operational governance"]
    },
    {
      title: "Penetration Testing",
      icon: <Search className="w-6 h-6 text-purple-400" />,
      items: ["External vulnerability testing", "Security audits", "Infrastructure hardening"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-transparent text-white"
    >
      <Header title="SECURITY & COMPLIANCE" theme="dark" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-6xl leading-[1.1] font-serif text-white tracking-tight pb-2">
              Designed for <span className="text-[#a78bfa] italic tracking-normal font-normal">enterprise-grade</span> security.
            </h2>
          </motion.div>

          <div className="grid grid-cols-5 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="bg-[#1e153b]/40 border border-[#4c3b7a]/50 p-6 rounded-3xl backdrop-blur-sm hover:bg-[#1e153b]/60 transition-colors flex flex-col relative"
              >
                {i >= 2 && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-[#a78bfa]/20 text-[#a78bfa] border border-[#a78bfa]/30 px-2.5 py-1 rounded-full">
                    Coming soon
                  </span>
                )}
                <div className="bg-[#0B051A] w-14 h-14 rounded-2xl flex items-center justify-center border border-[#4c3b7a]/30 mb-6 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#a78bfa] mt-1 text-xs">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#2a1b54]/50 to-[#1e153b]/50 border border-[#4c3b7a]/50 rounded-2xl p-6 flex flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-[0.1em] text-gray-400 uppercase">Additional Controls</h4>
                <p className="text-lg font-serif text-white mt-1">Enterprise Ready</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8 w-auto">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Key className="w-4 h-4 text-[#a78bfa]" /> Role-based Access
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Activity className="w-4 h-4 text-[#a78bfa]" /> Audit Logs
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <EyeOff className="w-4 h-4 text-[#a78bfa]" /> Recording Controls
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Database className="w-4 h-4 text-[#a78bfa]" /> Encryption
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}