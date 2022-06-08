/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.*/

var groupAnagrams = function(strs) {
    const map = new Map();
    for(let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort().join('')
        if(map.has(word)) {
            map.set(word, map.get(word).concat([strs[i]]))
        } else {
            map.set(word, [strs[i]])
        }
    }
    const answer = []
    for(const [key, value] of map) {
        answer.push(value)
    }
    return answer
};

/*Runtime: 107 ms, faster than 98.92% of JavaScript online submissions for Group Anagrams.
Memory Usage: 52.5 MB, less than 84.16% of JavaScript online submissions for Group Anagrams.*/