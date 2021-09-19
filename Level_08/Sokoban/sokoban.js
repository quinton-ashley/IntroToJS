const log = console.log;

player.walk = function (direction) {
	let aniName = 'walk-lr';
	if (direction == 'up') {
		this.velocity.x = 0;
		this.velocity.y = -1.5;
		aniName = 'walk-up';
	} else if (direction == 'down') {
		this.velocity.x = 0;
		this.velocity.y = 1.5;
		aniName = 'walk-down';
	} else if (direction == 'left') {
		this.velocity.x = -1.5;
		this.velocity.y = 0;
	} else if (direction == 'right') {
		this.velocity.x = 1.5;
		this.velocity.y = 0;
	}

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
	// stop player from moving
	this.velocity.x = 0;
	this.velocity.y = 0;

	let _this = this;

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
	} else {
		this.animation.onComplete = _idle;
	}
};

player.action = function () {
	if (keyDown('up')) {
		this.walk('up');
	} else if (keyDown('down')) {
		this.walk('down');
	} else if (keyDown('left')) {
		this.walk('left');
	} else if (keyDown('right')) {
		this.walk('right');
	} else {
		this.idle();
	}
};

function draw() {
	clear();
	background(0);

	for (let row = 0; row < 24; row++) {
		for (let col = 0; col < 16; col++) {
			tiles.drawFrame(
				row * 16 + col, // tile number
				64 + col * tileSize, // x
				32 + row * tileSize // y
			);
		}
	}

	player.action();

	// p5.play function for drawing all sprites
	drawSprites();
}
