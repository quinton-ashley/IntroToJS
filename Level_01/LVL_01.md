# Level 01 A

Congrats, you completed level 0! Upgrade your PC by editing the `load.js` file in the `PC` folder. Set your level to 1! 🥳

```js
QuintOS.level = 1;
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

## Try it out!

What is the solution to this truth table?

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
let example = "I want to put something on a new line:\nsomething";
```

```txt
I want to put something on a new line:
something
```

The tab character `\t`, note that the `+` operator is used to add another string to the list on a new line.

```js
let list = "Grocery list:\n\n\tApples\n\tOranges\n\tBananas";
```

```txt
Grocery list:

	Apples
	Oranges
	Bananas
```

If you want to have a string on multiple lines of your js file then use the `+` operator to add one string to the end of another.

## End of Level 01 A

What did we learn?

- boolean operators: NOT `!` AND `&&` OR `||`
- two special characters `\n` and `\t` to format Strings with

# Level 01 B

### Array

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are lists of variables with numbered indexes.

```js
let names = ["Amy", "Ellie", "Max"];
let nums = [50, 21, 42, 83];
```

The `[]` square brackets are used to create arrays and are also used to access items in an array.

```js
names[0]; // is 'Amy'
nums[1]; // is 21
```

Items in an array can also be edited using `[]` (aka sub).

```js
names[2] = "Ben";
// edits the list: ['Amy', 'Ellie', 'Ben'];
nums[1] = 36;
// edits the list: [50, 36, 42, 83]
```

## Array length

length is a property of Array accessed using a period `.`

```js
console.log("The names array has " + names.length + " names");
```

This example code would print "The names array has 3 names" to the console.

## More about prompt

When the user inputs something and presses enter, `prompt` returns the string the user entered, yes `string`! It doesn't return a `number` even if the user only entered number characters.

## Checking equivalence

You may be wondering wait... why does `(choice == 1)` return true if `choice` is actually a string with the character `"1"` in it and not the number `1`?

That's cause in JavaScript the double equals `==` actually only checks for loose equivalence regardless of the type of each variable being compared. If you want to ensure the types match too use triple equals `("1" === 1)` would be false. Usually it is fine to just use double equals `==` though.

## Array includes

Another useful Array function is `.includes()`, it checks if the input "Ellie" is included in the array. Requires exact equivalence!

```js
names.includes("Ellie"); // returns true
```

## Converting from String to Number

If you have a number inside a string you can convert it to a number by using the `Number()` global function.

```js
let num = Number("23");
// num -> 23
```

## End of Level 01 B

- Arrays
- the prompt returns a string or `null` if the user presses cancel
- how to check if something is included in an array
- converting from string to number

## History Info

This level's computer was inspired by the [1977 Commodore PET 2001 Series](https://www.youtube.com/watch?v=eP9y_7it3ZM). These computers were some of the first commerically successful personal computers that did not require any assembly by the user.

PETSCII character set: <https://style64.org/petscii/>
