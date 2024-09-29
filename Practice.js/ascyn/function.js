"use strict";
// // function parentFunction(name : ()=>void ){
// // console.log(      `pren function`        );
// // name();
// // }
// // parentFunction(()=>{console.log(
// // `hi child function`);})
//                                               /*2 way of writing*/
// function parentFunction(name : ()=>void ){
//     console.log(      `pren function`        );
//     name();
//     }
//     parentFunction(function(){console.log(`hi child function`);})
// *Washing Machine*/
function washing(callback) {
    console.log(`🌊 started`);
    setTimeout(() => {
        console.log(`🌊 done`);
        callback();
    }, 2000);
}
function soaking(callback) {
    console.log(`💨 started`);
    setTimeout(() => {
        console.log(`💨 done`);
        callback();
    }, 3000);
}
function drying() {
    console.log(` ♨ started`);
    setTimeout(() => {
        console.log(`♨ done`);
        ``;
    }, 5000);
}
console.log(`plug out the charger`);
washing(() => {
    soaking(() => {
        drying();
    });
});
console.log(`shut he door`);
