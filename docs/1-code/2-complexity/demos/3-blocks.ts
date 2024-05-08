export type client = {
	id: string;
	status: "VIP" | "regular" | "defaulter";
	orders: Order[];
};

export type Order = {
	id: string;
	status: "pending" | "completed";
	date: Date;
	lines: OrderLine[];
};

export type OrderLine = {
	product: string;
	quantity: number;
	price: number;
};

export type Shipment = {
	orderId: string;
	lines: OrderLine[];
};

export type Invoice = {
	orderId: string;
	date: Date;
	clientId: string;
	subTotal: number;
	discount: number;
	tax: number;
	total: number;
};

function processMonthlyOrders(clients: client[]) {
	for (const client of clients) {
		if (client.status !== "defaulter") {
			for (const order of client.orders) {
				if (
					order.status === "pending" &&
					order.date.getMonth() === new Date().getMonth()
				) {
					const shipment: Shipment = {
						orderId: order.id,
						lines: order.lines,
					};
					if (client.status === "VIP") {
						console.log("Package as a deluxe shipment", shipment);
						console.log("Send shipment by express courier", shipment);
						console.log("Include a gift card");
					} else {
						console.log("Package as a regular shipment", shipment);
						console.log("Send shipment by regular mail", shipment);
						console.log("Include a discount coupon for the next purchase");
					}
					let subTotal = 0;
					for (const line of order.lines) {
						subTotal += line.price * line.quantity;
					}
					let discount = 0;
					if (client.status === "VIP") {
						discount = subTotal * 0.1;
					}
					const tax = subTotal * 0.2;
					const total = subTotal - discount + tax;
					const invoice: Invoice = {
						orderId: order.id,
						date: new Date(),
						clientId: client.id,
						subTotal,
						discount,
						tax,
						total,
					};
					console.log("Send invoice to client", invoice);
					console.log("Send invoice to accounting", invoice);
				}
			}
		} else {
			console.log("Client is a defaulter", client);
		}
	}
}
