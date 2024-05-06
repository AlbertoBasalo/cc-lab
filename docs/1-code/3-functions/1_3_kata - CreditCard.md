# Credit Card Kata

## Specifications

You need to implement a simple credit card validator that checks if a credit card is valid.

The credit card number must be a string of 16 digits.

The credit card expiry date must be a string of 2 digits and a forward slash `/` followed by 2 digits.

The first two digits must be a valid month (from `01` to `12`).

The last two digits must be a valid realistic year (from `21` to `49`).

The credit card expiry date must be in the future.

The credit card CVV must be a string of 3 digits.

The credit card holder name must be a string of at least 5 characters.

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
Given a credit card number "123456789012345"
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
And an expiry date "12/26"
And a CVV "123"
And a holder name "John"
When the credit card is validated
Then the output is "The holder name is invalid"
```

```gherkin
Given a credit card number "1234567890123456"
And an expiry date "12/26"
And a CVV "abc"
And a holder name "John Doe"
When the credit card is validated
Then the output is "The CVV is invalid"
```

### Improvements:

- Check if the expiry date is a valid date.

- Force the holder name to be a string of at least 2 words.

- When valid return the credit card number masked like `**** **** **** 3456`.

## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

  - Do one thing

  - Keep functions small (4-9 lines)

  - Use only one level of abstraction

  - Use descriptive verbs and names

  - Reduce arguments

  - Ask or tell, don't mix

  - Encapsulate side effects

  - Avoid switch statements by using lookup tables

  - Avoid using null by using guard clauses or default values
