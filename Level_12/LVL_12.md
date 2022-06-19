# Level 12 A

## Reading Documentation

When you start making your own programming projects there won't be a lesson plan that you can follow. It is important that you learn how to find information in reference documentation on your own.

Here is a link to the QuintOS reference documentation:

http://quintos.org/reference.html

Browse the docs to find out how to:

- create a Tiles object
- save Sprite Sheets
- add an image from a Sprite Sheet
- create a sprite with an image/animation
- change a sprite's animation

# Level 12 B

## Reading Documentation

Use the QuintOS reference site to learn how to:

- load animations from a Sprite Sheet
- move a sprite
- teleport a sprite
- flip a sprite
- rotate a sprite

# Level 12 C

## Reading Documentation

Reference the p5.play docs to learn how to:

- create a Group

# Level 12 D

## Reading Documentation

Reference the p5.play docs to learn how to:

- remove a sprite

## Promise.all

Sometimes you will need to `await` multiple Promises at once. For example, to wait for multiple sprites to move at the same time with the async `sprite.move` function.

```js
let movements = [];
movements.push(spriteGroup[0].move('up'));
movements.push(spriteGroup[1].move('up'));
await Promise.all(movements);
```

- [Level 12 A](#level-12-a)
	- [Reading Documentation](#reading-documentation)
- [Level 12 B](#level-12-b)
	- [Reading Documentation](#reading-documentation-1)
- [Level 12 C](#level-12-c)
	- [Reading Documentation](#reading-documentation-2)
- [Level 12 D](#level-12-d)
	- [Reading Documentation](#reading-documentation-3)
	- [Promise.all](#promiseall)
