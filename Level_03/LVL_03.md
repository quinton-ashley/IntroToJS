# Level 03 A

## Accessing items in an Array

Items in an array can be accessed by putting the position number of the item inside square brackets `[]` at the end of the name of the array.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];

console.log(names[0]); // prints the String 'Amy' to the JS console
console.log(nums[1]); // prints the Number 21 to the JS console
```

The position

## Editing items in an Array

Items in an array can also be edited using `[]` (aka sub).

```js
names[2] = 'Ben'; // edits the item at position 2 in the names array
// names -> ['Amy', 'Ellie', 'Ben']

nums[1] += 4; // edits the item at position 1 in the nums array
// num -> [50, 25, 42, 83]
```

## Counting with while loops

The number of loops a while loop does can be counted with a variable.

```js
let names = ['Jake', 'Ali', 'Ben', 'Cam'];

let i = 0; // initialize i to 0

// loop while i is less than names.length which is 4
while (i < names.length) {
	// print the next name in the list
	console.log(i + '. ' + names[i]);

	i++; // shortcut for i = i + 1
} // in this loop i goes up from 0 to 1 to 2 to 3
```

The code above prints out a numbered list of names in the JS console.

```txt
0. Jake
1. Ali
2. Ben
3. Cam
```

# Level 03 B

## for loops

Scroll up and take another look at the example of the while loop with a counter variable, then check out this for loop! It does the same thing but all the steps related to the index variable are written as one line. The order of their operation is still the same.

```js
let names = ['Jake', 'Ali', 'Ben', 'Cam'];

// (INITIALIZER; CONDITION; INCREMENATION)
for (let i = 0; i < names.length; i++) {
	// print the next name in the list
	console.log(i + '. ' + names[i]);
}
```

When the for loop starts `i` is set to 0, then is check the condition. If the condition is true the for loop runs for the first time, this is called an iteration. When the for loop ends, the incrementation section of the for loop is run, in this case `i++` which increases the value of `i` by 1. The condition is checked again, if true the for loop will repeat again, doing another iteration. Until the condition is false the for loop will continue to repeat.
