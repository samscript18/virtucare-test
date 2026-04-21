export default function BookLoading() {
	return (
		<div className="glass-panel p-5 sm:p-6">
			<div className="skeleton-shimmer h-8 w-56 rounded" />
			<div className="skeleton-shimmer mt-3 h-4 w-80 rounded" />
			<div className="mt-6 space-y-3">
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="skeleton-shimmer h-11 rounded-xl" />
				))}
				<div className="skeleton-shimmer h-12 w-44 rounded-full" />
			</div>
		</div>
	);
}
