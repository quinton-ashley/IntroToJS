# Level 01 A

Congratulations, you completed level 0! 🥳

Before you can work on the next game, let's get you setup so you can write JavaScript on your own computer without using an online code editor.

## Requirements for Offline Development

- install Google Chrome (Firefox, Edge, and Opera are good too, just don't use Safari)
- only Windows users need to install [Git](https://gitforwindows.org/) (macOS and most Linux distros come with git pre-installed)
- install the [Visual Studio Code editor](https://code.visualstudio.com/)
- install [node.js](https://nodejs.org/en/) (includes [npm](https://www.npmjs.com/))
- create an account on [github.com](https://github.com/)

## Setup

Open the [quintos-template](https://github.com/quinton-ashley/quintos-template) project on Github. Press the big green button that says "Use this template". Name your project "quintos-games".

Now open Git Bash on Windows or Terminal on macOS and copy/paste these commands. Replace `!!!your username!!!` with your github username. Don't worry I'm not hacking your computer! The first command `cd`, changes directory (aka folder), which opens your Documents folder inside the terminal. The second command downloads your `quintos-games` project into your Documents folder, third command opens that folder. The last command, `npm i`, installs all the other code needed for this project.

```sh
cd ~/Documents
git clone https://github.com/quinton-ashley/IntroToJS.git
git clone https://github.com/!!!your username!!!/quintos-games.git
cd quintos-games
npm i
```

Open Visual Studio Code (aka VSCode) and add your `quintos-games` folder to the workspace.

## Loading QuintOS

Edit the `load.js` in the `quintos-games` project folder and set your level to 0.

```js
QuintOS.level = 0;
```

Open the `QuintOS.html` file with Chrome. You should see the calculator. 😄

## Install Prettier for VSCode

Prettier is an extension that will automatically format your code for you when you save it so you won't have to worry about doing proper indentation and formatting yourself! Install it in VSCode from the Extension section.

Use these settings in VSCode's `settings.json` file. Press F1 on your keyboard (Fn+F1 on macOS).

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.guides.bracketPairs": true,
"editor.bracketPairColorization.enabled": true,
"editor.formatOnPaste": true,
"editor.minimap.enabled": false,
"editor.tabSize": 2,
"editor.insertSpaces": false,
"editor.formatOnSave": true,
"editor.wordWrap": "on",
"explorer.confirmDelete": false,
"explorer.confirmDragAndDrop": false,
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"prettier.jsxSingleQuote": true,
"prettier.singleQuote": true,
"prettier.trailingComma": "none",
"prettier.useTabs": true,
"prettier.printWidth": 120
```

## Loading Games

Upgrade your PC by editing your `load.js` file in your `quintos-games` project. 🥳

```js
QuintOS.game = 'PickAPath';
```

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen1.jpg)

## Boolean Operators

### NOT (aka negation)

```txt
!x is true if x false

Truth Table (0 means false, 1 means true)
x
0 = 1
1 = 0
```

### OR

```txt
(x || y) true if x or y is true
Checking x first, then y if x is false.

Truth Table
x y
0 0 = 0
1 0 = 1
0 1 = 1
1 1 = 1
```

### NOR

```txt
!(x || y) true if both x and y are false

Truth Table
x y
0 0 = 1
1 0 = 0
0 1 = 0
1 1 = 0
```

### AND

```txt
x && y true if x and y are true

Truth Table
x y
0 0 = 0
1 0 = 0
0 1 = 0
1 1 = 1
```

### NAND

```txt
!(x && y) true if any are false

Truth Table
x y
0 0 = 1
1 0 = 1
0 1 = 1
1 1 = 0
```

## Compound Operations

Try it out! What is the solution to this truth table?

```txt
(x || y) && z; // true if x or y is true and z is true
// truth table
x y z
0 0 0 =
1 0 0 =
0 1 0 =
0 0 1 =
1 1 0 =
1 0 1 =
0 1 1 =
1 1 1 =
```

## Special characters

When you make strings using quotes they can't be on multiple lines of your JavaScript file.

```js
let example = "I want to put something on a new line:
something"; // ERROR!
```

To put part of a string on a newline use `\n` the newline character.

```js
let example = 'I want to put something on a new line:\nsomething';
```

```txt
I want to put something on a new line:
something
```

The tab character `\t`, note that the `+` operator is used to add another string to the list on a new line in the JavaScript code.

```js
let list = 'Grocery list:\n\n\t'
	+ "Apples\n\tOranges\n\tBananas';
```

```txt
Grocery list:

	Apples
	Oranges
	Bananas
```

## End of Level 01 A

What did we learn?

- boolean operators: NOT `!` AND `&&` OR `||`
- two special characters `\n` and `\t` to format Strings with

# Level 01 B

## Arrays

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are lists of variables with numbered indexes.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];
```

## array.includes(item)

Another useful Array function is `includes`, it checks if the input "Ellie" is included in the array.

```js
names.includes('Ellie'); // returns true
names.includes('James'); // returns false
```

## Array length

length is a property of Array accessed using a period `.`

```js
console.log('The names array has ' + names.length + ' names');
```

This example code would print "The names array has 3 names" to the console.

## End of Level 01 B

You learned how to:

- create Arrays
- get the amount of items in an array using `.length`
- how to check if something is included in an array

## Computer History: Commodore PET

This level's computer was inspired by the [1977 Commodore PET 2001 Series](https://www.youtube.com/watch?v=eP9y_7it3ZM). These computers were some of the first commerically successful personal computers that did not require any assembly by the user.

PETSCII character set: <https://style64.org/petscii/>

- [Level 01 A](#level-01-a)
  - [Requirements for Offline Development](#requirements-for-offline-development)
  - [Setup](#setup)
  - [Loading QuintOS](#loading-quintos)
  - [Install Prettier for VSCode](#install-prettier-for-vscode)
  - [Loading Games](#loading-games)
  - [Boolean Operators](#boolean-operators)
    - [NOT (aka negation)](#not-aka-negation)
    - [OR](#or)
    - [NOR](#nor)
    - [AND](#and)
    - [NAND](#nand)
  - [Compound Operations](#compound-operations)
  - [Special characters](#special-characters)
  - [End of Level 01 A](#end-of-level-01-a)
- [Level 01 B](#level-01-b)
  - [Arrays](#arrays)
  - [array.includes(item)](#arrayincludesitem)
  - [Array length](#array-length)
  - [End of Level 01 B](#end-of-level-01-b)
  - [Computer History: Commodore PET](#computer-history-commodore-pet)
