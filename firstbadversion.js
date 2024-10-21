// Mock isBadVersion API
const isBadVersion = function(version) {
    const bad = 4;  // The first bad version is 4
    return version >= bad;
};

// Solution function using binary search to find the first bad version
var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            if (isBadVersion(mid)) {
                right = mid;  // First bad version could be mid or before mid
            } else {
                left = mid + 1;  // First bad version must be after mid
            }
        }
        
        return left;  // This is the first bad version
    };
};

// Test case: n = 5, first bad version = 4
let n = 5;
let findFirstBadVersion = solution(isBadVersion);
let result = findFirstBadVersion(n);
console.log(result);  // Expected output: 4
