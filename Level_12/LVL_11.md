# Level 11 A

## Creating Objects

Objects have properties, aka key/value pairs. Everything in Javascript (Number, String, Array, etc.) is actually an Object too! You've already used some properties that these objects have such as `.length` for Strings.

Let's take a look at how we could use an object to store attributes about Gumball, a character from the Cartoon Network show The Amazing World of Gumball.

```js
let gumball = {
	name: ['Gumball', 'Tristopher', 'Watterson'],
	species: 'cat',
	age: 12,
	grade: 7,
	studentID: '000029083',
	teacher: 'Ms. Simian'
};
```

Properties can be accessed using the dot syntax or with the `[]` square brackets.

```js
gumball.age; // -> 12
gumball['age']; // same thing

let prop = 'age';
gumball[prop]; // same thing

// accessing items in an array iniside an object
gumball.name[2]; // -> 'Watterson'

// editing the animal for property 'c'
gumball.grade = 8;
// adding new content to the object
gumball.brother = 'Darwin';
```

What does the `gumball` object look like after these changes?

```js
let gumball = {
	name: ['Gumball', 'Tristopher', 'Watterson'],
	species: 'cat',
	age: 12,
	grade: 8,
	studentID: '000029083',
	teacher: 'Ms. Simian',
	brother: 'Darwin'
};
```

## for in loops

`for in` loop iterates through the indexes/keys of an array or object.

```js
let list = {
	apples: 2,
	bananas: 10,
	pears: 4
};
for (let item in list) {
	console.log('I need to get ' + list[item] + ' ' + item + '!');
}
```

Result:

```txt
I need to get 2 apples!
I need to get 10 bananas!
I need to get 4 pears!
```

## for of loops

`for of` loops iterate through the values of an array or object.

```js
let names = ['Jake', 'Ali', 'Max'];
for (let name of names) {
	console.log('Hello ' + name);
}
```

Result:

```txt
Hello Jake
Hello Ali
Hello Ben
```

## Loading sounds

The `loadSound` function loads a sound file from a given path. A path is the location of a file on your computer. `QuintOS.dir` is the location of the game's folder (aka directory).

```js
let letterSoundA = loadSound(QuintOS.dir + '/sounds/letters/A.mp3');
```

# Level 11 B

## Working with Inputs directly

Up to this point whenever we worked with inputs we used `prompt()`, now we're going to be using inputs directly.

```js
let inp = input(value, x, y, onSubmit, onChange);
```

`inp` is the the `Input` object created, cursor blinking on the screen at position (x, y).

`value` is the initial text in the input, set to an empty String by default.

`onSubmit` called when the user presses the enter key.

`onChange` called when the user types any key that changes the input's value.

## Example use of Inputs

Here's the code for the Calculator that runs after you exit the GuessTheNumber game. Load the calculator and check it out.

```js
let inp;

// value is the text the user entered in the input
function calculate(value) {
	// eval() is a global function that evaluates the String input value as
	// JavaScript code, for example if value is "5+3", result will be the number 8
	let result = eval(value); // evaluate what the user entered

	inp.erase(); // erase the old input

	// create new input with it's initial value set to result
	inp = input(result, 0, 0, calculate);
}

// create the input
inp = input('', 0, 0, calculate);
```

## Callback Chaining

If you try playing two sounds, one after the other like this it will not work!

```js
sound0.play();
sound1.play();
```

Both sounds will be played at the same time! You have to use the `onended` function to be able to tell when the first sound has finished playing. `.onended(callback)` takes a callback function, the function is run aka "called" when the sound file stops playing.

```js
sound0.play();
sound0.onended(() => {
	sound1.play();
});
```

Inside `onended` you can either put the name of a function to call or an anonymous function. In this example an anonymous function, a function that isn't given a name is used. Note that it uses the arrow `=>` syntax instead of the `function` keyword.

# Level 11 C

If you have to use callbacks to play five sounds this is what it might look like. It's awful!

```js
sound0.play();
sound0.onended(() => {
	sound1.play();
	sound1.onended(() => {
		sound2.play();
		sound2.onended(() => {
			sound3.play();
			sound3.onended(() => {
				sound4.play();
			});
		});
	});
});
```

You might be thinking that callback chaining is not as neat and simple as using async and await like we did with other asynchronous code like prompts and alerts. Wouldn't it be great if we could do this instead?

```js
await play(sound0);
await play(sound1);
await play(sound2);
await play(sound3);
await play(sound4);
```

To make a play function that we can `await`, we have to wrap it in a Promise.

## Promises

Back in my day... when I was a young lad first learning JavaScript in 2017... async/await and Promises were not part of JavaScript yet! We had to use callbacks for everything asynchronous and it was awful. Check out what you'd have to do to delay some code:

```js
console.log('start timer');
setTimeout(() => {
	console.log('2 seconds passed');
}, 2000);
```

I may sound like a grumpy old man but it really is true. Promises made JavaScript so much better. Let's learn how to make one! Here's `setTimeout()` wrapped in a promise.

```js
function delay(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

async function timer() {
	console.log('start timer');
	await delay(2000); // delay program execution asynchronously for two seconds
	console.log('2 seconds passed');
}
```

`await` is used to wait until a Promise resolves or is rejected.

Some devs call this "promisify-ing". Read more about promises here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

A Promise will be in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

## Promisfied p5.js Sound

```js
function play(sound) {
	return new Promise((resolve, reject) => {
		sound.play();
		sound.onended(() => {
			resolve();
		});
	});
}
```

Now we could even use a for loop to play a lot of sounds!

```js
async function playAllLetters() {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < 26; i++) {
		let letter = alphabet[i];
		await play(letterSounds[letter]);
	}
}
```

## Computer History: Speak and Spell

This level's computer is based on the classic children's toy from the 1980s, the electronic [Speak and Spell](<https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)>) made by Texas Instruments.

- [Level 11 A](#level-11-a)
	- [Creating Objects](#creating-objects)
	- [for in loops](#for-in-loops)
	- [for of loops](#for-of-loops)
	- [Loading sounds](#loading-sounds)
- [Level 11 B](#level-11-b)
	- [Working with Inputs directly](#working-with-inputs-directly)
	- [Example use of Inputs](#example-use-of-inputs)
	- [Callback Chaining](#callback-chaining)
- [Level 11 C](#level-11-c)
	- [Promises](#promises)
	- [Promisfied p5.js Sound](#promisfied-p5js-sound)
	- [Computer History: Speak and Spell](#computer-history-speak-and-spell)
