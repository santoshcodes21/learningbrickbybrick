const user={
     username:"hitesh",
     loginCount:8,
     signedIn:true,

     getUserDetails:function(){
       // console.log("got user details of the database")
       // console.log(this)
       console.log(`username:${this.username}`)
     }
     
}
console.log(user.username)
//console.log(this)
console.log(user.getUserDetails())

//const promiseOne=new Promise()
//const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this
}

const userOne=new User("hitesh",12,true)

console.log(userOne)
console.log()

