import { motion } from "motion/react";
import { Header } from "./Header";
import { Network, LineChart, BarChart3, PieChart, Briefcase, UserCheck, Activity, TrendingUp, Target, Users, Award } from "lucide-react";

export function SlideFourteen() {
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

  const nodes = [
    { label: "Candidates", icon: <UserCheck className="w-5 h-5 text-purple-600" />, x: "10%", y: "20%" },
    { label: "Recruiters", icon: <Briefcase className="w-5 h-5 text-blue-600" />, x: "50%", y: "10%" },
    { label: "Interviewers", icon: <Network className="w-5 h-5 text-emerald-600" />, x: "85%", y: "30%" },
    { label: "Hiring Managers", icon: <Activity className="w-5 h-5 text-orange-600" />, x: "15%", y: "70%" },
    { label: "Roles", icon: <PieChart className="w-5 h-5 text-pink-600" />, x: "80%", y: "75%" },
    { label: "Hiring Outcomes", icon: <BarChart3 className="w-5 h-5 text-indigo-600" />, x: "50%", y: "85%" },
  ];

  const metrics = [
    { label: "Recruiter productivity", icon: Briefcase },
    { label: "Funnel conversion rates", icon: TrendingUp },
    { label: "Source effectiveness", icon: Target },
    { label: "Interviewer performance", icon: Users },
    { label: "Offer-to-join ratios", icon: Award }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="HIRING INTELLIGENCE GRID" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-6xl leading-[1.1] font-serif text-gray-900 tracking-tight pb-2">
                This creates a <span className="text-purple-600 italic tracking-normal font-normal">Hiring Intelligence Grid.</span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed pt-2">
                IIIP connects data across the entire ecosystem, transforming hiring into a <strong>measurable and optimizable</strong> engine.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 pt-4">
              <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">Leadership can analyze</p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:border-purple-200 transition-colors">
                      <Icon className="w-5 h-5 text-purple-500" />
                      <span className="font-medium text-gray-800 text-sm">{metric.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Grid Visualization */}
          <motion.div variants={itemVariants} className="h-[500px] bg-gray-50 border border-gray-200 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#a855f7 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            
            {/* Connecting Lines (Simulated SVG) */}
            <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
              <defs>
                <radialGradient id="gridGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              <style>{`
                @keyframes dataFlow {
                  from { stroke-dashoffset: 24; }
                  to { stroke-dashoffset: 0; }
                }
                .line-flow {
                  stroke-dasharray: 8 16;
                  animation: dataFlow 1.5s linear infinite;
                }
                .line-flow-reverse {
                  stroke-dasharray: 8 16;
                  animation: dataFlow 1.5s linear infinite reverse;
                }
              `}</style>
              
              {/* Smooth glowing background connections matching node coordinates exactly */}
              <g stroke="url(#gridGlow)" strokeWidth="3" opacity="0.6">
                <line x1="10%" y1="20%" x2="50%" y2="50%" />
                <line x1="50%" y1="10%" x2="50%" y2="50%" />
                <line x1="85%" y1="30%" x2="50%" y2="50%" />
                <line x1="15%" y1="70%" x2="50%" y2="50%" />
                <line x1="80%" y1="75%" x2="50%" y2="50%" />
                <line x1="50%" y1="85%" x2="50%" y2="50%" />
              </g>

              {/* Animated data packets matching node coordinates exactly */}
              <g stroke="#c084fc" strokeWidth="2" opacity="0.8">
                <line x1="10%" y1="20%" x2="50%" y2="50%" className="line-flow" />
                <line x1="50%" y1="10%" x2="50%" y2="50%" className="line-flow-reverse" />
                <line x1="85%" y1="30%" x2="50%" y2="50%" className="line-flow" />
                <line x1="15%" y1="70%" x2="50%" y2="50%" className="line-flow-reverse" />
                <line x1="80%" y1="75%" x2="50%" y2="50%" className="line-flow" />
                <line x1="50%" y1="85%" x2="50%" y2="50%" className="line-flow-reverse" />
              </g>
            </svg>

            {/* Central Node */}
            <motion.div 
              animate={{ boxShadow: ["0 0 0 0 rgba(168,85,247,0.4)", "0 0 0 20px rgba(168,85,247,0)", "0 0 0 0 rgba(168,85,247,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] border-2 border-purple-500"
            >
              <Network className="w-10 h-10 text-purple-600" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-purple-700 whitespace-nowrap">IIIP Core</span>
            </motion.div>

            {/* Surrounding Nodes */}
            {nodes.map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                className="absolute z-10"
                style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="bg-white p-3 rounded-xl shadow-md border border-gray-200 relative flex items-center justify-center">
                  {node.icon}
                  <span className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded backdrop-blur-sm shadow-sm whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
