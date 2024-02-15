// YOUR CODE BELOW
function defaultGreet(fname,lname="Doe") {
   return "Hi " + fname + " " + lname + "!"

}
console.log(defaultGreet('Chaka', 'Khan')); // => 'Hi Chaka Khan!'
console.log(defaultGreet('John'))