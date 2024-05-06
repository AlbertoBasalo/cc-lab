# Caesar Cipher Kata

## Specifications

This is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.

When reaching the end of the alphabet, the cipher restarts at the beginning (wraps around) of the same case.

### Acceptance Criteria:

```gherkin
Given a the string "abc"
When the Caesar cipher is applied with a shift of 1
Then the output is "bcd"	
```

```gherkin
Given a the string "hal"
When the Caesar cipher is applied with a shift of 1
Then the output is "ibm"
```

```gherkin
Given a the string "xyz"
When the Caesar cipher is applied with a shift of 1
Then the output is "yza"
```

### Improvements:
- Treat uppercase and lowercase letters as distinct characters (i.e. A and a are different)
- Allow the shift to be a sequence of numbers, so that each letter can be shifted by a different amount.
- Extract the shift number sequence form a password string char codes.

## Clean Implementation Requirements

1 - Use proper naming conventions.

  - Any variable name should be meaningful and self-explanatory.

  - Any function or method should start with a verb and be named after what it does.

  - Use simply short verbs for conditional flags and booleans.
