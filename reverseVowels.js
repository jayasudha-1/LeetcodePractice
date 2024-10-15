var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'; // Step 1: Define the vowels
    let left = 0; // Initialize the left pointer
    let right = s.length - 1; // Initialize the right pointer
    const sArray = s.split(''); // Convert the string to an array for easier modification

    while (left < right) { // Step 2: Loop until the two pointers meet
        // Move the left pointer to the next vowel
        while (left < right && !vowels.includes(sArray[left])) {
            left++; // Increment left if it's not a vowel
        }

        // Move the right pointer to the next vowel
        while (left < right && !vowels.includes(sArray[right])) {
            right--; // Decrement right if it's not a vowel
        }

        // Swap the vowels at the left and right pointers
        [sArray[left], sArray[right]] = [sArray[right], sArray[left]];

        left++; // Move the left pointer inward
        right--; // Move the right pointer inward
    }

    // Convert the array back to a string
    return sArray.join(''); // Step 3: Join the modified array into a string and return it
};

/*
var reverseVowels = function(s) {
    // Define the set of vowels
    const vowels = 'aeiouAEIOU';
    let vowelIndices = [];  // Array to store the indices of vowels
    let vowelsList = [];     // Array to store the vowels found

    // First pass: Collect the vowels and their indices
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelIndices.push(i);  // Store the index of the vowel
            vowelsList.push(s[i]);  // Store the vowel itself
        }
    }

    // Reverse the vowels list
    vowelsList.reverse();

    // Second pass: Build the result string
    let result = s.split('');  // Convert the string to an array for easy manipulation
    for (let i = 0; i < vowelIndices.length; i++) {
        result[vowelIndices[i]] = vowelsList[i];  // Replace the vowel with the reversed one
    }

    return result.join('');  // Join the array back into a string
};
*/