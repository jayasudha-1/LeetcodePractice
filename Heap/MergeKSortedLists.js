/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    // Helper function to merge two sorted linked lists
    function mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;

        return dummy.next;
    }
    // Divide and Conquer: repeatedly merge pairs of lists
    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            // Merge pairs of lists
            let l1 = lists[i];
            let l2 = lists[i + 1] || null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists; // Update the lists with the merged results
    }

    return lists[0]; // Final merged list
   
};

//Divide and Conquer	:O(N logk)
