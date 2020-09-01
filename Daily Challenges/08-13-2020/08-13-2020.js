/* Two Sum (Array Problem, Leetcode)
   Url: https://leetcode.com/problems/two-sum/
  Prompt: 
   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example 1:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1];    

  Example 2: 
    Give nums = [3, 6, 2, 0, 5, 8], target = 14,
    Because nums[1] + nums[5] = 6 + 8 = 14, 
    return [1, 5];  
*/

/**
 * twoSum
 * @param {number[]} nums - An array of integers
 * @param {target num} - An integer
 * @returns {number[]}
*/

function twoSum(nums, target){
  // add code here
}

// Matt's first solution: 
// function twoSum(nums, target){
//   const indices = [];

//   for(let i = 0; i < nums.length; i++){
//     for(let j = 1; j < nums.length; j++){
//       if(nums.length < 2 && nums[i] + nums[j] === target){
//         indices.push(i, j);
//         return indices;
//       }
//     }
//   }
// };

// possible optimization
// function twoSum(nums, target){
//   const valueMap = {};

//   for(let i = 0; i < nums.length; i++){
//     const key = target - nums[i];
//     valueMap[key] = i;
//   }

//   for(let i = 0; i < nums.length; i++) {
//     if(valueMap[nums[i]]){
//       return [i, valueMap[nums[i]]];
//     }
//   }
// 
// [3, 6, 2, 0, 5, 8], target = 14
/*
 {
   11: 0,
   8: 1,
   12: 2,
   14: 3,
   9: 4,
   6: 5
 }
*/

// David's solution
// function twoSum(nums, target) {
// const indices = [];
//   for(let i=0; i<nums.length; i++) {
//     for(let j=i+1; j<nums.length; j++) {
//       if(nums.length < 2 && nums[i] + nums[j] ===target) {
//         indices.push(i,j);
//         return indices;
//       }
//     }
//   }
//   if(indices.length <= 0) {
//     return "No values add up to target";
//   }
// }

module.exports = twoSum;