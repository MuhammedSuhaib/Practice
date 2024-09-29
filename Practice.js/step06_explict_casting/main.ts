let myname: unknown = "Zia";
console.log((myname as string).length);
// another way to do this is by using generics method

console.log((<string> myname).length)

// no other things r working here like ".touppercase" etc

let Yourclass : unknown = "suhaib";
let me =(Yourclass as string).length;
console.log(me);


let a : string = "12.34";


// console.log((a as number));  ERROR 1st covert to unknown then to whatever data type
let b = (a as unknown as number  );
console.log(b * 2);



