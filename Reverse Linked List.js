/*Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?*/

//iteratively

var reverseList = function(head) { 
    let previous = null;
    let temp;
    while (head != null) {
      temp = head.next;
      head.next = previous;
      previous = head;
      head = temp;
    }
    return previous;
};

/*Runtime: 72 ms, faster than 79.05% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.6 MB, less than 15.27% of JavaScript online submissions for Reverse Linked List.*/
