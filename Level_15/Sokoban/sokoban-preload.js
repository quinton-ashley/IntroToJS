//    new Tiles(rows, cols, layers, tileSize, x, y)
let world = new Tiles(40, 12, 2, 32, 120, 55);

/* PLAYER */

let player = world.add(5, 5, 1);
// scale by .5 because the player frames are 64x64
// but the world tiles are 32x32
player.scale = 0.5;
let imgDir = QuintOS.dir + '/img/8bit';
let playerImg = imgDir + '/player16.png';

// loadAni(spriteSheetImg, size, pos, frameCount, frameDelay)
player.addAnimation('idle-stand', loadAni(playerImg, 64, 0, 4, 20));
player.addAnimation('idle-blink', loadAni(playerImg, 64, 1, 4, 10));
player.addAnimation('idle-think', loadAni(playerImg, 64, 20, 8, 20));
player.addAnimation('idle-scratch', loadAni(playerImg, 64, 21, 14, 10));
player.addAnimation('idle-yawn', loadAni(playerImg, 64, 22, 2, 60));
player.addAnimation('idle-turn', loadAni(playerImg, 64, 17, 3));
player.addAnimation('walk-lr', loadAni(playerImg, 64, 3, 5, 5));
player.addAnimation('walk-up', loadAni(playerImg, 64, 18, 6));
player.addAnimation('walk-down', loadAni(playerImg, 64, 16, 6));

/* TILES */

let tilesImg = imgDir + '/world.png';
let tileSize = 32;

// loadAni(spriteSheetImg, size, pos, frameCount, frameDelay)
// pos array is a [row, column] pair
let wallUp = loadAni(tilesImg, tileSize, [0, 1]);
let wallLeft = loadAni(tilesImg, tileSize, [1, 0]);
let wallRight = loadAni(tilesImg, tileSize, [1, 2]);
let wallDown = loadAni(tilesImg, tileSize, [2, 1]);

// loads the animation for the tile representing the box
// at row 5, column 0 in the tile sheet
let box = loadAni(tilesImg, tileSize, [5, 0]);

/* Part A: Choose a tile to represent the box goal positions on the floor */
// let goal = loadAni(tilesImg, tileSize, [?, ?]);
