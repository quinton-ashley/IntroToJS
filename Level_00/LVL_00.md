# Level 00 A

## What is Computer Science?

Why is this field of study called "Computer Science" and not "Program Writing" or "Code Mathematics"? It's because coding requires research and experimentation! You'll often need to test your programs to learn from unexpected errors, then make changes to get the results you want.

These lessons will teach you how to code in JavaScript, which is the most popular modern programming language and my personal favorite! You will have to memorize some vocabulary, grammar, and syntax to learn this new language. However, learning to code isn't what programming is all about, you will also learn how to think like a programmer! Learning to program will improve your logical reasoning and abstract problem solving skills. Programming has a language arts aspect too. You will not only strive to write efficient code for the computer but also code that can be easily understood by other programmers.

## What is QuintOS?

The famous 17th century scientist, Issac Newton, once said, "we stand on the shoulders of giants". To understand how software is developed today it's important to learn a bit about the history of computers.

If you signed up for this course you might want to know how video games work and how to make your own! If not, making games will hopefully be a fun way for you to learn how to code.

QuintOS is a retro game engine I created for this course. During each lesson you'll develop a QuintOS game that runs on virtual computers displayed in your web browser: Google Chrome, Firefox, or Opera. As you level up your coding skills, the virtual computer will get upgraded too. Since you're just starting out, the first game you make will be for... a programmable calculator. 😜

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen0.jpg)

This first lesson will require you to learn a lot of information before we can even make a simple game. It may be a bit overwhelming for you but don't worry! You'll get a lot of practice with these concepts so that you will fully understand them. Let's get started! 🥳

## Creating Variables 🔡

First of all, what is a variable? Variables in JavaScript store data in your computer's memory.

```js
let a = 0;
const b = 1;
```

Use `let` or `const` to create variables. In the example code `a` and `b` are the names of the variables. `a` is assigned the number `0` and `b` is assigned the number `1`. The value of `b` can not be changed because it was declared with `const`.

Semicolons `;` are used to end each line of code. Though they are not required for your computer to run JavaScript, putting a semicolon at the end of each line can make it easier for other humans to read code, especially if it has really long lines. 👁👅👁

## Types of Variables 🔡

### Number

```js
let x = 2;
let y = -49;
let z = 9504.15;
```

### Boolean

Booleans can be either `true` or `false`

```js
let codingIsFun = true;
```

### String

Strings are text, defined by 'apostrophes' or "quotes".

```js
let story = 'I took my dog to the dog park on 3rd Avenue.';
```

ERROR! If you don't use quotes, JavaScript will think the words are variables!

```js
let story = I took my dog to the dog park on 3rd Avenue.;
```

To remember that the data type for text is called String, you can think of lettered beads on a charm bracelet string. This is similar to how text in a string is stored, as a list of characters.

## Camel Case 🐫

Variable names in JS can't have spaces, 🙅‍♂️ so for variables that have multiple words, use camel case! It is called camel case because the first letter of the words after the first word are capitalized, which looks like the humps of a camel? 🤔

```js
let apple = '🍎';
let applePie = '🍎 π';
let applePieIceCream = '🍎 π 🍨';
```

Note that using this naming convention isn't required for JavaScript to run, it's just something that most professional Javascript programmers do to make variable names easier to read. Camel case is a naming convention specific to JavaScript, other programming languages have their own conventions.

### Changing a variable's value

Don't create variables twice!

```js
let x = 10;
let x = 5; // ERROR! x already exists
```

Here's how to change the value of the variable `x`

```js
let x = 10;
x = 5; // good :)
```

Double slash `//` is for making a comment, any text behind it on the same line will not be considered part of the code's instructions. Comments are used to describe what is happening in the code. You might want to make comments so other people can understand your programs or so that you can understand it yourself in case you forget what you did!

## Mathematical operators 🔢

```txt
Addition:       +
Subtraction:    -
Multiplication: *
Division:       /
```

The multiplication symbol is the asterisk, NOT the letter `x`!

```js
let x = 5 * 8; // x -> 40
```

## Checking Equivalence ✅

Single equals `=` is for assigning values to variables. Double equals `==` is a boolean operator used for checking equivalence. What is a boolean operator? It performs an operation that results in either a true or false (boolean) value.

`if` statements use a boolean condition, which goes in parenthesis after the keyword `if`. If the boolean condition is `true`, the code block `{}`, whatever's inside the squiggly brackets, is run.

`else if` and `else` are used after if statements, they form a chain of different paths the code can take if the previous if statements were false.

Take a look at the example below, which assigns a color to the variable `fruitColor` based on the name of the `fruit`.

```js
let fruitColor; // variables can be created without a value assigned to them

// if the fruit is a banana
if (fruit == 'banana') {
	// set the fruitColor to yellow
	fruitColor = 'yellow';
} else if (fruit == 'pear') {
	// else if the fruit is a pear, set the fruitColor to green
	fruitColor = 'green';
} else if (fruit == 'orange') {
	fruitColor = 'orange';
} else if (fruit == 'grape') {
	fruitColor = 'purple';
} else {
	// else the fruit was not a banana, pear, orange, or grape
	// the fruitColor is unknown
	fruitColor = 'unknown';
}
```

What color will be assigned to `fruitColor` if the `fruit` is a pear? What if the fruit is a strawberry?

## Boolean operators 🐰

```txt
Equivalence:              ==
Less than:                <
Less than or equal to:    <=
Greater than:             >
Greater than or equal to: >=
```

Use boolean (true/false) operators in the boolean conditions (inside the parenthesis) of `if` and `else if` statements.

### functions

functions are a reference to other sections of code which you can run using the parenthesis. Input parameters to a function go in the parenthesis.

```js
powerOn();
turn('left');
moveForward(10);
turn('right');
moveForward(2);
```

This code for a robot remote control makes the robot power on, turn to the left, then move forward ten steps, turn to the right, then move forward two steps. Note that functions can do different things depending on their input values.

## Globals 🌐

Globals are special variables that are available for you to use anywhere in your code.

Check out the `alert` and `prompt` global functions for user interaction. The word `await` is used to wait for the user to interact with the prompt or alert window.

```js
// waits for the user to type something and press enter
let favColor = await prompt('What is your favorite color?');
// the user's response to the prompt is assigned to favColor

// waits for user to read the message in the alert and press okay
await alert(favColor + ' is my favorite color too!'); // show message to user
```

## End of Level 00 A

That was a LOT of information! Here's a summary of everything we learned about:

- types of variables: numbers, booleans, Strings and functions
- making boolean conditions to test if something is `true` or `false`
- using double equals to `==` check for equivalence
- `if`, `else if`, and `else` statements
- globals functions `alert`, `prompt`

Now you're ready to start making your first game! 🥳 [Click here for the GuessTheNumber instructions.](https://github.com/quinton-ashley/IntroToJS/blob/main/Level_00/GuessTheNumber.md)

# Level 00 B

Did you complete part A and are ready to learn more? Before we can finish `GuessTheNumber` game we have to learn a bit more stuff.

## Math functions

At this point you should also know about the global object [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), which has many useful functions.

```js
// Math.random() returns a random decimal number between 0 and 1 (not including 1)
let x = Math.random(); // x could be .2364 or .928279 or 0.45398, it's random!

let a = Math.round(30.1); // a -> 30
let b = Math.round(30.7); // b -> 31
// Math.round() rounds the number to the nearest integer

let y = Math.floor(22.9); // y -> 22 (y gets assigned the value 22)
// Math.floor() always rounds down

let z = Math.ceil(15.3); // z -> 16
// Math.ceil() always rounds up (ceil for ceiling)
```

# Level 00 C

## Scopes

Note that if you declare a variable in a code block it will only be available from the beginning to the end of the block. This is called the scope of a variable. The code block/scope begins with this opening squiggly bracket (aka curly brace) `{` and ends with a closing squiggly bracket `}`

```js
if (name == 'Bob') {
	let message = 'Hi Bob!';
}

console.log(message); // ERROR: message is not defined
```

Fix this by initializing `message` outside of the if statement.

```js
let message;
if (name == 'Bob') {
	message = 'Hi Bob!';
}

console.log(message); // good!
```

## while loops

Need to loop some code? Use a while loop! `if` statements run the code in their code block once if their boolean condition is true. `while` loops repeat the code in their code block as long as their boolean condition remains true.

Take a look at the following example. Imagine that the `pickACard` function returns a String with the name of the card taken from the top of the deck, such as "Two of Hearts" or "Nine of Clubs".

```js
let card; // no card picked yet

while (card != 'Ace of Spades') {
	card = pickACard();
}

await alert('Found the Ace of Spades!');
```

## Computer History: Casio FX-720P

This level's computer was inspired by the Casio FX-720P, which could run programs in a programming language called BASIC. Portable programmable calculators were limited by their small button keyboards and display limitations, but when slotted into a dock that had little printer, they could be used to print out graphs and many lines of text. The calculator could also load programs from tape cassettes.

<https://youtu.be/d3NIe1jTZMc?t=760>

- [Level 00 A](#level-00-a)
  - [What is Computer Science?](#what-is-computer-science)
  - [What is QuintOS?](#what-is-quintos)
  - [Creating Variables 🔡](#creating-variables-)
  - [Types of Variables 🔡](#types-of-variables-)
    - [Number](#number)
    - [Boolean](#boolean)
    - [String](#string)
  - [Camel Case 🐫](#camel-case-)
    - [Changing a variable's value](#changing-a-variables-value)
  - [Mathematical operators 🔢](#mathematical-operators-)
  - [Checking Equivalence ✅](#checking-equivalence-)
  - [Boolean operators 🐰](#boolean-operators-)
    - [functions](#functions)
  - [Globals 🌐](#globals-)
  - [End of Level 00 A](#end-of-level-00-a)
- [Level 00 B](#level-00-b)
  - [Math functions](#math-functions)
- [Level 00 C](#level-00-c)
  - [Scopes](#scopes)
  - [while loops](#while-loops)
  - [Computer History: Casio FX-720P](#computer-history-casio-fx-720p)
