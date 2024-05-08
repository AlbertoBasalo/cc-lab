// ❌

type Booking = {
	tripId: string;
	price: number;
};

function saveBooking(booking: Booking): number {
	db.insertBooking(booking); // 🤢 mutation❗
	return db.selectAvailableSeats(booking.tripId); // 🤢 question❓
}

function getDiscountBooking(booking: Booking): number {
	const discount = booking.price * 0.1;
	booking.price = booking.price - discount; // mutation❗
	return discount; // question like pretending it's not touching anything ❓
}

export class Database {
	insertBooking(booking: Booking) {}
	selectAvailableSeats(tripId: string) {
		return 0;
	}
}
const db = new Database();
