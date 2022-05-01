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

## Flip a Sprite

```js
sprite.mirrorX(-1); // flip sprite horizontally
sprite.mirrorY(-1); // flip sprite veritcally
```

# Level 12 C

## Reading Documentation

Reference the docs to learn how to create a Group.

## Check for Collisions

The p5.js play `collide` function can be used to check for collisions between sprites inside the `draw` function.

```js
player.collide(walls);
```

The `player` sprite would not be able to move through any of the sprites in the `walls` group. This function can also be used for groups colliding with other groups and sprites colliding with other sprites.

# Level 12 D

## Group array

Get the array of sprites from a sprite group.

```js
spriteGroup.toArray();
```

## Promise.all

Sometimes you will need to `await` multiple Promises at once. For example, to wait for multiple sprites to move at the same time with the async `sprite.move` function.

```js
let movements = [];
movements.push(spriteGroup[0].move('up'));
movements.push(spriteGroup[1].move('up'));
await Promise.all(movements);
```

## Remove a sprite

To remove a sprite from the screen and any sprite group it's a part of, simply use the `remove` function.

```js
sprite.remove();
```

- [Level 12 A](#level-12-a)
	- [Reading Documentation](#reading-documentation)
- [Level 12 B](#level-12-b)
	- [Reading Documentation](#reading-documentation-1)
	- [Flip a Sprite](#flip-a-sprite)
- [Level 12 C](#level-12-c)
	- [Reading Documentation](#reading-documentation-2)
	- [Check for Collisions](#check-for-collisions)
- [Level 12 D](#level-12-d)
	- [Group array](#group-array)
	- [Promise.all](#promiseall)
	- [Remove a sprite](#remove-a-sprite)
