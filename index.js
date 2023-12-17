function isPalindrome(word) {
    const lCased = word.toLowerCase();

    const palindrome = lCased.split("").reverse().join("")

    return lCased === palindrome 
  }

/* 
  Add your pseudocode here
  1. First we will need to create the function that will take a string
  2. Next, we will need to define a variable which determines the string is lowercase
  3. After, we need to create a variable that will result in a string having the same spelling backwards as it is forwards
  4. We can look up methods to make this easier for ourselves to see if there is an easier way to code the palindrome
  5. We can return the first variable  equal to the second variable so that the result is the same as well as lowercased
  6. Finally, we can clean up code, make it readable and test our cases with console logs

*/

/*
  Add written explanation of your solution here
  
  We were able to solve this palindrome lab by researching some methods to help make our code easier. We needed to make sure we achieved the result of a string resulting in the same word forwards as backwards. We first created a variable to produce a lowercased version of a (passed in) string by setting a variable to "lCase." We then created another variable called "palindrome" which would output the lowercased string in reverse. First, we learned that applying that .split("") method would help us to split a string into individual characters and by passing an empty string into split as an argument, we were able to achieve the string being split at each character. Then, we found out a new method called .reverse(), This method reverses the order of elements within. Lastly, we used .join("") and passed an empty string to ensure there was no seperation between characters of the new string. We finished the lab by setting the lCase to strictly equal the palindrome variable so that the tests would result in either "true" or "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
