import { BookingForm } from "@/components/BookingForm";
import { doctors } from "@/data/doctors";

export default function BookPage() {
	return <BookingForm doctors={doctors} />;
}
