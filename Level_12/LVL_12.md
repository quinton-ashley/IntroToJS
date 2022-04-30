# Level 12 A

## Tiles

The `createTiles` function can be used to create a grid of tiles of a certain size. The tile at row 0, column 0 is placed at the given x, y coordinates.

```js
let tiles = createTiles(tileSize, x, y);

let player = tiles.createSprite(row, col, layer);
```

The `createSprite` function of the Tile object works a bit differently than the normal `createSprite` function. It uses row, column position on the tile grid to position the sprite instead of x, y coordinates.

Layer represents the depth of the Sprite in relation to the rest of the tiles in the grid. Sprites with a higher layer value will be placed above sprites on lower layers.

## Sprite Sheets

Sprite sheets are images which have a lot of smaller images in them. These could be images of character animations, items, or background environment tiles.

```js
tiles.spriteSheet = loadImage(img0);

player.spriteSheet = loadImage(img1);
```

This property can be used to store the sprite sheet image of Tile and Sprite objects.

## Loading Images from a Sprite Sheet

`loadImg` can be used to load a single image from a sprite sheet.

```js
tiles.loadImg('powerup0', { pos: [5, 3] });
```

You can use `line` when specifying a row at column 0 in the SpriteSheet or use `pos` to specify a row and column position.

## Creating Sprites with animations

```js
//            tiles.createSprite(aniName, row, col, layer)
let fireball = tiles.createSprite('powerup0', 5, 2, 1);
```

Creates a `fireball` sprite using the `powerup0` image at row 5, column 2 on the tiles grid on layer 1.

## Changing a Sprite's animation

```js
player.ani('walk-down');
```

# Level 12 B

## Loading Animations from a Sprite Sheet

`loadAni` loads animations that has multiple frames.

```js
player.loadAni('walk-down', { pos: [2, 0], frames: 4 });
```

Loads a 4 frame animation from row 2, column 0 in the player's SpriteSheet.

## Move a Sprite

`direction` specifies 'up', 'down', 'left', or 'right', the sprite will move one tile from its current position in the specified direction. `speed` is the pixels per frame at which the sprite will move.

```js
await sprite.move(direction, speed);
```

The `move` function of tile based sprites can also accept a destination `row` and `column` on the tile grid to move the sprite to.

```js
await sprite.move(row, col, speed);
```

`move` is an async function because the sprite's movement will be animated. Use `await` to wait for it to move to its destination. However if the speed is 0, then the sprite will teleport and you don't need to use `await`.

## Teleport a Sprite

If you want to teleport a sprite in one frame to a new location without any animation simply change its `row` and `col` values.

```js
sprite.row = 4;
sprite.col = 3;
```

Increasing/decreasing the sprite's row or column with the `++` and `--` operators will work too.

## Flip a Sprite

```js
sprite.mirrorX(-1); // flip sprite horizontally
sprite.mirrorY(-1); // flip sprite veritcally
```

# Level 12 C

## Groups

The `createGroup` function of the tiles grid object can be used to create sub-groups of Sprites.

```js
let walls = tiles.createGroup('walls');
```

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
	- [Tiles](#tiles)
	- [Sprite Sheets](#sprite-sheets)
	- [Loading Images from a Sprite Sheet](#loading-images-from-a-sprite-sheet)
	- [Creating Sprites with animations](#creating-sprites-with-animations)
	- [Changing a Sprite's animation](#changing-a-sprites-animation)
- [Level 12 B](#level-12-b)
	- [Loading Animations from a Sprite Sheet](#loading-animations-from-a-sprite-sheet)
	- [Move a Sprite](#move-a-sprite)
	- [Teleport a Sprite](#teleport-a-sprite)
	- [Flip a Sprite](#flip-a-sprite)
- [Level 12 C](#level-12-c)
	- [Groups](#groups)
	- [Check for Collisions](#check-for-collisions)
- [Level 12 D](#level-12-d)
	- [Group array](#group-array)
	- [Promise.all](#promiseall)
	- [Remove a sprite](#remove-a-sprite)
