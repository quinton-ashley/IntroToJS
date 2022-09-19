# Level 03 A

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

## Computer History: Nintendo GameBoy

From Wikipedia:

Despite receiving mixed reviews by critics and being technologically inferior to its fourth-generation competitors (Sega's Game Gear, Atari's Lynx, and NEC's TurboExpress), the Game Boy received praise for its battery life and durability in its construction. It quickly outsold the competition, selling one million units in the United States within a few weeks. An estimated 118.69 million units of the Game Boy and its successor, the Game Boy Color, have been sold worldwide, making it the third best-selling video game console of all time. It is one of the most recognizable devices from the 1990s, becoming a cultural icon in the years following its release.

https://en.wikipedia.org/wiki/Game_Boy
