"use client";

import { useMemo, useSyncExternalStore } from "react";
import { doctorsById } from "@/data/doctors";
import {
	getAppointmentsServerSnapshot,
	getAppointmentsSnapshot,
	isDoubleBooked,
	persistAppointments,
	sortAppointments,
	subscribeAppointments,
} from "@/lib/appointments";
import { Appointment, AppointmentInput } from "@/types/appointments";

interface BookingResult {
	success: boolean;
	error?: string;
}

export function useAppointments() {
	const appointments = useSyncExternalStore(subscribeAppointments, getAppointmentsSnapshot, getAppointmentsServerSnapshot);

	const bookAppointment = (input: AppointmentInput): BookingResult => {
		const doctor = doctorsById[input.doctorId];
		if (!doctor) {
			return { success: false, error: "Please select a valid doctor." };
		}

		if (isDoubleBooked(appointments, input.doctorId, input.date, input.time)) {
			return {
				success: false,
				error: "That time slot has already been booked. Please choose another time.",
			};
		}

		const next: Appointment[] = sortAppointments([
			...appointments,
			{
				id: crypto.randomUUID(),
				doctorId: doctor.id,
				doctorName: doctor.name,
				specialty: doctor.specialty,
				date: input.date,
				time: input.time,
				reason: input.reason.trim(),
				createdAt: new Date().toISOString(),
			},
		]);

		persistAppointments(next);
		return { success: true };
	};

	const cancelAppointment = (appointmentId: string) => {
		const next = appointments.filter((appointment) => appointment.id !== appointmentId);
		persistAppointments(next);
	};

	const takenSlots = useMemo(() => {
		const lookup = new Set<string>();
		for (const appointment of appointments) {
			lookup.add(`${appointment.doctorId}|${appointment.date}|${appointment.time}`);
		}
		return lookup;
	}, [appointments]);

	return {
		appointments,
		bookAppointment,
		cancelAppointment,
		takenSlots,
	};
}
