// For Of Loops

// var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

// for (item of student) {
//     console.log(item);
// }

// Doesn't work because an object is not iterable

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];
for (pie of pieArray) {
    console.log(pie, "pie is my favorite");
}