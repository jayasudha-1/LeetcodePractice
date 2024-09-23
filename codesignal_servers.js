function routes(numServers, disconnectedPairs) {
    // Create an array to mark if a pair of consecutive servers is disconnected
    let isDisconnected = Array(numServers - 1).fill(false); // Only n-1 possible disconnections between consecutive servers

    // Mark disconnected pairs (1-based index)
    for (let [a, b] of disconnectedPairs) {
        if (b - a === 1) {
            // Only mark as disconnected if b is exactly the next server after a
            isDisconnected[a - 1] = true; // Mark the disconnection between servers a and b
        }
    }

    let goodSegmentCount = 0;

    // Iterate over all possible subsegments
    for (let start = 0; start < numServers; start++) {
        let isGood = true;
        // Check subsegments starting at 'start'
        for (let end = start; end < numServers; end++) {
            if (end > start && isDisconnected[end - 1]) {
                // If there's a disconnection between two consecutive servers, stop
                isGood = false;
            }
            if (isGood) {
                goodSegmentCount++; // Count the current subsegment if it's good
            }
        }
    }

    return goodSegmentCount;
}

// Example usage:
let numServers = 4;
let disconnectedPairs = [[1, 2], [2, 3]];

console.log(routes(numServers, disconnectedPairs)); // Output: 5
