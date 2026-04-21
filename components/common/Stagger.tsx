import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
	children: ReactNode;
	index?: number;
	className?: string;
}

export function Stagger({ children, index = 0, className }: StaggerProps) {
	return (
		<div className={cn("page-enter", className)} style={{ animationDelay: `${Math.min(index * 90, 540)}ms` }}>
			{children}
		</div>
	);
}
