const user={
     username:"hitesh",
     price:999,

     welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
     }     
}

//user.welcomeMessage() //hitesh,welcome to website
//user.welcomeMessage
user.userName="Santosh"
//user.welcomeMessage()  //hitesh,welcome to website

//console.log(this)   //{}

function chai(){
   
   console.log(this)
}
//chai() 

/*const chai=()=>{
   let userName="hitesh"
   console.log(this.userName)
}*/
//chai() //undefined

/*const addTwo=(num1,num2)=>{
   return num1+num2
}
console.log(addTwo(3,4))*/

/*const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4))//7*/

/*const addTwo=(num1,num2)=>({userName:"hitesh"})
 console.log(addTwo(3,4)) //{ username: 'hitesh}*/

/* function chai(){
   console.log("DB Connected")
 }
 chai() //DB Connected*/

/* (function chai(){
   console.log('DB Connected two');
 })() //DB Connected two*/

 ((name)=>{
   console.log(`DB Connected two ${name}`);
 }) ('hitesh')