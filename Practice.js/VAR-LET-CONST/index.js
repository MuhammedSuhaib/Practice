// let me = "232"
// console.log(me)//available

// function foo (){
//     console.log(me)//available 

// Global Scope: Because me is defined at the top level of your script, it is accessible from anywhere in that file.
// Function Scope: When foo() runs, it first looks for me inside its own curly braces. Since it doesn't find it there, it "looks up" to the outer (global) scope and finds your value.

// }
// foo()

// function soo (){
//     const me = "100"
//     console.log(me)//available 100 
// }
// soo()


const me = "232"
console.log(me)
// me = "222" //TypeError: Assignment to constant variable.
// console.log(me) 

// console.log(something_tht_never_exists) // ReferenceError: blah blah blah is not defined
