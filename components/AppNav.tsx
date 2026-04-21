"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/", label: "Home", icon: "home" },
	{ href: "/doctors", label: "Doctors" },
	{ href: "/book", label: "Book" },
	{ href: "/appointments", label: "Appointments" },
];

function NavIcon({ type }: { type: string }) {
	if (type === "home") {
		return (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
				<path d="M3 10.5L12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M5.5 9.5V20h13V9.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}

	if (type === "appointments") {
		return (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
				<rect x="4" y="5" width="16" height="15" rx="2" />
				<path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}

	if (type === "book") {
		return (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
				<path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="12" r="9" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
			<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
		</svg>
	);
}

export function AppNav() {
	const pathname = usePathname();

	return (
		<>
			<header className="sticky top-0 z-20 border-b border-white/55 bg-[#fffefb]/65 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[#082130]">
					VirtuCare
				</Link>
				<nav className="hidden items-center gap-2 md:flex">
					{navItems.map((item) => {
						if (item.href === "/") return null;
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-2 text-sm font-semibold transition duration-200 ${active ? "bg-[#2f7f78] text-white shadow-[0_8px_18px_rgba(47,127,120,0.35)]" : "text-[#1f4f63] hover:-translate-y-0.5 hover:bg-[#ebf5f3]"}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
				<Link href="/book" className="btn-primary md:hidden">
					Book
				</Link>
			</div>
		</header>

		<nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/70 bg-[#fffefb]/85 px-2 pb-[calc(env(safe-area-inset-bottom)+0.4rem)] pt-2 backdrop-blur-xl md:hidden">
			<div className="mx-auto grid w-full max-w-md grid-cols-4 gap-1 rounded-2xl border border-white/70 bg-white/55 p-1 shadow-[0_-10px_30px_rgba(16,42,56,0.12)]">
				{navItems.map((item) => {
					const active = pathname === item.href;
					const iconType = item.href === "/" ? "home" : item.href === "/book" ? "book" : item.href === "/appointments" ? "appointments" : "doctors";
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-semibold transition ${
								active ? "bg-[#2f7f78] text-white shadow-[0_10px_20px_rgba(47,127,120,0.28)]" : "text-[#1f4f63] hover:bg-[#ebf5f3]"
							}`}
						>
							<NavIcon type={iconType} />
							<span>{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
		</>
	);
}
