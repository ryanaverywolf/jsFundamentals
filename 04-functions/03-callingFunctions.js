// function hi() {
//     console.log("HI");
//     return "Hey";
// }

// hi; //does nothing
// hi(); //calls the function
// console.log(hi);
// console.log(hi()); //calls the function and invokes the return

// function nList() {
//     for(var x = 1; x<= 10; x++) {
//         console.log(x)
//     }
//     return "Done!";
// }   
// nList();
// console.log(nList());

// let arr = ["This", "is", "really", "cool?"];

// function valInd() {
//     for(var arr = 0; arr <=4; arr++) {
//     console.log(arr)
// }
//     return "It's really HARD!";
// }
// valInd();
// console.log(valInd()); // this one is wrong

let arr = ["This", "is", "really", "cool?"];

function ind() {
    for(item of arr) { // USE THE IN TO GRAB INDEXES, OF FUNCTION TO GRAB CONTENT OF INDEX
        console.log(item);
    }
}
ind();

