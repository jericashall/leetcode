/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if (!root) return root
    let queue = [root];
    while(queue.length) { 
        element = queue.shift()
        if('right' in element) queue.push(element.left)
        if(element.left) queue.push(element.right)
        let temp = element.right || null
        element.right = element.left || null
        element.left = temp
        console.log(element)
    }
    return root
};