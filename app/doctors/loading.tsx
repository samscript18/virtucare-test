export default function DoctorsLoading() {
	return (
		<section className="space-y-5">
			<div className="glass-panel p-4">
				<div className="skeleton-shimmer h-4 w-32 rounded" />
				<div className="skeleton-shimmer mt-2 h-3 w-60 rounded" />
			</div>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index} className="glass-panel p-4">
						<div className="skeleton-shimmer h-6 w-3/5 rounded" />
						<div className="skeleton-shimmer mt-3 h-4 w-2/5 rounded" />
						<div className="skeleton-shimmer mt-4 h-3 w-full rounded" />
						<div className="skeleton-shimmer mt-2 h-3 w-4/5 rounded" />
						<div className="skeleton-shimmer mt-5 h-9 w-36 rounded-full" />
					</div>
				))}
			</div>
		</section>
	);
}
