let loading = true;

function keyPressed() {
	if (keyCode === UP_ARROW) {
		player.walk('up');
	} else if (keyCode === DOWN_ARROW) {
		player.walk('down');
	} else if (keyCode === LEFT_ARROW) {
		player.walk('left');
	} else if (keyCode === RIGHT_ARROW) {
		player.walk('right');
	}
}

player.walk = function (direction) {
	let aniName = 'walk-lr';
	if (direction == 'up') {
		aniName = 'walk-up';
	} else if (direction == 'down') {
		aniName = 'walk-down';
	}

	world.move(player, 1.5, direction);

	// the name of the current animation being used
	let curAniName = this.getAnimationLabel();

	// player is already walking that way or turning
	// no need to change animation
	if (curAniName == aniName || curAniName == 'idle-turn') return;

	// have the player turn before walking upwards
	if (direction != 'up') {
		this.changeAnimation(aniName);
	} else {
		this.changeAnimation('idle-turn');
		this.animation.onComplete = () => {
			this.changeAnimation('walk-up');
		};
	}

	if (direction == 'left') {
		this.mirrorX(-1); // flip the character left
	} else {
		this.mirrorX(1);
	}
};

player.idle = function () {
	let _this = this;
	// switch between idle animations
	// some have a higher probability of occurring than others
	function _idle() {
		let chance = Math.random();

		if (chance > 0.4) {
			_this.changeAnimation('idle-stand');
		} else if (chance > 0.2) {
			_this.changeAnimation('idle-blink');
		} else if (chance > 0.1) {
			_this.changeAnimation('idle-think');
		} else if (chance > 0.05) {
			_this.changeAnimation('idle-scratch');
		} else {
			_this.changeAnimation('idle-yawn');
		}
		_this.animation.onComplete = _idle;
	}

	// the name of the current animation being used
	let curAniName = this.getAnimationLabel();

	if (curAniName == 'walk-up') {
		this.changeAnimation('idle-turn');
		this.animation.changeFrame(2);
		this.animation.goToFrame(0);
		this.animation.onComplete = () => {
			this.changeAnimation('idle-stand');
			this.animation.onComplete = _idle;
		};
	} else if (!curAniName.includes('idle')) {
		this.changeAnimation('idle-stand');
		this.animation.onComplete = _idle;
	}
};

let walls = new Group();

let row = 0;
let col = 0;
for (let i = 0; i < 10; i++) {
	world.add(row, col + 1 + i, 0, wallUp, walls);
	world.add(row + 11, col + 1 + i, 0, wallDown, walls);
	world.add(row + 1 + i, col, 0, wallLeft, walls);
	world.add(row + 1 + i, col + 11, 0, wallRight, walls);
}

let boxes = new Group();
world.add(2, 2, 1, box, boxes);

loading = false;

function draw() {
	if (loading) return;
	clear();
	background(0);

	player.collide(walls); // handles player collisions with walls
	player.displace(boxes); // player move boxes by displacing them
	boxes.collide(walls);

	if (!player.isMoving) player.idle();

	world.update();
	// p5.play function for drawing all sprites
	drawSprites();
}
