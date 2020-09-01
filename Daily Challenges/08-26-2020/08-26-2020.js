/*   Remove Duplicates from Sorted Array (Array Problem, Leetcode) - 

  Prompt - 
    Given a sorted array of nums, remove the duplicates in-place such that each element appears only once and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  Examples - 

    Example 1 - 

      Given nums = [1,1,2],

      Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

      It doesn't matter what you leave beyond the returned length.

    Example 2 - 

      Given nums = [0,0,1,1,1,2,2,3,3,4],

      Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

      It doesn't matter what values are set beyond the returned length.
*/

/**
 * removeDuplicates
 * @param {number[]} nums
 * @return {number}
*/

// function removeDuplicates(nums){
//   // add code here;
// };

// Matt's Solution: 

// function removeDuplicates(nums){
//   // first we store the first number in the sorted array for comparison later
//   let currentNumber = nums[0];
//   // iterate from the next number in the array
//   for(let i = 1; i < nums.length; i++){
//     // IF we find a duplicate
//     if(nums[i] === currentNumber){
//       // remove the duplicate
//       nums.splice(i, 1);
//       // step backwards as our array has gotten smaller
//       i--;
//     } else {
//       // if we did not find a duplicate 
//       // that means we found a distinct number 
//       // so we need to reassign for future //comparisons
//       currentNumber = nums[i];
//     };
//   }
//   return nums.length;
// };

function removeDuplicates(nums){
  // iterate from the next number in the array
  for(let i = 0; i < nums.length; i++){
    // IF we find a duplicate
    if(nums[i] === nums[i + 1]){
      nums.splice(i + 1, 1);
      // step back as our array is shrinking
      i--;
    }
  }
  return nums.length;
};

// David's solution
// function removeDuplicates(nums){
//   //since the array is sorted always start with the holder at the first element
//   let numberHolder = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     // start loop at index = 1 since I already know what the 0th index is
//     if(nums[i] === numberHolder) {
//       //if nums[i] matches numberHolder then it is a duplicate
//       nums.splice(i, 1);
//       i--;
//     } else {
//       //if not then we make numberHolder the new value in the array
//       numberHolder = nums[i];
//     }
//   }
//   return nums.length;
// };

/**
* Rick's Solution
*/

/* function removeDuplicates(nums){
  // add code here;
 let currentNumber;
 for(i = 0; i < nums.length; i++) {
   if(nums[i] === currentNumber) { 
     nums.splice(i, 1);
    i = nums.indexOf(nums[i-1]);
   } else {
     currentNumber = nums[i];
   }
 }
 return nums.length;
 //return `length = ${nums.length}`;
};*/

module.exports = removeDuplicates;