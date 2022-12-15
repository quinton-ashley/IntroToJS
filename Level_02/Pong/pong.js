// screen width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;

function setup() {
	// code in this function gets run once at the start
	// of the game

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

	// creates a ball in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = width / 2;
	ball.y = height / 2;
	ball.diameter = 8;
	/* Part A1: make the ball move */

	/* Part A0: make the left and right paddles */
}

function draw() {
	// code in this function gets run 60 times per second
	/* Part A2: make the paddles move */
}
