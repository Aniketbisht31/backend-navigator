import { motion } from "framer-motion";
import { Topic } from "@/data/roadmapData";
import { ProgressRing } from "./ProgressRing";
import { Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicNodeProps {
  topic: Topic;
  domainColor: string;
  progress: { completed: number; total: number; percentage: number };
  onClick: () => void;
  isSelected: boolean;
  index: number;
}

const typeStyles = {
  core: {
    border: "border-primary/40 hover:border-primary",
    badge: "bg-primary/20 text-primary",
    label: "Core",
  },
  advanced: {
    border: "border-accent/40 hover:border-accent",
    badge: "bg-accent/20 text-accent",
    label: "Advanced",
  },
  optional: {
    border: "border-muted-foreground/40 hover:border-muted-foreground",
    badge: "bg-muted text-muted-foreground",
    label: "Optional",
  },
};

export function TopicNode({
  topic,
  domainColor,
  progress,
  onClick,
  isSelected,
  index,
}: TopicNodeProps) {
  const style = typeStyles[topic.type];
  const isCompleted = progress.percentage === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer rounded-xl border bg-card p-4 transition-all duration-300",
        style.border,
        isSelected && "ring-2 ring-primary shadow-glow-md",
        isCompleted && "border-green-500/50"
      )}
    >
      {/* Completed indicator */}
      {isCompleted && (
        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
          <svg
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Type badge */}
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
              style.badge
            )}
          >
            {style.label}
          </span>

          {/* Title */}
          <h3 className="mt-2 font-semibold text-foreground line-clamp-2 text-sm leading-tight">
            {topic.title}
          </h3>

          {/* Meta info */}
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {topic.estimatedTime}
            </span>
            <span>
              {progress.completed}/{progress.total} done
            </span>
          </div>
        </div>

        {/* Progress ring */}
        <div className="flex flex-col items-center gap-1">
          <ProgressRing
            percentage={progress.percentage}
            size={36}
            strokeWidth={3}
            showLabel={false}
            color={
              isCompleted
                ? "hsl(142, 76%, 36%)"
                : progress.percentage > 0
                ? `hsl(var(--${domainColor.replace("domain-", "domain-")}))`
                : "hsl(var(--muted-foreground))"
            }
          />
          <span className="text-[10px] font-medium text-muted-foreground">
            {progress.percentage}%
          </span>
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </motion.div>
  );
}
