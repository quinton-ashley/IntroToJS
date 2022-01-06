# Level 09 A

## Loading and Playing Sounds

Load and play sounds using p5.js sound:

https://p5js.org/examples/sound-load-and-play-sound.html

## bounce callback

You can make a callback function for when a sprite bounces off another sprite.

```js
ball.bounce(paddle, () => {
	log('ball bounced!');
});
```

# Level 09 B

## Adding properties to an existing object

Adding properties to an existing object is super easy, just give it a value as if the property already exisited!

```js
ball.active = true;
```

## Skip iterations of a for loop

Use `continue` to skip an iteration of a for loop but continue looping. Unlike `break` which is for exiting the loop early.

```js
for (let i = 0; i < 8; i++) {
	if (i == 2) {
		continue;
	}
	if (i > 5) {
		break;
	}
	console.log(i);
}
```

Console Output:

```txt
0
1
3
4
5
```
