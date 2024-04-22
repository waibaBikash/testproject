function Test(){
  return "";
}
let name = prompt('your name');
let firstName = name.slice(0,1);
let firstNameUpper = firstName.toUpperCase();
let finalName = firstName + firstNameUpper;
console.log(finalName);