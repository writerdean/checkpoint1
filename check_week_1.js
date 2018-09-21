// Week 1 Assessment

// // Bash (Terminal)
// // Assume your present working directory is $ ~/buffy
// // Make two directories inside ~/buffy: scoobies and vamps 

// mkdir scoobies vamps

// // Make files in scoobies named buffy.txt, giles.txt and angel.txt 

// touch scoobies/buffy.txt scoobies/giles.txt scoobies/angel.txt

// // Copy angel.txt into the vamps directory 

// cp scoobies/angel.txt vamp/angel.txt

// // Delete the vamps directory and everything inside it 

// rm -r vamps

// // JS Variables

// // Assign the string "Jack" to a variable called captain 
// var captain = 'Jack'

// // Using the captain variable, use string concatenation to form the string "Oh Jack, my Jack!", assigning it to a variable named phrase 

// var phrase = 'Oh ' + captain + ', my ' + captain + '!'

// // JS Conditionals

// var souls = 3;
// var lifeRafts = 2;
// // Write an if statement that console.logs "SOS!" if there are more souls than lifeRafts 

// if (souls > lifeRafts) {
//     console.log('SOS!')
// }

// Data Structures - JS Arrays

// Create an array named weekend with just 'Saturday' in it 

var weekend = ['Saturday'];

// Add 'Sunday' to the end of the weekend array 

weekend.push('Sunday');

// Add 'Friday' to the front to the front of the weekend array 

weekend.unshift('Friday');

// Access 'Saturday' in the array and assign to a variable named day 

var day = weekend[1];

// Remove 'Friday' from the array 

weekend.shift();

// Data Structures - JS Objects

// Write an object literal named brain having a property of energyLevel with a value of 10 as a number 


// Assign the property of energyLevel to a variable named energy 


// Add a dream property to the brain object that holds the string 'electric sheep' 


// Add a dayDream property to the brain object that holds the object { lunch: ['burger', 'beer'] } 


// Add another element pudding to the lunch array inside the brain object 


// JS Functions

// Write a function to return the area of a rectangle (the product of its length and its width) 


// Invoke the function with 3 and 4 as arguments and save it to a variable named result 