
This TypeScript file includes JavaScript code:

```typescript
let student1 = {
    name: "Suhaib",
    age: 20,
    isPresent: true,
};

let student2 = {
    name: "Suhaib2",
    age: 19,
    isPresent: false,
};

console.log(student1);
console.log(student2);

// If there are 100 students in a class, I have to make 100 objects for each student. Then I have to console each student every time, leading to 600 lines of code. 😱

// The solution for this is a factory function.

// ------------------FACTORY FUNCTION------------------------//
function makeObj(name: string, age: number, isPresent: boolean) {
    return {
        name, // Can also do it like name: name
        age,  // age: age
        isPresent, // isPresent: isPresent
        // In JavaScript, if you have the same key and value name, just write it once.

        greet() {
            console.log(`Hi ${name}`); // Create a function inside an object called "Method" to greet users once for all.
        },
    };
}

// Storing and calling back the function
let object1 = makeObj("Fahim", 20, true);
console.log('object1: ', object1);
object1.greet();

let object2 = makeObj("Nofil", 27, true);
console.log('object2: ', object2);
object2.greet();

// But it is making copies instead of sharing greet.
console.log('But it is making copies instead of sharing greet:');
console.log(`Here:`, object1.greet === object2.greet);

// Creating more objects
let object3 = makeObj("Shahmeer", 26, true);
console.log('object3: ', object3);
let object4 = makeObj("Sadia", 24, true);
console.log('object4: ', object4);
let object5 = makeObj("Ameen", 20, true);
console.log('object5: ', object5);
let object6 = makeObj("Moiz", 20, true);
console.log('object6: ', object6);
let object7 = makeObj("System", 20, true);
console.log('object7: ', object7);

// ------------------JavaScript Code------------------------//

// ------------------Constructor Function Requirements------------------------//
// Capitalize the first letter
// The `this` keyword
// Filling this keyword at least once will turn it green; hover to see it's a constructor function.
// Using the `new` keyword while calling the function.

// ------------------PLAIN FUNCTION------------------------//

function MakeObj(name, age, isPresent) {}
    
let Student1 = MakeObj("Fahim", 20, true);
console.log('Student1: ', Student1); //! undefined > Because we didn’t use the `new` keyword.

function MakeObj(name, age, isPresent) { console.log(this); } //? We use `this` without `new`, and the answer is the same.
    
let Student1 = MakeObj("Fahim", 20, true);
console.log('Student1: ', Student1); //! undefined > Because we didn’t use the `new` keyword.


// ------------------PLAIN FUNCTION with new and this  
// This keyword returns an empty object------------------------//
function MakeObj(name, age, isPresent) { console.log(this); } // MakeObj {}
    
let Student1 = new MakeObj("Fahim", 20, true);
console.log('Student1: ', Student1); // Student1:  MakeObj {}
     
// ------------------ This is like an empty object here
console.log(`Fill an object in JavaScript! Only works in JavaScript, not TypeScript.`); //! Only works in JavaScript, not TypeScript
let Obj = {};
console.log(`When empty`, Obj);
Obj.name = "Suhaib";
console.log(`When filled`, Obj);

// ------------------PLAIN FUNCTION to a  
//                      Constructor Function------------------------//
function MakeObj3(name, age, isPresent) {
    console.log(this);
    
    this.name = name;
    this.age = age;
    this.isPresent = isPresent;
}
    
let Student2 = new MakeObj3("Finally, it is a constructor function.", 1, true);
console.log('Student2: ', Student2); 
console.log("Because it isn’t coming from class interface/type aliases.");

// ------------------Add FUNCTION in a Constructor Object (called method)
function MakeObjWithMethod(name, age, isPresent) {
    console.log(this);
  
    this.name = name;
    this.age = age;
    this.isPresent = isPresent;
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    };
}
          
let object1 = new MakeObjWithMethod("Fahim", 20, true);
console.log('object1: ', object1);
object1.greet();

let object2 = new MakeObjWithMethod("Nofil", 27, true);
console.log('object2: ', object2);
object2.greet();

// But it is still making copies instead of sharing greet.
console.log('But it is still making copies instead of sharing greet:');
console.log(`Here:`, object1.greet === object2.greet);

// My handwritten notes:
If I have to make objects for all students and work until Tuesday 9 at 12, I would have to make 100 objects, leading to 400 lines of code. This function allows me to create objects efficiently, and I keep passing their values in parameters, which is called a factory function. Now we can also create a function that retains an object. This function is called a method—not a key-value pair. The topic we make methods separately but inside the function allows every student to be a unique copy. Please, we don't create 100 copies, but it consumes memory. 

To create a constructor, start with a capital letter. Use the `new` keyword before calling it; otherwise, it will act like a normal function and won’t return the expected results.

Consider this: I can create an object, and we have to pass values in it. A function like this:
```javascript
function MakeFunction(name, age) {
    // Nothing in the body means nothing in the output.
    console.log(this); // and undefined (when you call MakeObject {})
    return this; // nothing in the cases.
}

let std1 = new MakeFunction("Fahim", 20);
console.log(std1); // MakeObj {}
```

Now, if I make a function inside this, it will still make copies, and nothing will change. So what should we do? 

We use prototypes; every object comes with one prototype, which shares one copy with all. Whenever we call any property using the object or function, it checks if it is present; if not, it searches in the prototype. For instance, when I do `sweet` or press Control + Space, it gives a string from the prototype type. 

When I log my object/function/array in the browser, they are visible in the directory structure but not in the terminal of VS Code. So how to create a prototype?
1) `MakeObj.__proto__.key = "value";`
2) `MakeObj.prototype = { ... };`

`this` returns the whole function, but in the case of a constructor function, it returns an empty object, and then we add keys and values in it. 

In JavaScript, typing is minimal, but TypeScript requires more, so OOP helps here. We will use an interface to define or structure our code, using classes to define structures. The constructor is automatically created for a class, but we can see that it is on the backend, returning "this".

Now we cover factory functions. It creates objects in bulk. A function is returning an object since the object can contain other functions called methods. Both are key-value pairs or outputs. This approach addresses memory issues, so we move to constructor functions with `new` and `this`.

`this` is used to push values into an empty object, but the issue remains unresolved with `.prototype` vs. `.__proto__`.

Constructor functions in TypeScript can be complex (too much code), so we move to OOP in TypeScript, where we assume class behavior like an interface/type alias. 

If we use the `new` keyword, we create an instance of that class and get all properties of that class. 

Whenever we use inheritance from a class, we use the `extends` keyword. If a class inherits properties from another class, the `super()` call is at the top of the constructor function, passing required arguments. If the parent class lacks a constructor method, we simply write an empty `super()`.

`super`: A way to call inherited properties.

An abstract class can inherit other classes and allow child classes to inherit while restricting direct instantiation.
```