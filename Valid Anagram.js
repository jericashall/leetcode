
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let mapOne = new Map();
    let mapTwo = new Map();
    for(let i = 0; i < s.length; i++) {
        if(mapOne.has(s[i]) === false) {
            mapOne.set(s[i], 1);
        } else {
            mapOne.set(s[i], mapOne.get(s[i])+1)
        }
        
        if(mapTwo.has(t[i]) === false) {
            mapTwo.set(t[i], 1);
        } else {
            mapTwo.set(t[i], mapTwo.get(t[i])+1)
        }
    }
    
    for(const [key, value] of mapOne) {
        if(mapTwo.has(key) === false) return false
        if(mapTwo.get(key) !== value) return false
    }
    return true
};




/*Runtime: 99 ms, faster than 67.03% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.2 MB, less than 52.63% of JavaScript online submissions for Valid Anagram.*/