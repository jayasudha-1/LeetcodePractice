//Iterative Method: time :O(m+n), space: O(1)
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to help build the result list
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Traverse both lists while both are non-empty
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
      // If there are remaining nodes in either list, append them
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    }
    
    // Return the merged list, which starts from the next node of dummy
    return dummy.next;
};

/* Recursive method: time :O(m+n), space: O(m+n)
var mergeTwoLists = function(list1, list2) {
    // Base case: if either list is empty, return the other list
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    
    // Recursively merge the lists based on the smaller node
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
