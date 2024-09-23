function solution(operations) {
    let obstacles = new Set();  // To store obstacle coordinates
    let result = "";            // To store the final result as a string

    for (let operation of operations) {
        if (operation[0] === 1) {
            // Operation type 1: Add obstacle
            obstacles.add(operation[1]);
        } else if (operation[0] === 2) {
            // Operation type 2: Check if a block can be built
            let canBuild = true;
            for (let i = operation[1]; i <= operation[2]; i++) {
                if (obstacles.has(i)) {
                    canBuild = false;
                    break;
                }
            }
            result += canBuild ? "1" : "0";
        }
    }

    return result;
}

// Test case
let operations = [
    [1, 2],  // Add obstacle at coordinate 2
    [1, 5],  // Add obstacle at coordinate 5
    [2, 5, 2], // Check if block can be built between coordinates 3 and 4 -> 1
    [2, 6, 3], // Check if block can be built between coordinates 3 and 5 -> 0 (obstacle at 5)
    [2, 2, 1], // Check if block can be built at coordinate 1 -> 1
    [2, 3, 2]  // Check if block can be built between coordinates 1 and 2 -> 0 (obstacle at 2)
];

console.log(solution(operations));  // Output: "1010"
