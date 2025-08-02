 const myArr=[0,1,2,3,4,5]
  //console.log(myArr[1]) //1

  const myHeroes=["shaktiman","nagraj","chota bheem","sabu"]

  const myArr2=new Array(1,2,3,4)

  myArr.push(6)
  //console.log(myArr) 

  myArr.push(7)
  //console.log(myArr)
  myArr.pop()
  //console.log(myArr)

  myArr.unshift(8)
  //console.log(myArr)

  myArr.shift()
 // console.log(myArr)

 // console.log(myArr.includes(9))   //false
  //console.log(myArr.indexOf(23))   //-1

  const newArr=myArr.join()
 // console.log(newArr)  //0,1,2,3,4,5,6

  //console.log(typeof newArr)  //string

  //console.log("A",myArr)    //A[0,1,2,3,4,5,6]
  const myn1=myArr.slice(1,3)
//   console.log(myn1) //[1,2]

//   console.log("B",myArr)   //B[0,1,2,3,4,5,6]
  const myn2=myArr.splice(1,3)   //splice manipulate the original array
//   console.log(myn2)     //[1,2,3]
//   console.log("c",myArr)    //[0,4,5]
   
  const marvel_heroes=["thor","Ironman","spiderman"]
  const dc_heroes=["superman","flash","batman"]
  
 //   marvel_heroes.push(dc_heroes)
    //console.log(marvel_heroes)

//    const all_heroes= marvel_heroes.concat(dc_heroes)
//     console.log(all_heroes)

//     const all_new_heroes=[...marvel_heroes,...dc_heroes]
//     console.log(all_new_heroes)

    const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
     const real_another_array=another_array.flat(3)
   //  console.log(real_another_array)

     console.log(Array.isArray("Hitesh"))

     console.log(Array.from("Hitesh"))

     console.log(Array.from({name:"hitesh"}))  //[]It is not iterable.

// It is not array-like: it doesn't have a length property and numeric keys.

// So Array.from() sees no valid structure to convert, and returns an empty array.

let score1=100
let score2=200
let score3=300

  console.log(Array.of(score1,score2,score3))  //[100,200,300]


