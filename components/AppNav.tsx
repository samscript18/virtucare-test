"use client";

import { navItems } from "@/data/data";
import { isActivePath } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavIcon from "./NavIcon";

export function AppNav() {
	const pathname = usePathname();

	return (
		<>
			<header className="sticky top-0 z-20 border-b border-white/55 bg-[#fffefb]/65 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
					<Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[#082130]">
						VirtuCare
					</Link>
					<nav className="hidden items-center gap-8 rounded-full border border-white/70 bg-white/55 p-1.5 shadow-[0_6px_20px_rgba(16,42,56,0.1)] md:flex">
						{navItems.map((item) => {
							const active = isActivePath(pathname, item.href);
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`rounded-full px-3 py-2 text-sm font-semibold transition duration-200 ${
										active ? "bg-[#2f7f78] text-white shadow-[0_8px_18px_rgba(47,127,120,0.35)]" : "text-[#1f4f63] hover:-translate-y-0.5 hover:bg-[#ebf5f3]"
									}`}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>
				</div>
			</header>

			<nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/70 bg-[#fffefb]/85 px-2 pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-2 backdrop-blur-xl md:hidden">
				<div className="mx-auto grid w-full max-w-md grid-cols-4 gap-1 rounded-2xl border border-white/70 bg-white/55 p-1 shadow-[0_-10px_30px_rgba(16,42,56,0.12)]">
					{navItems.map((item) => {
						const active = isActivePath(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								aria-label={item.label}
								className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-semibold transition ${
									active ? "bg-[#2f7f78] text-white shadow-[0_10px_20px_rgba(47,127,120,0.28)]" : "text-[#1f4f63] hover:bg-[#ebf5f3]"
								}`}
							>
								<NavIcon type={item.icon} />
								<span className="whitespace-nowrap">{item.mobileLabel}</span>
							</Link>
						);
					})}
				</div>
			</nav>
		</>
	);
}
