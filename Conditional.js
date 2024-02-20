console.log("Hello World");

// if Statement
let age =17;

if(age>=18){
    console.log("can vote");
}
if(age<18)
{
    console.log("CANNOT vote");
}

let num=21;

if(num%2===0)
{
console.log("Number is Even");
}
else
{
    console.log("Number is Odd");
}
//------------------else-if statement-----------------
//if statement false then use else if for multiple condition


let mode="blue";

if(mode==="dark"){
   color="black"
}else if(mode==="blue"){
    color="blue"
} else if(mode==="pink"){
    color="pink"
}else{
    color="white"
}
console.log(color);

//-----------------ternary operators---------------

/*
let num1=prompt("Enter a num");

if(num1%5===0)
{
    console.log(num1 +" num is multiple of 5");
}
else{
    console.log(num +" num is not multiple of 5");
}

*/

let score=prompt("Enter your score");
let grade;

if(score>=90 && score<=100){
   // console.log("A");
   grade="A"

 }else if(score>=70 && score<=89){
    grade="B";
 }
    
 else if(score>=60 && score<=69){
    grade="C"
 }
 else if(score>=50 && score<=59){
    grade="D"
 }
 else if(score>=0 && score<=49){
    grade="F"
}

    console.log("According to your score ypur grade is " + grade);
 







