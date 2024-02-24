// function myFunction(){
//     console.log("Welcome to class");
//     console.log("We are leaning javaScript");
// }

// myFunction();

// function func(msg){
//     console.log(msg);
// }

// func("I Love JS");

// function sum(x,y){
//    // local variable -> x y-----block scope of function
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
//  console.log(val);
// ---------------------------------------------------------------------------------
// arrow function


   const arrowSum=(a,b)=>{
    console.log(a+b);
}

let arrowMul=(c,d)=>{
    return c*d;
}

const printHello=()=>{
    console.log("hello");
}

function countVowels(str){

    let count=0;
    for(const char of str){
    
    if(
        char==="a" ||
        char==="e" ||
        char==="i" ||
        char==="o" ||
        char==="u")
    {
        count++;
    }

}
console.log(count);
}




const countVow=(str)=>{
    let  count=0;
    for(const char of str){
        if(
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u")
        {
            count++;
    }

}
   return count;
}



// array.forEach(element => {
    
// });



let arr=[1,2,3,4,5];

let array=["Pune","Mumbai","delhi"]

// arr.forEach(function printVal(val){    // value at each index
// console.log(val);
// })

arr.forEach((val)=>{
    console.log(val);
})
//
array.forEach((city,idx,array)=>{
    console.log(city.toUpperCase(),idx,array);
})

let nums=[2,3,4,5,6,7];

// nums.forEach((num)=>{
//     console.log(num*num);
// })

let calSquare=(num)=>{
    console.log(num*num);
}
nums.forEach(calSquare);
console.log("----------------------------");



let numbr=[67,52,39];

let newArr=numbr.map((val)=>{
    return val*2;

})
console.log(newArr);

let arrr=[1,2,3,4,5,6,7];

let evenArr=arrr.filter((val)=>{
    return val%2===0;
})
console.log(evenArr);

let arrs=[1,2,3,4];
const output=arrs.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);



let aray=[5,6,2,1,3]
const output1=aray.reduce((prev ,curr)=>{
    return prev>curr? prev:curr;
})
console.log(output1);



let marks=[97,86,99,49,64,96,32];

let highestM= marks.filter((val)=>{
    return val>90;
})
console.log(highestM);







