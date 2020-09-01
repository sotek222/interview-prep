/* Running Sum of 1d Array (Array Algorithm, Leetcode)
  
  Prompt: 
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
  Return the running sum of nums.

  Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

  Example 2:
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

  Example 3:
    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]
*/

/**
 * runningSum
 * @param {number[]} nums - An array of integers
 * @returns {number[]}
*/

function runningSum(nums){
  // add code here
};

/* Matt's Solutions: */

// function runningSum(nums){
//   // store the first number from nums in the output array since it is equal to its runnign]]ng sum.
//   const runningSumArray = [nums[0]];

//   // iterate from 1 until length of nums to start on the correct position which is second from first
//   for(let i = 1; i < nums.length; i++){
//     const previousNumber = runningSumArray[i - 1];
//     runningSumArray.push(previousNumber + nums[i]);
//   };

// //   return runningSumArray;
// // };

// function runningSum(nums) {
//   return nums.reduce((acc, currentNumber, idx) => {
//     acc[idx - 1] && acc.push(acc[idx - 1] + currentNumber);
//     return acc;
//   }, [nums[0]]);
// };

/* Dan's Solution: */

// function runningSum(nums){
//   let currentSum = 0, newArray = [];
// 
//   nums.forEach((elem, index) => {
//     currentSum += elem;            
//     newArray.push(currentSum);
//   });

//   return newArray;
// };

module.exports = runningSum;