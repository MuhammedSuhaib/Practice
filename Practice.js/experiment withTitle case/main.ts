let MyNme : string= "muhammed suhaib umair"
let titleCase : string = MyNme.replace(/\b\w/g , c => c.toUpperCase())
console.log(titleCase);
