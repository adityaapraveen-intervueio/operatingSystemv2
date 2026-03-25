import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { FileText, Layers, TrendingUp, CheckCircle2, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import svgPaths from "../../imports/svg-s788cbew26";
import imgAvatar from "figma:asset/cdac98998c90f96526373b774ef80741763f4a50.png";

export function SlideEight() {
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

  const evalItems = [
    { text: "Skill Depth", icon: <Layers className="w-5 h-5 text-indigo-500" /> },
    { text: "Experience Relevance", icon: <FileText className="w-5 h-5 text-emerald-500" /> },
    { text: "Career Trajectory", icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
    { text: "Rubric Alignment", icon: <CheckCircle2 className="w-5 h-5 text-purple-500" /> },
    { text: "Intent Signals", icon: <MessageSquare className="w-5 h-5 text-amber-500" /> },
  ];

  const outputs = [
    { text: "Candidate Fit Score", value: "85+", color: "bg-[#0B051A] text-white border-[#4c3b7a]" },
    { text: "Screening Summary", value: "Generated", color: "bg-[#0B051A] text-white border-[#4c3b7a]" },
    { text: "Next Actions", value: "Recommended", color: "bg-[#0B051A] text-white border-[#4c3b7a]" },
  ];

  const matchedRequirements = [
    "3+ years of Javascript, Typescript, or Python experience",
    "Experience working in an agile environment",
    "Bachelor's degree in computer science or related field",
  ];

  const unmatchedRequirements = [
    {
      text: (
        <>Solid understanding of <span className="font-semibold">data structures</span> <span className="font-semibold">and algorithms</span></>
      ),
    },
    {
      text: (
        <>Experience with cloud platforms such as <span className="font-semibold">AWS</span>, <span className="font-semibold">Azure</span>, or <span className="font-semibold">GCP</span></>
      ),
    },
    {
      text: (
        <>Strong proficiency in at least two of the following: <span className="font-semibold">Java</span>, <span className="font-semibold">C++</span>, or <span className="font-semibold">Go</span></>
      ),
    },
  ];

  // Animation state
  const [showProfile, setShowProfile] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [showReportTitle, setShowReportTitle] = useState(false);
  const [showMatchedHeader, setShowMatchedHeader] = useState(false);
  const [visibleMatched, setVisibleMatched] = useState(0);
  const [showUnmatchedHeader, setShowUnmatchedHeader] = useState(false);
  const [visibleUnmatched, setVisibleUnmatched] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (showMatchedHeader || visibleMatched > 0 || showUnmatchedHeader || visibleUnmatched > 0) {
      const t = setTimeout(scrollToBottom, 80);
      return () => clearTimeout(t);
    }
  }, [showMatchedHeader, visibleMatched, showUnmatchedHeader, visibleUnmatched, scrollToBottom]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setShowProfile(true), 300));
    timers.push(setTimeout(() => setShowPdf(true), 550));
    timers.push(setTimeout(() => setShowReportTitle(true), 800));
    timers.push(setTimeout(() => setShowMatchedHeader(true), 1000));

    matchedRequirements.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMatched(i + 1), 1200 + i * 280));
    });

    const unmatchedDelay = 1200 + matchedRequirements.length * 280 + 250;
    timers.push(setTimeout(() => setShowUnmatchedHeader(true), unmatchedDelay));

    unmatchedRequirements.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleUnmatched(i + 1), unmatchedDelay + 280 + i * 280));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="AI RESUME SCREENING" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-8 pl-6 border-l-2 border-[#6D42D0]/20">
            {/* Main Header */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-[#6D42D0] font-bold tracking-[0.2em] text-xs uppercase">AI RESUME SCREENING</p>
              <h2 className="text-[2.8rem] font-serif font-thin text-[#0B051A] tracking-tight leading-[1.15]">
                Beyond Keyword{" "}
                <span className="italic text-[#6D42D0]">Filtering</span>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md mx-[5px] my-[0px] p-[0px]">IIIP evaluates candidate's&nbsp;&nbsp;resume holistically — analyzing <span className="font-medium text-gray-800">skill depth, trajectory, and rubric fit</span> in seconds, not hours.</p>
            </motion.div>

            {/* Evaluation + Outputs side by side */}
            <div className="grid grid-cols-2 gap-5">
              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  What the AI Evaluates
                </p>
                <div className="space-y-2">
                  {evalItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#6D42D0]/20 transition-colors"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Outputs Generated
                </p>
                <div className="space-y-2">
                  {outputs.map((out, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl text-white flex flex-col gap-1.5 bg-[#fbf9fd]"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {out.text}
                      </span>
                      <span className="text-base font-bold text-[#5334b7]">{out.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Animated Screening Report Modal */}
          <motion.div
            variants={itemVariants}
            className="w-full h-full relative flex items-center justify-center"
          >
            <div
              className="w-full max-w-lg bg-white border border-[#e9eaeb] rounded-2xl shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)] overflow-hidden flex flex-col relative"
              style={{ maxHeight: "520px" }}
            >
              {/* Close button */}
              <div className="absolute top-3 right-3 z-20">
                <div className="flex items-center justify-center size-[36px] rounded-lg">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="#A4A7AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Fixed Header: Profile + PDF */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 bg-white z-10 shrink-0 flex flex-col gap-4">
                <AnimatePresence>
                  {showProfile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="flex items-center gap-4"
                    >
                      <div className="relative rounded-full shrink-0 size-[50px]">
                        <img
                          alt="Natalie Craig"
                          className="object-cover rounded-full size-full"
                          src={imgAvatar}
                        />
                        <div className="absolute border border-[rgba(0,0,0,0.08)] inset-0 rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#181d27] text-[15px] leading-[22px]">Natalie craig</p>
                        <p className="text-[#535862] text-[13px] leading-[18px]">Lana@gmail.com</p>
                      </div>
                      <div className="relative bg-white rounded-lg shrink-0 mr-8">
                        <div className="px-4 py-2 text-[#414651] text-[13px] font-semibold whitespace-nowrap">
                          View Candidate
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showPdf && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="relative bg-white rounded-xl"
                    >
                      <div className="flex items-center p-4 gap-3">
                        <div className="relative shrink-0 size-[36px]">
                          <div className="absolute inset-[0_10%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
                              <path d={svgPaths.p21659600} fill="#D92D20" />
                              <path d={svgPaths.p2fedbcc0} fill="white" opacity="0.3" />
                            </svg>
                          </div>
                          <p className="absolute font-bold inset-[57.5%_10%_15%_10%] text-[8px] text-center text-white">PDF</p>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#535862] text-[13px] leading-[18px] truncate">Software_developer</p>
                          <p className="text-[#535862] text-[12px] leading-[18px]">200 KB</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#e9eaeb] inset-0 pointer-events-none rounded-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Scrollable content */}
              <div
                ref={scrollRef}
                className="overflow-y-auto overflow-x-hidden flex-1 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="px-6 pt-4 pb-6 flex flex-col gap-4 overflow-hidden">
                  {/* Screening Report Title */}
                  <AnimatePresence>
                    {showReportTitle && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <p className="font-semibold text-[#181d27] text-[15px] leading-[22px]">Screening report</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Requirements Matched */}
                  <AnimatePresence>
                    {showMatchedHeader && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-[#f8f8f8] rounded-2xl px-5 py-4"
                      >
                        <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] mb-3">Requirements Matched</p>
                        <div className="flex flex-col gap-3">
                          <AnimatePresence>
                            {matchedRequirements.slice(0, visibleMatched).map((req, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex items-start gap-3"
                              >
                                <div className="bg-[#dcfae6] rounded-full shrink-0 size-[22px] flex items-center justify-center mt-0.5">
                                  <svg width="11" height="10" viewBox="0 0 11.9966 10.5044" fill="none">
                                    <path clipRule="evenodd" d={svgPaths.p1532a90} fill="#079455" fillRule="evenodd" />
                                  </svg>
                                </div>
                                <p className="text-[#535862] text-[13px] leading-[20px] flex-1">{req}</p>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                          {visibleMatched < matchedRequirements.length && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-3 pl-1"
                            >
                              <motion.div className="flex gap-1">
                                {[0, 1, 2].map((dot) => (
                                  <motion.div
                                    key={dot}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                                  />
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Requirements Not Matched */}
                  <AnimatePresence>
                    {showUnmatchedHeader && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-[#f8f8f8] rounded-2xl px-5 py-4"
                      >
                        <p className="font-semibold text-[#181d27] text-[13px] leading-[18px] mb-3">Requirements Not matched</p>
                        <div className="flex flex-col gap-3">
                          <AnimatePresence>
                            {unmatchedRequirements.slice(0, visibleUnmatched).map((req, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex items-start gap-3"
                              >
                                <div className="shrink-0 size-[22px] flex items-center justify-center mt-0.5">
                                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d={svgPaths.p38ae8600} stroke="#B42318" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  </svg>
                                </div>
                                <p className="text-[#535862] text-[13px] leading-[20px] flex-1">{req.text}</p>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                          {visibleUnmatched < unmatchedRequirements.length && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-3 pl-1"
                            >
                              <motion.div className="flex gap-1">
                                {[0, 1, 2].map((dot) => (
                                  <motion.div
                                    key={dot}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                                    className="w-1.5 h-1.5 rounded-full bg-red-400"
                                  />
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}