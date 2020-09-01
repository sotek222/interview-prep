/*   Rotate Array (Array Problem, leetcode)

  Prompt: 
    Given an array, rotate the array to the right by k steps, where k is non-negative.

    Could you do it in-place with O(1) extra space?

  Examples:

    Example 1:

     Input: nums = [1,2,3,4,5,6,7], k = 3
     Output: [5,6,7,1,2,3,4]
     Explanation:
     rotate 1 steps to the right: [7,1,2,3,4,5,6]
     rotate 2 steps to the right: [6,7,1,2,3,4,5]
     rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example 2: 

      Input: nums = [-1,-100,3,99], k = 2
      Output: [3,99,-1,-100]
      Explanation: 
      rotate 1 steps to the right: [99,-1,-100,3]
      rotate 2 steps to the right: [3,99,-1,-100]

  Constraints:
    1 <= nums.length <= 2 * 10^4
    It's guaranteed that nums[i] fits in a 32 bit-signed integer.
    k >= 0
*/

/**
* rotate
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify
*  nums in-place instead.
*/

function rotate(nums, k){
  // add code here
};

// Matt's Solutions: 

// function rotate(nums, k){
//   for(let i = 0; i < k; i++){
//     const poppedValue = nums.pop();
//     nums.unshift(poppedValue);
//   }
// };

// function rotate(nums, k){
//   while(k--) nums.unshift(nums.pop());
// }

// function rotate(nums, k){
//   nums.unshift(...nums.splice(nums.length - k, k));
// };

// David's Solution
// function rotate(nums, k){
//   for(let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
// };

module.exports = rotate;