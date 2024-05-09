// * Less arguments, do less things

function saveTripBooking(clientBooking: object, paymentData: object, confirmationMessage: object) {
  // 🤢 make payment
  console.log("making a payment with", paymentData);
  // 🤢 save booking
  console.log("saving booking", clientBooking);
  // 🤢 send a confirmation email
  console.log("sending a confirmation email", confirmationMessage);
}

// * Less arguments, less error-prone
function sendMessage(
  senderName: string,
  senderAddress: string,
  recipientAddress: string,
  subject: string,
  body: string
) {
  // 🤢 multiple similar parameters are error-prone
}


// ToDo: sample with a flag...

  function calculateMortgage(
    loanAmount: number,
    interestRate: number,
    loanTerm: number,
    loanType: string
  ) {
    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 12 / 100;

    // Calculate number of monthly payments
    const numberOfPayments = loanTerm * 12;

    if (loanType === 'fixed') {

      // Calculate monthly mortgage payment
      const mortgagePayment =
        (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      return mortgagePayment;
    }
    else if (loanType === 'adjustable') {
      // Calculate monthly mortgage payment
      const mortgagePayment =
        (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      return mortgagePayment;
    }
  }