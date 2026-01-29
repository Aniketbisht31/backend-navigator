import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, Circle, BookOpen } from "lucide-react";
import { Topic } from "@/data/roadmapData";
import { useProgress } from "@/hooks/useProgress";
import { ProgressRing } from "./ProgressRing";
import { cn } from "@/lib/utils";

interface DetailPanelProps {
  topic: Topic | null;
  domainTitle: string;
  domainColor: string;
  onClose: () => void;
}

const typeLabels = {
  core: { label: "Core Topic", color: "text-primary" },
  advanced: { label: "Advanced Topic", color: "text-accent" },
  optional: { label: "Optional Track", color: "text-muted-foreground" },
};

const colorClasses: Record<string, string> = {
  "domain-os": "border-purple-500/50",
  "domain-networks": "border-cyan-500/50",
  "domain-databases": "border-emerald-500/50",
  "domain-backend": "border-amber-500/50",
  "domain-system": "border-rose-500/50",
  "domain-security": "border-red-500/50",
  "domain-devops": "border-sky-500/50",
  "domain-dsa": "border-violet-500/50",
};

export function DetailPanel({
  topic,
  domainTitle,
  domainColor,
  onClose,
}: DetailPanelProps) {
  const { toggleSubtopic, isSubtopicCompleted, getTopicProgress } = useProgress();
  const progress = topic ? getTopicProgress(topic.id) : { completed: 0, total: 0, percentage: 0 };

  return (
    <AnimatePresence>
      {topic && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full w-full max-w-md",
              "glass-panel border-l",
              colorClasses[domainColor]
            )}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-border/50 bg-card/80 backdrop-blur-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{domainTitle}</span>
                    <span>•</span>
                    <span className={typeLabels[topic.type].color}>
                      {typeLabels[topic.type].label}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {topic.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{topic.estimatedTime}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 flex items-center gap-4">
                <ProgressRing
                  percentage={progress.percentage}
                  size={48}
                  strokeWidth={4}
                />
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {progress.completed} of {progress.total} completed
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {progress.percentage === 100
                      ? "All done! 🎉"
                      : `${progress.total - progress.completed} remaining`}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtopics list */}
            <div className="overflow-y-auto h-[calc(100%-200px)] p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Learning Checklist
              </h3>
              <ul className="space-y-2">
                {topic.subtopics.map((subtopic, index) => {
                  const isCompleted = isSubtopicCompleted(subtopic.id);
                  return (
                    <motion.li
                      key={subtopic.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => toggleSubtopic(subtopic.id)}
                        className={cn(
                          "w-full flex items-start gap-3 rounded-lg p-3 text-left transition-all",
                          "hover:bg-muted/50",
                          isCompleted && "bg-green-500/10"
                        )}
                      >
                        <div className="mt-0.5">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm",
                            isCompleted
                              ? "text-muted-foreground line-through"
                              : "text-foreground"
                          )}
                        >
                          {subtopic.title}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-card/80 backdrop-blur-xl p-4">
              <button
                onClick={() => {
                  topic.subtopics.forEach((s) => {
                    if (!isSubtopicCompleted(s.id)) {
                      toggleSubtopic(s.id);
                    }
                  });
                }}
                disabled={progress.percentage === 100}
                className={cn(
                  "w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                  progress.percentage === 100
                    ? "bg-green-500/20 text-green-500 cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {progress.percentage === 100
                  ? "✓ Topic Completed"
                  : "Mark All Complete"}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
