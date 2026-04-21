import { describe, expect, it, beforeEach } from "vitest";
import { APPOINTMENTS_STORAGE_KEY, isDoubleBooked, persistAppointments, readAppointments, sortAppointments } from "@/lib/appointments";
import { Appointment } from "@/types/appointments";

const base: Appointment = {
	id: "a-1",
	doctorId: "dr-amy-chen",
	doctorName: "Dr. Amy Chen",
	specialty: "Family Medicine",
	date: "2026-05-12",
	time: "09:00",
	reason: "Follow-up",
	createdAt: "2026-04-21T10:00:00.000Z",
};

describe("appointments utils", () => {
	beforeEach(() => {
		const store = new Map<string, string>();
		Object.defineProperty(window, "localStorage", {
			configurable: true,
			value: {
				getItem: (key: string) => store.get(key) ?? null,
				setItem: (key: string, value: string) => {
					store.set(key, value);
				},
				removeItem: (key: string) => {
					store.delete(key);
				},
				clear: () => {
					store.clear();
				},
			},
		});
	});

	it("detects double bookings for matching doctor/date/time", () => {
		const appointments = [base];

		expect(isDoubleBooked(appointments, "dr-amy-chen", "2026-05-12", "09:00")).toBe(true);
		expect(isDoubleBooked(appointments, "dr-amy-chen", "2026-05-12", "10:30")).toBe(false);
		expect(isDoubleBooked(appointments, "dr-rafael-soto", "2026-05-12", "09:00")).toBe(false);
	});

	it("sorts appointments chronologically", () => {
		const outOfOrder: Appointment[] = [
			{ ...base, id: "a-2", date: "2026-05-13", time: "10:30" },
			{ ...base, id: "a-3", date: "2026-05-10", time: "08:30" },
			{ ...base, id: "a-4", date: "2026-05-12", time: "08:00" },
		];

		const sorted = sortAppointments(outOfOrder);
		expect(sorted.map((item) => item.id)).toEqual(["a-3", "a-4", "a-2"]);
	});

	it("persists and reads appointments from localStorage", () => {
		persistAppointments([base]);
		const raw = window.localStorage.getItem(APPOINTMENTS_STORAGE_KEY);

		expect(raw).toBeTruthy();
		expect(readAppointments()).toEqual([base]);
	});
});
