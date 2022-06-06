/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.*/

var productExceptSelf = function(nums) {
    let forw = []
    let backw = []
    let result = []
    
    forw[0] = 1
    for(i=1;i<nums.length;i++){
        forw[i] = nums[i-1] * forw[i-1]
    }
    
    backw[nums.length-1] = 1
    for(i=nums.length-2;i>=0;i--){
        backw[i] = nums[i+1] * backw[i+1]
    }

    for(i=0;i<nums.length;i++){
        result[i] = forw[i] * backw[i]
    }
    
    return result
};

/*Runtime: 116 ms, faster than 78.34% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 53 MB, less than 89.21% of JavaScript online submissions for Product of Array Except Self.*/