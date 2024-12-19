function isPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitive palindromes
  str = str.toLowerCase();
  // Reverse the string
  const reversedStr = str.split("").reverse().join("");
  // Log the original and reversed strings to the console
  console.log("Original string:", str);
  console.log("Reversed string:", reversedStr);
  // Return true if the original and reversed strings are equal, false otherwise
  return str === reversedStr;
}

// Example usage with prompt function for user input:
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

console.log(word1 + " is a palindrome: " + isPalindrome(word1));
console.log(word2 + " is a palindrome: " + isPalindrome(word2));

