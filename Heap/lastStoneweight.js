var lastStoneWeight = function(stones) {
    // Step 1: Create a Max Priority Queue
    const maxHeap = new MaxPriorityQueue();

    // Step 2: Add all stones to the heap
    for (const stone of stones) {
        maxHeap.enqueue(stone);
    }

    // Step 3: Smash stones until one or none remain
    while (maxHeap.size() > 1) {
        const largest = maxHeap.dequeue().element;  // Get the largest stone
        const secondLargest = maxHeap.dequeue().element;  // Get the second largest stone

        if (largest !== secondLargest) {
            maxHeap.enqueue(largest - secondLargest);  // Add the difference back to the heap
        }
    }

    // Step 4: Return the last remaining stone or 0 if no stones are left
    return maxHeap.size() === 0 ? 0 : maxHeap.front().element;
};
