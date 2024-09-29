
// anonymous
let Student1 : {name:string , milestone1:boolean}={
    name: "suhaib",
    milestone1: true
}

console.log(Student1.name , Student1["milestone1"]);


// Aliased Object Type

type student2= {
    name: string
    age: number
}



let Student2:student2 = {
    name:"string",

    age:66

}

console.log("type:",Student2);



// Interfaces

// syntax of "Interfaces" is same as syntax of "type" but while making interface there is no "=" sign 



interface student3  {
    uSER? : null
    age: number
}


let Student3:student3 = {
   
    uSER : null ,
    age:20

}

console.log("interface :" , Student3);
