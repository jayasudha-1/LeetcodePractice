var getIntersectionNode = function(headA, headB) {
    if(headA===null || headB ===null) return null;

    let ptrA= headA;
    let ptrB=headB;

    while(ptrA !== ptrB){
        ptrA=(ptrA === null)? headB:ptrA.next;
        ptrB=(ptrB === null)? headA:ptrB.next;
    }
    return ptrA;
    
};