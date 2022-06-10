/*Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let tempmax = nums[0];
    let tempmin = nums[0]
    let max = nums[0];
    let current;
    for(let i = 1; i < nums.length; i++) {
        current = [nums[i], nums[i] * tempmax, nums[i] * tempmin]
        tempmax = Math.max(...current)
        tempmin = Math.min(...current)
        max = Math.max(tempmax, max)    
    }
    return max
};

/*Runtime: 78 ms, faster than 66.93% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 44.3 MB, less than 29.40% of JavaScript online submissions for Maximum Product Subarray.*/