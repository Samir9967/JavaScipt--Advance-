// localStorage -> apke browser ke andar data store karna, jo ki browser baand hone par data delete nhi hoga
// localStorage me 5Mb ka data store hota hai
// to setItem -> localStorage.setItem("key","value")

// localStorage.setItem("names","Samir Maharana");
// localStorage.setItem("lnames","Samir Maharana");

let obj = {
    "names":"Samir Maharana",
    "age" : 27,
};
localStorage.setItem("Bio",JSON.stringify(obj));


// to fetch data -> localStorage.getItem("key")
let value = JSON.parse(localStorage.getItem("Bio"));

// to remove data from localStorage -> locaStorage.removeItem("key");
localStorage.removeItem("names");

// to update data -> same as setItem but key will be same and value should be different
localStorage.setItem("lnames","I am a Developer");


