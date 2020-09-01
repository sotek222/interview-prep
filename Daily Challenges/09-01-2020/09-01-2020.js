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

function singleNumber(nums){
  // add code here
};

/* maxProfit (Array Problem, leetcode)
    
    Prompt: 
      Say you have an array prices for which the ith element is the price of a given stock on day i.

      Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

      Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

    Examples: 

      Example 1:
        Input: [7,1,5,3,6,4]
        Output: 7

        Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

      Example 2:
        Input: [1,2,3,4,5]
        Output: 4
        Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

      Example 3:
        Input: [7,6,4,3,1]
        Output: 0
        Explanation: In this case, no transaction is done, i.e. max profit = 0.

    Constraints: 
      1 <= prices.length <= 3 * 10 ^ 4
      0 <= prices[i] <= 10 ^ 4
*/

/**
 * maxProfit
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices){
  // add code here
};

module.exports = {
  singleNumber, 
  maxProfit
};