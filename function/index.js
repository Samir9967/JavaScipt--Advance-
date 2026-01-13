
function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    })
    return total;
}
let finalScore = getScore(1,2,3,4,5);
// console.log(finalScore);

function add(value){
    value();
}
add(()=>{
    console.log("Samir Maharana");
});

let score = (...value)=>{
    let finalTotal = 0;
    for(let i = 0;i < value.length;i++){
        finalTotal = finalTotal + value[i];
    }
    return finalTotal;
}
let marks = score(1,2,3,4,5);
// console.log(marks);


// To calculate BMI
function BMI(weight,height){
    let index = weight / (height * height);
    return index;
}
let bmi = BMI(69,1.7);
// console.log(bmi);


// calculate Discount
function Discount(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}
let money = Discount(10);
let priceValue = money(1200);
console.log(priceValue);
