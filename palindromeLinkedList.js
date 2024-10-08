var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
        let nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }
    // Step 3: Compare the first half and the reversed second half
    let firstHalf = head;
    let secondHalf = prev;  // This is the head of the reversed second half
    
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
};