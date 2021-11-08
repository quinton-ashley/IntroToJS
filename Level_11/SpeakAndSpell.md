# SpeakAndSpell

Based on the classic children's toy from the 1980s, the electronic [Speak and Spell](<https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)>) by Texas Instruments.

## Instructions for PART A

Copy the `SpeakAndSpell` folder into your `quintos-games` project `GAMES` folder. This folder contains all the sounds you'll need and two template files.

Due to browser restrictions that improved everyone's internet browsing experience by preventing websites from playing unwanted music or ads when you visit them, you must get user input before playing any sounds. If you try to play a sound without the user interacting with a web page the browser throws this error: "The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.". That gesture on the page can be as simple as the user pressing enter on the keyboard or clicking a button. This is why in the template code I use `alert()` to get one of those user interactions before starting the game.

First work on the preload file that will load all the sound files before `speakAndSpell.js` is started. Load all the letter sounds into an array `letterSounds`.

Make the Speak and Spell say any letter you type in the input using the `onChange` callback function.

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
