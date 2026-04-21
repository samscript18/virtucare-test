import { DoctorCard } from "@/components/DoctorCard";
import { Stagger } from "@/components/common/Stagger";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
	return (
		<section className="page-enter space-y-5">
			<div>
				<h1 className="font-serif text-3xl font-semibold text-[#082130]">Available doctors</h1>
				<p className="mt-1 text-sm text-[#4f6572]">Select from multiple specialties and book from open time slots.</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{doctors.map((doctor, index) => (
					<Stagger key={doctor.id} index={index}>
						<DoctorCard doctor={doctor} />
					</Stagger>
				))}
			</div>
		</section>
	);
}
