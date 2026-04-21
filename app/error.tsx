"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="mx-auto mt-16 max-w-xl px-4">
			<div className="panel p-6 text-center sm:p-8">
				<p className="mx-auto mb-3 inline-flex rounded-full bg-[#fde9e6] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#a2473a]">
					Error
				</p>
				<h2 className="font-serif text-3xl text-[#082130]">Something went wrong</h2>
				<p className="mt-2 text-sm text-[#4f6572]">{error.message || "An unexpected error occurred. Please try again."}</p>
				<div className="mt-6 flex justify-center gap-3">
					<button onClick={reset} className="btn-primary" type="button">
						Try again
					</button>
					<Link href="/" className="btn-ghost">
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
}
