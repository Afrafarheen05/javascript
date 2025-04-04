"use strict" //treat all js code as new version
//alert(3+3)   we are using node js not browser. in browser one dialog box appers whn u run this
console.log(3+3);

let name="afrah"
let age=19
let loggedIn=false
let state;        //undefined
let state1=null   //null

//number
//boolean=> true/false
//null=> standalone value
//bigint
//string=> " "
//symbol=> uniqueness
//objects

console.log(typeof("afrah"));
console.log(typeof null);
console.log(typeof undefined);


                                //conversion ooperations

let score="33abc"
console.log(typeof score);

let valueInNumber=Number(score) 
let valueInString=String(score) //any datatype we are converting into number. can also convert into string n other types
console.table([valueInNumber, valueInString])

// discussing only numbers here   
//     "33"=>33
//     "33abc"=>NaN
//     true=>1                     

// in Boolean
//   1=> true
//   0=>false
//   ""=>false
//   "afrah"=>true


//************************oprations***************/
let value=3
let negValue=-value
console.log(negValue);
console.log(2%3);

let str1="hello"
let str2=" world"
let str3=str1+str2
console.log(str3);

console.log("1"+2);   //12
console.log(1+"2");   //12  if string is in first all are treated as string. if string is in last then the first operation is done after that treated that obained output as string
console.log(1+2+"2"); //32
console.log("1"+2+3); //123

console.log(true +"2"); //true2
console.log(+true);     //1


console.log("2">1);      //js directly converted into number
console.log(null >0);    //null is converted into 0
console.log(null==0);
console.log(null>=0);

//if we check using undefined it will give false only
console.log(undefined>=0);
console.log(undefined<2);

console.log("2"===2);     //true
console.log("2"===2);    //false







