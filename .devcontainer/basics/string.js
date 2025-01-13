const name="hitesh"
const repCount=50
console.log(name + repCount+" value")
console.log(`Hello my name is ${name}  and my reopCount is ${repCount}`)

const gameName=new String('devil')
console.log(gameName[0])

console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('v'))

const newString=gameName.substring(1,3)
console.log(newString)

const anotherString=gameName.slice(-4,2)
console.log(anotherString)

const newStringOne="      hiierwantk    "
console.log(newStringOne)
console.log(newStringOne.trim())