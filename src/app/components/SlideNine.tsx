import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Mic, PhoneCall, Workflow, Activity, Phone, Maximize2, Search } from "lucide-react";
import { useState, useEffect } from "react";
import imgAvatar from "figma:asset/08a3b47613f2d0f6aced2c3c467602e3aa1638f1.png";
import imgAvatar2 from "figma:asset/20b88955d6e91b0f9cbf6e8b1d6959045013c348.png";
import imgAvatar3 from "figma:asset/da483b78e3e3bfd30953876637bcdaf2fe97ef89.png";
import imgAvatar4 from "figma:asset/527282946faef1b7c4efbd61fb4be58f0f84fc73.png";
import imgAvatar5 from "figma:asset/bd95fda4637e37c983d108f9de761c50b4cd2462.png";
import svgCardPaths from "../../imports/svg-4weg4jft1m";

export function SlideNine() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const methods = [
    { text: "AI voice conversations", icon: <Mic className="w-5 h-5 text-purple-400" /> },
    { text: "Built-in VOIP calling", icon: <PhoneCall className="w-5 h-5 text-blue-400" /> },
    { text: "Structured flows", icon: <Workflow className="w-5 h-5 text-emerald-400" /> },
    { text: "Post-call analysis", icon: <Activity className="w-5 h-5 text-amber-400" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full text-white"
    >
      <Header title="AI HR SCREENING (VOICE + VOIP)" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="col-span-5 space-y-10 pr-4">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-[#a78bfa] font-bold tracking-[0.1em] text-sm uppercase">
                The Automation
              </p>
              <h2 className="text-5xl font-serif text-white tracking-tight leading-tight">
                Initial HR screening is repetitive.
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed pt-2">
                IIIP automates screening using <span className="font-semibold text-white">AI Voice</span> and VOIP to streamline high-volume talent acquisition.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 pt-4">
              <p className="text-gray-400 font-bold tracking-[0.1em] text-xs uppercase">
                Screening Methods
              </p>
              <div className="grid grid-cols-2 gap-4">
                {methods.map((method, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1e153b]/40 border border-[#4c3b7a]/30 p-4 rounded-xl backdrop-blur-sm">
                    <div className="bg-[#0B051A]/50 p-2 rounded-lg border border-[#4c3b7a]/50">
                      {method.icon}
                    </div>
                    <span className="text-gray-200 font-medium text-sm leading-tight">{method.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visualization */}
          <div className="col-span-7 flex items-center justify-center">
            <motion.div variants={itemVariants} className="w-full">
              <ScreeningCallAnimation />
            </motion.div>
          </div>

        </motion.div>
      </main>
    </motion.div>
  );
}

/* ─── Screening Call Animation ─── */

const PHASE_DURATIONS = [2800, 1200, 1000, 1400, 1200, 4000];

export function ScreeningCallAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase((p) => (p >= 5 ? 0 : p + 1));
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const phaseLabels = ["Pipeline", "Focus", "Call", "Connecting", "Screening"];

  return (
    <div className="bg-[#1e153b]/60 border border-[#4c3b7a]/50 rounded-3xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 p-5 bg-[#160728e3]">
        {/* Phase progress bar */}
        <div className="flex items-center gap-2 mb-4">
          {phaseLabels.map((label, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1.5">
              <div className="h-1 rounded-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#a78bfa]"
                  animate={{
                    width: i < Math.min(phase, 5) ? "100%" : i === Math.min(phase, 5) ? "100%" : "0%",
                  }}
                  transition={{
                    width: i === Math.min(phase, 5)
                      ? { duration: PHASE_DURATIONS[phase] / 1000, ease: "linear" }
                      : { duration: 0.3 },
                  }}
                  key={`bar-${phase}-${i}`}
                />
              </div>
              <span
                className={`text-[10px] font-semibold tracking-wide uppercase transition-colors duration-300 ${
                  i <= Math.min(phase, 5) ? "text-[#a78bfa]" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Main animation viewport */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#4c3b7a]/30">
          {/* Phase 0-2: Kanban Board (white UI, Figma-style) */}
          <motion.div
            className="absolute inset-0 bg-[#f9fafb]"
            animate={{
              scale: phase === 0 ? 1 : phase === 1 ? 2.6 : phase <= 3 ? 3 : 3.2,
              x: phase === 0 ? "0%" : phase === 1 ? "-32%" : phase <= 3 ? "-34%" : "-34%",
              y: phase === 0 ? "0%" : phase === 1 ? "-8%" : phase <= 3 ? "-10%" : "-10%",
              opacity: phase >= 4 ? 0 : 1,
            }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "62% 35%" }}
          >
            <KanbanBoard phase={phase} />
          </motion.div>

          {/* Phase 3: Small call window */}
          <AnimatePresence>
            {phase === 3 && (
              <motion.div
                className="absolute bottom-3 right-3 w-[180px] h-[120px] rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-[#4c3b7a]/50 z-20"
                initial={{ opacity: 0, scale: 0.3, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ background: "linear-gradient(180deg, #1a1033 0%, #140c24 100%)" }}
              >
                <div className="flex flex-col items-center justify-center h-full gap-1.5 relative">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="rounded-full border border-[#a78bfa]/30"
                      animate={{ width: [40, 100], height: [40, 100], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  </motion.div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#a78bfa]/30 z-10">
                    <img src={imgAvatar2} alt="Layla" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white text-[10px] font-medium z-10">Layla Munoz</p>
                  <p className="text-gray-400 text-[9px] z-10">Connecting...</p>
                  <div className="flex gap-2 mt-1 z-10">
                    <div className="w-5 h-5 rounded-full bg-[#B22D34] flex items-center justify-center">
                      <Phone className="w-2.5 h-2.5 text-white rotate-[135deg]" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                      <Mic className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4-5: Fullscreen call UI */}
          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                className="absolute inset-0 z-20"
                initial={{ opacity: 0, scale: 0.3, originX: 1, originY: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <ScreeningCallUI phase={phase} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B051A] via-[#0B051A]/70 to-transparent pt-8 pb-3 px-5 z-30">
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-gray-300 text-[13px] font-medium"
            >
              {phase === 0 && "Viewing hiring pipeline with qualified candidates"}
              {phase === 1 && "Focusing on candidate in HR screening stage..."}
              {phase === 2 && "Initiating AI screening call..."}
              {phase === 3 && "Connecting to Intervue screening session"}
              {phase >= 4 && "Live AI screening interview in progress"}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Kanban Board (Figma-style white UI) ─── */

function KanbanBoard({ phase }: { phase: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top nav bar */}
      <div className="bg-white border-b border-[#e9eaeb] px-3 py-1.5 flex items-center gap-2 shrink-0">
        <div className="w-4 h-4 rounded bg-[#0B051A] flex items-center justify-center">
          <span className="text-white text-[5px] font-bold">e</span>
        </div>
        <span className="text-[#a4a7ae] text-[5px]">&gt;</span>
        <span className="text-[#717680] text-[5px] font-semibold">Job Roles</span>
        <span className="text-[#a4a7ae] text-[5px]">&gt;</span>
        <span className="text-[#414651] text-[5px] font-semibold bg-[#fafafa] px-1 py-0.5 rounded">Senior marketer III</span>
      </div>

      {/* Title + tabs */}
      <div className="bg-white px-3 pt-2 pb-1 border-b border-[#e9eaeb] shrink-0">
        <p className="text-[#181d27] text-[8px] font-semibold mb-1.5">Junior data engineer</p>
        <div className="flex gap-2 text-[5px]">
          <span className="text-[#6941c6] font-semibold border-b border-[#7f56d9] pb-1">Pipeline</span>
          <span className="text-[#717680] font-semibold pb-1">All candidates</span>
          <span className="text-[#717680] font-semibold pb-1">Insights</span>
          <span className="text-[#717680] font-semibold pb-1">Settings</span>
        </div>
      </div>

      {/* Search bar + filter tabs */}
      <div className="bg-white px-3 py-1.5 flex items-center gap-1.5 border-b border-[#e9eaeb] shrink-0">
        <div className="flex-1 flex items-center gap-1 border border-[#d5d7da] rounded px-1.5 py-0.5">
          <Search className="w-2 h-2 text-[#a4a7ae]" />
          <span className="text-[#717680] text-[4px]">Search for candidate by name, email.etc</span>
        </div>
        <div className="flex items-center gap-0.5 bg-[#fafafa] border border-[#e9eaeb] rounded px-0.5 py-0.5">
          <span className="text-[#717680] text-[4px] font-semibold px-1">All</span>
          <span className="text-[#414651] text-[4px] bg-[#fafafa] border border-[#e9eaeb] px-1 rounded-full">303</span>
        </div>
        <div className="bg-[#6941c6] rounded px-1.5 py-0.5 flex items-center gap-0.5">
          <span className="text-white text-[4px] font-semibold">Qualified</span>
          <span className="text-[#414651] text-[4px] bg-[#fafafa] px-1 rounded-full">3</span>
        </div>
        <div className="bg-[#6941c6] rounded px-1.5 py-0.5 flex items-center">
          <span className="text-white text-[4px] font-semibold">+ Add candidate</span>
        </div>
      </div>

      {/* Main content: sidebar + columns */}
      <div className="flex-1 flex min-h-0">
        {/* Left sidebar filters */}
        <div className="w-[60px] bg-white border-r border-[#e9eaeb] p-2 shrink-0">
          <p className="text-[#181d27] text-[5px] font-semibold mb-1.5">FILTERS</p>
          <div className="space-y-1">
            <p className="text-[#414651] text-[4px] font-semibold">Candidate status</p>
            {["Qualified 10", "Disqualified 0", "New 0", "Overdue 2", "Talk to HR 2"].map((f) => (
              <div key={f} className="flex items-center gap-0.5">
                <div className="w-2.5 h-2.5 border border-[#d5d7da] rounded-[2px]" />
                <span className="text-[#414651] text-[3.5px]">{f}</span>
              </div>
            ))}
            <p className="text-[#414651] text-[4px] font-semibold mt-2">In Stage</p>
            <div className="border border-[#d5d7da] rounded px-1 py-0.5">
              <span className="text-[#181d27] text-[4px]">Any stage (5)</span>
            </div>
          </div>
        </div>

        {/* Kanban columns */}
        <div className="flex-1 flex gap-1.5 p-2 overflow-hidden bg-[#f9fafb]">
          {/* Applied column */}
          <KanbanColumn
            title="Applied"
            count="1250"
            color="#bababa"
          >
            <CandidateCard
              name="Layla Munoz"
              avatar={imgAvatar2}
              badges={[{ text: "-2d", color: "#b42318", bg: "#fef3f2", border: "#fecdca" }]}
              meta={<span className="text-[3.5px] text-[#535862]">1</span>}
              footer="1-2 years"
            />
            <CandidateCard
              name="Zoya Khan"
              avatar={imgAvatar}
              timeMeta="19d"
              meta={<span className="text-[3.5px] text-[#535862]">1</span>}
              location="Bangalore, Karnataka"
              footer="1-2 years"
            />
            <CandidateCard
              name="Aryan Patel"
              avatar={imgAvatar3}
              timeMeta="19d"
              meta={<span className="text-[3.5px] text-[#535862]">1</span>}
              location="Bangalore, Karnataka"
              footer="1-2 years"
            />
          </KanbanColumn>

          {/* Resume screening */}
          <KanbanColumn
            title="Resume screening"
            count="5"
            percentage="60%"
            color="#f59e0b"
          >
            <div className="bg-white rounded-t-[3px] border border-[#e9eaeb] px-1.5 py-0.5 flex items-center justify-between mb-0">
              <div className="bg-[#ecfdf3] border border-[#abefc6] rounded-[2px] px-1 py-[1.5px] flex items-center gap-0.5">
                <span className="text-[#067647] text-[3.5px] font-medium">Most fit</span>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-[#a4a7ae] text-[5px]">...</span>
                <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 30 25">
                  <path d="M10 10L15 15L20 10" stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </div>
            </div>
            <CandidateCard
              name="Sakshi malik"
              avatar={imgAvatar4}
              timeMeta="19d"
              meta={<span className="text-[3.5px] text-[#535862]">1</span>}
              location="Bangalore, Karnataka"
              footer="1-2 years"
              showScreeningReport
            />
            <CandidateCard
              name="Sakshi malik"
              avatar={imgAvatar4}
              timeMeta="19d"
              meta={<span className="text-[3.5px] text-[#535862]">1</span>}
              location="Bangalore, Karnataka"
              footer="1-2 years"
              showScreeningReport
            />
          </KanbanColumn>

          {/* HR screening - target column */}
          <KanbanColumn
            title="HR screening"
            count="5"
            percentage="60%"
            color="#a78bfa"
          >
            {/* Screening pending header badge */}
            <div className="bg-white rounded-t-[3px] border border-[#e9eaeb] px-1.5 py-1 flex items-center justify-between mb-0">
              <div className="bg-[#fffaeb] border border-[#fedf89] rounded-[2px] px-1 py-0.5 flex items-center gap-0.5">
                <svg className="w-[5px] h-[5px] shrink-0" fill="none" viewBox="0 0 10.5 10.875">
                  <path d={svgCardPaths.p1537ab00} stroke="#B54708" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                </svg>
                <span className="text-[#b54708] text-[4px] font-medium">Screening pending</span>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-[#a4a7ae] text-[5px]">...</span>
                <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 30 25">
                  <path d="M10 10L15 15L20 10" stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </div>
            </div>
            <CandidateCard
              name="Layla Munoz"
              avatar={imgAvatar2}
              timeMeta="2d"
              activityMeta="2d"
              location="New York, USA"
              footer="2-3 years"
              isTarget
              phase={phase}
              showCallButton
              showActions
            />
            <CandidateCard
              name="Layla Munoz"
              avatar={imgAvatar2}
              timeMeta="2d"
              activityMeta="2d"
              location="New York, USA"
              footer="2-3 years"
              showCallButton
              showActions
            />
          </KanbanColumn>

          {/* Tech round1 */}
          <KanbanColumn
            title="Tech round1"
            count="550"
            percentage="50%"
            color="#3b82f6"
          >
            <div className="bg-[#f0f0ff] border border-[#c7c7ff] rounded px-1 py-0.5 mb-1 text-[3.5px]">
              <span className="text-[#4338ca]">Internal</span>
            </div>
            <div className="bg-[#eff8ff] border border-[#b2ddff] rounded px-1 py-0.5 mb-1 text-[3.5px]">
              <span className="text-[#175cd3]">Interview in progress</span>
            </div>
            <CandidateCard
              name="Layla Munoz"
              avatar={imgAvatar2}
              timeMeta="19d"
              location="Bangalore, Karnataka"
              footer="1-2 years"
              showViewEvent
            />
            <CandidateCard
              name="Zoya Khan"
              avatar={imgAvatar}
              timeMeta="19d"
              location="Bangalore, Karnataka"
              footer="1-2 years"
              showViewEvent
            />
          </KanbanColumn>
        </div>
      </div>
    </div>
  );
}

/* ─── Kanban Column ─── */

function KanbanColumn({
  title,
  count,
  percentage,
  color,
  children,
}: {
  title: string;
  count: string;
  percentage?: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Column header */}
      <div className="flex items-center gap-1 px-1 py-1 mb-1">
        <div className="w-2 h-2 rounded-[2px]" style={{ backgroundColor: color }} />
        <span className="text-[#181d27] text-[5px] font-semibold truncate">{title}</span>
        <span className="text-[#717680] text-[4px] bg-[#fafafa] border border-[#e9eaeb] px-1 rounded-full">{count}</span>
        {percentage && <span className="text-[#717680] text-[4px]">{percentage}</span>}
        <div className="ml-auto text-[#a4a7ae] text-[6px]">...</div>
      </div>
      {/* Cards */}
      <div className="flex-1 space-y-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ─── Candidate Card ─── */

function CandidateCard({
  name,
  avatar,
  badges,
  timeMeta,
  activityMeta,
  meta,
  location,
  footer,
  isTarget,
  phase,
  showCallButton,
  showScreeningReport,
  showViewEvent,
  showActions,
}: {
  name: string;
  avatar: string;
  badges?: { text: string; color: string; bg: string; border: string }[];
  timeMeta?: string;
  activityMeta?: string;
  meta?: React.ReactNode;
  location?: string;
  footer?: string;
  isTarget?: boolean;
  phase?: number;
  showCallButton?: boolean;
  showScreeningReport?: boolean;
  showViewEvent?: boolean;
  showActions?: boolean;
}) {
  const currentPhase = phase ?? -1;

  return (
    <motion.div
      className="bg-white rounded-[3px] border relative"
      style={{
        borderColor: isTarget && currentPhase >= 1 ? "#7c3aed" : "#e9eaeb",
      }}
      animate={{
        boxShadow: isTarget && currentPhase >= 1
          ? "0 0 12px rgba(124,58,237,0.35)"
          : "0 1px 2px rgba(0,0,0,0.05)",
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Top section: Avatar + Name + Meta + Call button */}
      <div className="px-1.5 pt-1.5 pb-1 flex items-start gap-1.5">
        {/* Avatar */}
        <div className="w-[13px] h-[13px] rounded-full overflow-hidden border border-black/8 shrink-0 mt-[1px]">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <p className="text-[#181d27] text-[5px] font-medium truncate">{name}</p>
          <div className="flex items-center gap-1.5 mt-[1px]">
            {badges?.map((b, i) => (
              <span
                key={i}
                className="text-[3.5px] font-medium px-0.5 rounded"
                style={{ color: b.color, backgroundColor: b.bg, border: `0.5px solid ${b.border}` }}
              >
                {b.text}
              </span>
            ))}
            {timeMeta && (
              <div className="flex items-center gap-[1px]">
                <svg className="w-[5px] h-[5px] shrink-0" fill="none" viewBox="0 0 17 17">
                  <path d={svgCardPaths.p247a8b80} stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[3.5px] text-[#535862]">{timeMeta}</span>
              </div>
            )}
            {activityMeta && (
              <div className="flex items-center gap-[1px]">
                <svg className="w-[5px] h-[5px] shrink-0" fill="none" viewBox="0 0 17 15.5">
                  <path d={svgCardPaths.pb7dd048} stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="text-[3.5px] text-[#535862]">{activityMeta}</span>
              </div>
            )}
            {meta}
          </div>
        </div>
        {/* Call button (purple gradient, matching Figma) */}
        {showCallButton && (
          <div className="flex items-center gap-[2px] shrink-0">
            <motion.div className="relative">
              <motion.div
                className="w-[9px] h-[9px] rounded-full flex items-center justify-center cursor-default"
                style={{
                  backgroundImage: "linear-gradient(2deg, rgb(244, 241, 255) 1.5%, rgb(226, 218, 255) 177%)",
                }}
                animate={{
                  scale: isTarget && currentPhase === 2 ? [1, 0.85, 1.2, 1] : 1,
                  boxShadow: isTarget && currentPhase >= 2
                    ? "0 0 8px rgba(105,65,198,0.6)"
                    : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-[5px] h-[5px]" fill="none" viewBox="0 0 18.39 18.47">
                  <path d={svgCardPaths.p2a7feb80} stroke="#6941C6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </motion.div>
              {/* Ripple */}
              <AnimatePresence>
                {isTarget && currentPhase === 2 && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="rounded-full border border-[#6941c6]/60"
                      initial={{ width: 4, height: 4, opacity: 0.8 }}
                      animate={{ width: 24, height: 24, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* 3-dot menu */}
            <svg className="w-[3px] h-[5px] shrink-0" fill="none" viewBox="0 0 3.33 15">
              <path d={svgCardPaths.p3ed2dd80} stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgCardPaths.p3815c300} stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgCardPaths.p39ad1980} stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </div>
        )}
      </div>
      {/* Divider */}
      <div className="h-[0.5px] bg-[#e9eaeb]" />
      {/* Middle section: location + experience tag */}
      <div className="px-1.5 pt-1 pb-1.5 flex flex-col gap-[3px]">
        {location && (
          <div className="flex items-center gap-[2px]">
            <svg className="w-[6px] h-[6px] shrink-0" fill="none" viewBox="0 0 14 17">
              <path d={svgCardPaths.p26099300} stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgCardPaths.p32e84080} stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-[4px] text-[#535862]">{location}</span>
          </div>
        )}
        {footer && (
          <div className="relative bg-white rounded-[3px] px-1.5 py-[2px] inline-flex items-center justify-center self-start">
            <div className="absolute inset-0 border border-[#d5d7da] rounded-[3px] pointer-events-none" />
            <span className="text-[#414651] text-[4px] font-medium">{footer}</span>
          </div>
        )}
        {showScreeningReport && (
          <div className="flex items-center gap-0.5 mt-0.5">
            <div className="w-1 h-1 rounded-full bg-[#067647]" />
            <span className="text-[3.5px] text-[#181d27] font-medium">Screening report</span>
            <span className="text-[3.5px] text-[#6941c6] font-medium ml-auto">View more</span>
          </div>
        )}
        {showViewEvent && (
          <div className="bg-[#f4f3ff] border border-[#d9d6fe] rounded px-1 py-0.5 text-center mt-0.5">
            <span className="text-[#6941c6] text-[3.5px] font-medium">View event</span>
          </div>
        )}
      </div>
      {/* Actions section: Reject + Shortlist */}
      {showActions && (
        <>
          <div className="h-[0.5px] bg-[#e9eaeb]" />
          <div className="px-1.5 py-1 flex items-center justify-end gap-1.5">
            <div className="flex items-center gap-[2px]">
              <svg className="w-[4px] h-[4px]" fill="none" viewBox="0 0 10 10">
                <path d={svgCardPaths.p25b911c0} stroke="#B42318" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              </svg>
              <span className="text-[3.5px] text-[#b42318] font-semibold">Reject</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <svg className="w-[4px] h-[4px]" fill="none" viewBox="0 0 15 10.83">
                <path d={svgCardPaths.p38669a00} stroke="#6941C6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              </svg>
              <span className="text-[3.5px] text-[#6941c6] font-semibold">Shortlist</span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

/* ─── Fullscreen Call UI ─── */

function ScreeningCallUI({ phase }: { phase: number }) {
  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #1a1033 0%, #140c24 100%)" }}
    >
      {/* Window chrome */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F4BE4F]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
        </div>
        <p className="text-white/80 text-[11px] font-medium tracking-tight">
          Intervue Screening call
        </p>
        <div className="w-12" />
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center relative">
        {/* Avatar */}
        <motion.div
          className="rounded-full overflow-hidden border-2 border-[#a78bfa]/30 shadow-xl shadow-purple-900/40"
          initial={{ width: 60, height: 60 }}
          animate={{ width: 90, height: 90 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={imgAvatar2} alt="Layla Munoz" className="w-full h-full object-cover" />
        </motion.div>

        <motion.p
          className="text-white font-medium mt-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: "16px" }}
        >
          Layla Munoz
        </motion.p>
        <motion.p
          className="text-[#d5d7da] mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ fontSize: "13px" }}
        >
          {phase >= 5 ? "02:34" : "00:05"}
        </motion.p>

        {/* Audio waveform */}
        {phase >= 5 && (
          <motion.div
            className="flex items-center justify-center gap-[3px] h-8 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: ["20%", "100%", "40%", "80%", "20%"],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
                className="w-[2px] bg-gradient-to-t from-[#5531A7] to-[#a78bfa] rounded-full"
              />
            ))}
          </motion.div>
        )}

        {/* Call controls */}
        <motion.div
          className="flex items-center gap-3 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-[#B22D34] flex items-center justify-center shadow-lg">
            <Phone className="w-4 h-4 text-white rotate-[135deg]" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center ml-4">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}