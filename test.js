let str = "coding is fun"
//extract the word coding
let word = str.slice(0,6)
console.log(word)
let fun =str.substring(10,13)
console.log(fun)
console.log(str.slice(7,9))

const colours = "red, green, blue, yellow"
const comma = colours.split(",")
console.log

const url = "/api/v1/users";
const slash = url.split("/")
const v1Index = slash[2]
console.log(slash)
console.log(v1Index)
//challenge 4
const matricNumber = "techcrush-emma-26"
const splitmatric = matricNumber.split("-")
console.log(splitmatric[1])