//Iterative Method: time :O(m+n), space: O(1)
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to help build the result list
    let dummy = new ListNode(-1);
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
    
    // If one of the lists is not empty, attach it to the end of the result
    current.next = list1 !== null ? list1 : list2;
    
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
