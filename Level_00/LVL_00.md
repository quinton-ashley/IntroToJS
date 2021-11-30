# Level 00 A

## What is Computer Science?

Why is this field of study called "Computer Science" and not "Program Writing" or "Code Mathematics"? It's because coding requires experimentation! You'll often need to test your code, learn from unexpected problems, and make changes to get the results you want. Coding often requires research too, even professional programmers learn new things every day.

These lessons will teach you how to code in JavaScript, which is the most popular modern programming language and my personal favorite!

Since you're just starting out, you will have to memorize some vocabulary, "grammar", and syntax to learn this new language. Learning to code isn't what programming is all about though, just like learning to play scales isn't what being a musician is, putting on a costume and memorizing lines isn't what acting is. In these lessons you will not just learn to code but also how to think like a programmer! Programming is a skill you can develop over the course of your whole life.

As you may expect, programming will be really fun and interesting for you if you like abstract problem solving, in this way it is also similar to Math. Programming has a language arts aspect too. You will not only strive to write efficient code but also code that is easily understood by other programmers.

## What is QuintOS?

Issac Newton once said, "we stand on the shoulders of giants". To understand how software is developed today it's important to learn a bit about the history of computers.

If you signed up for this course you might want to know how video games work and how to make your own! If not, making games will hopefully be a fun way for you to learn how to code.

During each lesson you'll develop a QuintOS game that runs on virtual computers displayed in your web browser: Google Chrome, Firefox, or Opera. QuintOS is a retro game engine I created for this course and also for my own games. As you level up your coding skills, your virtual computer will get upgraded. So since you're just starting out, the first game you make will be for... a programmable calculator. 😜

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen0.jpg)

This first lesson will require you to learn a lot of information before we can even make a simple game. It may be a bit overwhelming for you but don't worry! You'll get a lot of practice with these concepts so that you will fully understand them. Let's get started! 🥳

## Creating Variables 🔡

First of all, what is a variable? Variables in JavaScript store data in your computer's memory.

```js
let a = 0;
const b = 1;
```

Use `let` or `const` to create variables. In the example code `a` and `b` are the names of the variables. `a` is assigned the number `0` and `b` is assigned the number `1`. The value of `b` can not be changed because it was declared with `const`.

Use a semicolon `;` to end each line of code. Though it's not required for your computer to run JavaScript, knowing where each line ends makes it easier for other humans to read your code. 👁👅👁

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

Double slash `//` is for making a comment, any text behind it on the same line will not be considered part of the code's instructions.

## Types of Variables 🔡

### Number

```js
let x = 2;
let y = -49;
let z = 9504.15;
```

### Boolean

Booleans are either `true` or `false`

```js
let codingIsFun = true;
```

### String

Strings are text, stored as lists of characters. You can think of them like lettered beads on a charm bracelet string. They are defined using quotes, apostrophes, or backticks: " " ' ' \`\`

```js
let story = 'The dog went to the dog park on 3rd Avenue.';
```

If you don't use quotes, JavaScript will think the words are variables!

```js
let story = The dog went to the dog park on 3rd Avenue.; // ERROR!
```

## Camel Case 🐫

Variables in JS can't have spaces, 🙅‍♂️ so for variables that have multiple words, the first letter of the words after the first word are capitalized. This naming convention is called camel case because the capitalized letters are like the humps on a camel.

```js
let apple = '🍎';
let applePie = '🍎 π';
let applePieIceCream = '🍎 π 🍨';
```

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

Single equals `=` is for assigning values to variables. Double equals `==` is a boolean operator used for checking equivalence.

`if` statements use a boolean condition, which goes in parenthesis after the keyword `if`. If the boolean condition is `true`, the code block `{}`, whatever's inside the squiggly brackets, is run.

`else if` and `else` are used after if statements, they form a chain of different paths the code can take if the previous if statements were false.

Take a look at the example below which assigns a color to the variable `fruitColor` based on the name of the `fruit`.

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

## Boolean operators 🐰

```txt
Equivalence:              ==
Not equal:                !=
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

This code for a robot remote control makes the robot power on, turn to the left, then move forward ten steps, turn to the right, then move forward two steps.

## Globals 🌐

Globals are special variables that are already available for you to use. You can also create global variables yourself but we'll learn how to do that later.

Check out the `alert` and `prompt` global functions for user interaction. The word `await` is used to wait for the user to interact with the prompt or alert window.

```js
// waits for the user to type something and press enter
let favColor = await prompt('What is your favorite color?');
// the user's response to the prompt is assigned to favColor

// waits for user to read the message in the alert and press okay
await alert("That's my favorite color too!"); // show message to user
```

## Javascript Console

Like other programming languages, JavaScript code conveys instructions that computers interpret and perform. Like any language, it has grammatical structures and syntax. Yet when writing an essay, if you put a comma in the wrong pl,ace or spell a werd wrong, it usually won't make your sentences unreadable. Making syntax and spelling mistakes in your code will make it unreadable for your computer though! Luckily for us, we have really great tools to help us code.

The console can be opened in your web browser by right clicking anywhere on a web page and choosing "Inspect" or by using the shortcut `ctrl+shift+i` on Windows/Linux or `cmd+shift+i` on macOS. When it first opens you'll see the "Elements" tab, this is the HTML structure of the website. As you move your mouse over an element you can see it will be highlighted on the screen. Cool huh?! Now go to the "Console" tab. You'll use the console to print messages and errors in Javascript.

`console.log` prints to the JS console in your web browser.

```js
// prints the favorite color the user entered to the console
console.log(favColor);
```

## End of Level 00 A

That was a LOT of information! Here's a summary of everything we learned about:

- types of variables: numbers, booleans, Strings and functions
- making boolean conditions to test if something is `true` or `false`
- using double equals to `==` check for equivalence
- `if`, `else if`, and `else` statements
- globals functions `alert`, `prompt`, and `console.log`

Now you're ready to start making your first game! 🥳 [Click here for the GuessTheNumber instructions.](https://github.com/quinton-ashley/IntroToJS/blob/main/Level_00/GuessTheNumber.md)

# Level 00 B

Did you complete part A and are ready to learn more? Before we can finish `GuessTheNumber` game we have to learn a bit more stuff.

## while loops

Need to loop some code? Use a while loop! The code in the code block `{}` will be looped as long as the while loop condition remains true.

While a toaster is ON the heating elements change in temperature and get hotter. Pretend `getTemperature()` is a function that gets the temperature from the toaster's temperature sensor.

```js
let toastLevel = 70; // default amount before toasting

// more heat is required to toast frozen bread
if (defrost == true) {
	toastLevel = 0;
}

turnToasterOn();
// loops while toastLevel is below 1000
while (toastLevel < 1000) {
	let heat = getTemperature();
	toastLevel = toastLevel + heat; // add additional heat to toastLevel
}

console.log('Toast is ready!');
turnToasterOff();
```

## Checking for Inequivalence

Not equals `!=` checks if something is not equal to something else.

```js
if (message != '') {
	// check to see if String message is not empty
}
```

## Scopes

Note that if you declare a variable in a code block it will only be available from the beginning to the end of the block. This is the scope of a variable.

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

## End of Level 00 B

Here's a summary of everything we learned about:

- while loops
- more about code blocks/scopes `{}`

## Computer History: Casio FX-720P

This level's computer was inspired by the Casio FX-720P, which could run programs in a programming language called BASIC. Portable programmable calculators were limited by their small button keyboards and display limitations, but when slotted into a dock that had little printer, they could be used to print out graphs and many lines of text. The calculator could also load programs from tape cassettes.

<https://youtu.be/d3NIe1jTZMc?t=760>

- [Level 00 A](#level-00-a)
  - [What is Computer Science?](#what-is-computer-science)
  - [What is QuintOS?](#what-is-quintos)
  - [Creating Variables 🔡](#creating-variables-)
    - [Changing a variable's value](#changing-a-variables-value)
  - [Types of Variables 🔡](#types-of-variables-)
    - [Number](#number)
    - [Boolean](#boolean)
    - [String](#string)
  - [Camel Case 🐫](#camel-case-)
  - [Mathematical operators 🔢](#mathematical-operators-)
  - [Checking Equivalence ✅](#checking-equivalence-)
  - [Boolean operators 🐰](#boolean-operators-)
    - [functions](#functions)
  - [Globals 🌐](#globals-)
  - [Javascript Console](#javascript-console)
  - [End of Level 00 A](#end-of-level-00-a)
- [Level 00 B](#level-00-b)
  - [while loops](#while-loops)
  - [Checking for Inequivalence](#checking-for-inequivalence)
  - [Scopes](#scopes)
  - [End of Level 00 B](#end-of-level-00-b)
  - [Computer History: Casio FX-720P](#computer-history-casio-fx-720p)
