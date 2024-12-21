var findKthLargest = function(nums, k) {
    // Create a Min Heap
    const minHeap = new MinPriorityQueue();

    // Iterate over each number in nums
    for (const num of nums) {
        minHeap.enqueue(num); // Add the current number to the heap
        
        // Maintain only k elements in the heap
        if (minHeap.size() > k) {
            minHeap.dequeue(); // Remove the smallest element
        }
    }

    // The root of the Min Heap is the kth largest element
    return minHeap.front().element;
};

/*

Example 1:
nums = [3, 2, 1, 5, 6, 4], k = 2

Add 3 → Heap: [3]
Add 2 → Heap: [2, 3]
Add 1 → Heap: [1, 2, 3] → Remove 1 (smallest). Heap: [2, 3]
Add 5 → Heap: [2, 3, 5] → Remove 2. Heap: [3, 5]
Add 6 → Heap: [3, 5, 6] → Remove 3. Heap: [5, 6]
Add 4 → Heap: [4, 5, 6] → Remove 4. Heap: [5, 6]
Result: The root of the heap (5) is the 2nd largest element.
Output: 5

*/


//Another Approach:

var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();

    // Add the first k elements to the heap
    for (let i = 0; i < k; i++) {
        minHeap.enqueue(nums[i]);
    }

    // For the rest of the elements, if they are larger than the heap's root, replace it
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.front().element) {
            minHeap.dequeue();
            minHeap.enqueue(nums[i]);
        }
    }

    return minHeap.front().element; // The root of the Min Heap is the kth largest element
};
