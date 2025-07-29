const score=400
//console.log(score)  //400

const balance=new Number(100)
//console.log(balance)     //[Number:100]

//console.log(balance.toString())  //100
//console.log(balance.toFixed(2))  //100.00

const otherNumber=23.8966
//console.log(otherNumber.toPrecision(3))  //23.9

const hundreds=1000000
//console.log(hundreds.toLocaleString()); //1,000,000

//console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//console.log(Math)  //Object[Math]{}
//console.log(Math.abs(4)) //4

//console.log(Math.round(4.3))  //4

//console.log(Math.ceil(4.2))  //5
//console.log(Math.floor(4.2))    //4

//console.log(Math.min(4,3,6,8))  //3
//console.log(Math.max(4,3,6,8))   //8

console.log(Math.random())    //any random number is generated between 0-1
console.log((Math.random()*10)+1) // any random number is generated between 1-10
console.log(Math.floor(Math.random()*10)+1) //any random number is generated between 1-10 which is whole number

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)  //any random number between max and min number 