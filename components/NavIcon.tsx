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

	if (type === "doctors") {
		return (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
				<circle cx="12" cy="8" r="3" />
				<path d="M5 20c0-3.1 3.1-5 7-5s7 1.9 7 5" strokeLinecap="round" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
			<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
		</svg>
	);
}

export default NavIcon;
