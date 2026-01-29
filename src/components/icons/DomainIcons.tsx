import {
  Cpu,
  Network,
  Database,
  Server,
  Boxes,
  Shield,
  Wrench,
  Code,
} from "lucide-react";

export const domainIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Network,
  Database,
  Server,
  Boxes,
  Shield,
  Wrench,
  Code,
};

export const getDomainIcon = (iconName: string) => {
  return domainIcons[iconName] || Boxes;
};
