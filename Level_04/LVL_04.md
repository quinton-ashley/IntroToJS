---
# Level 04 A
---

## Coding Philosophy: Remember to log!

Remember that `log` is a shortcut in QuintOS for the JavaScript `console.log` function. It can print the value of variables to the JS console. It's really useful for quickly investigating problems with your program or just to see if it's working the way you intended.

```js
log('test your code!');
log(x); // print the value of a variable
```

---

## const

```js
const b = 1;
b = 2; // ERROR! b is a constant
```

Unlike variables created using `let`, variables created with `const` are constants. When they are assigned a value they can not be assigned another.

---

## String.split(separator)

Strings have a lot of useful functions we can use. MDN, the Mozilla Developer Network, is a really great resource for learning JS. Documentation for the String class can be found here:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

`.split(char)` splits a String by a pattern creating an array of Strings

```js
// split by ' ' to get an array of words
'the red fox'.split(' ');
// -> ['the', 'red', 'fox']
```

---

# Level 04 B

---

## Adding to Arrays

Use the `.push()` function. Weird name huh? It's based on the metaphor of a stack of papers.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];

names.push('Jake'); // adds "Jake" to names array
// names -> ['Amy', 'Ellie', 'Max', 'Jake']

nums.push(97); // adds 97 to the nums array
// nums -> [50, 21, 46, 83, 97]
```

---

## Getting the length of a String

`.length` is used to get the amount of items in an array and it can also be used to get the amount of characters in a String.

## array.join(separator)

The Array `join` function creates a String by joining each element in the array together, inserting an optional separator String between each item.

```js
let names = ['Amy', 'Ellie', 'Max'];
names.join(' ~ ');
// -> 'Amy ~ Ellie ~ Max'
```

---

# Level 04 C

---

## Editing items in an Array

Items in an array can also be edited using `[]` (aka sub).

```js
names[2] = 'Ben'; // edits the item at position 2 in the names array
// names -> ['Amy', 'Ellie', 'Ben']

nums[1] = 4; // edits the item at position 1 in the nums array
// num -> [50, 4, 42, 83]
```

---

## Accessing characters in a String

To access characters in a String you can use `[]` just like with accessing items in arrays!

```js
let animal = 'the red fox';
log(animal[0]); // prints 't'
log(animal[1]); // prints 'h'
log(animal[4]); // prints 'r'
```

However, Strings are immutable, meaning individual characters in the String can not be edited like you can with individual elements in an array.

```js
animal[8] = 'b'; // ERROR: won't change String to 'the red box'
animal = 'the red box'; // this will work!
```

---

# Level 04 D

---

## Implied boolean conditions

In this example, if the boolean variable `gameOver` gets set to `true`, then tell the user "Game Over!".

```js
if (gameOver == true) {
	await alert('Game Over!');
}
```

---

In Javascript you don't have to use `== true` in boolean conditions because checking for equivalence to `true` is implied. You can just put the variable in a boolean condition on it's own.

```js
if (gameOver) {
	await alert('Game Over!');
}
```

---

You can use the not symbol `!` in front of booleans to check if something is not true.

```js
if (!isPlaying) {
	pause();
}
```

---

# End of Level 04

Sorry if you felt like this after testing your Hangman game!

![am i testing this program or is it testing me?](../src/memes/04_0.png)

---

## Computer History: Apple II

This level's computer was inspired by the Apple II. For many people in the US, the Apple II was the first computer they ever used at their home or school. Check out this video about it if you'd like!

<https://www.youtube.com/watch?v=CxJwy8NsXFs>

---
