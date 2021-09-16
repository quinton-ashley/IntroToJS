let player = createSprite(314, 40, 32, 32);
player.scale = 0.5;
player.autoResetAnimations = true;

function loadPlayer() {
	let imgDir = QuintOS.dir + '/img/8bit';

	let standFrames = [];
	for (let i = 0; i < 4; i++) {
		standFrames.push({
			frame: { x: 64 * i, y: 0, width: 64, height: 64 }
		});
	}
	let stand = loadAnimation(new SpriteSheet(imgDir + '/player16.png', standFrames));
	stand.frameDelay = 20;
	player.addAnimation('idle-stand', stand);

	let blinkFrames = [];
	for (let i = 0; i < 4; i++) {
		blinkFrames.push({
			frame: { x: 64 * i, y: 64, width: 64, height: 64 }
		});
	}
	let blink = loadAnimation(new SpriteSheet(imgDir + '/player16.png', blinkFrames));
	blink.frameDelay = 10;
	player.addAnimation('idle-blink', blink);

	let thinkFrames = [];
	for (let i = 0; i < 8; i++) {
		thinkFrames.push({
			frame: { x: 64 * i, y: 64 * 20, width: 64, height: 64 }
		});
	}
	let think = loadAnimation(new SpriteSheet(imgDir + '/player16.png', thinkFrames));
	think.frameDelay = 20;
	player.addAnimation('idle-think', think);

	let scratchFrames = [];
	for (let i = 0; i < 14; i++) {
		scratchFrames.push({
			frame: { x: 64 * i, y: 64 * 21, width: 64, height: 64 }
		});
	}
	let scratch = loadAnimation(new SpriteSheet(imgDir + '/player16.png', scratchFrames));
	scratch.frameDelay = 10;
	player.addAnimation('idle-scratch', scratch);

	let yawnFrames = [];
	for (let i = 0; i < 2; i++) {
		yawnFrames.push({
			frame: { x: 64 * i, y: 64 * 22, width: 64, height: 64 }
		});
	}
	let yawn = loadAnimation(new SpriteSheet(imgDir + '/player16.png', yawnFrames));
	yawn.frameDelay = 60;
	player.addAnimation('idle-yawn', yawn);

	let walkLRFrames = [];
	for (let i = 0; i < 5; i++) {
		walkLRFrames.push({
			frame: { x: 64 * i, y: 64 * 3, width: 64, height: 64 }
		});
	}
	let walkLR = loadAnimation(new SpriteSheet(imgDir + '/player16.png', walkLRFrames));
	player.addAnimation('walk-lr', walkLR);

	let walkUpFrames = [];
	for (let i = 0; i < 6; i++) {
		walkUpFrames.push({
			frame: { x: 64 * i, y: 64 * 18, width: 64, height: 64 }
		});
	}
	let walkUp = loadAnimation(new SpriteSheet(imgDir + '/player16.png', walkUpFrames));
	player.addAnimation('walk-up', walkUp);

	let walkDownFrames = [];
	for (let i = 0; i < 6; i++) {
		walkDownFrames.push({
			frame: { x: 64 * i, y: 64 * 16, width: 64, height: 64 }
		});
	}
	let walkDown = loadAnimation(new SpriteSheet(imgDir + '/player16.png', walkDownFrames));
	player.addAnimation('walk-down', walkDown);

	let turnAroundFrames = [];
	for (let i = 0; i < 3; i++) {
		turnAroundFrames.push({
			frame: { x: 64 * i, y: 64 * 17, width: 64, height: 64 }
		});
	}
	let turnAround = loadAnimation(new SpriteSheet(imgDir + '/player16.png', turnAroundFrames));
	player.addAnimation('idle-turn', turnAround);
}

loadPlayer();

// Load the json for the tiles sprite sheet
// loadJSON(imgDir + '/world.json', function (tileFrames) {
// 	// Load tiles sprite sheet from frames array once frames array is ready
// 	tiles = loadSpriteSheet(imgDir + '/world.png', tileFrames);
// });
