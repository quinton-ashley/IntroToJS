# CodeBreaker

A program that uses the Caesar Cipher to encrypt and decrypt secret messages.

https://en.wikipedia.org/wiki/Caesar_cipher

## Instructions for Part A

Create a Caesar Cipher encryption algorithm. For now, try shifting all the letters in the "BABEL" one letter position to the right. The encrypted message should be "CBCFM". Make a variable called `msg` and set it to "Babel". Make an array with every letter of the alphabet in it. Next make a `for` loop to go through each letter in the message and find it's position in the alphabet. Add the shifted letters to a string called `secret` which will contain the decoded message. Display the encoded message to the user!

Your encryption algorithm should not shift punctuation symbols or numbers. Check each character to see if it is included in the alphabet, only shift letters.

Prompt the user for a text message they would like to encode.

Prompt the user for the Caesar Cipher key, the shift amount, and modify your encryption algorithm to use it. Users should be able to either enter a number or letter. For example if a user enters the letter "c", it should be equivalent to a positive shift of 2.

Try the word "zebra" and shift by 1. "z" should become "a" but it doesn't. HINT: Remember the modulo operator % gets the remainder of a division.

## Instructions for Part B

Give users the option to load text from a .txt plaintext file.

Allow the user to decrypt Caesar Cipher messages, code break, by allowing them to test different shift amounts on the message.
