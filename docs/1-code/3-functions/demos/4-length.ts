type Booking = {
	id: string;
	tripId: string;
	clientId: string;
	price: number;
	passengers: unknown[];
};
function getPaymentByBookingId(bookingId: string) {
	return {
		method: "cash",
	};
}
function getClientById(clientId: string) {
	return {
		isVip: true,
	};
}
function getTripById(tripId: string) {
	return "";
}
function getTripSeason(trip: string) {
	return "winter";
}
// ❌
function calculateDiscount(booking: Booking) {
	// 🤢 how is this working?
	// 🤢 needs 4 dependencies how can I test it?
	let discount = 0;
	if (booking.passengers.length > 2) {
		discount += 5;
	}
	const payment = getPaymentByBookingId(booking.id);
	if (payment.method === "cash") {
		discount += 5;
	}
	const client = getClientById(booking.clientId);
	if (client.isVip) {
		discount += 10;
	}
	const trip = getTripById(booking.tripId);
	const season = getTripSeason(trip);
	if (season === "winter") {
		discount += 10;
	}
	const totalDiscount = (discount * booking.price) / 100;
	return totalDiscount;
}
