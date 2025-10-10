let myName="hitesh     "
// console.log(myName.length)
// console.log(myName.trueLength())
// console.log(myName.trim().length())

let myHeroes=["thor",'spiderman']

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}

// heroPower.hitesh()
// myHeroes.hitesh()

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`)
}

//myHeroes.heyHitesh()
// heroPower.heyHitesh()

const user={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//modern syntx

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiAurcode   "

String.prototype.truelength=function(){
    //console.log(`${this.name}`)
    console.log(`${this}`)
    console.log(`True length is:${this.trim().length}`)
}

anotherUsername.truelength()
"hitesh ".truelength()
"iceTea".truelength()
