//strings and substrings
let teststring = "my name is Emma!"
let slicedstring = teststring.slice(0, 10)
let substringstring = teststring.substring(0, 10)
console.log(slicedstring)
console.log(substringstring)

//replce and replace all
const text = "Emma is a techie. Emma hates teaching. Emma is starting to love coding"
let replacedtext = text.replace("Emma","She")
let replacedalltext = text.replaceAll("Emma","She")
console.log(replacedtext)
console.log(replacedalltext)

//split
const sentence = "languages: javascript, python, java, c++"
let splitsentence = sentence.split(" ")
console.log(splitsentence)

let example = "Emma is a chill girl , She isn't a teacher lol , she is coding ish"
let splitexample = example.split(" , ")
console.log(splitexample)