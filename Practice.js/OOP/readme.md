### Object-Oriented Programming (OOP)
**Definition**: OOP is a programming style that uses "objects" to represent real-world things. It helps organize code by grouping data and behaviors together, making it easier to manage and reuse.

**Key Features**:
- **Encapsulation**: Keeping data safe inside objects.
- **Abstraction**: Hiding unnecessary details and showing only the important parts.
- **Inheritance**: Allowing new objects to take properties and methods from existing ones.
- **Polymorphism**: Letting objects of different classes be treated as the same type.

---

### Class
**Definition**: A class is a blueprint for creating objects. It defines properties (data) and methods (functions) that the objects will have.

**Key Points**:
- **Properties**: Variables that store data about the object.
- **Methods**: Functions that define what the object can do.
- **Instantiation**: Creating an object from a class.

**Example**:
```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand; // property
        this.model = model; // property
    }

    drive() { // method
        console.log(`Driving a ${this.brand} ${this.model}`);
    }
}

const myCar = new Car('Toyota', 'Camry'); // creating an object
myCar.drive(); // Outputs: Driving a Toyota Camry
```

### 1. **Abstraction**
**Definition**: Abstraction means showing only the important features of something while hiding the details. It helps to reduce complexity.

- **Abstract Class**: A class you can't create objects from; it's just a blueprint for other classes.
- **Abstract Method**: A method that doesn’t have a body and must be defined in a subclass.
- **Concrete Class**: A class that is fully defined and can be used to create objects.
- **Interfaces**: A set of methods that a class must implement, like a contract.

**Local Variables**: Variables declared within a function are not part of the object. For example, declaring a color variable in a function will not affect the object's properties.

**Closure**: A function that retains access to its lexical scope, even when the function is executed outside that scope.

**Example of Closures**:
```javascript
function outerFunction() {
    let x = 10; // local variable
    function innerFunction() {
        console.log(x); // accesses the outer function's variable
    }
    return innerFunction;
}
const inner = outerFunction();
inner(); // Outputs: 10
```

**Private Members**: You can use local variables and inner functions to create private members:
```javascript
function Circle(radius) {
    let defaultLocation; // private member
    function computeOptimumLocation() {
        // logic here
    }
    this.radius = radius; // public property
    this.draw = function() {
        computeOptimumLocation();
        // drawing logic
    };
}
```

**Accessing Private Members**:
```javascript
Circle.prototype.getDefaultLocation = function() {
    return defaultLocation; // access private member
};
```

**Read-Only Properties and Setters for Validation**:
```javascript
Object.defineProperty(this, 'defaultLocation', {
    get: function() {
        return defaultLocation; // getter
    },
    set: function(value) {
        if (!value.x || !value.y) {
            throw new Error('Invalid location');
        }
        defaultLocation = value; // set private member
    }
});
```

### Access Modifiers:
- `readonly`
- `private`
- `protected`
- `public`

**Keywords**: `abstract`, `extends`, `implements`

---

### 2. **Encapsulation**
**Definition**: Encapsulation is like putting a protective shield around your data. It keeps everything safe inside a class and hides the details from the outside.

- **Access Modifiers**: Keywords that decide who can see or use a class's properties (`private` means no one outside can see it, `public` means everyone can).
- **Getters and Setters**: Special methods to read or change the values of private properties safely.
- **Modules**: Separate files that keep code organized and hidden from the outside.
- **Private Members**: Variables and methods that only the class can use.

**Keywords**: `private`, `protected`, `public`, `get`, `set`

---

### 3. **Inheritance**
**Definition**: Inheritance allows a new class to take properties and methods from an existing class. It helps to reuse code and create a family of classes.

- **Parent Class**: The class that provides properties and methods to another class.
- **Child Class**: The new class that gets features from the parent class.
- **Method Overriding**: Changing a method in the child class that already exists in the parent class.
- **Interfaces Implementation**: A child class agrees to follow a set of methods defined by an interface.

**Keywords**: `extends`, `super`, `implements`

---

### 4. **Polymorphism**
**Definition**: Polymorphism allows different classes to be treated as if they are the same type. It lets you use the same method name in different ways.

- **Method Overriding**: Changing how a method works in a child class compared to its parent class.
- **Method Overloading**: Having the same method name but different parameters in the same class (only in TypeScript).
- **Interface-based Polymorphism**: Different classes can use the same interface, making them interchangeable.
- **Generics**: A way to make functions and classes work with any type of data, providing flexibility.

**Keywords**: `override`, `<T>` (for generics), `extends` (for constraints)

---

### Technical Terminology
**Implementation**: Writing the actual code that makes a class’s methods and properties work.

**Concrete Class**
**Definition**: A concrete class is a type of class that is fully defined, meaning it has all its properties and methods implemented. You can create objects from a concrete class, which means you can use it in your programs.

- **Concrete Class**: Complete and can be used to create objects.
- **Abstract Class**: Incomplete, serves as a template, and cannot be instantiated directly.

**Example**:
```javascript
abstract class Animal {
    abstract makeSound(); // Abstract method (no implementation)
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}
```

**Summary**
- Concrete Class: Complete and can be used to create objects.
- Abstract Class: Incomplete, serves as a template, and cannot be instantiated directly.

********************what are Attributes in oop?**



**Attributes** in OOP are the properties or data stored inside an object. They define the characteristics of an object and represent its state. In a class, attributes are usually implemented as variables.

For example, in a class `Car`, attributes could be `brand`, `model`, or `color`:

```javascript
class Car {
    constructor(brand, model, color) {
        this.brand = brand; // attribute
        this.model = model; // attribute
        this.color = color; // attribute
    }
}
```

Here, `brand`, `model`, and `color` are attributes that describe the object.


**Instantiation** is the process of creating an **object** from a class. So, an object is the result of instantiation, but they are not the same thing.

- **Class**: The blueprint.
- **Instantiation**: The act of creating an object from that blueprint.
- **Object**: The actual instance created by instantiation.

For example:
```javascript
const myCar = new Car('Toyota', 'Camry'); // instantiation
```

Here, `myCar` is an **object**, and creating it using `new Car()` is the **instantiation** process.