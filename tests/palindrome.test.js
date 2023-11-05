const chai = require('chai');
const assert = chai.assert;

const palindrome = require('../src/index');

describe('palindrome', () => { 
    it('should return true for a palindrome', () => {
        assert.isTrue(palindrome('racecar'));
        assert.isTrue(palindrome('A man a plan a canal Panama'));
        assert.isTrue(palindrome('Was it a car or a cat I saw?'));
    });

    it('should return false for a non-palindrome', () => {
        assert.isFalse(palindrome('not a palindrome'));
        assert.isFalse(palindrome('nope'));
        assert.isFalse(palindrome('almostomla'));
    });
 });
