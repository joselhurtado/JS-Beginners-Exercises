// Code Already Compiled
var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

person.lucky_numbers = [7, 11, 13, 33];

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1, 2, 3, 4],
    significant_other: null
};

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray) {

    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers

    let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < person.lucky_numbers.length; i++) {
        sumOfAllLuckyNumbers += person.lucky_numbers[i];
    }
    for (let i = 0; i < person2.lucky_numbers.length; i++) {
        sumOfAllLuckyNumbers += person2.lucky_numbers[i];
    }
    for (let i = 0; i < person3.lucky_numbers.length; i++) {
        sumOfAllLuckyNumbers += person3.lucky_numbers[i];
    }
    return sumOfAllLuckyNumbers;
}
//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers()); 