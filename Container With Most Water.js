/*You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104*/

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let area = 0;
    while (left < right) {
        let width = right - left;
        let calcHeight = height[left] < height[right] ? height[left] : height[right]
        if (calcHeight * width > area) {
            area = calcHeight * width
        }
        
        height[left] < height[right] ? left += 1 : right -= 1
    }
    return area
};

/*Runtime: 81 ms, faster than 88.17% of JavaScript online submissions for Container With Most Water.
Memory Usage: 49.2 MB, less than 85.29% of JavaScript online submissions for Container With Most Water.*/