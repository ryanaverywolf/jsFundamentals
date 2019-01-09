// nickname;  FAT ARROW FUNCTIONS

// function coffee() {
//     console.log ("Coffee is life!");
// }

// let coffee = () => {
//     console.log("Coffee is cool.");
// }

// coffee();


// var cats = (kitten, puppy) => {
//     console.log(`I have ${kitten} cat(s) and ${puppy} dog(s).`);
// }

// cats(1, 35);

// let fatArrows = (x) => console.log(x); //"Concise body" doesn't have curly braces.

// fatArrows("This is a function, nothing to see.");

// let namingMachine = (fName, lName) => (fName, lName);

// console.log(namingMachine("Tom", "Hiddleston"));

let score = "Winner";
function upperCase(big) {
    return big.toUpperCase();
}

function lowerCase(small) {
    return small.toLowerCase();
}
console.log(upperCase(score));
console.log(lowerCase(score));

console.log(lowerCase(upperCase(score)));
