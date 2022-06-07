/*Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104*/

var merge = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0])
    const results = [];
    let range  = intervals[0]
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] <= range[1]) {
            if(range[1] < intervals[i][1]) {
                range = [range[0], intervals[i][1]]
            } 
        } else {
            results.push(range)
            range = intervals[i]
        }
    }
    
    results.push(range)
    return results
};

/*Runtime: 116 ms, faster than 76.53% of JavaScript online submissions for Merge Intervals.
Memory Usage: 48.3 MB, less than 90.26% of JavaScript online submissions for Merge Intervals.*/