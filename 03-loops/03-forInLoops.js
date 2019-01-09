// Runs through the properties of an object until it has ran through the entire object.

var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
    //console.log(item);
    console.log(student[item]);
}
//Pulls out the items in the var student: name, awesome, degree, week.

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];
for (pie in pieArray) {
    console.log(pie);
}

//Challenge; Write a for in loop that capitalizes the first letter of a student's name.

 var studentName = "hArRy"
 var capName;

 for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
} else {
        capName += studentName[n].toLowerCase();
}
 }
 console.log(capName);
 
