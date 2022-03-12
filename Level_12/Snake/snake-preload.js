let eatSound = loadSound(QuintOS.dir + '/sounds/retro_collect_pickup_item_20.wav');
eatSound.setVolume(0.3);

let crashSound = loadSound(QuintOS.dir + '/sounds/retro_crash_damage_01.wav');
crashSound.setVolume(0.3);

let moveSounds = [];

for (let i = 1; i < 10; i++) {
	let sound = loadSound(QuintOS.dir + '/sounds/Footstep1__00' + i + '.wav');
	sound.setVolume(0.3);
	moveSounds[i] = sound;
}

let world = createTiles(8, 0, 16);
world.spriteSheet = loadImage(QuintOS.dir + '/img/world.png');

world.loadAni('apple', { pos: [0, 3] });

/* load the grass tiles */

/* creates the snake head, load the snakes spritesheet */
let snake = world.createSprite(9, 10, 2);
snake.spriteSheet = loadImage(QuintOS.dir + '/img/snakes.png');
snake.loadAni('head-up', { pos: [0, 0] });
snake.ani('head-up');

/* load the snake animations */
