// Creating Variables
let CustomerName = "Susan";
let CustomerAge = 21;
let BookTitle = "JavaScriptForBegineers";
let BookPrice = 12000;
let Quantity = 5;
let IsStudent = true;

// Using Arithmetic Operators
let TotalPrice = BookPrice * Quantity;

// Using Comparison Operators
let IsAnAdult = CustomerAge >= 18;
let MoreThanThreeBooks = Quantity > 3
let IsPriceTwelveThousand = BookPrice === 12000

//NonPrimitive Data
const CustomerOrder = {
    CustomerName : CustomerName,
    BookTitle : BookTitle,
    Quantity : Quantity,
    TotalPrice : TotalPrice
};

//Printing Result
console.log("Customer Name:" + CustomerName);
console.log("Book Title:" + BookTitle )
console.log("Total Price:" +  TotalPrice)
console.log("Is Customer An Adult:" + IsAnAdult)
console.log("Buying More Than Three Books?:" + MoreThanThreeBooks  )
console.log("Is Book Price Twelve Thousand:" + IsPriceTwelveThousand )