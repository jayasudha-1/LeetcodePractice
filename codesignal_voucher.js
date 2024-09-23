function minimumCost(prices, voucherCount) {
    // Convert prices into an array of objects to track the price and the number of vouchers applied
    let voucherUses = new Array(prices.length).fill(0);

    // Apply all vouchers
    for (let i = 0; i < voucherCount; i++) {
        // Find the index of the item with the maximum effective price after applying vouchers
        let maxIndex = 0;
        for (let j = 1; j < prices.length; j++) {
            if (prices[j] / Math.pow(2, voucherUses[j]) > prices[maxIndex] / Math.pow(2, voucherUses[maxIndex])) {
                maxIndex = j;
            }
        }

        // Apply the voucher to the item with the maximum effective price
        voucherUses[maxIndex]++;
    }

    // Calculate the final total price after applying all vouchers
    let totalCost = 0;
    for (let i = 0; i < prices.length; i++) {
        totalCost += prices[i] / Math.pow(2, voucherUses[i]);
    }

    return totalCost;
}

// Example usage
let prices = [8, 2, 13];
let voucherCount = 3;

console.log(minimumCost(prices, voucherCount).toFixed(0)); // Output: 9
