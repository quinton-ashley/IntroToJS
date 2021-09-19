let player = createSprite(314, 80, 32, 32);
player.scale = 0.5;
player.autoResetAnimations = true;
let imgDir = QuintOS.dir + '/img/8bit';
let playerImg = imgDir + '/player16.png';

// loadAni(sprite, img, name, width, height, frameCount, line, frameDelay)
loadAni(player, playerImg, 'idle-stand', 64, 64, 4, 0, 20);
loadAni(player, playerImg, 'idle-blink', 64, 64, 4, 1, 10);
loadAni(player, playerImg, 'idle-think', 64, 64, 8, 20, 20);
loadAni(player, playerImg, 'idle-scratch', 64, 64, 14, 21, 10);
loadAni(player, playerImg, 'idle-yawn', 64, 64, 2, 22, 60);
loadAni(player, playerImg, 'idle-turn', 64, 64, 3, 17);
loadAni(player, playerImg, 'walk-lr', 64, 64, 5, 3, 5);
loadAni(player, playerImg, 'walk-up', 64, 64, 6, 18);
loadAni(player, playerImg, 'walk-down', 64, 64, 6, 16);

let tileSize = 32;
let tileFrames = [];

for (let row = 0; row < 24; row++) {
	for (let col = 0; col < 16; col++) {
		tileFrames.push({
			frame: {
				x: col * tileSize,
				y: row * tileSize,
				width: tileSize,
				height: tileSize
			}
		});
	}
}

let tiles = loadSpriteSheet(imgDir + '/world.png', tileFrames);
