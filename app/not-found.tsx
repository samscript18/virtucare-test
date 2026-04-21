import Link from "next/link";

export default function NotFound() {
	return (
		<div className="mx-auto mt-16 max-w-xl px-4">
			<div className="panel p-7 text-center">
				<p className="font-serif text-6xl text-[#082130]">404</p>
				<h2 className="mt-2 font-serif text-3xl text-[#173d50]">Page not found</h2>
				<p className="mt-2 text-sm text-[#4f6572]">That route does not exist in this VirtuCare assessment project.</p>
				<Link href="/" className="btn-primary mt-5">
					Back to home
				</Link>
			</div>
		</div>
	);
}
