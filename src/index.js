function palindrome(str) {  
    let lowerRegexStr = str.toLowerCase().replace(/[\W_]/g, "");
    let reverseStr = lowerRegexStr.split("").reverse().join("");
    return reverseStr === lowerRegexStr;
}

module.exports = palindrome;
