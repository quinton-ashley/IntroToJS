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

Sprite sheets are images which have a lot of smaller images in them. These could be images of character animations, items, or background enviroment tiles.

```js
tiles.spriteSheet = loadImage(img0);

player.spriteSheet = loadImage(img1);
```

This property can be used to store the sprite sheet image of Tile and Sprite objects.

## Loading Animations from a Sprite Sheet

`loadAni` loads animations that has multiple frames.

```js
player.loadAni('walk-down', { line: 2, frames: 4 });
```

Assuming the `player` object's sprite sheet has animations for a character that are all the same height, get the 4 frame animation from line/row 2, which is third set of animation frames from the top.

## Changing a sprite's animation

```js
player.ani('walk-down');
```

## Loading Images from a Sprite Sheet

`loadAni` can be used to load single frame animations from a sprite sheet, assuming all tiles in the sprite sheet grid are the same width and height.

```js
tiles.loadAni('powerup0', { pos: [5, 3] });
```

## Creating sprites with animations

```js
//            createSprite(aniName, row, col, layer)
let fireball = createSprite('powerup0', 5, 2, 1);
```

Creates a `fireball` sprite using the `powerup0` image at row 5, column 2 on the tiles grid on layer 1.

## Flipping a Sprite

```js
sprite.mirrorX(-1); // flip sprite horizontally
sprite.mirrorY(-1); // flip sprite veritcally
```

## Events

Take a look at the p5.js way of getting input from the user's keyboard.

https://p5js.org/reference/#/p5/keyCode

# Level 12 B

## Google's Snake Game

Check out Google's online snake game:

https://www.google.com/fbx?fbx=snake_arcade

After losing a game the score window will show up, click on the settings icon in the bottom right corner. There are a few different game modes you can select between. Try all of them out and pick 3 that you'd like to implement yourself! :)

- [Level 12 A](#level-12-a)
	- [Tiles](#tiles)
	- [Sprite Sheets](#sprite-sheets)
	- [Loading Animations from a Sprite Sheet](#loading-animations-from-a-sprite-sheet)
	- [Changing a sprite's animation](#changing-a-sprites-animation)
	- [Loading Images from a Sprite Sheet](#loading-images-from-a-sprite-sheet)
	- [Creating sprites with animations](#creating-sprites-with-animations)
	- [Flipping a Sprite](#flipping-a-sprite)
	- [Events](#events)
- [Level 12 B](#level-12-b)
	- [Google's Snake Game](#googles-snake-game)
