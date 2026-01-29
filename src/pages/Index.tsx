import { useState } from "react";
import { motion } from "framer-motion";
import { roadmapData, Topic, Domain } from "@/data/roadmapData";
import { Header } from "@/components/roadmap/Header";
import { DomainSection } from "@/components/roadmap/DomainSection";
import { DetailPanel } from "@/components/roadmap/DetailPanel";
import { FloatingProgress } from "@/components/roadmap/FloatingProgress";
import { useProgress } from "@/hooks/useProgress";
import { getRoadmapStats } from "@/data/roadmapData";
import { BookOpen, Layers, Code2, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const { isLoaded, getOverallProgress } = useProgress();
  const stats = getRoadmapStats();
  const overall = getOverallProgress();

  const handleTopicClick = (topic: Topic, domain: Domain) => {
    setSelectedTopic(topic);
    setSelectedDomain(domain);
  };

  const handleClosePanel = () => {
    setSelectedTopic(null);
    setSelectedDomain(null);
  };

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto" />
          <p className="mt-4 text-muted-foreground">Loading roadmap...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <Header />

      <main className="relative container mx-auto px-4 py-8 pb-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4"
          >
            <Sparkles className="h-4 w-4" />
            <span>Interactive Learning Path</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Master </span>
            <span className="text-gradient">Backend Engineering</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive roadmap covering everything from operating systems to system design.
            Track your progress, check off topics, and become a complete backend engineer.
          </p>

          {/* Stats cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{stats.totalDomains}</div>
                <div className="text-xs text-muted-foreground">Domains</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{stats.totalTopics}</div>
                <div className="text-xs text-muted-foreground">Topics</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <Code2 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{stats.totalSubtopics}</div>
                <div className="text-xs text-muted-foreground">Checklist Items</div>
              </div>
            </motion.div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Core ({stats.coreTopics})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Advanced ({stats.advancedTopics})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-muted-foreground" />
              <span className="text-muted-foreground">Optional ({stats.optionalTopics})</span>
            </div>
          </div>
        </motion.section>

        {/* Domains */}
        <div className="space-y-12">
          {roadmapData.domains.map((domain, index) => (
            <DomainSection
              key={domain.id}
              domain={domain}
              onTopicClick={(topic) => handleTopicClick(topic, domain)}
              selectedTopicId={selectedTopic?.id ?? null}
              index={index}
            />
          ))}
        </div>
      </main>

      {/* Detail Panel */}
      <DetailPanel
        topic={selectedTopic}
        domainTitle={selectedDomain?.title ?? ""}
        domainColor={selectedDomain?.colorClass ?? "domain-os"}
        onClose={handleClosePanel}
      />

      {/* Floating Progress */}
      <FloatingProgress />
    </div>
  );
};

export default Index;
