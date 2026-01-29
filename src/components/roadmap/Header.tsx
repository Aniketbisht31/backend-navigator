import { motion } from "framer-motion";
import { Map, Github, RotateCcw } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Header() {
  const { resetProgress } = useProgress();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Map className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">
              Backend Engineering
            </h1>
            <p className="text-xs text-muted-foreground">Roadmap & Checklist</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                <RotateCcw className="h-4 w-4" />
                <span className="hidden sm:inline">Reset Progress</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="glass-panel border-border">
              <AlertDialogHeader>
                <AlertDialogTitle>Reset all progress?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will clear all your completed items and reset your progress to 0%. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-muted hover:bg-muted/80">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={resetProgress}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Reset Progress
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
