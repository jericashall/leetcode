/*Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(head.next == null){
        return null
    }
    let temp = new ListNode(0, head);
    let slow = temp;
    let fast = head;
    for(let i=0;i<n;i++){
        fast = fast.next;
    }
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return temp.next
};

/*Runtime: 64 ms, faster than 93.08% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 42.4 MB, less than 78.64% of JavaScript online submissions for Remove Nth Node From End of List.*/