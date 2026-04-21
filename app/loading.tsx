export default function HomeLoading() {
	return (
		<div className="space-y-4">
			<div className="panel animate-pulse p-6">
				<div className="h-3 w-28 rounded bg-[#d5e5e2]" />
				<div className="mt-3 h-8 w-3/4 rounded bg-[#d5e5e2]" />
				<div className="mt-2 h-3 w-1/2 rounded bg-[#d5e5e2]" />
			</div>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index} className="panel h-56 animate-pulse bg-white/70" />
				))}
			</div>
		</div>
	);
}
