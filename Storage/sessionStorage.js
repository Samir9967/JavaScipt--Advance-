// sessionStorage -> browser ke andar data temporarily store karta hai, means tab baand hua aur data delete/gayab ho gya
// sessionStorage me 5Mb ka data store hota hai

sessionStorage.setItem("name","Samir");

let value = {
    "roll no":45,
    "crush":"Adu",
};

sessionStorage.setItem("Bio",JSON.stringify(value));

// to fetch value
let Val = JSON.parse(sessionStorage.getItem("Bio"));

// to clear all data
sessionStorage.clear();
