export default function AppointmentsLoading() {
	return (
		<section className="space-y-4">
			<div className="glass-panel p-4">
				<div className="skeleton-shimmer h-8 w-64 rounded" />
				<div className="skeleton-shimmer mt-2 h-4 w-72 rounded" />
			</div>
			{Array.from({ length: 3 }).map((_, index) => (
				<div key={index} className="glass-panel p-4">
					<div className="skeleton-shimmer h-5 w-48 rounded" />
					<div className="skeleton-shimmer mt-2 h-4 w-28 rounded" />
					<div className="skeleton-shimmer mt-3 h-10 w-full rounded-lg" />
				</div>
			))}
		</section>
	);
}
