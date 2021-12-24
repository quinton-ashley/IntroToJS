# Level 08 A

## textRect

Make boxes using `textRect(row, col, w, h)` around the blank spaces and letters just like in the Wheel of Fortune TV show.

```js
textRect(5, 5, 3, 3); // make a 3x3 rect at row 5 column 5 (5,5)
text('w', 6, 6); // make letter 'w' at row 6 column 6 (6,6)
```

Use `for` loops to make all the boxes for the phrase!

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││ │
└─┘└─┘└─┘└─┘└─┘
```

## delay

Use the `delay` function to delay the rate at which letters are displayed.

```js
// you need to make the function asynchronous to use await
async function takeFive() {
	log('start!');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}

takeFive();
```

## Add/Remove from the middle of an Array

The `push` function is used to add an item to the end of an array and `pop` is used to remove an item from the end.

The [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) is used to add or remove from the middle of an Array.

```js
arr.splice(start, deleteCount, item1);
```
