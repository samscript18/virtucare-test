import { Doctor } from "@/types/appointments";
import { NavItem } from "@/types/nav";

export const navItems: NavItem[] = [
	{ href: "/", label: "Home", mobileLabel: "Home", icon: "home" },
	{ href: "/doctors", label: "Doctors", mobileLabel: "Doctors", icon: "doctors" },
	{ href: "/book", label: "Book", mobileLabel: "Book", icon: "book" },
	{ href: "/appointments", label: "Appointments", mobileLabel: "Appts", icon: "appointments" },
];

export const doctors: Doctor[] = [
	{
		id: "dr-amy-chen",
		name: "Dr. Amy Chen",
		specialty: "Family Medicine",
		location: "Downtown Clinic",
		bio: "Focuses on preventive care and long-term wellness planning for adults.",
		slots: ["09:00", "10:30", "13:00", "15:00"],
	},
	{
		id: "dr-rafael-soto",
		name: "Dr. Rafael Soto",
		specialty: "Cardiology",
		location: "North Medical Center",
		bio: "Specializes in heart health assessments and hypertension follow-up.",
		slots: ["08:30", "11:00", "14:00", "16:30"],
	},
	{
		id: "dr-elena-brooks",
		name: "Dr. Elena Brooks",
		specialty: "Dermatology",
		location: "Harbor Health Hub",
		bio: "Experienced in skin screenings, treatment plans, and virtual check-ins.",
		slots: ["09:30", "12:00", "14:30", "17:00"],
	},
	{
		id: "dr-michael-owens",
		name: "Dr. Michael Owens",
		specialty: "Pediatrics",
		location: "Southside Children Care",
		bio: "Provides child wellness visits, vaccination guidance, and parent consults.",
		slots: ["08:00", "10:00", "13:30", "15:30"],
	},
	{
		id: "dr-nora-javed",
		name: "Dr. Nora Javed",
		specialty: "Neurology",
		location: "Riverside Neuro Clinic",
		bio: "Supports migraine management and neurological diagnosis follow-up.",
		slots: ["09:15", "11:45", "13:45", "16:15"],
	},
	{
		id: "dr-liam-kim",
		name: "Dr. Liam Kim",
		specialty: "Orthopedics",
		location: "City Motion Institute",
		bio: "Treats joint pain, minor injuries, and recovery planning for active adults.",
		slots: ["08:45", "10:15", "12:45", "15:45"],
	},
];

export const doctorsById = Object.fromEntries(doctors.map((doctor) => [doctor.id, doctor]));
