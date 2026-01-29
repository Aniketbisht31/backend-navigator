import { useState, useEffect, useCallback } from "react";
import { roadmapData } from "@/data/roadmapData";

interface ProgressState {
  [subtopicId: string]: boolean;
}

const STORAGE_KEY = "backend-roadmap-progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load progress:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
  }, [progress, isLoaded]);

  const toggleSubtopic = useCallback((subtopicId: string) => {
    setProgress((prev) => ({
      ...prev,
      [subtopicId]: !prev[subtopicId],
    }));
  }, []);

  const isSubtopicCompleted = useCallback(
    (subtopicId: string) => {
      return progress[subtopicId] ?? false;
    },
    [progress]
  );

  const getTopicProgress = useCallback(
    (topicId: string) => {
      const topic = roadmapData.domains
        .flatMap((d) => d.topics)
        .find((t) => t.id === topicId);

      if (!topic) return { completed: 0, total: 0, percentage: 0 };

      const completed = topic.subtopics.filter((s) => progress[s.id]).length;
      const total = topic.subtopics.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { completed, total, percentage };
    },
    [progress]
  );

  const getDomainProgress = useCallback(
    (domainId: string) => {
      const domain = roadmapData.domains.find((d) => d.id === domainId);

      if (!domain) return { completed: 0, total: 0, percentage: 0 };

      const allSubtopics = domain.topics.flatMap((t) => t.subtopics);
      const completed = allSubtopics.filter((s) => progress[s.id]).length;
      const total = allSubtopics.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { completed, total, percentage };
    },
    [progress]
  );

  const getOverallProgress = useCallback(() => {
    const allSubtopics = roadmapData.domains.flatMap((d) =>
      d.topics.flatMap((t) => t.subtopics)
    );
    const completed = allSubtopics.filter((s) => progress[s.id]).length;
    const total = allSubtopics.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress({});
  }, []);

  return {
    progress,
    isLoaded,
    toggleSubtopic,
    isSubtopicCompleted,
    getTopicProgress,
    getDomainProgress,
    getOverallProgress,
    resetProgress,
  };
}
