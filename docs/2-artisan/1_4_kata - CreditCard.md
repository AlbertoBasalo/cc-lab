# Credit Card Kata

## Specifications

You need to implement a simple credit card validator and formatter 

The credit card number must be a string of 16 digits.

The credit card holder name must be a string of at least 5 characters.

The credit card CVV must be a string of 3 digits.

The credit card expiry date must be a string of 2 digits and a forward slash `/` followed by 2 digits.

When card expiry date is in the past return `The credit card is expired`.

When card expiry date is in the near future return `Please renew your card`.

In other cases return `The credit card is valid`.

Should be able to obtain masked string like `**** **** **** 3456`.

### Acceptance Criteria:

```gherkin
Given a credit card number "1234567890123456"
And an expiry date "12/26"
And a CVV "123"
And a holder name "John Doe"
When the credit card is validated
Then the output is "The credit card is valid"
```

```gherkin
Given a credit card number "1234567890"
And an expiry date "12/26"
And a CVV "123"
And a holder name "John Doe"
When the credit card is validated
Then the output is "The credit card number is invalid"
```

```gherkin
Given a credit card number "1234567890123456"
And an expiry date "12/22"
And a CVV "123"
And a holder name "John Doe"
When the credit card is validated
Then the output is "The credit card is expired"
```

```gherkin
Given a credit card number "1234567890123456"
And an expiry date "05/24"
And a CVV "123"
And a holder name "John Doe"
When the credit card is validated
Then the output is "Please renew your card"
```

```gherkin
Given a credit card number "1234567890123456"
And an expiry date "12/26"
And a CVV "123"
And a holder name "John Doe"
When ask for the masked card number
Then the output is "**** **** **** 3456"
```

### Improvements:

- The first two digits must be a valid month (from `01` to `12`).

- The last two digits must be a valid realistic year (from `21` to `49`).

- Check if the expiry date is a valid date.

- Force the holder name to be a string of at least 2 words.



## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

4 - Avoid primitive obsession.

  - Avoid global variables

  - Avoid primitives

  - Prefer composition over inheritance

  - Avoid large structures

  - Encapsulate data and behavior in classes

  - Reduce the number of collaborators of each class.

  - Reduce the number of consumers of each class.

  - Don´t talk to strangers.

  - High cohesion (use your data) and low coupling (need few collaborators)

  - Keep classes small (below 100 instructions)

  - Avoid switch statements by using lookup tables

  - Avoid using null by using default values
