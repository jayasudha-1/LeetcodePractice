var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr != null){
        nextTemp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextTemp;
    }
    return prev;
};