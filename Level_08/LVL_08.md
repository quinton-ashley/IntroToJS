# Level 08 A

Complete the bonus game, SuperJump, before continuing to level 8. Edit your `load.js` file:

```js
QuintOS.level = 8;
QuintOS.gameSelect = 'SuperJump';
```

Start thinking of an idea for your own game or interactive art which I will help you create in Level 9.

After that you can upgrade to level 8! 🥳

```js
QuintOS.level = 8;
```

## p5.play

[p5.play](https://molleindustria.github.io/p5.play/) is an addon to p5.js for creating 2D games and interactive art!

## Spritesheets

Check out the p5.play Spritesheet example:

https://molleindustria.github.io/p5.play/examples/index.html?fileName=animation_sprite_sheet.js

On the right side of the example viewer you should see a little purple inky guy doing a splat. On the left side you can see the individual drawings this animation uses.

Try adjusting the speed of the animation by changing the `frameDelay` of the `explode_animation`.

```js
explode_animation.frameDelay = 10;
```

The default `frameDelay` is 4, the sketch runs at 60fps so the framerate of animations by default is 15fps.

## Making Sprites with multiple animations

The sprites in your game will have different animations. Please look at all of the other p5.play examples preceding this example in the dropdown list before looking at this one titled "Sprites with Sheets".

https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprites_with_sheet.js

## p5.play documentation

You can learn more about p5.play by reading the documentation:

https://molleindustria.github.io/p5.play/docs/classes/p5.play.html

# Level 08 B

## JSON

JSON stands for JavaScript Object Notation. JSON files are just a JS object in a file, but unlike in JS where quotes for the properties/keys are optional, for JSON they are required.

```json
{
	"name": "Quinton Ashley",
	"job": "Computer Science Teacher"
}
```

## Regular Expressions (RegEx)

To better manipulate data, simple find and replace using strings often won't cut it. You'll need to learn about Regular Expressions, a powerful pattern matching tool.

https://regex101.com/

# Level 08 C

## Using fetch

`fetch` is a global function that can be used to load data from other files.

```js
let file = 'yourFileName.txt'; // file name
let req = await fetch(file); // returns a request object
let txt = await req.text(); // returns a string with the text from the file
```

Here's what the same code looks like in one line. Note that the parenthesis around await fetch are necessary to indicate that the fetch function should be done first.

```js
let txt = await (await fetch('yourFileName.txt')).text();
```

For JSON, use the `.json()` function on the request object.

- [Level 08 A](#level-08-a)
  - [p5.play](#p5play)
  - [Spritesheets](#spritesheets)
  - [Making Sprites with multiple animations](#making-sprites-with-multiple-animations)
  - [p5.play documentation](#p5play-documentation)
- [Level 08 B](#level-08-b)
  - [JSON](#json)
  - [Using fetch](#using-fetch)
- [Level 08 C](#level-08-c)
  - [Inheritance](#inheritance)
