# Level 09 A

## Loading and Playing Sounds

Load and play sounds using p5.js sound:

https://p5js.org/examples/sound-load-and-play-sound.html

## bounce callback

You can make a callback function for when a sprite bounces off another sprite.

```js
ball.bounce(paddleTop, () => {
	log('ball bounced!');
});
```
