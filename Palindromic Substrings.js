/*Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.*/


/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let count = s.length;
      
    for(let i = 0; i < s.length; i++) {
        checkPal(i-1, i+1)
        checkPal(i, i+1)
        function checkPal(low, high) {
            while(s[low] === s[high] && low >= 0 && high < s.length) {
                count += 1
                low--
                high++
            }
        }
    }    
    return count;
};

/*Runtime: 74 ms, faster than 91.83% of JavaScript online submissions for Palindromic Substrings.
Memory Usage: 42.8 MB, less than 75.06% of JavaScript online submissions for Palindromic Substrings.*/