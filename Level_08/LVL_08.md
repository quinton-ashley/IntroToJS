# Level 08 A

## Coding Philosophy: How to approach complex problems

Solve complex problems by thinking algorithmically! That means breaking problems down step by step. "A journey of a thousand miles begins with a single step". If you get stuck on a problem you may be overcomplicating it. Keep things as simple as possible at first and test often after adding new code! Doing this will help prevent you from getting stuck.

# Level 08 B

## eraseRect

```js
await eraseRect(row, col, w, h);
```

Erases text within the specified rectangle.

## textRect

Make rectangles out of text characters using `textRect`.

```js
textRect(5, 5, 3, 3); // make a 3x3 rect at row 5 column 5 (5,5)
text('W', 6, 6); // make letter 'W' at row 6 column 6 (6,6)
```

Use `for` loops to make lots of boxes!

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││l│
└─┘└─┘└─┘└─┘└─┘
┌─┐┌─┐┌─┐┌─┐┌─┐
│ ││ ││ ││ ││ │
└─┘└─┘└─┘└─┘└─┘
```

# Level 08 C

## delay

```js
await delay(millis);
```

Use the `delay` to have your program wait for a certain amount of time in milliseconds.

```js
// you need to make the function asynchronous to use await
async function takeFive() {
	log('start!');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}

takeFive();
```

## toUpperCase and toLowerCase String

```js
let str = 'Hello!';
let up = str.toUpperCase(); // up -> 'HELLO!'
let low = str.toLowerCase(); // low -> 'hello!'
```

These functions do not change the original value of the string.

## replace String

```js
let str = 'The cat jumped over the moon. The cat meowed.';
let result = str.replace('cat', 'dog');
log(result);
// -> 'The dog jumped over the moon. The cat meowed.'
```

This function takes two input parameters, the first input parameter is replaced in the string by the second. Note that it only does one replacement.

This function does not change the original value of the string.

## slice String

```js
str.slice(start, end);
```

This function returns a subsection of the string, starting at the start index and ending and the end index. It does not change the original value of the string. The `end` index is optional. Indexes can be negative. Take a look at the examples in the `slice` MDN JS documentation:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

# Level 08 D

## Add/Remove from the middle of an Array

The `push` function is used to add an item to the end of an array and `pop` is used to remove an item from the end.

The [`splice` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) is used to add/remove items from the middle of an Array.

```js
arr.splice(start, deleteCount, item);
```

It's important to note that this function actually changes the array!
