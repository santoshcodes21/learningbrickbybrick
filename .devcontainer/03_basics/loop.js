/*let array=["flash","batman","superman"]

for(let index=0;index<array.length;index++){
    const element=array[index];
    console.log(element)
}*/

/*for(let i=0;i<=10;i++){
    console.log(`outer loop value: ${i}`);

    for(let j=0;j<=10;j++){
        console.log(`Inner loop value ${j} and outer loop ${i} `);
    }
}*/

for(let index=1;index<=20;index++){
    if(index==5){
        // console.log(`Dected 5`);
        break;
    }
     //  console.log(`values of i is ${index}`); // 1 2 3 4 detected 5
}

for(let index=1;index<=20;index++){
    if(index==5){
       // console.log(`Detected 5`)
        continue
    }
  //  console.log(`value of i is ${index}`); // 1 2 3 4  6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
}
// for of
const arr=[1,2,3,4,5]
 for(const num of arr){
   // console.log(num);  // 1 2 3 4 5
 }

 const greetings="Hello World"
  
  for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
  }

  //Maps-->object hold key-value pairs and remembered original insertion order of the keys

  //const map=new Map()
/*  map.set('IN', "INDIA")
  map.set('USA',"United State Of America")
  map.set('Fr',"France")*/

//  console.log(map)

/*  for(const key of map){
    //console.log(key);
  }

  for(const [key,value] of map){
    //console.log(key,":-",value)
  }*/

  /*const myObjects={
    'game1':'NFS',
    'game2':"spiderman"
  }
  for(const [key,value] of myObjects){
    console.log(key,':-',value) // error---->myObjects is not iterable
  }*/

    // For IN

    const myObjects={
        js:'javaScript',
        cpp:'C++',
        rb:'Ruby',
        swift:"Swift by apple"
    }

    for(const key in myObjects){
       // console.log(key)
       // console.log(myObjects[key])
    }

    for(const key in myObjects){
       // console.log(`${key}  shortcut is for ${myObjects[key]}`)
    }

   /* const map=new Map()
    map.set('IN',"INDIA")
   map.set('IN', "INDIA")
  map.set('USA',"United State Of America")
  map.set('Fr',"France")

  for(const key in map){
    console.log(key)   // map is not iterating in for IN
  }
*/

// for each loop

//const coding=["js","rb","py","java","cpp"]

/*coding.forEach(function(item){
    console.log(item)
})*/
/*coding.forEach((val)=>{
   // console.log(val);
})*/

function printMe(item){
    console.log(item)
}
//coding.forEach(printMe)

/*coding.forEach((item,index,arr)=>{
  //  console.log(item,index,arr)
})*/

/*const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js",
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})*/

//const coding=["js","rb","py","java","cpp"]

/*const value=coding.forEach((item)=>{
    return item
})
console.log(value) */ //undefined

const myNums=[1,2,3,4,5,6]
//const newNums=myNums.filter((num)=>num>4)
//console.log(newNums) [5,6]

/*const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);*/

/*const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums)*/

//reduce () method executes a user supplied " deducer" callback function on each element of the array in order passing int the return value for the calculation on the preceeding element

/*const initialValue=0;
const sumWithInitial=myNums.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
console.log(sumWithInitial)*/

const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc :${acc} and currVal:${currval}`)
    return acc+currval
},0)
console.log(myTotal)

const ShoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:'mobile dev course',
        price:345
    },
    {
        itemName:"data science course",
        price:12999
    }
]
const priceToPay=ShoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);

