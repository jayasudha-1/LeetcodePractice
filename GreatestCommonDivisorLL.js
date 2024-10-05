var insertGreatestCommonDivisors = function(head) {
    const gcd=(a,b)=>{
        while(b!=0){
            temp=b;
            b=a%b;
            a=temp;
        }
        return a;
    };
    let current=head;
    while(current && current.next){
        const gcdValue=gcd(current.val,current.next.val);
        const newNode = new ListNode(gcdValue);
        newNode.next=current.next;
        current.next = newNode;
        current=newNode.next;// current = current.next.next; --can write like this too
    }
    return head;  
};