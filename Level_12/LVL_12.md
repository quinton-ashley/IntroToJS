# Level 12 A

## Coding Philosophy: Test, retest, and re-retest!

Attempt to find a decent solution to a problem before concerning yourself with what the best solution could be. "Writing is rewriting", this is true for most people when writing essays, music, and often code too. No one can write code like the classical composer Mozart wrote music, by creating flawless first drafts that would sound exactly as he hoped. Start by thinking of the basic logic flow of complex problems, you might find it helpful to work things out on paper before you start coding. Then test and retest!

Remember "Computer Science" is a science, it's all about experimentation, and lucky for us, unlike most research science, we can get pretty immediate results by running our programs! Getting things wrong is a big part of the process, having the program not do what you expect is an opportunity to learn. Often if you just keep trying and learning more you'll get it but if you get really stuck take a long break and come back to your code later. Taking a break to do something else can really help give you a new headspace and perspective on what you're trying to code.

## Events

Take a look at the p5.js way of getting input from the user's keyboard.

https://p5js.org/reference/#/p5/keyCode

How does this work? Let's take a look at the pure JavaScript that p5.js is using behind the scenes.

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

## Tiles

```js
let world = new Tiles(rows, cols, layers, tileSize, x, y);

let tile;

world.move(tile, speed, direction);
```

# Level 12 B

## Google's Snake Game

Check out Google's online snake game:

https://www.google.com/fbx?fbx=snake_arcade

After losing a game the score window will show up, click on the settings icon in the bottom right corner. There are a few different game modes you can select between. Try all of them out and pick 3 that you'd like to implement yourself! :)

- [Level 12 A](#level-12-a)
	- [Coding Philosophy: Test, retest, and re-retest!](#coding-philosophy-test-retest-and-re-retest)
	- [Events](#events)
	- [Tiles](#tiles)
- [Level 12 B](#level-12-b)
	- [Google's Snake Game](#googles-snake-game)
