
// this keyword
// global scope
console.log(this);               // --> return window

// function scope
function abc(){
    console.log(this);             
}
// abc();                      // --> return window


// object ke andar es5 function likha 
let obj = {
    names : "Samir Maharana",
    rollNo : 45,
    subject : function(){
        console.log(this.names);
    },
}
// console.log(obj.names);
obj.subject();                       // --> return object


let h1 = document.querySelector("h1");
h1.addEventListener('click',function(){
    alert("I don't trust anyone!!!");
    console.log(this);
})