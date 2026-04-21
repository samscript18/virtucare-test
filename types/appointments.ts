export interface Doctor {
	id: string;
	name: string;
	specialty: string;
	location: string;
	bio: string;
	slots: string[];
}

export interface Appointment {
	id: string;
	doctorId: string;
	doctorName: string;
	specialty: string;
	date: string;
	time: string;
	reason: string;
	createdAt: string;
}

export interface AppointmentInput {
	doctorId: string;
	date: string;
	time: string;
	reason: string;
}
