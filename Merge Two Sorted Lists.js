/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let node = new ListNode(0, null)
    let head = node
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            node.next = list1
            list1 = list1.next
        } else {
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }
    
    if(list1){
        node.next = list1
    }
    if(list2) {
        node.next = list2
    }
    
    return head.next
};

/*tests

Runtime: 78 ms, faster than 84.29% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.2 MB, less than 59.74% of JavaScript online submissions for Merge Two Sorted Lists.*/
