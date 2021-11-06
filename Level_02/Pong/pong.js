// screen width is 256, height is 192

let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

// the \n means new line
let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

/* PART A1: Make image for the wall */

// places a ball in center of the screen
let ball = createSprite(imgBall);
ball.x = width / 2;
ball.y = height / 2;

/* PART A0: create two paddles, place on each end of the screen */

function draw() {
	/* PART A1: draw the ball and paddles inside the p5 main draw function */
	// the `width` and `height` variables are the width and height of the screen

	drawSprites();
}
