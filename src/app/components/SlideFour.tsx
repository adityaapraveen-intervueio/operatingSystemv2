import { motion } from "motion/react";
import { Header } from "./Header";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import logoLinkedIn from "figma:asset/b8b4e490db8426db6f9c1fa6b754581cb36ae0ae.png";
import logoZoom from "figma:asset/e0616b65f3ba42176ff4b0d328c432ca319f0286.png";
import logoCoderPad from "figma:asset/e25a858071422e42e6c7622745faf45ed07d7ed0.png";
import logoHackerRank from "figma:asset/89717b32d1f8283b760ea32ef44ffe926dca1005.png";
import logoNaukri from "figma:asset/1d376091633b2836bb83efe05cceff692715b71f.png";
import logoCalendly from "../../imports/Calendly_id6Wf82SOT_0.svg";
import logoTeams from "../../imports/microsoft-teams-svgrepo-com.svg";
import logoExcel from "../../imports/Microsoft_Excel-Logo.wine.svg";
import logoBI from "../../imports/BI_logo.svg";
import logoGreenhouse from "figma:asset/3af4d66829b81f2e76794aba53884549e65346cc.png";
import logoWorkday from "figma:asset/72737892a1e83fd684f4f3903bcd51d252fa0117.png";

export function SlideFour() {
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

  const legacyStack = [
    { fn: "Applicant Tracking", tool: "Greenhouse / Lever / Workday", logos: [logoGreenhouse, logoWorkday] },
    { fn: "Candidate Sourcing", tool: "LinkedIn Recruiter / Naukri", logos: [logoLinkedIn, logoNaukri] },
    { fn: "Resume Screening", tool: "Manual or third-party tools", logos: [] },
    { fn: "Interview Scheduling", tool: "Calendly / Manual coordination", logos: [logoCalendly] },
    { fn: "Video Interviews", tool: "Zoom / Teams", logos: [logoZoom, logoTeams] },
    { fn: "Technical Assessments", tool: "HackerRank / CoderPad", logos: [logoHackerRank, logoCoderPad] },
    { fn: "Analytics", tool: "Spreadsheets / BI tools", logos: [logoExcel, logoBI] },
  ];

  const iiipStack = [
    { fn: "Applicant Tracking", tool: "IIIP ATS" },
    { fn: "AI Sourcing", tool: "IIIP Sourcing Engine" },
    { fn: "Resume Screening", tool: "AI Screening Engine" },
    { fn: "Interview Scheduling", tool: "AI Scheduling Engine" },
    { fn: "Interview Infrastructure", tool: "Interview Live" },
    { fn: "External Interviews", tool: "On-Demand Interview Marketplace" },
    { fn: "Candidate Experience", tool: "Career Hub + NPS" },
    { fn: "Hiring Analytics", tool: "Intelligence Grid" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white"
    >
      <Header title="HOW IIIP REPLACES 6 HIRING TOOLS" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-[1fr_auto_1fr] gap-8 items-stretch h-full py-4"
        >
          {/* Legacy Side */}
          <div className="flex flex-col space-y-6 h-full">
            <motion.div variants={itemVariants} className="text-center space-y-2">
              <h2 className="text-3xl font-serif text-gray-900 tracking-tight">Today's Hiring Stack</h2>
              <p className="text-sm text-gray-500">Multiple disconnected systems</p>
            </motion.div>

            <motion.div variants={containerVariants} className="flex-1 bg-gray-50 border border-gray-200 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center">
              <div className="space-y-3">
                {legacyStack.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex flex-row items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm gap-2">
                    <span className="text-gray-800 font-medium text-sm">{item.fn}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{item.tool}</span>
                      {item.logos && item.logos.length > 0 && (
                        <div className="flex items-center gap-1.5 border-l border-gray-200 pl-3">
                          {item.logos.map((logo, i) => (
                            <ImageWithFallback 
                              key={i} 
                              src={logo} 
                              className="w-5 h-5 rounded-sm object-contain" 
                              alt="Tool logo" 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center gap-5">
                <div className="bg-red-100/70 p-2.5 rounded-full shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-sm text-red-700 grid grid-cols-2 gap-x-4 gap-y-1.5 font-medium">
                  <span>• Duplicated workflows</span>
                  <span>• Fragmented candidate data</span>
                  <span>• Operational overhead</span>
                  <span>• Multiple subscriptions</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center Divider */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent absolute" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="bg-purple-100 p-4 rounded-full border-2 border-purple-500 relative z-10 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </motion.div>
          </div>

          {/* IIIP Side */}
          <div className="flex flex-col space-y-6 h-full">
            <motion.div variants={itemVariants} className="text-center space-y-2">
              <h2 className="text-3xl font-serif text-gray-900 tracking-tight">IIIP Unified Platform</h2>
              <p className="text-sm text-purple-600">One intelligent hiring platform</p>
            </motion.div>

            <motion.div variants={containerVariants} className="flex-1 bg-purple-50/50 border border-purple-200 rounded-3xl p-6 relative overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.05)] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="space-y-3 relative z-10">
                {iiipStack.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex flex-row items-center justify-between p-3 rounded-xl bg-white border border-purple-100 shadow-sm gap-2">
                    <span className="text-gray-800 font-medium text-sm">{item.fn}</span>
                    <span className="text-purple-600 text-sm font-semibold">{item.tool}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700 font-medium tracking-wide">6–8 tools consolidated into One</span>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </main>
    </motion.div>
  );
}