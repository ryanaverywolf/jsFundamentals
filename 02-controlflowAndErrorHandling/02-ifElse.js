// If Else Statements

// let money = false

// if (money) {
//     console.log("Starbucks")
// } else {
//     console.log("Make Coffee!")
// }

// let weather = 75

// if (weather < 70) {
//     console.log("Wear a jacket.")
// } else {
//     console.log("No Jacket Needed!!!")
// }

//  let name = "Ryan Wolf"
// if (name === "Ryan Wolf") {
//     console.log("Hello, my name is " + name)
//     console.log(`Hello, my name is ${name}.`)
//    } else {
//         console.log("Hello, what is your name?")  }

//     let myName = "harRy"
   // let myNameChanged = myName.charAt(3).tolowercase()
   // let myNameChanged2 = myName.charAt(0).toUpperCase

   // console.log(myNameChanged2)

//    if (myName ==="Harry") {
//        console.log(myName)
//    } else {
//        myName = "Harry"
//        console.log(myName)
//    }

// let str = "harRy"
// let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
// console.log(newStr)

let str = "sebasTion"

if (str[0] === str[0].toUpperCase()) {
    let firstLetter = str[0] + str.slice(1).toLowerCase()
    console.log(firstLetter)
} else {
    let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    console.log(otherLetters)
}

// Else If Statements

let weather = 40

if (weather > 70) {
    console.log("Wear a t-shirt")
}

else if (weather <= 70 && weather > 50) {
    console.log("Wear a light jacket")
} else { (weather < 50) 
    console.log("Wear a heavy coat")
}

let age = 21
if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18 && age < 21) {
    console.log("Yay! You can vote.")
} else if  (age >= 21) {
    console.log("Yay, you can drink!")
}  else { (age >= 25)
        console.log("Yay, you can rent a car!")
    }

let myAge = 25
let young = "Sorry, you're too you to do anything."
let vote = "Yay! You can vote."
let drink = "Yay! You can drink!"
let rent = "Yay, you can rent a car."

if (age >= 0 && age < 120) {
if (age >= 25) { 
    console.log(rent, drink, vote)
} else if (age >= 21) {
    console.log(drink, vote)
} else if (age >= 18) {
    console.log(vote)
} else {
    console.log(young)
}
} else {
    console.log("Please pick a real human age...dummy")
}






