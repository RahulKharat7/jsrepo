let str="Hello World";
console.log(str);
let str1="Shraddha";
console.log(str1);

console.log(str[1]);

// ----------------------------------

let specialString=`This is a template literal`
console.log(specialString);


let obj={
    item:"pen",
    price:10
};
console.log("the cost of", obj.item, "is", obj.price ,"rupees");

let output=`the cost of${obj.item} is ${obj.price} rupees`;
console.log(output);



let specialStrings=`This is a template literal ${1+2+3}`;
console.log(specialStrings);


let strs="Apna \tcollege"
console.log("Apna \tcollege");   //escape 
console.log(strs.length);

//----String methods---------------

let stra="apna college";
newStr=console.log(stra.toUpperCase());
console.log(stra);

//------string trim method

let strn="       Apna college     js"
console.log(strn.trim());


let syr="01234567"
console.log(syr.slice(1,6));

let syar="hello"
console.log(syar.slice(1,4));

let string1="Apna";
let string2="college";

string1.concat(string2);
console.log(string1.concat(string2));
console.log("I am learning js from " + string1+string2);

console.log(string1.replace("A","Sa"));

console.log(string1.charAt(3));

console.log(string1[0])

let fullName=prompt("Enter a FullName");
let userName=`the userName is: @${fullName}${fullName.length} `;
console.log(userName); 
















