# Level 02 A

Before we can start working on `PickAPath` we have to upgrade our PC! Edit the `load.js` file in the `PC` folder, set your level to 2! 🥳

```js
QuintOS.level = 2;
```

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen2.jpg)

## Counting with while loops

The number of loops a while loop does can be counted with a variable.

```js
let names = ["Jake", "Ali", "Ben"];

let i = 0; // initialize i to 0

// loop while i is less than names.length which is 3
while (i < names.length) {
  // print the next name in the list
  console.log(i + ". " + names[i]);

  i++; // shortcut for i = i + 1;
} // in this loop i goes up from 0 to 1 to 2
```

The code above prints out a numbered list of names in the JS console.

```txt
0. Jake
1. Ali
2. Ben
```

## Accessing characters in a String

To access characters in a string you can use `[]` but note that you can't edit them like you can with arrays.

```js
let fox = "the red fox";
fox[4]; // is 'r'
fox[8] = "b"; // error
// will not change fox string to 'the red box'
```

# Adding to Arrays

So how do we add to arrays? By using the `.push()` function.

```js
let names = ["Amy", "Ellie", "Ben"];

names.pop(); // returns and removes the last element from the array
// names -> ['Amy', 'Ellie']
names.push("Jake"); // adds "Jake" to names array
// names -> ['Amy', 'Ellie', 'Jake']
```

## String split()

Strings have a lot of useful functions we can use. MDN, the Mozilla Developer Network, is a really great resource for learning JS. Documentation for the String class can be found here:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

`.split(char)` splits a string by a pattern creating an array of strings

```js
// split by ' ' to get an array of words
"the red fox".split(" ");
// -> ['the', 'red', 'fox']
```

## Array join()

The `join()` function kind of does the opposite of the string `split()` function. `join()` makes a string by joining each element in the array together, adding a character in between them.

```js
["the", "red", "fox"].join(" ");
// -> 'the red fox'
```

## End of Level 02 A

We learned how to:

- make while loops with a counter variable
- split strings
- get a character at a specific index in a string

# Level 02 B

## Breaking out of a loop early

You can use the `break` keyword to break out of a while loop early.

```js
let names = ["Jake", "Ali", "Ben"];
let i = 0; // i is the number of loops
// loop while i is less than names.length which is 3
while (i < names.length) {
  // find "Ali"
  if (names[i] == "Ali") {
    break; // then break out of the while loop
  }
  i++; // shortcut for i = i + 1;
} // i counts up from 0 to 1 to 2

console.log("Ali is at position: " + i);
// -> "Ali is at position: 1"
```

Note that the value of `i` will be 1, even though the loop range is from `i` 0-2, because `break` exits the loop early.

## for loops

`for` loops are like `while` loops but they make counting the number of loops way more convenient. This code does the same thing as the previous example with the `while` loop.

```js
let names = ["Jake", "Ali", "Ben"];
// INITIALIZE; CONDITION; INCREMENT;
for (let i = 0; i < names.length; i++) {
  console.log(i + ". " + names[i]);
}
```

Makes this list of names.

```txt
0. Jake
1. Ali
2. Ben
```

`for` loops have three different sections. The first section inside the parenthesis is for incrementing variables. The next section is the while condition, the loop loops while this is true. The last section is for incrementing the counter variable, which happens at the end of each loop. Conventionally `i` (i for index) is used as the counter variable.

## More types of for loop

`for in` loop iterates through the indexes/keys of an array or object.

```js
for (let i in names) {
  console.log(i + ". " + names[i]);
}
```

`for of` loops iterate through the values of an array or object.

```js
for (let name of names) {
  console.log("Hello " + name);
}
```

Says hello to everyone.

```txt
Hello Jake
Hello Ali
Hello Ben
```

## End of Level 02 B

What'd we learn?

- using `break`
- all about `for` loops

## History Info

This level's computer was inspired by the [Apple II](https://www.youtube.com/watch?v=CxJwy8NsXFs)
