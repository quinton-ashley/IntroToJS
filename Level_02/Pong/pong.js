// canvas width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;

// code in the setup function gets run once at the start of the game
function setup() {
	noStroke(); // disable black outlines around shapes
	allSprites.pixelPerfect = true;

	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	// creates a ball sprite and places it in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = canvas.w / 2;
	ball.y = canvas.h / 2;
	ball.diameter = 8;
	ball.bounciness = 1; // full bounciness
	ball.friction = 0; // no friction

	// TODO: create paddle sprites
}

// code in the draw function gets run 60 times per second
function draw() {
	// TODO: move the paddles
}
