/* Single Number (Array Problem, leetcode)

    Prompt: 
      Given a non-empty array of integers, every element appears twice except for one. Find that single one.

     Note:
      Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? 

    Examples: 
      Example 1:
        Input: [2,2,1]
        Output: 1

      Example 2:
        Input: [4,1,2,1,2]
        Output: 4
*/

/**
 * singleNumber
 * @param {number[]} nums
 * @return {number}
*/

// [11,1,2,34,2,34,80,1,99,4,8,4,17,17,8,80,11]
// [1,1,11,11,17,17,2,2,34,34,4,4,8,8,80,80,99]

// David's solution
// function singleNumber(nums){
//   const intMap = {};

//   for(let i = 0; i < nums.length; i++) {
//     if(intMap[nums[i]]) {
//       intMap[nums[i]] += 1;
//     } else {
//       intMap[nums[i]] = 1;
//     }
//   }
//   for(const int in intMap) {
//     if(intMap[int] === 1) {
//       return Number(int);
//     }
//   }
// };

// Matt's Solution:

// function singleNumber(nums){
//   const appearances = {};

//   for(const num of nums) {
//     appearances[num] 
//     ? appearances[num]++ 
//     : appearances[num] = 1;
//   };

//   for(const appearance in appearances){
//     if(appearances[appearance] === 1) return Number(appearance);
//   }
// };

// optimized solution 
// function singleNumber(nums){
//   nums.sort((a, b) => a - b);

//   for(let i = 0; i < nums.length; i += 2){
//     if(nums[i] !== nums[i + 1]) return nums[i];
//   }
// };

module.exports = singleNumber;