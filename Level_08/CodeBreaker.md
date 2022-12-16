# CodeBreaker

A program that uses the Caesar Cipher to encrypt and decrypt secret messages.

https://en.wikipedia.org/wiki/Caesar_cipher

## Instructions for Part A

Create a Caesar Cipher encryption algorithm. For now, try shifting all the letters in the "BABEL" one letter position to the right. The encrypted message should be "CBCFM". HINT: Make a variable called `message` and set it to "BABEL". Make an string with every capitalized letter of the alphabet in it. Next make a `for` loop to go through each letter in the message. Make a for loop to find each letter's position in the alphabet. Use `break` when you find each letter, since your program doesn't need to search through the rest of the alphabet. Shift the letter by one and add it to a string called `secret` which will contain the encoded message. Display the encoded message to the user!

The encrypted string `secret` should include all the spaces, punctuation symbols, and numbers found in the `message` string. Try adding non-letter characters to your `message` string. Make sure the `secret` string includes them.

Prompt the user for a message they would like to encode. You will need to change the user's message to all upper case or for an extra challenge, modify your encryption algorithm to handle upper and lower case letters.

Try the word "zebra" and shift by 1. "z" should become "a" but it doesn't.

Prompt the user for the Caesar Cipher key, the shift amount, and modify your encryption algorithm to use it.

Users should be able to use a letter for the shift amount. For example if a user enters the letter "c", it should be equivalent to a positive shift of 2. (a=0, b=1, c=2, d=3, etc.)

## Instructions for Part B

Give users the option to load text from a plaintext file with the ".txt" file extension.

While you're testing the program make the file name hardcoded to "secrets.txt".

## Instructions for Part C

Move your Caesar Cipher algorithm into its own function. The function should accept a string to encrypt/decrypt and a shift amount as a parameter. The function should return the encrypted or decrypted message.

```js
function ceasarCipher(message, shiftAmount) {
	// code here
}
```

## Instructions for Part D

Ask the user if they know the shift value they want to use. If they say "yes" the program should ask the user for the shift amount.

If the user doesn't know what shift amount is needed to decrypt a secret message, enable the user to decrypt Caesar Cipher messages with brute force code breaking! Show the result of applying all 25 unique shift amounts to part of the message. Enable the user to select the successfully decoded message from the results and see the full length decoded message. HINT: One way of doing this is to create 25 buttons on the screen, one for each shift amount. If you have one button on each row they will not be able to show the full message. Use slice to only attempt to decode part of the message to show on each button. When the user clicks a button, clear the screen and display the full result.
