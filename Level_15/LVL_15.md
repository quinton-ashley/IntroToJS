# Level 15 A

Start thinking of an idea for your own game or interactive art which I will help you create in Level 16!

## JSON

JSON stands for JavaScript Object Notation. JSON files are just a JS object in a file, but unlike in JS where quotes for the properties/keys are optional, for JSON they are required.

```json
{
	"name": "Quinton Ashley",
	"job": "Computer Science Teacher"
}
```

## Regular Expressions (RegEx)

To better manipulate data, simple find and replace using strings often won't cut it. You'll need to learn about Regular Expressions, a powerful pattern matching tool.

https://regex101.com/

# Level 08 B

## Using fetch

`fetch` is a global function that can be used to load data from other files.

```js
let file = 'yourFileName.txt'; // file name
let req = await fetch(file); // returns a request object
let txt = await req.text(); // returns a string with the text from the file
```

Here's what the same code looks like in one line. Note that the parenthesis around await fetch are necessary to indicate that the fetch function should be done first.

```js
let txt = await (await fetch('yourFileName.txt')).text();
```

For JSON, use the `.json()` function on the request object.

- [Level 08 A](#level-08-a)
  - [p5.play](#p5play)
  - [Spritesheets](#spritesheets)
  - [Making Sprites with multiple animations](#making-sprites-with-multiple-animations)
  - [p5.play documentation](#p5play-documentation)
- [Level 08 B](#level-08-b)
  - [JSON](#json)
  - [Using fetch](#using-fetch)
- [Level 08 C](#level-08-c)
  - [Inheritance](#inheritance)
