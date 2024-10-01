var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels);  // Use a Set to store jewels
    let count = 0;
    // Iterate through stones and count how many are in the jewelSet
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count;
};
//testcases
let  jewels = "aA", stones = "aAAbbbb";
result=numJewelsInStones(jewels, stones);
console.log(result);