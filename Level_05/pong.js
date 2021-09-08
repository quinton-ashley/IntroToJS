// screen width is 640, height is 400
const log = console.log;

// sprites are scaled x2 by default
let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'www..www\nww.ww.ww\n'.repeat(21) + 'wwwwwwww\n.wwwwww.');

/* PART A: Make image for the wall */

/* PART A0: create a ball and two paddles on each end of the screen */

function draw() {
	/* PART A1: draw the ball and paddles inside the p5 main draw function */
}
