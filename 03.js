//primitive data types- string(call by value),number,boolean,null,undefinied,symbol(make value unique),bigint

//reference/non-primitive= arrays,objects,functions

//js is dynamically typed

let id=Symbol('123')           //makes same valus as unique
let anotherId=Symbol('123')
console.log(id==anotherId);

let array=['afrah','farheen']
console.log(array);

let object={
    name:"afrah",
    age:19
}
console.log(object);

const myfunction=function()
{
    console.log("hello world");
}
myfunction()
console.log(typeof myfunction);   //function


// *****************************************stack n heap*****************************************
//stack memory==storing primitive dt(returns a copy of variables declared)
//heap memory==store non-primitive(returns reference or address)

let aname="afrahfarrrheen"    //this is stored in stack memory
let anothername=aname;      //creates another copy of this n stores above block of afrahfarheen in stack memory
 anothername="rooman"       //creats new block called rooman in stack memory
console.log(aname);
console.log(anothername);

let userone={             //here the userone is stored in stack but the information aname aage is store in heap memory. this userone in stack memory is referin to the aaname and aage in heap memory
    aname:"afrah",
    aage:19,
}
let usertwo=userone      //here the uertwo is stored in stack memory but tht aaname and aage is same which is previsouly stored in heap memory and the usertwo will refer to the same aaname and aage
console.log(usertwo);
console.log(userone.aname);
console.log(usertwo.aname);


