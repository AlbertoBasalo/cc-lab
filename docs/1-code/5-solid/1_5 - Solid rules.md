# SOLID rules

- **Single Responsibility Principle (SRP)**: A class should have only one reason to change. This means that a class should only have one job or responsibility.

- **Open/Closed Principle (OCP)**: A class should be open for extension but closed for modification. This means that you should be able to add new functionality to a class without changing its existing code. Prefer composition over inheritance.

- **Liskov Substitution Principle (LSP)**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. This means that a subclass should override the methods of the superclass in a way that does not break the behavior of the superclass. Avoid inheritance as much as possible.

- **Interface Segregation Principle (ISP)**: Behaviors can be shared among structures with different implementations. This means that you should create small, specific interfaces instead of large, general interfaces.

- **Dependency Inversion Principle (DIP)**: A consumer should be able to work with different implementations of a dependency without knowing the details of the implementation. This means that you should depend on abstractions, not on concrete implementations. Use dependency injection to inject dependencies into a class.