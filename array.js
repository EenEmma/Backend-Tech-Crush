let item1 = "milk";
let item2 = "milo";
let item3 = "rice";

let items = ["milk","milo","rice", 1,2,4];
console.log(items[0]);

//foreach
let fruits = [ "apple" , "banana" , "orange" , "grape" , "mango" ]
let names = [ "esther" , "john" , "doe", "jane" , "smith" ]
names.forEach(function(name){
    console.log("TECH-CRUSH-2026-COHORT-6 "+ name )
})

fruits.forEach(function(fruit){
    console.log("i eat " + fruit)
})

//map
let scores =[90 ,80 , 70 , 60 , 50]
let newscores = scores.map( scores =>{
    console.log("as a good teacher, i decided to add 5 marks to all my students")
    return scores + 5
})
console.log(newscores)

let students = [ "esther" , "john" , "doe", "jane" , "smith" ]

let nametag = students.map(function(name){
     return"TECH-CRUSH-2026-COHORT-6 "+ name
})
console.log(nametag)

function add(a , b){
    return a + b
}
for (let x = 0; x< students.length; x++){
  console.log("TECH-CRUSH-2026-COHORT-6 "+ students[x] )   
}

//filter
let jambscores = [200 , 250 , 300 , 150 , 180 , 100 , 290 , 280 , 299]

let passed = jambscores.filter((score)=>{
    return score >= 200
})
console.log(passed)

let ages = [18 , 25 , 30 , 15 , 20 , 48 , 35]
let adults = ages.filter(function(age){
    return age >=18
})
console.log(adults)

//find
const studentsnames = ["john","faustina", "ada", "doe", "john", "jane", "smith"]
 const found = studentsnames.find((name) =>{
return name === "john"
 })
 console.log(found)

 //reduce
 let cartprices = [1500, 800, 2200, 450, 1000]
 let total = cartprices.reduce(function(acc , currentprice){
    return acc + currentprice
 }, 10000);
 console.log(total)

 let grandtotal = cartprices.reduce((acc, price) => {
     return acc + price
 },0);
 console.log(grandtotal)

 //push - return type for push and unshift are numbers and new length of the array after the operation
 let colours = ["red", "blue", "green"]
 colours.push("yellow")

 //pop - return the removed element from the array
 let lastcolour = colours.pop()
 console.log(colours)

 console.log(lastcolour)


 //shift
 let firstcolour = colours.shift()
 console.log(colours)
 console.log(firstcolour)

 //unshift
 let  newlength = colours.unshift("purple")
 console.log(colours)
 console.log(newlength)