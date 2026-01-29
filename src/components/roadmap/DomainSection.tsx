import { motion } from "framer-motion";
import { Domain, Topic } from "@/data/roadmapData";
import { TopicNode } from "./TopicNode";
import { getDomainIcon } from "@/components/icons/DomainIcons";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

interface DomainSectionProps {
  domain: Domain;
  onTopicClick: (topic: Topic) => void;
  selectedTopicId: string | null;
  index: number;
}

const domainColors: Record<string, string> = {
  "domain-os": "from-purple-500/20 to-purple-600/5 border-purple-500/30",
  "domain-networks": "from-cyan-500/20 to-cyan-600/5 border-cyan-500/30",
  "domain-databases": "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30",
  "domain-backend": "from-amber-500/20 to-amber-600/5 border-amber-500/30",
  "domain-system": "from-rose-500/20 to-rose-600/5 border-rose-500/30",
  "domain-security": "from-red-500/20 to-red-600/5 border-red-500/30",
  "domain-devops": "from-sky-500/20 to-sky-600/5 border-sky-500/30",
  "domain-dsa": "from-violet-500/20 to-violet-600/5 border-violet-500/30",
};

const textColors: Record<string, string> = {
  "domain-os": "text-purple-400",
  "domain-networks": "text-cyan-400",
  "domain-databases": "text-emerald-400",
  "domain-backend": "text-amber-400",
  "domain-system": "text-rose-400",
  "domain-security": "text-red-400",
  "domain-devops": "text-sky-400",
  "domain-dsa": "text-violet-400",
};

export function DomainSection({
  domain,
  onTopicClick,
  selectedTopicId,
  index,
}: DomainSectionProps) {
  const { getTopicProgress, getDomainProgress } = useProgress();
  const Icon = getDomainIcon(domain.icon);
  const domainProgress = getDomainProgress(domain.id);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative"
    >
      {/* Domain header */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 mb-4",
          domainColors[domain.colorClass]
        )}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />

        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-card/50",
                textColors[domain.colorClass]
              )}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                {domain.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {domain.description}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div
              className={cn(
                "text-2xl font-bold",
                textColors[domain.colorClass]
              )}
            >
              {domainProgress.percentage}%
            </div>
            <div className="text-xs text-muted-foreground">
              {domainProgress.completed}/{domainProgress.total} complete
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-card/50">
          <motion.div
            className={cn("h-full rounded-full", {
              "bg-purple-500": domain.colorClass === "domain-os",
              "bg-cyan-500": domain.colorClass === "domain-networks",
              "bg-emerald-500": domain.colorClass === "domain-databases",
              "bg-amber-500": domain.colorClass === "domain-backend",
              "bg-rose-500": domain.colorClass === "domain-system",
              "bg-red-500": domain.colorClass === "domain-security",
              "bg-sky-500": domain.colorClass === "domain-devops",
              "bg-violet-500": domain.colorClass === "domain-dsa",
            })}
            initial={{ width: 0 }}
            animate={{ width: `${domainProgress.percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Topics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {domain.topics.map((topic, topicIndex) => (
          <TopicNode
            key={topic.id}
            topic={topic}
            domainColor={domain.colorClass}
            progress={getTopicProgress(topic.id)}
            onClick={() => onTopicClick(topic)}
            isSelected={selectedTopicId === topic.id}
            index={topicIndex}
          />
        ))}
      </div>
    </motion.section>
  );
}
