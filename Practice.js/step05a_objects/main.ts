
/**
 *normal object
 */


let teacher = {
    name: "Zeeshan",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"]);

/**
 *Type Declaration in  object
 */

let student : {
    name: string,
    age?:number,
    milestone1: boolean, 
}

student = {
    
    name:"suhaib",
    milestone1:true
        
}

console.log(student['milestone1']);
console.log(student.name);
