/*Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

Constraints:

1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
 

Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?*/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let map = new Map();
    for(let i = 0; i < words.length; i++) {
        if(map.has(words[i])) {
            map.set(words[i], map.get(words[i])+1)
        } else {
            map.set(words[i], 1)
        }
    }
    
    let arr = []
    for(const [key, value] of map.entries()) {
        arr.push([key, value])
    }
    
    arr.sort((a,b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])
    
    let answer = []
    for(let i = 0; i < k; i++) {
        answer.push(arr[i][0])
    }
    return answer
};


/*tests
Runtime: 84 ms, faster than 90.23% of JavaScript online submissions for Top K Frequent Words.
Memory Usage: 44.5 MB, less than 93.27% of JavaScript online submissions for Top K Frequent Words.*/