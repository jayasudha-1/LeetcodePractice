var topKFrequent = function(nums, k) {
    // Step 1: Count the frequency of each element
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Create an array of buckets to group numbers by frequency
    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    for (const [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    // Step 3: Gather the top k frequent elements from the buckets
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);
};