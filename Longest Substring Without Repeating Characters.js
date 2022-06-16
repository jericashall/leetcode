/*Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 0;
    let map = new Map();
    let maxCount = 0;
    while(r < s.length) {
        while(map.has(s[r])) {
            map.delete(s[l])
            l++
        }
            
        map.set(s[r], 1)
        maxCount = Math.max(maxCount, map.size)
        r++
    }
    return maxCount
};

/*Runtime: 112 ms, faster than 75.63% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 47.2 MB, less than 67.17% of JavaScript online submissions for Longest Substring Without Repeating Characters.*/