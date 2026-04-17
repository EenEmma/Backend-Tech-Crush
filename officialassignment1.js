//Substring & slice
const str = "Nigeria is awesome";

const nigeria = str.substring(0,8);
console.log(nigeria);

const awesome = str.slice(11);
console.log(awesome);

const is = str.slice(8,10);
console.log(is);

//Split
const names = "John,Jane,Doe";

const namesArray = names.split(",");
console.log(namesArray);

const nameswithspace = namesArray.join("");
console.log(nameswithspace);

const path = "/user/home/docs";
const pathArray = path.split("/");
console.log(pathArray);

const home = pathArray[2];
console.log(home);

//Mix
const email = "user@example.com";
const username = email.split("@")[0];
console.log(username);

const iscomdomain = email.endsWith(".com");
console.log(iscomdomain);

const replacedemail = email.replace("@","AT");
console.log(replacedemail);