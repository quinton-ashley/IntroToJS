# SpeakAndSpell

Speak and Spell

## Instructions for PART A

Edit your `load.js` file to start on SpeakAndSpell, set the preload option to true.

```js
QuintOS.level = 0;
QuintOS.gameSelect = 'SpeakAndSpell';
QuintOS.preload = true;
```

Take a look at the `SpeakAndSpell` data folder. These are all the sound files we will be using. Copy this folder to a new folder called `DATA` in your `quintos-games` project. Also copy the template files `speakAndSpell-preload.js` and `speakAndSpell.js` to your `GAMES` folder.

First work on the preload file that will load all the sound files before `speakAndSpell.js` is started. Load all the letter sounds into an array `letterSounds`.

Make the Speak and Spell say any letter you type in the input using the onChange callback function.

At the start of the game choose a random word from words array from the preload file. Have it say "spell" and then the word.

Then have the player enter the letters and when they press enter your program should check if their spelling was correct.

## Instructions for PART B

Change your program to use the "promisified" play function to play sounds using async/await instead of callback chaining.

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

Use the other interchangeable instructions to add some variety. Such as: "you_are_correct_next_spell" and "you_are_right_try".

Give the player another chance to get the spelling right.

Tell the player their score after they try to spell 10 words.

Have the player select between two modes at the start of the game. If they type A they get the small words. If they type B they get the long words.

## History of Speech Synthesis

https://www.youtube.com/watch?v=XsMRxNSDccc

You may already know that since the 1980s computer scientists have been creating programs that can say nearly any word in a language using allophones.

Computer scientists at Google have developed Google translate, which uses advanced text to speech synthesis.

https://www.npmjs.com/package/google-tts-api
