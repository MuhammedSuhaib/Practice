//? ADD TYPE:

let addType: string = "hI";

//?ADD UNION:

let addUnion: string | number = "hI";
addUnion = "20";
//? ADD LITERAL:
let addLiteral: "hi" | 100 = "hi";
addLiteral = 100;

//?ADD TYPE ALIASED: 
//* begins with capital letter
type HouseNum = {
    house: number;
    area: "31-D" | "d-51";
    society: string;
};
//?ADD INTERFACE: 
//* begins with capital letter
interface AddInterface {
    age: number;
    name: string;
}

//?ADD ENUM: 
//* begins with capital letter
enum AddEnum {
    USER,
    ADMIN,
}
//?TUPLE
let tuple: [string, number, boolean] = ["hi", 20, true]; //*tuple ve no keyword

//*type ,union,literal,interface,enum,tuple -----> without "=" sign
//!only Type aliased have "=" sign