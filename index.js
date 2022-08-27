function hasTargetSum(array, target) {
  // Write your algorithm here
  let visitedValues = {};
  
  for (const num1 of array) {
    const num2 = target - num1;
    if (num2 in visitedValues)
      return true;
    visitedValues[num1] = true;
  }

  return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here

  create a variable to hold the visited numbers in the array
  iterate through the array to find the number that sums the 
  first and the second number to give the target number
  if found return true else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
