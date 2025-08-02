//singleton  -->object create
//object literal
const mySum=Symbol("key1")
const JsUser={
     name:"Hitesh",
     age:18,
     location:"jaipur",
     isLoggedIn:false,
     email:"skvarsha2166@gmail.com",
     lastLoginDays:["Monday","saturday"],
     mySum:"mykey1",
    [mySum]:"mykey1" //for using as symbol

}
// console.log(JsUser.email)
// console.log(typeof JsUser.mySum)
// console.log(JsUser[mySum])

JsUser.email="hiteshchoudhry234@gmail.com"
//Object.freeze(JsUser)
JsUser.email="hiteshchoudhry890@gmail.com"

//console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello js User")
}
// console.log(JsUser.greeting)   //[Function(anonymous)]
// console.log(JsUser.greeting())  

const findUser=new Object()
//console.log(findUser)  //{}

  findUser.id="123abc"
  findUser.name="Sammy"
  findUser.isLoggedIn=false

   //console.log(findUser)

   const regularUser={
    email:"skvarsh2166@gmail.com",
    fullName:{
         userfullName:{
            firstName:"hitesh",
            lastname:"choudhary"
         }
    }
   }
//    console.log(regularUser.fullName)
//    console.log(regularUser.fullName.userfullName.firstName)

   const obj1={1:"a",2:"b"}
   const obj2={3:"c",4:"d"}

   //const obj3={obj1,obj2}
   //console.log(obj3)


//    const obj3=Object.assign({},obj1,obj2) // object.assign() static method copies all enumerable own properties from one or more source object to a target object.it return the modified target object
//    console.log(obj3)
   const obj4={5:"a",6:"b"}
   const  obj3={...obj1,...obj2,...obj4}
  // console.log(obj3)

   const users=[
      {
         id:1,
         email:"skyadav21660@gmail.com"
      },
      {
         id:2,
         email:"hiteshchoudhry234@gmail.com"
      }
   ]
  users[1].email

//   console.log(users)
//   console.log(findUser)
//   console.log(Object.keys(findUser))
//   console.log(Object.values(findUser))

//   console.log(Object.entries(findUser))
//   console.log(findUser.hasOwnProperty('isLoggedIn'))
//   console.log(findUser.hasOwnProperty('isLogged'))
  /*------------------destructor----------------------*/


  const course={
   courseName:"js in Hindi",
   price:"999",
   courseInstructor:"hitesh"
  }
 
   const {courseInstructor}=course
   const {courseInstructor:Instructor}=course

   console.log(courseInstructor) //hitesh
   console.log(Instructor)      //hitesh

   const navbar=()=>{
      
   }

   //Json

//  {
//    "Name": "Hitesh",
//    "CourseName": "Js in Hindi",
//    "Price": "free"
// }
