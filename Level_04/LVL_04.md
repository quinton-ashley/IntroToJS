# Level 04 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen2.jpg)

## Coding Philosophy: Naming variables

Good code should be easy for other programmers (humans) to read and efficient for your computer to run. Here are some guidelines for how to write good code!

Above all, it's important to put effort into thinking of GOOD names for your variables. Good variable names in Javascript are short and concise descriptors. Write sufficiently detailed comments in your code too.

## const

```js
const b = 1;
b = 2; // ERROR! b is a constant
```

Unlike variables created using `let`, variables created with `const` are constants. When they are assigned a value they can not be assigned another.

## String.split(separator)

Strings have a lot of useful functions we can use. MDN, the Mozilla Developer Network, is a really great resource for learning JS. Documentation for the String class can be found here:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

`.split(char)` splits a String by a pattern creating an array of Strings

```js
// split by ' ' to get an array of words
'the red fox'.split(' ');
// -> ['the', 'red', 'fox']
```

# Level 04 B

## Getting the length of a String

`.length` is used to get the amount of items in an array and it can also be used to get the amount of characters in a String.

## Getting an array of characters from a String

You can also split a String into individual characters using the `split` function with an empty String as the input.

```js
'the red fox'.split('');
// -> [ "t", "h", "e", " ", "r", "e", "d", " ", "f", "o", "x" ]
```

## array.join(separator)

The Array `join` function creates a String by joining each element in the array together, inserting an optional separator String between each item.

```js
let names = ['Amy', 'Ellie', 'Max'];
names.join(' ~ ');
// -> 'Amy ~ Ellie ~ Max'
```

# Level 04 C

## Accessing items in an Array

Items in an array can be accessed by putting the position number of the item inside square brackets `[]` at the end of the name of the array.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];

console.log(names[0]); // prints the String 'Amy' to the JS console
console.log(nums[1]); // prints the Number 21 to the JS console
```

## Editing items in an Array

Items in an array can also be edited using `[]` (aka sub).

```js
names[2] = 'Ben'; // edits the item at position 2 in the names array
// names -> ['Amy', 'Ellie', 'Ben']

nums[1] += 4; // edits the item at position 1 in the nums array
// num -> [50, 25, 42, 83]
```

## Accessing characters in a String

To access characters in a String you can use `[]` just like with accessing items in arrays!

```js
let animal = 'the red fox';
console.log(animal[4]); // prints 'r'
```

However, Strings are immutable, meaning individual characters in the String can not be edited like you can with individual elements in an array.

```js
animal[8] = 'b'; // ERROR: won't change String to 'the red box'
animal = 'the red box'; // this will work!
```

# Level 04 D

## Implied boolean conditions

In this example, if the boolean variable `playerIsDead` gets set to `true`, then tell the user "Game Over!".

```js
if (playerIsDead == true) {
	await alert('Game Over!');
}
```

In Javascript you don't have to use `== true` in boolean conditions because checking for equivalence to `true` is implied. You can just put the variable in a boolean condition on it's own.

```js
if (playerIsDead) {
	await alert('Game Over!');
}
```

You can use the not symbol `!` in front of booleans to check if something is not true.

```js
if (!isPlaying) {
	pause();
}
```

## Breaking out of a loop

In the card game, Uno, players must play a card matching the color or value of the last card played. They can also play a wild card. If none of the cards in their hand meet these requirements then the player has to pick cards from the deck. Here's an example of one turn in Uno:

```js
let topCard = 'Blue 2';
topCard = topCard.split(' ');
let color = topCard[0];
let value = topCard[1];

let hand = ['Red 5', 'Green 3'];
let card;

for (let i = 0; i < hand.length + 1; i++) {
	if (i < hand.length) {
		card = hand[i];
	} else {
		card = pickACard(); // pick a card from the deck
		hand.push(card); // add the card to the player's hand
	}

	// card can be played so break out of the for loop!
	if (card.includes(color) || card.includes(value) || card.includes('Wild')) {
		break; // exit the loop
	}
}

placeTopCard(card); // play the card
```

## Computer History: Apple II

This level's computer was inspired by the Apple II. For many people in the US, the Apple II was the first computer they ever used at their home or school. Check out this video about it if you'd like!

https://www.youtube.com/watch?v=CxJwy8NsXFs

- [Level 04 A](#level-04-a)
	- [Coding Philosophy: Naming variables](#coding-philosophy-naming-variables)
	- [const](#const)
	- [String.split(separator)](#stringsplitseparator)
- [Level 04 B](#level-04-b)
	- [Getting the length of a String](#getting-the-length-of-a-string)
	- [Getting an array of characters from a String](#getting-an-array-of-characters-from-a-string)
	- [array.join(separator)](#arrayjoinseparator)
- [Level 04 C](#level-04-c)
	- [Accessing items in an Array](#accessing-items-in-an-array)
	- [Editing items in an Array](#editing-items-in-an-array)
	- [Accessing characters in a String](#accessing-characters-in-a-string)
- [Level 04 D](#level-04-d)
	- [Implied boolean conditions](#implied-boolean-conditions)
	- [Breaking out of a loop](#breaking-out-of-a-loop)
	- [Computer History: Apple II](#computer-history-apple-ii)
