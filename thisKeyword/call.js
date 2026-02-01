// this call apply bind
// function ko call krte waqt app set kar sakte ho ki uski this ki value kya hogi

let obj = {
    names : "Samir",
    age : 27,
}

// function abc(){
//     console.log(this);
//     console.log(this.age);
// }
// abc.call(obj);

function abcd(num1,num2,num3){
    console.log(this);
    console.log(this,num1,num2,num3);
}
abcd.call(obj,1,2,3)