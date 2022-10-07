# CodeBreaker

A program that uses the Caesar Cipher to encrypt and decrypt secret messages.

https://en.wikipedia.org/wiki/Caesar_cipher

## Instructions for Part A

Create a Caesar Cipher encryption algorithm. For now, try shifting all the letters in the "BABEL" one letter position to the right. The encrypted message should be "CBCFM". HINT: Make a variable called `message` and set it to "BABEL". Make an string with every capitalized letter of the alphabet in it. Next make a `for` loop to go through each letter in the message. Make a for loop to find each letter's position in the alphabet. Shift the letter by one and add it to a string called `secret` which will contain the encoded message. Display the encoded message to the user!

The encrypted string `secret` should include all the spaces, punctuation symbols, and numbers found in the `message` string. Try adding non-letter characters to your `message` string. Make sure the `secret` string includes them.

Prompt the user for a message they would like to encode. You will need to change the user's message to all upper case or modify your encryption algorithm to handle lower case letters.

Prompt the user for the Caesar Cipher key, the shift amount, and modify your encryption algorithm to use it. Users should be able to either enter a number or letter. For example if a user enters the letter "c", it should be equivalent to a positive shift of 2.

Try the word "zebra" and shift by 1. "z" should become "a" but it doesn't. HINT: Remember the modulo operator % gets the remainder of a division.

## Instructions for Part B

Give users the option to load text from a .txt plaintext file.

## Instructions for Part C

Allow the user to decrypt Caesar Cipher messages without knowing the shift amount: code breaking!! Allow the user to easily view truncated (sliced!) results of using different shift amounts on the secret message. Create 25 buttons on the screen, one for each shift amount. When a user clicks a button, clear the screen and display the full result.
