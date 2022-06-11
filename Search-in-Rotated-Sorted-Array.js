/*
var search = fuThere is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104*/

var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let low = nums[0]
    let high = nums[nums.length-1]
    let mid;
    while(l <= r) {
        mid = Math.floor((r+l)/2)
        
        if(nums[mid] === target) {
            return mid
        }
        
        if(target < low) {
            if(nums[mid] > high) {
                l = 1 + mid
            } else if (nums[mid] < target){
                l = 1 + mid
            } else {
                r = mid - 1
            }
        } else {
            if (nums[mid] < low) {
                r = mid - 1
            } else if (nums[mid] > target){
                r = mid - 1
            } else {
                l = 1 + mid
            }
        }
    }
    return -1
}

/*Runtime: 77 ms, faster than 57.83% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 42.3 MB, less than 44.76% of JavaScript online submissions for Search in Rotated Sorted Array.*/