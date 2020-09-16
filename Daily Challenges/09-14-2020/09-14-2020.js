
/* Climbing Stairs (Dynamic Programming, leetcode)

  Prompt: 
    You are climbing a stair case. It takes n steps to reach to the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  Examples: 
    Example 1:

      Input: 2
      Output: 2
      Explanation: There are two ways to climb to the top.
      1. 1 step + 1 step
      2. 2 steps

      Example 2:

        Input: 3
        Output: 3
        Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step

  Constraints:
    1 <= n <= 45
*/

/**
 * climbStairs
 * @param {number} n
 * @return {number}
 */

const climbStairs = (n) => {
    // add code here
};

module.exports = climbStairs;

// climbStairs(4);

// 3 ->  2 + 1 | 1 + 2 ||
// 4 ->  1 + 1 + 2 | 2 + 1 + 1 | 1 + 2 + 1 ||
// 5 ->  2 + 2 + 1 | 1 + 2 + 2 | 2 + 1 + 2 | 

// 1 + 1 + 1 + 2 | 2 + 1 + 1 + 1 | 1 + 2 + 1 + 1 | 1 + 1 + 2 + 1 || 


// 2 + 2 = 4 + 1 === 5
// 5 - 1 = 4
// 4 % 2 = 2 
// const twos = 2 + 1 = 3

// 1 + 1 + 1 = 3 + 2 === 5
// 5 - 2 = 3
// const ones = 3 + 1 = 4

// 7 -> 
// 2 + 2 + 1 + 1 + 1
// 2 + 1 + 2 + 1 + 1
// 2 + 1 + 1 + 2 + 1 
// 1 + 2 + 2 + 1 + 1
// 1 + 1 + 2 + 2 + 1
// 1 + 2 + 1 + 2 + 1


// return twos + ones + 1;