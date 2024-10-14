// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to add two numbers represented as linked lists
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Placeholder for the result linked list
    let current = dummyHead; // Pointer to build the result linked list
    let carry = 0; // Initialize carry to zero
    
    // Traverse both linked lists
    while (l1 !== null || l2 !== null) {
        // Get the current values from l1 and l2, or 0 if one list is shorter
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        
        // Calculate the sum of the current digits and the carry
        let sum = carry + x + y;
        
        // Update carry for next iteration
        carry = Math.floor(sum / 10);
        
        // Create a new node with the sum's digit (sum % 10)
        current.next = new ListNode(sum % 10);
        
        // Move to the next node in the result list
        current = current.next;
        
        // Move to the next nodes in l1 and l2 if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    // If there is any carry left, create a new node for it
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    // The result list starts after the dummy head
    return dummyHead.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Example: Creating linked lists from arrays l1 = [2, 4, 3], l2 = [5, 6, 4]
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

// Call the addTwoNumbers function and print the result
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output should be: 7 -> 0 -> 8
