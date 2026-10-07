///POV can the var can be accesed out of the function??

(function pov (){
var me = "i m var"
console.log(me)
// let mme = "i m let "
// console.log(mme)
// const mmme = "i m const"
// console.log(mmme)
}
)()

// console.log(me) // ReferenceError: me is not defined
// console.log(mme) // ReferenceError: mme is not defined
// console.log(mmme) // ReferenceError: mmme is not defined

"bcz var have the local scope (just limited inside the fuction)"
" or i can say"
"bcz var have funtion scope "

///POV can the var be accesed out of the block??

// if(true){
// var me = "i m var"
// console.log(me)
// let mme = "i m let "
// console.log(mme)
// const mmme = "i m const"
// console.log(mmme)
// }

// console.log(me)

// =======================================================
// var can be accessed out of the block but not out of the function  !!!
// =======================================================

// console.log(mme) // ReferenceError: mme is not defined
// console.log(mmme) // ReferenceError: mmme is not defined