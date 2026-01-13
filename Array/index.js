
// Declaration and Initialization
let arr = [1,2,3,4,5];

// forEach()
// arr.forEach((value)=>{
//     console.log(value);
// });

// map
let newArr = arr.map(function(val){
    return val * val;
});
// console.log(newArr);

// filter
let Arr2 = arr.filter((val)=>{
    return val;
});
// console.log(Arr2);

// reduce
let Arr3 = arr.reduce((acc,val)=>{
    return acc + val;
},1);
// console.log(Arr3);

// find, every, some

// Destructuring of Array
let num = [1,2,3,4,5,6];
let [a,b] = num;
// console.log(a,b);

// Spread Operator
let num2 = [1,2,3,[4,5,6]];
// let spread = [...num2];
// spread[3][0] = "Samir";
// console.log(num2,spread);

// using structuredClone
let spread2 = structuredClone(num2);
spread2[3][0] = "Samir";
// console.log(spread2,num2);

// check all number is even using .every
let arr2 = [2,4,6,5,10];
let result  = arr2.every((val)=>{
    if(val % 2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(result);
