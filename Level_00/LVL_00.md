# Level 00 A

## What is Computer Science?

Why is this field of study called "Computer Science" and not "Program Writing" or "Code Mathematics"? It's because like in Science class, writing code will often require testing and experimentation for you to learn how things work. These lessons will teach you how to code in JavaScript, which is the most popular modern programming language and my personal favorite! Since you're just starting out, you will have to memorize some vocabulary, "grammar", and syntax to learn this new language. Fortunately, this isn't what coding is all about, just like playing a musical instrument is not just learning to play scales. Having the technical skills required to play an instrument is merely the foundational knowledge needed to express yourself through the art of music.

As you may expect, coding will be really fun and interesting for you if you like abstract problem solving, in this way it is also similar to Math. Coding has a language arts aspect too. You will not only strive to write efficient code but also code that is aesthetically pleasing and easy for other programmers to understand.

Issac Newton once said, "we stand on the shoulders of giants". To understand how software is developed today it's important to learn a bit about the history of how computer hardware and software has progressed. Video games are an incredible art form that combine programming, storytelling, visual art, music, and sound design. If you signed up for this course you might want to know how video games work and how to make your own! If not, making games will hopefully be a fun way for you to learn how to code.

During each lesson you'll develop a game that will run right in your web browser (Google Chrome or Firefox), which will display a vintage virtual computer that uses QuintOS, a graphics system I created. As you level up your coding skills, your virtual computer will get upgraded. The first game you make will be for... a programmable calculator. 😜

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen0.jpg)

## Pre-requisites for Javascript Development

- install Google Chrome or Firefox
- if you're using Windows, install [Git for Windows](https://gitforwindows.org/)
- install the [Visual Studio Code editor](https://code.visualstudio.com/)
- install [node.js](https://nodejs.org/en/)
- create an account on [Github](https://github.com/)

## Setup

Open the [quintos-template](https://github.com/quinton-ashley/quintos-template) project on Github. Press the big green button that says "Use this template". Name your project "quintos-games".

Now open Git Bash on Windows or Terminal on macOS and copy/paste these commands. Replace `{your username!}` with your github username. Don't worry I'm not hacking your computer! The first command `cd`, changes directory (aka folder), which opens your Documents folder inside the terminal. The second command downloads your `quintos-games` project into your Documents folder, third command opens that folder. The last command, `npm i`, installs all the other code needed for this project.

```sh
cd ~/Documents
git clone https://github.com/quinton-ashley/IntroToJS.git
git clone https://github.com/{your username!}/quintos-games.git
cd quintos-games
npm i
```

Open Visual Studio Code (VSCode) and that `quintos-games` folder to the workspace.

## Loading QuintOS

Edit the `load.js` in the `quintos-games` folder and set your level to 0.

```js
QuintOS.level = 0;
```

Open the `QuintOS.html` file with Google Chrome or Firefox, don't use Safari. You should see the calculator. 😄

This first lesson will require you to learn a lot of information before we can even make a simple game. It may be a bit overwhelming for you but don't worry, you'll get a lot of practice with these concepts so that you will understand them. Remember that everyone starts somewhere, even the greatest programmers in history started out just like you: as a beginner! 🥳

## Creating Variables 🔡

Let's get started! First of all, what is a variable? Variables in JavaScript are references to data in your computer's memory.

```js
let a = 0; // let is for variables that can change
const b = 1; // const is for variables that have a constant value
```

Use `let` or `const` to create variables. In the example code `a` and `b` are the names of the variables. `a` is assigned the number `0` and `b` is assigned the number `1`. The value of `b` can not be changed because it was declared with `const`.

Use a semicolon `;` to end each line of code. Though it's not required for your computer to run JavaScript, knowing where each line ends makes it easier for other humans to read your code. 👁👅👁

Double slash `//` is for making a comment, any text behind it on the same line will not be considered part of the code's instructions.

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
let story = "The dog went to the dog park on 3rd Avenue.";
```

If you don't use quotes, JavaScript will think the words are variables!

```js
let story = The dog went to the dog park on 3rd Avenue.; // ERROR!
```

### function

functions are a reference to other sections of code which you can run using the parenthesis. Input parameters to a function go in the parenthesis.

```js
powerOn();
turn("left");
moveForward(10);
turn("right");
moveForward(2);
```

This code for a robot remote control makes the robot power on, turn to the left, then move forward ten steps, turn to the right, then move forward two steps.

## Camel Case 🐫

Variables in JS can't have spaces, 🙅‍♂️ so for variables that have multiple words, the first letter of the words after the first word are capitalized. This naming convention is called camel case because the capitalized letters are like the humps on a camel.

```js
let apple = "🍎";
let applePie = "🍎 π";
let applePieIceCream = "🍎 π 🍨";
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

`if` statements use a boolean condition, which goes in parenthesis after the keyword `if`. If the boolean condition is `true`, the code in the block `{}`, whatever's inside the squiggly brackets, is run.

`else` is used to create another "branch" of code. Take a look at the example below which assigns a color to the variable `fruitColor` based on the name of the `fruit`.

```js
let fruitColor;

// if the fruit is a banana
if (fruit == "banana") {
  // set the fruitColor to yellow
  fruitColor = "yellow";
} else if (fruit == "pear") {
  // else if the fruit is a pear, set the fruitColor to green
  fruitColor = "green";
} else if (fruit == "orange") {
  fruitColor = "orange";
} else if (fruit == "grape") {
  fruitColor = "purple";
} else {
  // else the fruit was not a banana, pear, orange, or grape
  // the fruitColor is unknown
  fruitColor = "unknown";
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

## Globals 🌐

Globals are special variables that are already available for you to use. You can also create global variables yourself but we'll learn how to do that later.

Check out the `alert` and `prompt` global functions for user interaction. The word `await` is used to wait for the user to interact with the prompt or alert window.

```js
// waits for the user to type something and press enter
let favColor = await prompt("What is your favorite color?");
// favColor is assigned to the user's response

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

- types of variables: numbers, booleans, strings and functions
- making boolean conditions to test if something is `true` or `false`
- using double equals to `==` check for equivalence
- `if`, `else if`, and `else` statements
- globals functions `alert`, `prompt`, and `console.log`

Now you're ready to start making your first game! 🥳 [Click here for the GuessTheNumber instructions.](https://github.com/quinton-ashley/IntroToJS/blob/main/Level_00/GuessTheNumber.md)

# Level 00 B

Did you complete part A and are ready to learn more? Before we can finish `GuessTheNumber` game we have to learn a bit more stuff.

## Install Prettier for VSCode

Prettier is an extension that will automatically format your code for you when you save it so you won't have to worry about doing proper indentation and styling yourself! Install it in VSCode from the Extension section.

Use these settings in VSCode's `settings.json` file.

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.tabSize": 2,
"editor.insertSpaces": false,
"editor.formatOnSave": true,
```

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

console.log("Toast is ready!");
turnToasterOff();
```

## Checking for unquivalence

Not equals `!=` checks if something is not equal to something else.

```js
if (message != "") {
  // check to see if string message is not empty
}
```

## Scopes

Note that if you declare a variable in a code block it will only be available from the beginning to the end of the block. This is the scope of a variable.

```js
if (name == "Bob") {
  let message = "Hi Bob!";
}

console.log(message); // ERROR: message is not defined
```

Fix this by initializing `message` outside of the if statement.

```js
let message;
if (name == "Bob") {
  message = "Hi Bob!";
}

console.log(message); // good!
```

## End of Level 00 B

Here's a summary of everything we learned about:

- while loops
- more about code blocks/scopes `{}`

## Computer History

This level's computer was inspired by the Casio FX-720P, which could run programs in a programming language called BASIC. Portable programmable calculators were limited by their small button keyboards and display limitations, but when slotted into a dock that had little printer, they could be used to print out graphs and many lines of text. The calculator could also load programs from tape cassettes.

<https://youtu.be/d3NIe1jTZMc?t=760>
