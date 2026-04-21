import Link from "next/link";
import { Doctor } from "@/types/appointments";

interface DoctorCardProps {
	doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
	return (
		<article className="panel flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(16,42,56,0.12)]">
			<div className="mb-3 flex items-center justify-between gap-3">
				<h2 className="font-serif text-xl font-semibold text-[#082130]">{doctor.name}</h2>
				<span className="rounded-full bg-[#fcece9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#9e3f31]">
					{doctor.specialty}
				</span>
			</div>
			<p className="mb-2 text-sm font-semibold text-[#1f4f63]">{doctor.location}</p>
			<p className="mb-4 text-sm leading-relaxed text-[#4f6572]">{doctor.bio}</p>
			<div className="mb-5 flex flex-wrap gap-2">
				{doctor.slots.map((slot) => (
					<span key={slot} className="rounded-md border border-[#c9d7d2] bg-[#f8fcfb] px-2 py-1 text-xs font-semibold text-[#2b5f5b]">
						{slot}
					</span>
				))}
			</div>
			<Link href={`/book?doctor=${doctor.id}`} className="btn-primary mt-auto text-center">
				Book Appointment
			</Link>
		</article>
	);
}
