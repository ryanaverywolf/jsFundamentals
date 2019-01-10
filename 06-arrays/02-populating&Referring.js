let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];
food.push("Pizza");
//pushes item to end of array
for(f in food){
   // console.log(food[f])
}
//f could be anything, just represents the variable
// the push function is used to add to an array

food.splice(1,1, "Bananas");
// first one is the spot, second one dictates how many to replace. Change to 0 and none are replaced.  3rd spot is what to replace with or add.
food.splice(4,1);
//to just remove an item
food.pop()
//remove item from the end
console.log(food);
