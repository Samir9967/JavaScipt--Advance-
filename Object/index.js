
let obj = {
    name : "Samir",
    age : 27,
    crush : "Adu"
};

let a = "age";
// console.log(obj[a]);

let admin = "Developer";
let obj2 = {
    name : "Samir",
    address : {
        city : "Mumbai",
        pin : 400078,
        location : {
            lat : 23.2,
            long : 77.4
        },
    },
    [admin] : "WEB DEV",
};
// Object Destructuring
let {lat,long} = obj2.address.location;
// console.log(lat,long);

// Acessing elements using loop
// for(let keys in obj2){
//     console.log(obj2[keys]);
// }

