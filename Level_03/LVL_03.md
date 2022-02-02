# Level 03 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen2.jpg)

## Coding Philosophy: Naming variables

Good code should be easy for other programmers (humans) to read and efficient for your computer to run. Here are some guidelines for how to write good code!

Above all, it's important to put effort into thinking of GOOD names for your variables. Good variable names in Javascript are short and concise descriptors. Write sufficiently detailed comments in your code too.

## String.split(seperator)

Strings have a lot of useful functions we can use. MDN, the Mozilla Developer Network, is a really great resource for learning JS. Documentation for the String class can be found here:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

`.split(char)` splits a String by a pattern creating an array of Strings

```js
// split by ' ' to get an array of words
'the red fox'.split(' ');
// -> ['the', 'red', 'fox']
```

## Accessing items in an Array

The `[]` square brackets are used to create arrays and are also used to access items in an array.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];

console.log(names[0]); // prints 'Amy'
console.log(nums[1]); // prints 21
```

Items in an array can also be edited using `[]` (aka sub).

```js
names[2] = 'Ben';
// edits the list: ['Amy', 'Ellie', 'Ben']
nums[1] = 36;
// edits the list: [50, 36, 42, 83]
```

## End of Level 03 A

# Level 02 B

## Getting the length of a String

`.length` is used to get the amount of items in an array and it can also be used to get the amount of characters in a String.

## Accessing characters in a String

To access characters in a String you can use `[]` but note that you can't edit them like you can with arrays.

```js
let animal = 'the red fox';
console.log(animal[4]); // prints 'r'
animal[8] = 'b'; // error
// will not change fox String to 'the red box'
```

Strings are immutable, meaning individual characters in the String can not be changed.

## Getting an array of characters from a String

You can also split a String into individual characters using the `split` function with an empty String as the input.

```js
'the red fox'.split('');
// -> [ "t", "h", "e", " ", "r", "e", "d", " ", "f", "o", "x" ]
```

## array.join(separator)

The Array `join` function creates a String by joining each element in the array together, inserting an optional seperator String between each item.

```js
let names = ['Amy', 'Ellie', 'Max'];
names.join(' ~ ');
// -> 'Amy ~ Ellie ~ Max'
```

## End of Level 03 B

# Level 03 C

## Counting with while loops

The number of loops a while loop does can be counted with a variable.

```js
let names = ['Jake', 'Ali', 'Ben', 'Cam'];

let i = 0; // initialize i to 0

// loop while i is less than names.length which is 4
while (i < names.length) {
	// print the next name in the list
	console.log(i + '. ' + names[i]);

	i = i + 1;
} // in this loop i goes up from 0 to 1 to 2 to 3
```

The code above prints out a numbered list of names in the JS console.

```txt
0. Jake
1. Ali
2. Ben
3. Cam
```

# Level 03 D

## for loops

Scroll up and take another look at the example of the while loop with a counter variable, then check out this for loop! It does the same thing but all the steps related to the index variable are written as one line. The order of their operation is still the same.

```java
String[] names = new String[]{"Jake", "Ali", "Ben", "Cam"};

// (INITIALIZER; CONDITION; INCREMENATION)
for (int i = 0; i < names.length; i++) {
	// print the next name in the list
	System.out.println(i + '. ' + names[i]);
}
```

When the for loop starts `i` is set to 0, then is check the condtion. If the condition is true the for loop runs for the first time, this is called an iteration. When the for loop ends, the incrementor section of the for loop is run, in this case `i++` which increases the value of `i` by 1. The condition is checked again, if true the for loop will repeat again, doing another iteration. Until the condition is false the for loop will continue to repeat.

## Breaking out of a loop early

Take a look at this example code that searches for the Ace of Spades in a deck of cards.

```js
let card; // no card picked yet

while (card != 'Ace of Spades') {
	card = pickACard();
}

await alert('Found the Ace of Spades!');
```

If there are no cards left in the deck, the Ace of Spades can not be found. The while loop would keep looping infinitely! Let's imagine the `pickACard` function would return `null`, a special value that means none if there are no cards left in the deck. The while loop condition would remain true forever, so the loop must be exited early by using the `break` keyword.

```js
let card;

while (card != 'Ace of Spades') {
	card = pickACard();

	if (card == null) {
		break; // exit the while loop
	}
}

if (card == 'Ace of Spades') {
	await alert('Found the Ace of Spades!');
} else {
	await alert('The Ace of Spades was not in the deck!');
}
```

## Computer History: Apple II

This level's computer was inspired by the Apple II. Check out this video about it if you'd like!

https://www.youtube.com/watch?v=CxJwy8NsXFs

- [Level 03 A](#level-03-a)
  - [Coding Philosophy: Naming variables](#coding-philosophy-naming-variables)
  - [String.split(seperator)](#stringsplitseperator)
  - [Accessing items in an Array](#accessing-items-in-an-array)
  - [End of Level 03 A](#end-of-level-03-a)
- [Level 02 B](#level-02-b)
  - [Getting the length of a String](#getting-the-length-of-a-string)
  - [Accessing characters in a String](#accessing-characters-in-a-string)
  - [Getting an array of characters from a String](#getting-an-array-of-characters-from-a-string)
  - [array.join(separator)](#arrayjoinseparator)
  - [End of Level 03 B](#end-of-level-03-b)
- [Level 03 C](#level-03-c)
  - [Counting with while loops](#counting-with-while-loops)
- [Level 03 D](#level-03-d)
  - [for loops](#for-loops)
  - [Breaking out of a loop early](#breaking-out-of-a-loop-early)
  - [Computer History: Apple II](#computer-history-apple-ii)
