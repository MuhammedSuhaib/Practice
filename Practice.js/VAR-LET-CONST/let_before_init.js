console.log(something_before_initialization) 
// Ref err cant access bfr init
const something_before_initialization = "future"
console.log(something_before_initialization)

// // ```
// giaic@penguin:~/code/var-let-const$ node let_before_init.js 
// /home/giaic/code/var-let-const/let_before_init.js:1
// console.log(something_before_initialization) 
//             ^

// ReferenceError: Cannot access 'something_before_initialization' before initialization
//     at Object.<anonymous> (/home/giaic/code/var-let-const/let_before_init.js:1:13)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.17.1
// giaic@penguin:~/code/var-let-const$ 
// // ```