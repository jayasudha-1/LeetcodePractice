// TrieNode class represents a single node in the Trie
class TrieNode {
    constructor() {
        this.children = {}; // Dictionary to store child nodes, where keys are characters
        this.isEndOfWord = false; // Boolean to mark if this node is the end of a word
    }
}

// Trie class implements the Trie data structure and its operations
class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the Trie with an empty root node
    }

    // Method to insert a word into the Trie
    insert(word) {
        let node = this.root; // Start at the root node
        for (const char of word) { // Iterate through each character in the word
            if (!node.children[char]) { // If the character is not in the current node's children
                node.children[char] = new TrieNode(); // Create a new TrieNode for this character
            }
            node = node.children[char]; // Move to the child node representing the character
        }
        node.isEndOfWord = true; // Mark the last node as the end of the word
    }

    // Method to search for a word in the Trie
    search(word) {
        let node = this.root; // Start at the root node
        for (const char of word) { // Iterate through each character in the word
            if (!node.children[char]) { // If the character does not exist in the current node's children
                return false; // Word is not in the Trie
            }
            node = node.children[char]; // Move to the child node representing the character
        }
        return node.isEndOfWord; // Return true if the final node is marked as the end of a word
    }

    // Method to check if any word in the Trie starts with a given prefix
    startsWith(prefix) {
        let node = this.root; // Start at the root node
        for (const char of prefix) { // Iterate through each character in the prefix
            if (!node.children[char]) { // If the character does not exist in the current node's children
                return false; // No word with the given prefix exists in the Trie
            }
            node = node.children[char]; // Move to the child node representing the character
        }
        return true; // All characters in the prefix were found, so return true
    }
}

// Example usage of the Trie class
const trie = new Trie(); // Create a new Trie object
trie.insert("apple"); // Add the word "apple" to the Trie
console.log(trie.search("apple"));   // true: The word "apple" exists in the Trie
console.log(trie.search("app"));     // false: The word "app" does not exist as a complete word
console.log(trie.startsWith("app")); // true: A word in the Trie starts with the prefix "app"
trie.insert("app"); // Add the word "app" to the Trie
console.log(trie.search("app"));     // true: Now the word "app" exists as a complete word
