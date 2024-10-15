var sortList = function(head) {
    if(head===null || head.next===null)
    return head;

    let slow=head;
    let fast=head;
    let prev=null;

    while(fast !==null&&fast.next!==null){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    prev.next=null;
    let left=sortList(head);
    let right=sortList(slow);

    return merge(left,right);
    //Helper function to merge list
    function merge(l1, l2) {
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
    // If one list is exhausted, append the other list
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}
};

//Input: head = [4,2,1,3]
//Output: [1,2,3,4]