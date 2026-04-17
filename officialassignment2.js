//forEach()
//Question 1
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(num){
    console.log(num * 2);
});

//Question 2
const names = [" Esther", " John", " Ada" , " Mike"];
names.forEach(function(name){
    console.log("Hello" + name +"!");
})

//formap()
//Question 3
const number = [1, 2, 3, 4, 5];
const squaredNumbers = number.map(function(num){
    return num * num;
});
console.log(squaredNumbers);

//Question 4
const prices =[100, 200, 300];
const discountedPrices = prices.map(function(price){
    return price * 0.9;
});
console.log(discountedPrices);

//filter()
//Question 5
const numberrs = [5, 12, 8, 20, 3];
const result = numberrs.filter(function(num){
    return num > 10;
});
console.log(result);

//Question 6
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter(function(age){
    return age >= 18;
});
console.log(adults);

//Question 7
const nummbers = [10, 15, 20, 25, 30];
const results = nummbers.filter(function(num){
    return num > 20;
}) 
nummbers.map(function(num){
    return num * 2;
});
console.log(results);