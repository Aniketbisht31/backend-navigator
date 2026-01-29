import { motion } from "framer-motion";
import { Trophy, Target, Flame } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { ProgressRing } from "./ProgressRing";
import { getRoadmapStats } from "@/data/roadmapData";

export function FloatingProgress() {
  const { getOverallProgress } = useProgress();
  const overall = getOverallProgress();
  const stats = getRoadmapStats();

  const getMotivationMessage = () => {
    if (overall.percentage === 0) return "Start your journey!";
    if (overall.percentage < 25) return "Great start! Keep going!";
    if (overall.percentage < 50) return "You're making progress!";
    if (overall.percentage < 75) return "More than halfway there!";
    if (overall.percentage < 100) return "Almost there! 🔥";
    return "Congratulations! 🎉";
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="glass-panel rounded-2xl px-6 py-4 flex items-center gap-6 shadow-xl">
        {/* Progress ring */}
        <div className="flex items-center gap-3">
          <ProgressRing
            percentage={overall.percentage}
            size={52}
            strokeWidth={4}
            color={
              overall.percentage === 100
                ? "hsl(142, 76%, 36%)"
                : "hsl(var(--primary))"
            }
          />
          <div>
            <div className="text-sm font-semibold text-foreground">
              {overall.completed}/{overall.total}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-border" />

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              <span className="font-medium text-foreground">{stats.totalTopics}</span> Topics
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="h-4 w-4 text-amber-500" />
            <span className="text-muted-foreground">
              <span className="font-medium text-foreground">{stats.totalDomains}</span> Domains
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-border hidden sm:block" />

        {/* Motivation */}
        <div className="hidden sm:flex items-center gap-2">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-medium text-foreground">
            {getMotivationMessage()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
