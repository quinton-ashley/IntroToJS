# Level 01 A

Congratulations, you completed level 0! 🥳

Before you start your next game, let's get you setup for JavaScript development on your own computer so you won't have to use CodePen which is an online-only code editor.

## Requirements for Local JS Development

- install Google Chrome (Firefox, Edge, and Opera are good too, just don't use Safari)
- install [node.js](https://nodejs.org/en/) (includes [npm](https://www.npmjs.com/))
- Windows users need to install [Git](https://gitforwindows.org/)
- macOS users need to use the command `xcode-select --install` in Terminal
- install the [Visual Studio Code editor](https://code.visualstudio.com/)

## Setup

Open the [quintos-template](https://github.com/quinton-ashley/quintos-template) project on Github. Press the big green button that says "Use this template". Name your project "quintos-games".

Now open Git Bash on Windows or Terminal on macOS and copy/paste these commands. Replace `!!!your username!!!` with your github username.

```sh
cd ~/Documents
git clone https://github.com/quinton-ashley/IntroToJS.git
git clone https://github.com/!!!your username!!!/quintos-games.git
cd quintos-games
npm i
```

Don't worry I'm not hacking your computer! The first command `cd`, changes directory (aka folder), which opens your Documents folder inside the terminal. The second command downloads your `quintos-games` project into your Documents folder, third command opens that folder. The last command, `npm i`, installs all the other code needed for this project.

Open Visual Studio Code (aka VSCode) and add `IntroToJS` and your `quintos-games` folder to the workspace.

## Install Extensions for VSCode

In the Activity Bar on the left side of VSCode click the extension icon which looks like one box being separated from three other boxes. In the Extension sidebar, search for and install Prettier and Live Server.

Prettier is an extension that will automatically format your code for you when you save it so you won't have to worry about doing proper indentation and formatting yourself!

Live Server auto-refreshes the browser when you make changes to your code.

## VSCode Settings

Press F1 on your keyboard (hold Fn then press F1 on macOS). Search the menu for "Preferences: Open Settings (JSON)". Use these settings in VSCode's `settings.json` file:

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
"prettier.printWidth": 120,
"diffEditor.wordWrap": "on",
"liveServer.settings.donotShowInfoMsg": true,
"editor.glyphMargin": false,
"editor.folding": false
```

## Loading QuintOS Games

Make a new folder in `quintos-games` called `GAMES`. Copy the `GuessTheNumber` folder from Level_00 in IntroToJava and paste it in `GAMES`.

Copy your GuessTheNumber code from CodePen and put it in `GuessTheNumber.java`

Edit the `load.js` in your `quintos-games` project folder.

```js
QuintOS.username = 'your username';
QuintOS.dir = 'GAMES';
QuintOS.gameTitle = 'GuessTheNumber';
```

Right click on `QuintOS_live.html` file and select `Open with Live Server`. You should see the calculator show up in your browser. 😄

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen1.jpg)

You've finished the install process! Read the next lesson section before starting PickAPath.

## Special characters

When you make Strings using quotes they can't be on multiple lines of your JavaScript file.

```js
let example = "I want to put something on a new line:
something"; // ERROR!
```

To put part of a String on a newline use `\n` the newline character.

```js
let example = 'I want to put something on a new line:\nsomething';
```

```txt
I want to put something on a new line:
something
```

The tab character `\t`, note that the `+` operator is used to add another String to the list on a new line in the JavaScript code.

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

## Javascript Console

Code is essentially a set of instructions for your computer to interpret and perform. If you make syntax and spelling mistakes in your code, your computer won't know what to do! Luckily for us, web browsers have really great development tools to help us fix mistakes in our code.

The console can be opened in your web browser by right clicking anywhere on a web page and choosing "Inspect" or by using the shortcut `ctrl+shift+i` on Windows/Linux or `cmd+option+i` on macOS. When it first opens you'll see the "Elements" tab, this is the HTML structure of the website. If you hover your mouse over an element it will be highlighted. You can even change text on the website. Cool huh?! Note that these changes are only visible to you.

Now go to the "Console" tab. If your program doesn't start or stops working, look at the JavaScript console for errors. You can also use `console.log` to print things to the console.

```js
console.log("The user's favorite color is: " + favColor);
```

## End of Level 01 A

Start your PickAPath game! Follow the instructions in project file `PickAPath.md` located in the same folder as this lesson file.

# Level 01 B

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

## End of Level 01 B

You learned about boolean operators:

- NOT `!`
- AND `&&`
- OR `||`

## Level 01 C

## Arrays

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are lists of variables with numbered indexes.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];
```

## array.includes(item)

One useful function you can use on Arrays is `includes`, it checks if the input "Ellie" is included in the array.

```js
if (names.includes('Ellie')) {
	// is true
}
if (names.includes('James')) {
	// is false
}
```

## Array length

length is a property of Array accessed using a period `.`

```js
console.log('The names array has ' + names.length + ' names');
```

This example code would print "The names array has 3 names" to the console.

## End of Level 01 C

You learned how to:

- create Arrays
- how to check if something is included in an array
- get the amount of items in an array using `.length`

## Computer History: Commodore PET

This level's computer was inspired by the 1977 Commodore PET 2001 Series. These computers were some of the first commerically successful personal computers that did not require any assembly by the user. Check out this video about it if you'd like!

https://www.youtube.com/watch?v=eP9y_7it3ZM

PETSCII character set: <https://style64.org/petscii/>

- [Level 01 A](#level-01-a)
  - [Requirements for Local JS Development](#requirements-for-local-js-development)
  - [Setup](#setup)
  - [Install Extensions for VSCode](#install-extensions-for-vscode)
  - [VSCode Settings](#vscode-settings)
  - [Loading QuintOS Games](#loading-quintos-games)
  - [Special characters](#special-characters)
  - [Javascript Console](#javascript-console)
  - [End of Level 01 A](#end-of-level-01-a)
- [Level 01 B](#level-01-b)
  - [Boolean Operators](#boolean-operators)
    - [NOT (aka negation)](#not-aka-negation)
    - [OR](#or)
    - [NOR](#nor)
    - [AND](#and)
    - [NAND](#nand)
  - [Compound Operations](#compound-operations)
  - [End of Level 01 B](#end-of-level-01-b)
  - [Level 01 C](#level-01-c)
  - [Arrays](#arrays)
  - [array.includes(item)](#arrayincludesitem)
  - [Array length](#array-length)
  - [End of Level 01 C](#end-of-level-01-c)
  - [Computer History: Commodore PET](#computer-history-commodore-pet)
