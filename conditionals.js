// if-else statements
let userAge = 21
if (userAge >= 18){
console.log("welcome to club 9ja")
}else{
    console.log("sorry, you are not allowed to enter")
}

let gender = "non-binary"

if (gender === "female"){
    console.log("welcome to the ladies section")
}else if (gender === "male"){
    console.log("welcome to the male section")
}else if(gender === "other"){
    console.log("welcome to the other section")
}else{
    console.log("we don't know where you belong")
}


let username = "Emma"
let password = "Emmanuella321"

if (username === "Emma" && password === "Emmanuella321"){
    console.log("login successful")
}else if (username === "Emma" || password === "Emmanuella321"){
    console.log("username or password is incorrect")
}else {
    console.log("login failed")
}