fetch('https://something.com').then().catch().finally()

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,crytography,network

     setTimeout(function(){
        console.log('async task is complete')
        resolve()
     },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"skyadav21660@gmail.com"})
    },3000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },5000)
}
)
const username=promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
console.log(username)
/*promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or rejected"))*/

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javaScript",password:"123"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    },6000)
})

/*async function consumepromiseFive(){
    const response=await promiseFive
    console.log(response)
}
consumepromiseFive()*/

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     const response=await fetch('https://jsonPlaceholder.typicode.com/users')
//     const data=response.json()
//     console.log(data)
// }
// getAllUsers()

async function getAllUsers(){
   try {
       const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
         console.log(data);
     } catch (error) {
        console.log("E: ", error);
   }
 }
//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))




