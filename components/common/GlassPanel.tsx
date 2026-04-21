import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
	children: ReactNode;
	className?: string;
	shine?: boolean;
}

export function GlassPanel({ children, className, shine = true }: GlassPanelProps) {
	return <div className={cn("glass-panel", shine && "glass-shine", className)}>{children}</div>;
}
