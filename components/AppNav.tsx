"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/doctors", label: "Doctors" },
	{ href: "/book", label: "Book" },
	{ href: "/appointments", label: "Appointments" },
];

export function AppNav() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-20 border-b border-[#d4d9cf]/80 bg-[#fffefb]/90 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[#082130]">
					VirtuCare
				</Link>
				<nav className="flex items-center gap-2">
					{navItems.map((item) => {
						const active = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
									active ? "bg-[#2f7f78] text-white" : "text-[#1f4f63] hover:bg-[#ebf5f3]"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
