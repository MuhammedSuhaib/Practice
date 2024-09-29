let D = new Date
console.log('typeof', typeof D );// object
console.log('D: ', D);//2024-09-07T10:07:58.741Z
console.log('toString', D.toString());//Sat Sep 07 2024 14:59:39 GMT+0500 (Pakistan Standard Time)
console.log(`toTimeString`, D.toTimeString());//14:59:39 GMT+0500 (Pakistan Standard Time)
console.log(`toDateString`,D.toDateString()); //Sat Sep 07 2024 
console.log(`toLocaleString ✅`,D.toLocaleString());//9/7/2024, 2:59:39 PM (only Our locally/daily use date+time)
console.log(`toLocaleDateString✅`, D.toLocaleDateString());//9/7/2024  (only Our locally/daily use date)
console.log(`toLocaleTimeString✅`, D.toLocaleTimeString());//3:07:58 PM(only Our locally/daily use time)
console.log(`toUTCString`, D.toUTCString());    
console.log(`----------------------------------------------`);
console.log(`toISOString`, D.toISOString());//same
console.log('D: ', D);//same
console.log('Jason ', D.toJSON());//same
console.log(`----------------------------------------------`);

let myCreatedDate = new Date(2003,11,1)
console.log(' myCreatedDate', myCreatedDate);
console.log('toLocaleString', myCreatedDate.toLocaleString());
console.log('toDateString',myCreatedDate.toDateString());
console.log('toLocaleDateString',myCreatedDate.toLocaleDateString());
console.log('toTimeString',myCreatedDate.toTimeString());
console.log('toLocaleTimeString',myCreatedDate.toLocaleTimeString());

console.log(`----------------------------------------------`);


let SmyCreatedDate = new Date(`29-june-2009`)
console.log(' SmyCreatedDate', SmyCreatedDate);
console.log('toDateString',SmyCreatedDate.toDateString());
console.log('toLocaleDateString',SmyCreatedDate.toLocaleDateString());
console.log('toTimeString',SmyCreatedDate.toTimeString());
console.log('toLocaleTimeString',SmyCreatedDate.toLocaleTimeString());


let Timestamp = Date.now();
console.log('Timestamp', Math.floor(Timestamp/1000));
let newDate = new Date();
console.log('newDate', newDate.getFullYear());
console.log('newDate', newDate.getMonth());
console.log('newDate', newDate.getMonth()+1);

console.log('newDate', newDate.getDate());

//Most useful



console.log('customize', SmyCreatedDate.toLocaleString(`Default`, { day:"2-digit"}));

