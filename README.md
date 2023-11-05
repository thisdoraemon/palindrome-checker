# Palindrome Checker

A simple JavaScript program to check if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring punctuation, case, and spacing.

This project is based on a [freeCodeCamp](https://www.freecodecamp.org/) JavaScript Data Structures and Algorithms project.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project's root directory in your terminal.

## Usage

The main functionality of this project is provided in the `palindrome` function.

### Example

```javascript
const palindrome = require('./src/index');

console.log(palindrome("racecar")); // true
console.log(palindrome("A man a plan a canal Panama")); // true
console.log(palindrome("Was it a car or a cat I saw?")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
```

You can use the `palindrome` function to check whether a given string is a palindrome.

### Testing
This project includes `Mocha` tests to ensure that the palindrome function works correctly. To run the tests, follow these steps:
1. Make sure you have Mocha and Chai installed. If not, you can install them via npm:
   
   ```shell
    npm install mocha chai --save-dev
   ```
   
2. Navigate to the project's root directory in your terminal.
   
3. Run the tests using the following command:
   
   ```shell
   npx mocha palindrome.test.js
   ```
   
This will execute the tests and provide you with feedback on whether the palindrome function is working as expected.

## Credits

This project was provided by [freeCodeCamp](https://www.freecodecamp.org/)

