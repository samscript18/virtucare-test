import { BookingForm } from "@/components/BookingForm";
import { doctors } from "@/data/data";

export default function BookPage() {
	return <BookingForm doctors={doctors} />;
}
