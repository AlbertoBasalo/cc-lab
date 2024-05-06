# Logsy Kata

## Specifications

You need to implement a simple logging system that can store logs in a list of entries. 

The log entry has the following properties:

- Timestamp: The timestamp when the log was created.
- Level: The level of the log (INFO, WARN, ERROR).
- Message: The message of the log.

The log can be configured to write only logs of a certain level or higher.

The log can write to the console or to a file. 



### Acceptance Criteria:

```gherkin
Given a log
When a log entry is added
Then the log has the new entry
```

```gherkin
Given a log configured to write above level WARN
When a log entry of level INFO is added
Then the log does not have the new entry
```

```gherkin
Given a log configured to write to a file
When a log entry is added
Then the log file has the new entry
```

### Improvements:

- The log can accept a formatter that can format the log entry.

- The log can accept a writer that can write the log entry to any other destination.

- The log can assign the format and writer to each level of the log.


## Clean Implementation Requirements

1 - Use proper naming conventions.

2 - Write simple blocks and instructions.

3 - Keep functions small.

4 - Avoid primitive obsession.

5 - Respect the SOLID principles.

  - **Single Responsibility Principle (SRP)**: A class should have only one reason to change. This means that a class should only have one job or responsibility.

  - **Open/Closed Principle (OCP)**: A class should be open for extension but closed for modification. This means that you should be able to add new functionality to a class without changing its existing code. Prefer composition over inheritance.

  - **Liskov Substitution Principle (LSP)**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. This means that a subclass should override the methods of the superclass in a way that does not break the behavior of the superclass. Avoid inheritance as much as possible.

  - **Interface Segregation Principle (ISP)**: Behaviors can be shared among structures with different implementations. This means that you should create small, specific interfaces instead of large, general interfaces.

  - **Dependency Inversion Principle (DIP)**: A consumer should be able to work with different implementations of a dependency without knowing the details of the implementation. This means that you should depend on abstractions, not on concrete implementations. Use dependency injection to inject dependencies into a class.
