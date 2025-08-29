/*if(2=="2"){
    console.log("executed"); //executed
}
if(2==="2"){
    console.log("executed")
}                                     //not executed
else{
    console.log("Not executed")
}*/

/*const score=200

if(score>100){
    let power="fly"
    console.log(`User power:${power}`) //user power:fly
}*/
//console.log(`User power :${power}`); //power is not define

/*const userloggedIn=true;
const debitCard=true;

if(userloggedIn && debitCard){
    console.log("Allow to buy couch")
}*/

/*const month="dec"
switch(month){
    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
         break;

    case "april":
        console.log("April");
         break;

     default:
         console.log("Default case match");
          break;
}*/

/*const userEmail="hitesh@gmail.com"
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}*/

//falsy values
// false,0,-0,BigIntOn,null,undefined,NaN

//truthy values
//"0","false","",[],{},function(){}

/*if(userEmail.length===0){
    console.log("Array is empty");
}*/

/*const emptyObj={}
if(Object.keys(emptyObj).length){
    console.log("Object is empty"

    )
}*/
//Nullish coalescing operator(??):null undefined

/*let val1;
val1=5??10
console.log(val1) //5

let val2=null??10
console.log(val2); //10

let val3=undefined??145
console.log(val3) //145*/

//condition?true:false

const iceTeaPrice=100;
iceTeaPrice<=80 ?console.log("less than 80"):console.log("more than 80")