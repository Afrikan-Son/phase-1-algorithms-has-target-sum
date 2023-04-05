function hasTargetSum(array, target) {
  // Write your algorithm here



  // create an empty object to store previously seen values
  const seen = {};

  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const complement = target - current;

    // if we've seen the complement before, return true
    if (seen[complement]) {
      return true;
    }

    // otherwise, add the current value to the seen object
    seen[current] = true;
  }

  // if we reach the end of the loop without finding a match, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  

  O(n)




*/



/* 
  Add your pseudocode here




  1. Create an empty object called "seen" to store previously seen values.
2. Iterate over the array using a for loop with a variable "i".
3. For each element in the array, store the current value in a variable called "current".
4. Calculate the complement by subtracting the current value from the target and store it in a variable called "complement".
5. Check if the complement already exists in the "seen" object. If it does, return true.
6. If the complement doesn't exist in the "seen" object, add the current value to the "seen" object with a value of true.
7. If no match is found after iterating over the entire array, return false.




*/


/*
  Add written explanation of your solution here



The hasTargetSum function takes an array of integers and a target integer as inputs. 
It then creates an empty object called seen to store previously seen values. 
It iterates over the input array, and for each value in the array, it subtracts the current value 
from the target to get the complement. It checks if the complement is already in the seen object, and if it is,
 it returns true since a pair that adds up to the target has been found. Otherwise, 
 it adds the current value to the seen object.

The time complexity of this function is O(n) because it iterates over the input array once,
 so the runtime is proportional to the length of the array. The space complexity is also O(n) because
  in the worst case scenario, all elements of the input array will be unique and 
  therefore stored in the seen object.



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
