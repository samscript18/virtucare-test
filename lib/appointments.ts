import { Appointment } from "@/types/appointments";

export const APPOINTMENTS_STORAGE_KEY = "virtucare:appointments";
export const APPOINTMENTS_UPDATED_EVENT = "virtucare:appointments-updated";

export function sortAppointments(appointments: Appointment[]): Appointment[] {
	return [...appointments].sort((a, b) => {
		const left = `${a.date}T${a.time}:00`;
		const right = `${b.date}T${b.time}:00`;
		return left.localeCompare(right);
	});
}

export function isDoubleBooked(appointments: Appointment[], doctorId: string, date: string, time: string, excludeAppointmentId?: string): boolean {
	return appointments.some((appointment) => {
		if (excludeAppointmentId && appointment.id === excludeAppointmentId) {
			return false;
		}

		return appointment.doctorId === doctorId && appointment.date === date && appointment.time === time;
	});
}

export function readAppointments(): Appointment[] {
	if (typeof window === "undefined") {
		return [];
	}

	const raw = window.localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
	if (!raw) {
		return [];
	}

	try {
		const parsed = JSON.parse(raw) as Appointment[];
		return Array.isArray(parsed) ? sortAppointments(parsed) : [];
	} catch {
		return [];
	}
}

export function persistAppointments(appointments: Appointment[]): void {
	if (typeof window === "undefined") {
		return;
	}

	window.localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(sortAppointments(appointments)));
	window.dispatchEvent(new Event(APPOINTMENTS_UPDATED_EVENT));
}
