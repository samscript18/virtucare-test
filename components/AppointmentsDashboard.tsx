"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Stagger } from "@/components/common/Stagger";
import { useAppointments } from "@/hooks/useAppointments";

export function AppointmentsDashboard() {
	const searchParams = useSearchParams();
	const booked = searchParams.get("booked") === "1";
	const { appointments, cancelAppointment } = useAppointments();

	return (
		<section className="page-enter space-y-4">
			{booked ? <p className="glass-panel border-[#b7d9d4] bg-[#ebf8f5]/80 px-4 py-3 text-sm font-semibold text-[#1f6b63]">Appointment booked successfully.</p> : null}
			<div className="flex items-end justify-between gap-3">
				<div>
					<h1 className="font-serif text-3xl font-semibold text-[#082130]">Your appointments</h1>
					<p className="mt-1 text-sm text-[#4f6572]">Manage upcoming visits and cancel when plans change.</p>
				</div>
				<Link href="/book" className="btn-primary shrink-0">
					Book new
				</Link>
			</div>

			{appointments.length === 0 ? (
				<GlassPanel className="p-6 text-center">
					<h2 className="font-serif text-2xl font-semibold text-[#173d50]">No appointments yet</h2>
					<p className="mx-auto mt-2 max-w-sm text-sm text-[#4f6572]">Once you book a visit, it will appear here and stay saved after refresh.</p>
					<Link href="/doctors" className="btn-primary mt-4">
						Browse doctors
					</Link>
				</GlassPanel>
			) : (
				<ul className="grid gap-3">
					{appointments.map((appointment, index) => (
						<Stagger key={appointment.id} index={index}>
							<li className="glass-panel grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
							<div>
								<p className="font-serif text-xl text-[#082130]">{appointment.doctorName}</p>
								<p className="text-sm font-semibold text-[#1f4f63]">{appointment.specialty}</p>
								<p className="mt-1 text-sm text-[#3b515f]">
									{appointment.date} at {appointment.time}
								</p>
								<p className="mt-2 rounded-lg bg-[#f4f7f6] px-3 py-2 text-sm text-[#324a58]">Reason: {appointment.reason}</p>
							</div>
							<button type="button" onClick={() => cancelAppointment(appointment.id)} className="btn-ghost border-[#e2c2bd] bg-[#fff6f4] text-[#a2473a] hover:bg-[#ffecea]">
								Cancel
							</button>
							</li>
						</Stagger>
					))}
				</ul>
			)}
		</section>
	);
}
