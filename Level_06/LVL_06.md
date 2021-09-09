# Level 06 A

Complete the bonus game, Contain, before continuing to level 6. Edit your `load.js` file:

```js
QuintOS.level = 5;
QuintOS.gameSelect = 'Contain';
```

Now you're on level 6! 🥳

## Working with Inputs directly

Up to this point whenever we worked with inputs we used `prompt()`, now we're going to be using inputs directly.

```js
input(value, x, y, onSubmit, onChange);
```

returns the `Input` object created

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` called when the user presses the enter key
- `onChange` called when the user types any key that changes the input's value

## The JavaScript eval function

Take a look at `calculator.js` it already contains all the code necessary to do basic calculations.

Doesn't it look rather simple? That's cause the JavaScript `eval()` function is doing all the hard work for us. It parses the math formulas the user enters. In fact it can run any text the user enters as JavaScript code, try it out! You can even make variables: `x=2` then do `2+x`, it should print `4`! Edit your `load.js` file:

```js
QuintOS.level = 0;
QuintOS.gameSelect = 'Calculator';
```

## Loading Sounds

To make the Speak and Spell game we'll be loading sounds using the p5.js sound library (a core add-on to p5.js that I've added for you).

https://p5js.org/examples/sound-load-and-play-sound.html

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

# Level 06 B

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

# Level 06 C

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

Back in my day... when I was a young lad first learning JavaScript in 2017... async/await and Promises were not part of JavaScript yet! We had to use callbacks for everything asynchronous and it was awful. You kids don't know how good you have it!

I may sound like a grumpy old man but it really is true. Promises made JavaScript so much better. Let's learn how to make one. Here's `setTimeout()` wrapped in a promise.

```js
function delay(time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

await delay(2000); // delay program execution asynchronously for two seconds
```

Some devs call this "promisify-ing". Read more about promises here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

A Promise will be in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

## Promisfied p5.js play

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

- [Level 06 A](#level-06-a)
	- [Working with Inputs directly](#working-with-inputs-directly)
	- [The JavaScript eval function](#the-javascript-eval-function)
	- [Loading Sounds](#loading-sounds)
	- [for of loops](#for-of-loops)
	- [for in loops](#for-in-loops)
- [Level 06 B](#level-06-b)
	- [Callback Chaining](#callback-chaining)
- [Level 06 C](#level-06-c)
	- [Promises](#promises)
	- [Promisfied p5.js play](#promisfied-p5js-play)
	- [Computer History: Speak and Spell](#computer-history-speak-and-spell)
