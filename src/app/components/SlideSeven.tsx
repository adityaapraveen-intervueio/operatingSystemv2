import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Globe, Users, History, Target, GripVertical, Trash2, Plus, Sparkles } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export function SlideSeven() {
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

  const capabilities = [
    { text: "Rubric-based candidate discovery", icon: <Target className="w-5 h-5 text-purple-500" /> },
    { text: "Sourcing from job boards", icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { text: "Sourcing from internal talent pools", icon: <Users className="w-5 h-5 text-emerald-500" /> },
    { text: "Sourcing from previously interviewed", icon: <History className="w-5 h-5 text-amber-500" /> },
  ];

  const criteria = [
    "3+ years of experience in Business Analysis",
    "Proficiency in SQL, Python, or R",
    "Strong ability to gather and document requirements",
    "Experience with Agile methodologies and Jira",
    "Understanding of data visualization tools (Tableau/Power BI)",
    "Excellent stakeholder management and communication",
  ];

  const mustHaveSkills = [
    "Senior Business Analyst", "Data Analyst", "Product Analyst",
    "Lead Business Analyst", "Process Analyst", "Systems Analyst",
    "Requirements Analyst", "Agile Business Analyst",
    "Functional Analyst", "Technical Business Analyst",
  ];

  const goodToHaveSkills = [
    "Spotify", "Airbnb", "Google", "Meta",
    "Apple", "Figma", "Atlassian",
    "Shopify", "Stripe", "Notion",
  ];

  const geographyTags = ["San Francisco", "New York", "London", "Berlin"];

  const [visibleCriteria, setVisibleCriteria] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleMustHave, setVisibleMustHave] = useState(0);
  const [visibleGoodToHave, setVisibleGoodToHave] = useState(0);
  const [showHeadcount, setShowHeadcount] = useState(false);
  const [visibleGeography, setVisibleGeography] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  // Auto-scroll whenever new content appears in the filters section
  useEffect(() => {
    if (showFilters || visibleMustHave > 0 || visibleGoodToHave > 0 || showHeadcount || visibleGeography > 0 || showButtons) {
      const t = setTimeout(scrollToBottom, 80);
      return () => clearTimeout(t);
    }
  }, [showFilters, visibleMustHave, visibleGoodToHave, showHeadcount, visibleGeography, showButtons, scrollToBottom]);

  useEffect(() => {
    const criteriaTimers: ReturnType<typeof setTimeout>[] = [];
    criteria.forEach((_, i) => {
      criteriaTimers.push(
        setTimeout(() => setVisibleCriteria(i + 1), 800 + i * 500)
      );
    });

    const filtersDelay = 800 + criteria.length * 500 + 400;
    const filterTimer = setTimeout(() => setShowFilters(true), filtersDelay);

    const mustHaveTimers: ReturnType<typeof setTimeout>[] = [];
    mustHaveSkills.forEach((_, i) => {
      mustHaveTimers.push(
        setTimeout(() => setVisibleMustHave(i + 1), filtersDelay + 400 + i * 120)
      );
    });

    const goodToHaveDelay = filtersDelay + 400 + mustHaveSkills.length * 120 + 300;
    const goodToHaveTimers: ReturnType<typeof setTimeout>[] = [];
    goodToHaveSkills.forEach((_, i) => {
      goodToHaveTimers.push(
        setTimeout(() => setVisibleGoodToHave(i + 1), goodToHaveDelay + i * 100)
      );
    });

    const headcountDelay = goodToHaveDelay + goodToHaveSkills.length * 100 + 300;
    const headcountTimer = setTimeout(() => setShowHeadcount(true), headcountDelay);

    const geoDelay = headcountDelay + 400;
    const geoTimers: ReturnType<typeof setTimeout>[] = [];
    geographyTags.forEach((_, i) => {
      geoTimers.push(
        setTimeout(() => setVisibleGeography(i + 1), geoDelay + i * 150)
      );
    });

    const buttonsDelay = geoDelay + geographyTags.length * 150 + 300;
    const buttonsTimer = setTimeout(() => setShowButtons(true), buttonsDelay);

    return () => {
      criteriaTimers.forEach(clearTimeout);
      clearTimeout(filterTimer);
      mustHaveTimers.forEach(clearTimeout);
      goodToHaveTimers.forEach(clearTimeout);
      clearTimeout(headcountTimer);
      geoTimers.forEach(clearTimeout);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full w-full bg-white text-gray-900"
    >
      <Header title="AI SOURCING ENGINE" theme="light" />

      <main className="flex-1 px-12 pb-8 flex flex-col justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-10 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-8 pl-6 border-l-2 border-[#6D42D0]/20">
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-[#6D42D0] font-bold tracking-[0.2em] text-xs uppercase">
                AI Sourcing Engine
              </p>
              <h2 className="text-[2.8rem] font-serif font-thin text-[#0B051A] tracking-tight leading-[1.15]">
                Manual sourcing is{" "}
                <span className="italic text-[#6D42D0]">slow, biased,</span> and inconsistent.
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                IIIP replaces guesswork with{" "}
                <span className="font-medium text-gray-800">rubric-aligned, AI-powered sourcing</span>{" "}
                — pulling the best candidates from every channel automatically.
              </p>
            </motion.div>

            {/* Capabilities */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Sourcing Channels
              </p>
              <div className="space-y-2">
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-[#6D42D0]/20 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      {cap.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{cap.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Screening Criteria Panel */}
          <motion.div
            variants={itemVariants}
            className="w-full h-full relative flex items-center justify-center"
          >
            <div
              className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
              style={{ maxHeight: "560px" }}
            >
              {/* AI auto-fill indicator */}
              <div className="absolute top-3 right-3 z-20">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full"
                >
                  <Sparkles className="w-3 h-3 text-purple-600" />
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">AI Auto-filling</span>
                </motion.div>
              </div>

              {/* Sticky Header */}
              <div className="px-5 pt-5 pb-3 border-b border-gray-100 bg-white z-10 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 text-[15px]">Auto sourcing - Business analyst</h3>
                  <span className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded-md border border-gray-200">
                    {visibleCriteria}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 mt-0.5">Add, edit and remove criteria</p>
              </div>

              {/* Scrollable content */}
              <div
                ref={scrollRef}
                className="overflow-y-auto overflow-x-hidden flex-1 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Criteria List */}
                <div className="px-5 py-3 space-y-2">
                  <AnimatePresence>
                    {criteria.slice(0, visibleCriteria).map((criterion, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex items-center gap-3 group"
                      >
                        <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
                        <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                          <span className="text-[13px] text-gray-800 font-medium truncate">{criterion}</span>
                        </div>
                        <Trash2 className="w-4 h-4 text-gray-300 shrink-0" />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {visibleCriteria < criteria.length && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3"
                    >
                      <GripVertical className="w-4 h-4 text-gray-200 shrink-0" />
                      <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 border-dashed rounded-lg px-3 py-2">
                        <motion.div className="flex gap-1">
                          {[0, 1, 2].map((dot) => (
                            <motion.div
                              key={dot}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                              className="w-1.5 h-1.5 rounded-full bg-purple-400"
                            />
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {visibleCriteria >= criteria.length && !showFilters && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 text-gray-400 text-[12px] font-medium mt-1 cursor-default"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add criteria
                    </motion.div>
                  )}
                </div>

                {/* Advanced Filters Section */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="px-5 pb-5 mt-1"
                    >
                      <div className="border-t border-gray-100 pt-4 mb-3">
                        <h4 className="font-semibold text-gray-900 text-[14px]">Advance filters</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">Configure advanced filtering options</p>
                      </div>

                      {/* Profile */}
                      <div className="mb-3">
                        <p className="text-[11px] text-gray-500 font-medium mb-1">Key words</p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm"
                        >
                          <span className="text-[12px] text-gray-700">"Agile" OR "Data Analytics" OR "SQL"</span>
                        </motion.div>
                      </div>

                      {/* Job title */}
                      <div className="mb-3">
                        <p className="text-[11px] text-gray-500 font-medium mb-1.5">Job title</p>
                        <div className="flex flex-wrap gap-1.5">
                          <AnimatePresence>
                            {mustHaveSkills.slice(0, visibleMustHave).map((skill) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                              >
                                {skill}
                                <span className="text-gray-400 text-[10px]">&times;</span>
                              </motion.span>
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Current company */}
                      <div className="mb-3">
                        <p className="text-[11px] text-gray-500 font-medium mb-1.5">Current company</p>
                        <div className="flex flex-wrap gap-1.5">
                          <AnimatePresence>
                            {goodToHaveSkills.slice(0, visibleGoodToHave).map((skill) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                              >
                                {skill}
                                <span className="text-gray-400 text-[10px]">&times;</span>
                              </motion.span>
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Company headcount */}
                      <AnimatePresence>
                        {showHeadcount && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-3"
                          >
                            <p className="text-[11px] text-gray-500 font-medium mb-1">Company headcount</p>
                            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                              <span className="text-[13px] text-gray-800 font-medium">4</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Geography */}
                      <AnimatePresence>
                        {visibleGeography > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-3"
                          >
                            <p className="text-[11px] text-gray-500 font-medium mb-1.5">Geography</p>
                            <div className="flex flex-wrap gap-1.5">
                              <AnimatePresence>
                                {geographyTags.slice(0, visibleGeography).map((tag) => (
                                  <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600"
                                  >
                                    {tag}
                                    <span className="text-gray-400 text-[10px]">&times;</span>
                                  </motion.span>
                                ))}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Buttons */}
                      {showButtons && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100"
                        >
                          <span className="px-4 py-1.5 text-[12px] font-medium text-gray-600 cursor-default">Cancel</span>
                          <span className="px-4 py-1.5 text-[12px] font-medium text-white bg-[#6D42D0] rounded-lg cursor-default shadow-sm inline-flex items-center gap-1.5"><Sparkles className="w-3 h-3" />Find candidates</span>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
