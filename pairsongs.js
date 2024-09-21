var numPairsDivisibleBy60 = function(time) {
    let remainderMap = new Map(); // Map to store counts of remainders
    let count = 0;  // To count the number of valid pairs

    for (let t of time) {
        let remainder = t % 60;  // Calculate the remainder of the song duration
        let complement = (60 - remainder) % 60;  // Find the complement remainder that sums to 60
        
        // If the complement exists in the map, add its count to the total
        if (remainderMap.has(complement)) {
            count += remainderMap.get(complement);
        }
        
        // Update the map with the current remainder count
        remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);
    }
    
    return count;  // Return the total number of pairs
};

//Test case
time = [30,20,150,100,40]
result=numPairsDivisibleBy60(time);
console.log(result);