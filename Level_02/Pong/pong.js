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

let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

/* Part B: make image for the wall */

// places a ball in center of the screen
let ball = createSprite(imgBall);
ball.x = width / 2;
ball.y = height / 2;

/* Part A0: create two paddles, place on each end of the screen */

function draw() {
	/* Part A1: make the ball move */

	drawSprites();
}
