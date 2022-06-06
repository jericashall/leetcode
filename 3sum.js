/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105*/

var threeSum = function(nums) {
    const results = [];
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length-2; i++) {
        if(nums[i] === nums[i-1]) continue
        let j = i + 1;
        let k = nums.length - 1
        while(j < k) {
            if(nums[i] + nums[j] + nums[k] === 0) {
                array = [nums[i], nums[j], nums[k]]
                results.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                if(results[results.length-1]?.toString() === results[results.length-2]?.toString()){
                    results.pop();
                }
            } else if(nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++
            }
        }
    }
    return results
};

/*Runtime: 162 ms, faster than 77.84% of JavaScript online submissions for 3Sum.
Memory Usage: 52.3 MB, less than 82.55% of JavaScript online submissions for 3Sum.*/