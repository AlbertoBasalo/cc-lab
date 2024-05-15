// ! Dependency Inversion Principle, is sometimes defined on top of the OCP and IoC principles

export interface Payment {
	pay(paymentInfo: unknown): void;
}

export class CreditCardPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with credit card", paymentInfo);
	}
}
export class BankTransferPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with bank transfer", paymentInfo);
	}
}
export class PaypalPayment implements Payment {
	pay(paymentInfo: unknown) {
		console.log("pay with paypal", paymentInfo);
	}
}

export type PaymentMethod = "credit" | "transfer" | "paypal";

const paymentMethods: { [key in PaymentMethod]: () => Payment } = {
	credit: () => new CreditCardPayment(),
	transfer: () => new BankTransferPayment(),
	paypal: () => new PaypalPayment(),
};

export function createPaymentMethod(method: PaymentMethod) {
	const createMethod = paymentMethods[method];
	if (createMethod) {
		return createMethod();
	}
	throw new Error("Invalid payment method");
}

// * the main function got a payment object from the factory
// Could be a more sophisticated injection system

function main() {
	const payment = createPaymentMethod("credit");
	payment.pay("payment info");
}
