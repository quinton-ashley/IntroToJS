const log = console.log;

player.action = () => {
	// the state of the player
	player.ani = player.getAnimationLabel();

	function walk(direction) {
		let ani = 'walk-lr';
		if (direction == 'up') ani = 'walk-up';
		if (direction == 'down') ani = 'walk-down';

		if (player.ani == ani || player.ani == 'idle-turn') return;
		if (direction != 'up') {
			player.changeAnimation(ani);
		} else {
			player.changeAnimation('idle-turn');
			player.animation.onComplete = () => {
				player.changeAnimation('walk-up');
			};
		}
		if (direction == 'left') {
			player.mirrorX(-1); // flip the character left
		} else {
			player.mirrorX(1);
		}
	}

	function idle() {
		let rand = Math.random();
		if (rand > 0.5) {
			player.changeAnimation('idle-stand');
		} else if (rand > 0.3) {
			player.changeAnimation('idle-blink');
		} else if (rand > 0.1) {
			player.changeAnimation('idle-think');
		} else if (rand > 0.05) {
			player.changeAnimation('idle-scratch');
		} else {
			player.changeAnimation('idle-yawn');
		}
		player.animation.onComplete = idle;
	}

	if (keyDown('up')) {
		player.velocity.x = 0;
		player.velocity.y = -1.5;
		walk('up');
	} else if (keyDown('down')) {
		player.velocity.x = 0;
		player.velocity.y = 1.5;
		walk('down');
	} else if (keyDown('left')) {
		player.velocity.x = -1.5;
		player.velocity.y = 0;
		walk('left');
	} else if (keyDown('right')) {
		player.velocity.x = 1.5;
		player.velocity.y = 0;
		walk('right');
	} else {
		// player is not moving
		player.velocity.x = 0;
		player.velocity.y = 0;

		if (player.ani == 'walk-up') {
			player.changeAnimation('idle-turn');
			player.animation.changeFrame(2);
			player.animation.goToFrame(0);
			player.animation.onComplete = () => {
				player.changeAnimation('idle-stand');
				player.animation.onComplete = idle;
			};
		} else if (!player.ani.includes('idle')) {
			player.changeAnimation('idle-stand');
			player.animation.onComplete = idle;
		} else {
			player.animation.onComplete = idle;
		}
	}
};

function draw() {
	clear();
	background(0);

	// // Draw the ground tiles
	// for (var x = 0; x < 840; x += 70) {
	//   tile_sprite_sheet.drawFrame('snow.png', x, 330);
	// }

	player.action();

	// p5.play function for drawing all sprites
	drawSprites();
}
