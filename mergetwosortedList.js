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