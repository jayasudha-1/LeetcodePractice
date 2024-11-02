var minEatingSpeed = function(piles, h) {
    // Function to check if Koko can finish all bananas at a given speed `k`
    const canFinish = (k) => {
        let hours = 0;
        for (let pile of piles) {
            // Calculate hours needed for this pile and add to total
            hours += Math.ceil(pile / k);
        }
        // Return true if total hours is within the allowed time `h`
        return hours <= h;
    };

    // Start binary search for `k` between 1 and the largest pile size
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        // Check the middle speed `k`
        let mid = Math.floor((left + right) / 2);

        // If Koko can finish at this speed, try a smaller speed
        if (canFinish(mid)) {
            right = mid;
        } else {
            // Otherwise, try a larger speed
            left = mid + 1;
        }
    }

    // The left value will be the minimum speed at which Koko can finish in `h` hours
    return left;
};
/*Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/