import { Appointment } from "@/types/appointments";

export const APPOINTMENTS_STORAGE_KEY = "virtucare:appointments";
export const APPOINTMENTS_UPDATED_EVENT = "virtucare:appointments-updated";
const EMPTY_APPOINTMENTS: Appointment[] = [];

let appointmentsCache: Appointment[] | null = null;

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
		return EMPTY_APPOINTMENTS;
	}

	const raw = window.localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
	if (!raw) {
		return EMPTY_APPOINTMENTS;
	}

	try {
		const parsed = JSON.parse(raw) as Appointment[];
		return Array.isArray(parsed) ? sortAppointments(parsed) : EMPTY_APPOINTMENTS;
	} catch {
		return EMPTY_APPOINTMENTS;
	}
}

export function getAppointmentsServerSnapshot(): Appointment[] {
	return EMPTY_APPOINTMENTS;
}

export function getAppointmentsSnapshot(): Appointment[] {
	if (typeof window === "undefined") {
		return EMPTY_APPOINTMENTS;
	}

	if (appointmentsCache === null) {
		appointmentsCache = readAppointments();
	}

	return appointmentsCache;
}

export function subscribeAppointments(onStoreChange: () => void): () => void {
	if (typeof window === "undefined") {
		return () => {};
	}

	const syncFromStorage = () => {
		appointmentsCache = readAppointments();
		onStoreChange();
	};

	window.addEventListener("storage", syncFromStorage);
	window.addEventListener(APPOINTMENTS_UPDATED_EVENT, syncFromStorage);

	return () => {
		window.removeEventListener("storage", syncFromStorage);
		window.removeEventListener(APPOINTMENTS_UPDATED_EVENT, syncFromStorage);
	};
}

export function persistAppointments(appointments: Appointment[]): void {
	if (typeof window === "undefined") {
		return;
	}

	const sorted = sortAppointments(appointments);
	appointmentsCache = sorted;
	window.localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(sorted));
	window.dispatchEvent(new Event(APPOINTMENTS_UPDATED_EVENT));
}
