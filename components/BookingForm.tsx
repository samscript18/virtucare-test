"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Doctor } from "@/types/appointments";
import { useAppointments } from "@/hooks/useAppointments";

interface BookingFormProps {
	doctors: Doctor[];
}

function getTodayISODate() {
	return new Date().toISOString().split("T")[0];
}

export function BookingForm({ doctors }: BookingFormProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selectedFromQuery = searchParams.get("doctor") ?? "";
	const { bookAppointment, takenSlots } = useAppointments();

	const [doctorId, setDoctorId] = useState<string>(selectedFromQuery);
	const [date, setDate] = useState<string>("");
	const [time, setTime] = useState<string>("");
	const [reason, setReason] = useState<string>("");
	const [error, setError] = useState<string>("");

	const doctor = doctors.find((entry) => entry.id === doctorId);

	const availableTimes = useMemo(() => {
		if (!doctor || !date) {
			return [];
		}

		return doctor.slots.filter((slot) => !takenSlots.has(`${doctor.id}|${date}|${slot}`));
	}, [date, doctor, takenSlots]);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");

		if (!doctorId || !date || !time || reason.trim().length === 0) {
			setError("Please complete all fields before booking.");
			return;
		}

		const result = bookAppointment({ doctorId, date, time, reason });
		if (!result.success) {
			setError(result.error ?? "Unable to book right now.");
			return;
		}

		router.push("/appointments?booked=1");
	};

	return (
		<GlassPanel className="page-enter p-5 sm:p-6">
			<h1 className="font-serif text-3xl font-semibold text-[#082130]">Book an appointment</h1>
			<p className="mt-2 text-sm text-[#4f6572]">Choose a doctor, pick an available time, and share your reason for visit.</p>

			<form onSubmit={onSubmit} className="mt-6 space-y-4">
				<div>
					<label htmlFor="doctor" className="mb-1 block text-sm font-semibold text-[#1f4f63]">
						Doctor
					</label>
					<select
						id="doctor"
						className="field"
						value={doctorId}
						onChange={(event) => {
							setDoctorId(event.target.value);
							setTime("");
						}}
					>
						<option value="">Select a doctor</option>
						{doctors.map((entry) => (
							<option key={entry.id} value={entry.id}>
								{entry.name} - {entry.specialty}
							</option>
						))}
					</select>
				</div>

				<div className="grid gap-4 sm:grid-cols-2">
					<div>
						<label htmlFor="date" className="mb-1 block text-sm font-semibold text-[#1f4f63]">
							Date
						</label>
						<input
							id="date"
							type="date"
							className="field"
							min={getTodayISODate()}
							value={date}
							onChange={(event) => {
								setDate(event.target.value);
								setTime("");
							}}
						/>
					</div>
					<div>
						<label htmlFor="time" className="mb-1 block text-sm font-semibold text-[#1f4f63]">
							Time
						</label>
						<select id="time" className="field" value={time} onChange={(event) => setTime(event.target.value)}>
							<option value="">Select a time</option>
							{availableTimes.map((slot) => (
								<option key={slot} value={slot}>
									{slot}
								</option>
							))}
						</select>
						{doctor && date && availableTimes.length === 0 ? <p className="mt-1 text-xs font-semibold text-[#a2473a]">No slots left on this date for this doctor.</p> : null}
					</div>
				</div>

				<div>
					<label htmlFor="reason" className="mb-1 block text-sm font-semibold text-[#1f4f63]">
						Reason for visit
					</label>
					<textarea id="reason" rows={4} className="field" placeholder="Briefly describe your symptoms or concern" value={reason} onChange={(event) => setReason(event.target.value)} />
				</div>

				{error ? <p className="rounded-md bg-[#fde9e6] px-3 py-2 text-sm font-semibold text-[#9e3f31]">{error}</p> : null}

				<button type="submit" className="btn-primary w-full sm:w-auto">
					Confirm booking
				</button>
			</form>
		</GlassPanel>
	);
}
