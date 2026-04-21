import Link from "next/link";
import { doctors } from "@/data/doctors";

export default function Home() {
	return (
		<section className="page-enter space-y-8">
			<div className="panel overflow-hidden p-6 sm:p-8">
				<p className="mb-3 inline-flex rounded-full bg-[#fcece9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a2473a]">
					Patient-first booking
				</p>
				<h1 className="max-w-2xl font-serif text-4xl leading-tight text-[#082130] sm:text-5xl">
					Book care in under a minute, then manage everything in one place.
				</h1>
				<p className="mt-4 max-w-xl text-base leading-relaxed text-[#4f6572]">
					VirtuCare helps patients find doctors, reserve an available slot, and keep appointments organized across refreshes.
				</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link href="/doctors" className="btn-primary">
						View doctors
					</Link>
					<Link href="/appointments" className="btn-ghost">
						Manage appointments
					</Link>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-3">
				<div className="panel p-4">
					<p className="text-sm font-semibold text-[#1f4f63]">Doctors available</p>
					<p className="mt-2 font-serif text-3xl text-[#082130]">{doctors.length}</p>
				</div>
				<div className="panel p-4">
					<p className="text-sm font-semibold text-[#1f4f63]">Average booking time</p>
					<p className="mt-2 font-serif text-3xl text-[#082130]">&lt; 60 sec</p>
				</div>
				<div className="panel p-4">
					<p className="text-sm font-semibold text-[#1f4f63]">Appointment persistence</p>
					<p className="mt-2 font-serif text-3xl text-[#082130]">Enabled</p>
				</div>
			</div>
		</section>
	);
}
