export type Client = {
	id: string;
	status: "VIP" | "regular" | "defaulter";
};

export type Invoice = {
	date: Date;
	clientId: string;
	total: number;
};
// Simulating an async function to get clients
const getClients = (): Promise<Client[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
      resolve([{ id: "1", status: "VIP" }, { id: "2", status: "regular" }]);
		}, 1000);
	});
};

// Simulating an async function to get invoices for a client
const getInvoicesForClient = (client: string): Promise<Invoice[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([{ date: new Date(), clientId: client, total: Math.random() * 2000}]);
		}, 1000);
	});
};

function main() {
	getClients().then(async (clients) => {
		for (const client of clients) {
			getInvoicesForClient(client.id).then((invoices) => {
        invoices.forEach((invoice) => {
          const shipment = client.status === 'defaulter' ? 'none': client.status === 'VIP' ? 'deluxe' : invoice.total > 1000 ? 'express' : 'regular';
          console.log(`Shipment ${shipment} for invoice ${invoice.date}`);
					console.log(`Invoice ${invoice} for ${client}`);
				});
			});
		}
	});
}

main();
