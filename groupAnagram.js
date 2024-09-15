var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};

let strs = ["eat","tea","tan","ate","nat","bat"];
let result = groupAnagrams(strs);
console.log(result);