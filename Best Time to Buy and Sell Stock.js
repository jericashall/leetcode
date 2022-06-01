//June 1st 
/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104


 * @param {number[]} prices
 * @return {number}
 */
/* params - An array of prices, where the price is the price on the ith day
    returns - return the max profit you can obtain, or 0 if none
    example - [6,2,4,3] - 2*/

//Original Solution
var maxProfit = function(prices) {
    let high = [prices[0], 0];
    let low = [prices[0], 0];
    let profits = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < low[0]) {

            low = [prices[i], i]
        } else if (prices[i] > high[0]){
            high = [prices[i], i]
        };
        
        if(low[1] > high[1]) {
            high = [0,0]
        };
        
        if(high[0] - low[0] > profits){
            profits = high[0] - low[0]
        };
    };
    return profits;
};

/*Runtime: 98 ms, faster than 69.20% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 54.2 MB, less than 5.03% of JavaScript online submissions for Best Time to Buy and Sell Stock.

Refactoring due to poor memory usage*/

//refactored solution
var maxProfit = function(prices) {
    let high = 0;
    let profit = 0;
    for(let i = prices.length-1; i >= 0; i--){
        if(prices[i] > high) {
            high = prices[i]
        };
        
        if(high - prices[i] > profit) {
            profit = high - prices[i]
        };
    };
    return profit;
    
};

/*Runtime: 88 ms, faster than 86.88% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.8 MB, less than 46.04% of JavaScript online submissions for Best Time to Buy and Sell Stock.*/