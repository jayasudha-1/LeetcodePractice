// Define the ListNode class
class ListNode {
    constructor(val) {
        this.val = val;  // The value of the node
        this.next = null; // Pointer to the next node
    }
}
//ONLY THIS FUNCTION IS NEEDED FOR LEETCODE
// Function to delete duplicates
var deleteDuplicates = function(head) {
    let current = head;  
    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the next node since it's a duplicate
            current.next = current.next.next;
        } else {
            // Move to the next node if no duplicate
            current = current.next;
        }
    }
    return head;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null; // Return null for empty array
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list back to array for easy output
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Create the linked list from an array
let head = createLinkedList([1, 1, 2, 3, 3]);

// Call the function
let result = deleteDuplicates(head);

// Convert the result back to array and log it
console.log(linkedListToArray(result)); // Output: [1, 2, 3]
