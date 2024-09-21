/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = 'aeiouAEIOU';
    
    // Initialize a count to store the number of vowels
    let vowelCount = 0;
    
    // Iterate through each character in the input string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is, increment the vowel count
            vowelCount++;
        }
    }
    
    return vowelCount;
}


module.exports = countVowels;