/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.*/

/**
 * @param {string} s
 * @return {boolean}
 */
    var isValid = function(s) {
        const close = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        };
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if(s[i] in close) {
                stack.push(close[s[i]]);
            } else {
                if (s[i] === stack[stack.length-1]) {
                    stack.pop();
                } else {
                    return false;
                };
            };
        };
        return stack.length === 0;
    };

/*Runtime: 59 ms, faster than 95.85% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 41.7 MB, less than 94.01% of JavaScript online submissions for Valid Parentheses.*/