let name="afrah"
let number=19
console.log(name);

// console.log(name + number + 19 + "farheen");
// in modern days strings are jointed using backtesk ` ${}`
console.log(`my name is ${name.toUpperCase()} and my age is ${number}`);

//can declare sring in this way also
let string=new String("afrah farheen")
console.log(string);
console.log(string[0]); 
console.log(string.length);
console.log(string.charAt(2));
console.log(string.indexOf('f'));
console.log(string.substring(1,5));    //negative values not included
console.log(string.slice(1,4));        //negative values icluded like (-1,3)
console.log(string.trim());           //remove extra spaces
console.log(string.replace("farheen",'--')); //fid the replacing term in variable and the replacing value
console.log(string.includes("affrarah"));
console.log(string.split("varriable"));        //splits into array



